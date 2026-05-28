// app/lib/loadContent.ts
import { Locale } from './i18n'
import { CONTENT_AVAILABILITY } from '@/app/[locale]/content-map'

/*
  Centralized content resolver.
  Pages will never import text directly.
  They will ask this layer.
*/

export function isPageAvailable(locale: Locale, page: string): boolean {
  return CONTENT_AVAILABILITY[locale]?.includes(page) ?? false
}
