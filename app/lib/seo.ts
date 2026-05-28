// Central SEO generator. Locale-aware, canonical-safe, no duplication.

import type { Metadata } from 'next'
import { Locale, DEFAULT_LOCALE, SUPPORTED_LOCALES } from './i18n'

const BASE_URL = 'https://yugnex.com'
const OG_IMAGE = `${BASE_URL}/og/yugnex-og.png`

// Map locales to OpenGraph locale format (e.g., 'en-IN' -> 'en_IN')
const toOgLocale = (locale: Locale): string => locale.replace('-', '_')

// Generate alternate locales for OpenGraph (all except current)
const getAlternateLocales = (currentLocale: Locale): string[] => {
    return SUPPORTED_LOCALES
        .filter(loc => loc !== currentLocale)
        .map(toOgLocale)
}

// Dynamically generate language alternates for all supported locales
const generateLanguageAlternates = (path: string = '') => {
    const alternates: Record<string, string> = {}

    SUPPORTED_LOCALES.forEach(locale => {
        alternates[locale] = `${BASE_URL}/${locale}${path}`
    })

    return alternates
}

export function buildSeo({
    locale,
    title,
    description,
    path = '',
    keywords,
    ogImage = OG_IMAGE,
    noIndex = false,
}: {
    locale: Locale
    title: string
    description: string
    path?: string
    keywords?: string[]
    ogImage?: string
    noIndex?: boolean
}): Metadata {
    const url = `${BASE_URL}/${locale}${path}`
    const ogLocale = toOgLocale(locale)
    const alternateLocales = getAlternateLocales(locale)

    return {
        title,
        description,
        keywords: keywords?.join(', '),
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        alternates: {
            canonical: url,
            languages: generateLanguageAlternates(path),
        },
        openGraph: {
            title,
            description,
            url,
            siteName: 'YugNex',
            locale: ogLocale,
            alternateLocale: alternateLocales,
            type: 'website',
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
            creator: '@yugnex',
            site: '@yugnex',
        },
    }
}
