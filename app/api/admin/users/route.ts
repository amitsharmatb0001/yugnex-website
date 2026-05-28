import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/app/lib/db'
import { verifyToken } from '@/app/lib/auth'

/*
  User management API
  - GET: List all admin users
  - DELETE: Remove user by ID
*/

export async function GET(req: NextRequest) {
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

        // Get all users
        const [users] = await db.execute<any[]>(
            `SELECT id, username, email, created_at, last_login 
       FROM admin_users 
       ORDER BY created_at DESC`
        )

        return NextResponse.json(users)
    } catch (error) {
        console.error('User list error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

export async function DELETE(req: NextRequest) {
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

        const { searchParams } = new URL(req.url)
        const userId = searchParams.get('id')

        if (!userId) {
            return NextResponse.json(
                { error: 'User ID required' },
                { status: 400 }
            )
        }

        // Get user to be deleted
        const [users] = await db.execute<any[]>(
            'SELECT username FROM admin_users WHERE id = ?',
            [userId]
        )

        if (users.length === 0) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            )
        }

        // Prevent self-deletion
        if (users[0].username === payload.username) {
            return NextResponse.json(
                { error: 'Cannot delete your own account' },
                { status: 400 }
            )
        }

        // Delete user
        await db.execute(
            'DELETE FROM admin_users WHERE id = ?',
            [userId]
        )

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('User delete error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
