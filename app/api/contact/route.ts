import { NextRequest, NextResponse } from 'next/server'
import { applyRateLimit, RATE_LIMITS } from '../../lib/rateLimit'
import { sendContactFormNotification, sendContactConfirmation } from '../../lib/mailer'
import { verifyTurnstileToken } from '../../lib/turnstile'
import { db } from '../../lib/db'
import { sendAnalytics } from '@/app/lib/analytics'
import { sanitizeServerInput } from '@/app/lib/sanitize'

/*
  Contact Form API Route
  Endpoint: POST /api/contact

  Security layers in order:
  1. Rate limiting (stops flooding & brute force)
  2. Input validation (stops malformed / malicious payloads)
  3. Input sanitization (prevents XSS and SQL injection)
  4. Turnstile bot verification (stops automation)
  5. Database persistence (audit trail)
  6. Email notifications (ops workflow)
  7. Security telemetry (abuse visibility)
*/

interface ContactFormData {
  name: string
  email: string
  organization?: string
  message: string
  turnstileToken?: string
}

export async function POST(request: NextRequest) {
  try {
    // 1) Apply rate limiting at edge
    const rateLimitResult = await applyRateLimit(request, RATE_LIMITS.CONTACT_FORM)

    if (!rateLimitResult.success) {
      // Log abuse signal (privacy-safe, no IP stored at app layer)
      sendAnalytics({ type: 'security', name: 'rate_limit' })

      return NextResponse.json(
        { error: rateLimitResult.error || 'Rate limit exceeded' },
        {
          status: 429,
          headers: rateLimitResult.headers,
        }
      )
    }

    // 2) Parse and validate input
    const body: ContactFormData = await request.json()

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      )
    }

    // Basic email format sanity check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    // Length limits to prevent payload abuse
    if (body.name.length > 100 || body.email.length > 100) {
      return NextResponse.json(
        { error: 'Name and email must be less than 100 characters' },
        { status: 400 }
      )
    }

    if (body.organization && body.organization.length > 200) {
      return NextResponse.json(
        { error: 'Organization name must be less than 200 characters' },
        { status: 400 }
      )
    }

    if (body.message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be less than 5000 characters' },
        { status: 400 }
      )
    }

    // 3) Sanitize inputs to prevent XSS and SQL injection
    const sanitizedName = sanitizeServerInput(body.name)
    const sanitizedEmail = sanitizeServerInput(body.email)
    const sanitizedOrganization = body.organization ? sanitizeServerInput(body.organization) : undefined
    const sanitizedMessage = sanitizeServerInput(body.message)

    // 4) Cloudflare Turnstile bot verification
    if (body.turnstileToken) {
      const forwardedFor = request.headers.get('x-forwarded-for')
      const realIp = request.headers.get('x-real-ip')
      const cfConnectingIp = request.headers.get('cf-connecting-ip')
      const remoteIp = cfConnectingIp || realIp || forwardedFor?.split(',')[0]

      const turnstileResult = await verifyTurnstileToken(body.turnstileToken, remoteIp)

      if (!turnstileResult.success) {
        sendAnalytics({ type: 'security', name: 'turnstile_fail' })

        return NextResponse.json(
          { error: 'Bot verification failed. Please try again.' },
          { status: 403 }
        )
      }
    }

    // 5) Persist to database (audit & compliance trail) with sanitized data
    try {
      await db.query(
        `INSERT INTO contacts (name, email, organization, message, created_at) 
         VALUES (?, ?, ?, ?, NOW())`,
        [
          sanitizedName,
          sanitizedEmail,
          sanitizedOrganization || null,
          sanitizedMessage,
        ]
      )
    } catch (dbError) {
      console.error('Database error:', dbError)
      // Non-fatal: continue so user still gets response
    }

    // 6) Notify internal team with sanitized data
    const emailResult = await sendContactFormNotification({
      name: sanitizedName,
      email: sanitizedEmail,
      organization: sanitizedOrganization,
      message: sanitizedMessage,
    })

    if (!emailResult.success) {
      console.error('Email notification failed:', emailResult.error)
      // Still continue; data is stored
    }

    // 7) Send confirmation to user with sanitized data
    try {
      await sendContactConfirmation(sanitizedEmail, sanitizedName)
    } catch (error) {
      console.error('Confirmation email failed:', error)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully. We will get back to you soon.',
      },
      {
        status: 200,
        headers: rateLimitResult.headers,
      }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid request format' }, { status: 400 })
    }

    // Generic abuse / anomaly signal
    sendAnalytics({ type: 'security', name: 'api_error' })

    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again later.' },
      { status: 500 }
    )
  }
}

// Hard block non-POST methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
