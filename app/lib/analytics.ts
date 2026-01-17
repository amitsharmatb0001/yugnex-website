/*
  First-party, privacy-respecting analytics sender.

  Never:
  - sets cookies
  - stores user identifiers
  - fingerprints devices

  Respects:
  - Do Not Track (DNT)
  - Global Privacy Control (GPC)
*/

export type AnalyticsEvent =
  | { type: 'pageview'; path: string; referrer?: string }
  | { type: 'security'; name: 'rate_limit' | 'turnstile_fail' | 'api_error' }

export async function sendAnalytics(event: AnalyticsEvent) {
  if (typeof navigator !== 'undefined') {
    const dnt = navigator.doNotTrack === '1'
    const gpc = (navigator as any).globalPrivacyControl === true
    if (dnt || gpc) return
  }

  try {
    await fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
      keepalive: true,
    })
  } catch {
    // Analytics must never break UX
  }
}
