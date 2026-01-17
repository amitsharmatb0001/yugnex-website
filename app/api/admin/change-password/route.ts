import { NextRequest, NextResponse } from 'next/server'
import { verifyToken, verifyPassword, hashPassword } from '@/app/lib/auth'
import { db } from '@/app/lib/db'

/*
  Change password endpoint
  Requires current authentication
  Updates password in database
*/

export async function POST(req: NextRequest) {
    try {
        // Verify authentication
        const token = req.cookies.get('admin_token')?.value
        if (!token) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        }

        const payload = await verifyToken(token)
        if (!payload) {
            return NextResponse.json(
                { error: 'Invalid token' },
                { status: 401 }
            )
        }

        const { currentPassword, newPassword } = await req.json()

        // Validate input
        if (!currentPassword || !newPassword) {
            return NextResponse.json(
                { error: 'Current and new password required' },
                { status: 400 }
            )
        }

        if (newPassword.length < 8) {
            return NextResponse.json(
                { error: 'New password must be at least 8 characters' },
                { status: 400 }
            )
        }

        // Get user from database
        const [users] = await db.execute<any[]>(
            'SELECT id, password_hash FROM admin_users WHERE username = ?',
            [payload.username]
        )

        if (users.length === 0) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            )
        }

        const user = users[0]

        // Verify current password
        const isValidPassword = await verifyPassword(currentPassword, user.password_hash)
        if (!isValidPassword) {
            return NextResponse.json(
                { error: 'Current password is incorrect' },
                { status: 401 }
            )
        }

        // Generate new password hash
        const newHash = await hashPassword(newPassword)

        // Update password in database
        await db.execute(
            'UPDATE admin_users SET password_hash = ? WHERE id = ?',
            [newHash, user.id]
        )

        return NextResponse.json({
            success: true,
            message: 'Password updated successfully'
        })
    } catch (error) {
        console.error('Change password error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
