import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/app/lib/db'
import { createHash } from 'crypto'

/*
  Privacy-first analytics storage endpoint.
  
  Stores:
  - Pageviews (path, referrer, country code)
  - Security events (rate limits, turnstile failures)
  
  Privacy measures:
  - No IP addresses stored
  - User agents are SHA-256 hashed
  - Only country code extracted (from Cloudflare headers)
  - Respects DNT/GPC (checked client-side before sending)
*/

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // Extract country from Cloudflare headers (no IP stored)
    const country = req.headers.get('cf-ipcountry') || null

    // Hash user agent for privacy (cannot be reversed)
    const userAgent = req.headers.get('user-agent')
    const userAgentHash = userAgent
      ? createHash('sha256').update(userAgent).digest('hex')
      : null

    if (data.type === 'pageview') {
      // Store pageview in database
      await db.execute(
        `INSERT INTO analytics_pageviews (path, referrer, user_agent_hash, country, timestamp)
         VALUES (?, ?, ?, ?, NOW())`,
        [
          data.path || '/',
          data.referrer || null,
          userAgentHash,
          country
        ]
      )
    } else if (data.type === 'security') {
      // Store security event in database
      await db.execute(
        `INSERT INTO analytics_security_events (event_name, metadata, timestamp)
         VALUES (?, ?, NOW())`,
        [
          data.name,
          JSON.stringify({ country, userAgentHash })
        ]
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    // Analytics must never break UX - fail silently
    console.error('Analytics storage error:', error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
