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
  'en': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'en-IN': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'hi': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'hi-Latn': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'ta': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'te': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'bn': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'mr': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'gu': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'kn': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'ml': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'pa': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'fr': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'de': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'ja': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'es': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'pt': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'zh': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'ar': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'ru': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
  'ko': ['home', 'vision', 'mission', 'about', 'research', 'technology', 'platform', 'press', 'contact', 'privacy', 'terms'],
}
