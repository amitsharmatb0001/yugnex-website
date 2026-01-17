// app/lib/i18n.ts

/*
  Single source of truth for all languages YugNex supports.
  This file must match:
  - middleware.ts
  - sitemap.ts
  - hreflang in layout
  - StructuredData
  - future CMS / admin panel
*/

export const SUPPORTED_LOCALES = [
  'en',      // English (Global)
  'en-IN',   // English (India)
  'hi',      // Hindi
  'fr',      // French
  'de',      // German
  'ja',      // Japanese
  'es',      // Spanish
  'pt',      // Portuguese
  'zh',      // Chinese (Simplified)
  'ar',      // Arabic
  'ru',      // Russian
  'ko',      // Korean
] as const

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

// Tier classification for disclosure control
export const LOCALE_TIERS = {
  A: ['home', 'vision', 'privacy', 'terms'],        // identity, legal
  B: ['research', 'technology', 'platform'],       // controlled depth
  C: ['press', 'contact'],                         // informational
} as const
