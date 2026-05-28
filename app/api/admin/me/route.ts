import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/app/lib/auth'

/*
  Current User Endpoint
  - Checks if the user is authenticated
  - Returns 200 OK with { user: null } if not authenticated
  - Used to avoid 401 console errors during frontend checks
*/

export async function GET(req: NextRequest) {
    const token = req.cookies.get('admin_token')?.value

    if (!token) {
        return NextResponse.json({ user: null })
    }

    const payload = await verifyToken(token)

    if (!payload) {
        return NextResponse.json({ user: null })
    }

    return NextResponse.json({
        user: {
            username: payload.username,
        }
    })
}
