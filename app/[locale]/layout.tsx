/*
  Locale layout.

  Responsibilities:
  - Validate locale
  - Inject Structured Data (per-language Knowledge Graph)
  - Wrap all pages in AppShell (Header, Main, Footer)
  - Do NOT touch <html> or <body> (root layout owns that)
*/

import type { Metadata } from 'next'
import AppShell from '@/app/components/layout/AppShell'
import StructuredData from '@/app/components/seo/StructuredData'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, type Locale } from '@/app/lib/i18n'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale: rawLocale } = await params
    const locale: Locale = SUPPORTED_LOCALES.includes(rawLocale as Locale)
        ? (rawLocale as Locale)
        : DEFAULT_LOCALE

    const baseUrl = 'https://yugnex.com'

    return {
        alternates: {
            canonical: `${baseUrl}/${locale}`,
            languages: {
                en: `${baseUrl}/en`,
                'en-IN': `${baseUrl}/en-IN`,
                hi: `${baseUrl}/hi`,
                fr: `${baseUrl}/fr`,
                de: `${baseUrl}/de`,
                ja: `${baseUrl}/ja`,
            },
        },
    }
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale: rawLocale } = await params
    const locale: Locale = SUPPORTED_LOCALES.includes(rawLocale as Locale)
        ? (rawLocale as Locale)
        : DEFAULT_LOCALE

    return (
        <>
            {/* Knowledge Graph + Structured Data (locale-aware) */}
            <StructuredData locale={locale} />

            {/* Global application shell */}
            <AppShell locale={locale}>
                {children}
            </AppShell>
        </>
    )
}
