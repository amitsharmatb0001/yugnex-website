import { NextRequest, NextResponse } from 'next/server'
import { generateToken, verifyPassword, getSecureCookieOptions } from '@/app/lib/auth'
import { db } from '@/app/lib/db'

/*
  Admin login endpoint
  - Verifies credentials against database
  - Generates JWT token on success
  - Sets secure HTTPS-only cookie
  - Updates last_login timestamp
*/

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json()

        // Validate input
        if (!username || !password) {
            return NextResponse.json(
                { error: 'Username and password required' },
                { status: 400 }
            )
        }

        // Find user in database
        const [users] = await db.execute<any[]>(
            'SELECT id, username, password_hash FROM admin_users WHERE username = ?',
            [username]
        )

        if (users.length === 0) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            )
        }

        const user = users[0]

        // Verify password
        const isValidPassword = await verifyPassword(password, user.password_hash)
        if (!isValidPassword) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            )
        }

        // Update last_login timestamp
        await db.execute(
            'UPDATE admin_users SET last_login = NOW() WHERE id = ?',
            [user.id]
        )

        // Generate JWT token
        const token = await generateToken({ username: user.username })

        // Create response with secure cookie
        const response = NextResponse.json({ success: true })

        // Set HTTPS-only secure cookie
        const cookieOptions = getSecureCookieOptions()
        response.cookies.set('admin_token', token, cookieOptions)

        return response
    } catch (error: any) {
        console.error('Login error details:', {
            message: error.message,
            code: error.code,
            stack: error.stack
        })
        return NextResponse.json(
            {
                error: 'Internal server error',
                details: process.env.NODE_ENV === 'development' ? error.message : undefined
            },
            { status: 500 }
        )
    }
}
