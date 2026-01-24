import { Locale } from './i18n'
import { CONTENT_AVAILABILITY } from '../[locale]/content-map'
import { getNavLabels } from './navigationLabels'

export const NAV_ITEMS = [
    { key: 'vision' as const, path: '/vision' },
    { key: 'mission' as const, path: '/mission' },
    { key: 'about' as const, path: '/about' },
    { key: 'research' as const, path: '/research' },
    { key: 'platform' as const, path: '/platform' },
    { key: 'technology' as const, path: '/technology' },
    { key: 'press' as const, path: '/press' },
    { key: 'contact' as const, path: '/contact' },
]

export function getNavForLocale(locale: Locale) {
    const available = CONTENT_AVAILABILITY[locale] || []
    const labels = getNavLabels(locale)

    return NAV_ITEMS
        .filter(item => available.includes(item.key))
        .map(item => ({
            key: item.key,
            path: item.path,
            label: labels[item.key],
        }))
}
