import { NextRequest, NextResponse } from 'next/server'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, type Locale } from './app/lib/i18n'

function detectLocale(acceptLanguage: string): string {
  const languages = acceptLanguage
    .toLowerCase()
    .split(',')
    .map((part) => part.split(';')[0].trim())

  for (const lang of languages) {
    const exact = SUPPORTED_LOCALES.find((l: Locale) => l.toLowerCase() === lang)
    if (exact) return exact
  }

  for (const lang of languages) {
    const base = lang.split('-')[0]
    const baseMatch = SUPPORTED_LOCALES.find(
      (l: Locale) => l.toLowerCase() === base
    )
    if (baseMatch) return baseMatch
  }

  return DEFAULT_LOCALE
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const shouldSkipLocaleRouting =
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')

  if (!shouldSkipLocaleRouting) {
    const hasLocale = SUPPORTED_LOCALES.some(
      (locale: Locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    )

    // Force HTTPS
    const proto = req.headers.get('x-forwarded-proto')
    if (proto && proto === 'http') {
      const httpsUrl = new URL(req.url)
      httpsUrl.protocol = 'https:'
      return NextResponse.redirect(httpsUrl)
    }

    if (!hasLocale) {
      const acceptLanguage = req.headers.get('accept-language') || ''
      const detectedLocale = detectLocale(acceptLanguage)

      const redirectUrl = new URL(`/${detectedLocale}${pathname}`, req.url)
      const redirectResponse = NextResponse.redirect(redirectUrl)

      applySecurityHeaders(redirectResponse)
      return redirectResponse
    }
  }

  const res = NextResponse.next()
  applySecurityHeaders(res)
  return res
}

function applySecurityHeaders(res: NextResponse) {
  res.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  )

  res.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data: https:",
      "connect-src 'self' https://challenges.cloudflare.com",
      "frame-src https://challenges.cloudflare.com",   // allow Turnstile iframe
      "frame-ancestors 'self'",                        // not 'none'
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ')
  )

  res.headers.set('X-Content-Type-Options', 'nosniff')
  res.headers.set('X-Frame-Options', 'SAMEORIGIN')
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  res.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=()'
  )

  res.headers.set('Cross-Origin-Opener-Policy', 'same-origin')
  res.headers.set('Cross-Origin-Resource-Policy', 'same-origin')
  // IMPORTANT: Turnstile breaks with COEP, enable later only if you really need SharedArrayBuffer
  // res.headers.set('Cross-Origin-Embedder-Policy', 'require-corp')
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
