import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/app/lib/db'
import { verifyToken } from '@/app/lib/auth'

/*
  Admin analytics data API
  Provides aggregated analytics data for dashboard
  Requires JWT authentication
*/

export async function GET(req: NextRequest) {
    try {
        // Verify authentication
        const token = req.cookies.get('admin_token')?.value
        if (!token) {
            return NextResponse.json(
                { error: 'Unauthorized - Please login' },
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

        const { searchParams } = new URL(req.url)
        const days = parseInt(searchParams.get('days') || '7')

        // Get top pages
        const [topPages] = await db.execute<any[]>(
            `SELECT path, COUNT(*) as views
       FROM analytics_pageviews
       WHERE timestamp >= DATE_SUB(NOW(), INTERVAL ? DAY)
       GROUP BY path
       ORDER BY views DESC
       LIMIT 10`,
            [days]
        )

        // Get top referrers
        const [topReferrers] = await db.execute<any[]>(
            `SELECT referrer, COUNT(*) as count
       FROM analytics_pageviews
       WHERE timestamp >= DATE_SUB(NOW(), INTERVAL ? DAY)
         AND referrer IS NOT NULL
         AND referrer != ''
       GROUP BY referrer
       ORDER BY count DESC
       LIMIT 10`,
            [days]
        )

        // Get country distribution
        const [countries] = await db.execute<any[]>(
            `SELECT country, COUNT(*) as count
       FROM analytics_pageviews
       WHERE timestamp >= DATE_SUB(NOW(), INTERVAL ? DAY)
         AND country IS NOT NULL
       GROUP BY country
       ORDER BY count DESC
       LIMIT 10`,
            [days]
        )

        // Get recent security events
        const [securityEvents] = await db.execute<any[]>(
            `SELECT event_name, COUNT(*) as count, MAX(timestamp) as last_occurrence
       FROM analytics_security_events
       WHERE timestamp >= DATE_SUB(NOW(), INTERVAL ? DAY)
       GROUP BY event_name
       ORDER BY count DESC`,
            [days]
        )

        // Get total pageviews
        const [totalViews] = await db.execute<any[]>(
            `SELECT COUNT(*) as total
       FROM analytics_pageviews
       WHERE timestamp >= DATE_SUB(NOW(), INTERVAL ? DAY)`,
            [days]
        )

        return NextResponse.json({
            topPages,
            topReferrers,
            countries,
            securityEvents,
            totalViews: totalViews[0]?.total || 0,
            dateRange: `Last ${days} days`
        })
    } catch (error) {
        console.error('Analytics API error:', error)
        return NextResponse.json(
            { error: 'Failed to fetch analytics' },
            { status: 500 }
        )
    }
}
