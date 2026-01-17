// app/components/i18n/LanguageSwitcher.tsx
'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { SUPPORTED_LOCALES, type Locale } from '@/app/lib/i18n'

const LOCALE_NAMES: Record<Locale, string> = {
  'en': 'English',
  'en-IN': 'English (India)',
  'hi': 'हिन्दी',
  'fr': 'Français',
  'de': 'Deutsch',
  'ja': '日本語',
  'es': 'Español',
  'pt': 'Português',
  'zh': '中文',
  'ar': 'العربية',
  'ru': 'Русский',
  'ko': '한국어',
}

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const parts = pathname.split('/')

  const currentLocale = (parts[1] || 'en') as Locale
  const restPath = parts.slice(2).join('/')

  return (
    <div style={{ position: 'relative' }}>
      {/* Current Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 0.75rem',
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '0.375rem',
          color: '#fff',
          fontSize: '0.875rem',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
          e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
          e.currentTarget.style.background = 'transparent'
        }}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '2px' }}>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span>{LOCALE_NAMES[currentLocale]}</span>
        <span style={{ fontSize: '0.75rem' }}>▼</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop to close dropdown */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40
            }}
          />

          {/* Dropdown List */}
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 0.5rem)',
              right: 0,
              minWidth: '14rem',
              maxHeight: '24rem',
              overflowY: 'auto',
              background: 'rgba(0,0,0,0.95)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '0.5rem',
              padding: '0.5rem',
              zIndex: 50,
              backdropFilter: 'blur(12px)'
            }}
          >
            {SUPPORTED_LOCALES.map(locale => (
              <a
                key={locale}
                href={`/${locale}/${restPath}`}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.625rem 0.75rem',
                  borderRadius: '0.375rem',
                  color: locale === currentLocale ? '#fbbf24' : '#d1d5db',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  fontWeight: locale === currentLocale ? 600 : 400,
                  transition: 'all 0.15s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = locale === currentLocale ? '#fbbf24' : '#d1d5db'
                }}
              >
                {LOCALE_NAMES[locale]}
                {locale === currentLocale && (
                  <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem' }}>✓</span>
                )}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
