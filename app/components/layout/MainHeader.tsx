'use client'

/*
  Main institutional header.
  - Locale-aware navigation
  - SEO-safe anchor routing (no JS router hacks)
  - Language switcher mounted (URL based, crawlable)
  - No cookies, no state, no tracking
*/

import Link from 'next/link'
import * as React from 'react'
import { usePathname } from 'next/navigation'
import { DEFAULT_LOCALE, type Locale } from '@/app/lib/i18n'
import { getNavForLocale } from '@/app/lib/navigation'
import LanguageSwitcher from '@/app/components/i18n/LanguageSwitcher'

export default function MainHeader({ locale: propLocale }: { locale?: Locale } = {}) {
  const pathname = usePathname()

  // Extract locale from URL: /en/research → "en"
  const locale = (pathname.split('/')[1] || DEFAULT_LOCALE) as Locale
  const navItems = getNavForLocale(locale)

  // Morph Animation Logic: Sanskrit → English (both typed out)
  const [headerText, setHeaderText] = React.useState('YugNex™')
  const hasAnimated = React.useRef(false)

  React.useEffect(() => {
    // Only run animation once on client mount
    if (hasAnimated.current) return
    hasAnimated.current = true

    const header = document.getElementById('headerMorph')
    if (!header) return

    const sanskrit = "युगनेक्स"
    const english = "YugNex"

    // Phase 1: Type out Sanskrit
    let i = 0
    header.textContent = ''

    const typeSanskrit = setInterval(() => {
      if (i < sanskrit.length) {
        header.textContent += sanskrit[i]
        i++
      } else {
        clearInterval(typeSanskrit)

        // Phase 2: Pause before transitioning
        setTimeout(() => {
          header.textContent = ''

          // Phase 3: Type out English
          let j = 0
          const typeEnglish = setInterval(() => {
            if (j < english.length) {
              header.textContent += english[j]
              j++
            } else {
              clearInterval(typeEnglish)
              // Phase 4: Add trademark after typing is complete
              header.innerHTML = `${english}<sup class="trademark">™</sup>`
              setHeaderText(`${english}™`)
            }
          }, 120) // Slightly faster for English
        }, 800) // Pause duration
      }
    }, 150) // Sanskrit typing speed

    return () => {
      clearInterval(typeSanskrit)
    }
  }, []) // Run once on mount

  return (
    <header className="site-header" role="banner">
      <div className="container flex items-center justify-between">

        {/* Brand Anchor with Morph Effect & Tagline */}
        <Link href={`/${locale}`} className="flex items-center gap-3 group">
          {/* Logo Image */}
          <img
            src="/png/yugnex-logo-64.png"
            alt="YugNex Logo"
            width={40}
            height={40}
            className="group-hover:scale-110 transition-transform"
          />

          <div className="flex flex-col">
            <div className="brand-logo group-hover:text-yellow-400 transition-colors" id="headerMorph">
              YugNex<sup className="trademark">™</sup>
            </div>
            <div className="hidden lg:block text-[11px] tracking-wide text-gray-300 mt-0.5 opacity-90 group-hover:opacity-100 transition-opacity">
              Foundational AI Systems Lab · From India to the World
            </div>
          </div>
        </Link>

        {/* Primary Navigation */}
        <nav aria-label="Primary navigation" className="mx-8">
          <ul className="nav-list">
            {navItems.filter(item => item.key !== 'contact').map(item => (
              <li key={item.key}>
                <a href={`/${locale}${item.path}`} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Switcher (URL-based, SEO visible) */}
        <LanguageSwitcher />

      </div>
    </header>
  )
}