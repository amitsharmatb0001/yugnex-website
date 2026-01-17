import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/app/lib/db'
import { hashPassword, generateToken, getSecureCookieOptions, verifyToken } from '@/app/lib/auth'

/*
  Admin registration endpoint
  - First user can register without authentication (initial setup)
  - Subsequent users require existing admin authentication
*/

export async function POST(req: NextRequest) {
    try {
        const { username, email, password } = await req.json()

        // Validate input
        if (!username || !email || !password) {
            return NextResponse.json(
                { error: 'Username, email, and password required' },
                { status: 400 }
            )
        }

        if (password.length < 8) {
            return NextResponse.json(
                { error: 'Password must be at least 8 characters' },
                { status: 400 }
            )
        }

        // Check if this is the first user
        const [users] = await db.execute<any[]>(
            'SELECT COUNT(*) as count FROM admin_users'
        )
        const userCount = users[0]?.count || 0
        const isFirstUser = userCount === 0

        // If not first user, require authentication
        if (!isFirstUser) {
            const token = req.cookies.get('admin_token')?.value
            if (!token) {
                return NextResponse.json(
                    { error: 'Authentication required to create additional users' },
                    { status: 401 }
                )
            }

            const payload = await verifyToken(token)
            if (!payload) {
                return NextResponse.json(
                    { error: 'Invalid or expired token' },
                    { status: 401 }
                )
            }
        }

        // Check if username already exists
        const [existingUsers] = await db.execute<any[]>(
            'SELECT id FROM admin_users WHERE username = ? OR email = ?',
            [username, email]
        )

        if (existingUsers.length > 0) {
            return NextResponse.json(
                { error: 'Username or email already exists' },
                { status: 409 }
            )
        }

        // Hash password
        const passwordHash = await hashPassword(password)

        // Insert new admin user
        await db.execute(
            'INSERT INTO admin_users (username, email, password_hash) VALUES (?, ?, ?)',
            [username, email, passwordHash]
        )

        // If first user, auto-login
        if (isFirstUser) {
            const token = await generateToken({ username })
            const response = NextResponse.json({
                success: true,
                message: 'First admin account created successfully',
                isFirstUser: true
            })

            const cookieOptions = getSecureCookieOptions()
            response.cookies.set('admin_token', token, cookieOptions)
            return response
        }

        return NextResponse.json({
            success: true,
            message: 'Admin account created successfully'
        })
    } catch (error) {
        console.error('Registration error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
