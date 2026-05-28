import { NextResponse } from 'next/server'

/*
  Admin logout endpoint
  - Clears authentication cookie
*/

export async function POST() {
    const response = NextResponse.json({ success: true })

    // Clear the authentication cookie
    response.cookies.delete('admin_token')

    return response
}
