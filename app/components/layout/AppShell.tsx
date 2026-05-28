// app/components/layout/AppShell.tsx
// Global structural wrapper with sticky footer layout

import { ReactNode } from 'react'
import { type Locale } from '@/app/lib/i18n'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'

export default function AppShell({ children, locale = 'en' }: { children: ReactNode; locale?: string }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
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
        style={{ flex: '1 0 auto' }}
      >
        {children}
      </main>

      <MainFooter locale={locale} />
    </div>
  )
}
