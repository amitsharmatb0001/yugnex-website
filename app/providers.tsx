'use client'

import ErrorBoundary from '@/app/components/ErrorBoundary'
import { useAnalytics } from '@/app/lib/useAnalytics'

/*
  Providers is the root client-side wrapper.

  Responsibilities:
  - Catch rendering errors (ErrorBoundary)
  - Start global client-only systems (analytics, etc.)
  - Provide a single hydration boundary for layout.tsx

  It must export a DEFAULT component called Providers.
*/

export default function Providers({ children }: { children: React.ReactNode }) {
  // Start privacy-respecting analytics on route change
  useAnalytics()

  // Wrap the entire app in error boundary
  return (
    <ErrorBoundary>{children}</ErrorBoundary>
  )
}
