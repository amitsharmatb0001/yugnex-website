// app/[locale]/content-map.ts
import { Locale } from '@/app/lib/i18n'

/*
  Declares which pages are available in which language.

  This lets us:
  - Prevent 404s for missing translations
  - Control which content is fully localized
  - Keep English as canonical for sensitive research
*/

export const CONTENT_AVAILABILITY: Record<Locale, string[]> = {
  'en': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'en-IN': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'hi': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'hi-Latn': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'ta': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'te': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'bn': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'mr': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'gu': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'kn': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'ml': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'pa': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'fr': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'de': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'ja': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'es': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'pt': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'zh': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'ar': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'ru': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
  'ko': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms', 'simulator'],
}
