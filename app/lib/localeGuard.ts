import { Locale, DEFAULT_LOCALE } from './i18n'
import { CONTENT_AVAILABILITY } from '@/app/[locale]/content-map'

/*
  Ensures we never render a page in a locale where content is not approved.
  If not available, caller can redirect to default locale or show a 404.
*/

export function resolveLocaleForPage(locale: Locale, page: string): Locale {
    if (CONTENT_AVAILABILITY[locale]?.includes(page)) {
        return locale
    }
    // Fallback to English canonical if not allowed
    return DEFAULT_LOCALE
}
