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
  'hi': ['home', 'vision', 'press', 'contact', 'privacy', 'terms'],
  'fr': ['home', 'vision', 'press', 'contact'],
  'de': ['home', 'vision', 'press', 'contact'],
  'ja': ['home', 'vision', 'press', 'contact'],
  'es': ['home'],
  'pt': ['home'],
  'zh': ['home'],
  'ar': ['home'],
  'ru': ['home'],
  'ko': ['home'],
}
