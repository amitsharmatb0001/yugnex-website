// app/components/layout/AppShell.tsx
// Global structural wrapper with sticky footer layout

import { ReactNode } from 'react'
import { type Locale } from '@/app/lib/i18n'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import UnifiedCanvas from '@/app/background/UnifiedCanvas'

export default function AppShell({ children, locale = 'en' }: { children: ReactNode; locale?: string }) {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background canvas effects */}
      <UnifiedCanvas />

      {/* Accessibility skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only"
      >
        Skip to main content
      </a>

      <MainHeader />

      {/* Main content - grows to fill available space */}
      <main
        id="main"
        role="main"
        className="flex-1 flex flex-col"
      >
        {children}
      </main>

      <MainFooter locale={locale} />
    </div>
  )
}
