'use client'

/*
  Main institutional header.
  - Locale-aware navigation
  - SEO-safe anchor routing (no JS router hacks)
  - Language switcher mounted (URL based, crawlable)
  - No cookies, no state, no tracking
  - Mobile Responsive (Hamburger Menu)
  
  Mobile: Globe icon for language (shows all languages) + Hamburger for menu
  Contact removed from mobile nav
*/

import Link from 'next/link'
import * as React from 'react'
import { usePathname } from 'next/navigation'
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from '@/app/lib/i18n'
import { getNavForLocale } from '@/app/lib/navigation'
import { getUILabels } from '@/app/lib/uiLabels'
import LanguageSwitcher from '@/app/components/i18n/LanguageSwitcher'
import { Menu, X, Globe } from 'lucide-react'

const LOCALE_NAMES: Record<Locale, string> = {
  'en': 'English',
  'en-IN': 'English (India)',
  'hi': 'हिन्दी',
  'hi-Latn': 'Hinglish',
  'ta': 'தமிழ்',
  'te': 'తెలుగు',
  'bn': 'বাংলা',
  'mr': 'मराठी',
  'gu': 'ગુજરાતી',
  'kn': 'ಕನ್ನಡ',
  'ml': 'മലയാളം',
  'pa': 'ਪੰਜਾਬੀ',
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

export default function MainHeader({ locale: propLocale }: { locale?: Locale } = {}) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [langMenuOpen, setLangMenuOpen] = React.useState(false)

  // Extract locale from URL: /en/research → "en"
  const locale = (pathname.split('/')[1] || DEFAULT_LOCALE) as Locale
  const navItems = getNavForLocale(locale)
  const ui = getUILabels(locale)

  const parts = pathname.split('/')
  const restPath = parts.slice(2).join('/')

  // Morph Animation Logic: Sanskrit → English (both typed out)
  const [headerText, setHeaderText] = React.useState(`${ui.brandName}™`)

  React.useEffect(() => {
    const header = document.getElementById('headerMorph')
    if (!header) return

    const sanskrit = "युगनेक्स"
    const targetBrand = ui.brandName

    // Phase 1: Type out Sanskrit
    let i = 0
    header.textContent = ''

    // Refs for intervals to allow cleanup
    let typeSanskrit: NodeJS.Timeout
    let typeTarget: NodeJS.Timeout
    let pauseTimeout: NodeJS.Timeout

    typeSanskrit = setInterval(() => {
      if (i < sanskrit.length) {
        header.textContent += sanskrit[i]
        i++
      } else {
        clearInterval(typeSanskrit)

        // Phase 2: Pause before transitioning
        pauseTimeout = setTimeout(() => {
          header.textContent = ''

          // Phase 3: Type out Target Language Brand Name
          let j = 0
          typeTarget = setInterval(() => {
            if (j < targetBrand.length) {
              header.textContent += targetBrand[j]
              j++
            } else {
              clearInterval(typeTarget)
              // Phase 4: Add trademark after typing is complete
              header.innerHTML = `${targetBrand}<sup class="trademark">™</sup>`
              setHeaderText(`${targetBrand}™`)
            }
          }, 120)
        }, 800) // Pause duration
      }
    }, 150) // Sanskrit typing speed

    return () => {
      clearInterval(typeSanskrit)
      clearInterval(typeTarget)
      clearTimeout(pauseTimeout)
    }
  }, [ui.brandName]) // Re-run when brand name changes (locale change)

  // Close mobile menu when route changes
  React.useEffect(() => {
    setMobileMenuOpen(false)
    setLangMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen || langMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen, langMenuOpen])



  return (
    <>
      {/* Header */}
      <header className="site-header sticky top-0 z-40 bg-black/90 backdrop-blur-md" role="banner">
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">

          {/* Brand Anchor with Morph Effect & Tagline */}
          <Link href={`/${locale}`} className="flex items-center gap-2 sm:gap-3 group">
            {/* Logo Image - smaller on mobile */}
            <img
              src="/png/yugnex-logo-64.png"
              alt="YugNex Logo"
              width={32}
              height={32}
              className="sm:w-10 sm:h-10 group-hover:scale-110 transition-transform"
            />

            <div className="flex flex-col">
              <div className="text-lg sm:text-xl text-yellow-300 font-bold group-hover:text-yellow-400 transition-colors" id="headerMorph">
                YugNex<sup className="text-[10px]">™</sup>
              </div>
              {/* Tagline hidden on mobile, visible on desktop */}
              <div className="hidden lg:block text-[10px] sm:text-[11px] tracking-wide text-gray-300 mt-0.5 opacity-90 group-hover:opacity-100 transition-opacity">
                {ui.headerTagline}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav aria-label="Primary navigation" className="hidden lg:block mx-4 xl:mx-8">
            <ul className="flex gap-4 xl:gap-8">
              {navItems.filter(item => item.key !== 'contact').map(item => (
                <li key={item.key}>
                  <Link href={`/${locale}${item.path}`} className="text-sm font-medium text-gray-200 hover:text-yellow-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop Language Switcher */}
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile: Globe Icon for Language */}
            <div className="lg:hidden lang-menu-container">
              <button
                className="text-gray-300 hover:text-yellow-400 p-1.5 sm:p-2 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setLangMenuOpen(true)
                }}
                aria-label="Change language"
              >
                <Globe size={22} className="sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            {!mobileMenuOpen && (
              <button
                className="lg:hidden text-gray-300 hover:text-white p-1.5 sm:p-2"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} className="sm:w-7 sm:h-7" />
              </button>
            )}
          </div>

        </div>
      </header>

      {/* Mobile Language Selection Modal Overlay */}
      {langMenuOpen && (
        <div className="fixed inset-0 flex flex-col lg:hidden z-[99999] bg-black/95 backdrop-blur-md overflow-y-auto">
          {/* Header row with Close button */}
          <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-800">
            <span className="text-lg font-bold text-white">{ui.selectLanguage || 'Select Language'}</span>
            <button
              onClick={() => setLangMenuOpen(false)}
              onTouchEnd={(e) => {
                e.preventDefault()
                setLangMenuOpen(false)
              }}
              className="text-gray-300 hover:text-yellow-400 transition-colors p-2"
              aria-label="Close language selector"
            >
              <X size={32} className="sm:w-10 sm:h-10" />
            </button>
          </div>

          {/* Languages Grid */}
          <div className="grid grid-cols-2 gap-3 p-4 sm:p-6 max-w-lg mx-auto w-full">
            {SUPPORTED_LOCALES.map((loc) => (
              <a
                key={loc}
                href={`/${loc}/${restPath}`}
                onClick={() => setLangMenuOpen(false)}
                className={`p-3.5 rounded-lg border text-center text-sm font-medium transition-all duration-200 ${
                  loc === locale
                    ? 'bg-yellow-500 text-black border-yellow-500 font-bold shadow-lg shadow-yellow-500/10'
                    : 'bg-white/5 border-white/10 text-gray-200 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {LOCALE_NAMES[loc]}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* 
        Mobile Navigation Overlay 
        - Contact removed from nav items
        - Language switcher removed (now globe icon in header)
      */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 flex flex-col lg:hidden z-[9999] bg-black"
        >
          {/* Close Button - Top Right */}
          <div className="flex justify-end p-4 sm:p-6">
            <button
              onClick={() => setMobileMenuOpen(false)}
              onTouchEnd={(e) => {
                e.preventDefault()
                setMobileMenuOpen(false)
              }}
              className="text-gray-300 hover:text-yellow-400 transition-colors p-2"
              aria-label="Close menu"
            >
              <X size={32} className="sm:w-10 sm:h-10" />
            </button>
          </div>

          {/* Navigation Links - Centered (Contact filtered out) */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-8 text-center -mt-16">
            {navItems
              .filter(item => item.key !== 'contact') // Remove Contact from mobile nav
              .map(item => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.path}`}
                  className="text-2xl font-light text-gray-200 hover:text-yellow-400 tracking-wider transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
          </nav>
        </div>
      )}
    </>
  )
}