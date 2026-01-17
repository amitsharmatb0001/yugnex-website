import { Locale } from './i18n'
import { CONTENT_AVAILABILITY } from '../[locale]/content-map'

export const NAV_ITEMS = [
    { key: 'vision', label: 'Vision', path: '/vision' },
    { key: 'mission', label: 'Mission', path: '/mission' },
    { key: 'about', label: 'About', path: '/about' },
    { key: 'research', label: 'Research', path: '/research' },
    { key: 'platform', label: 'Platform', path: '/platform' },
    { key: 'technology', label: 'Technology', path: '/technology' },
    { key: 'press', label: 'Press', path: '/press' },
    { key: 'contact', label: 'Contact', path: '/contact' },
]

export function getNavForLocale(locale: Locale) {
    const available = CONTENT_AVAILABILITY[locale] || []

    return NAV_ITEMS.filter(item => available.includes(item.key))
}
