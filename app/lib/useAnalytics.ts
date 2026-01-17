'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { sendAnalytics } from './analytics'

/*
  Client-side hook.

  Runs on every route change and sends a pageview event.
  No cookies, no IDs, no fingerprinting.
*/

export function useAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    sendAnalytics({
      type: 'pageview',
      path: pathname,
      referrer: document.referrer || undefined,
    })
  }, [pathname])
}
