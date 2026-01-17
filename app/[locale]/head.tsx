// app/[locale]/head.tsx
import type { Metadata } from 'next'

/*
  Locale-aware metadata generator.

  Purpose:
  - One canonical brand and entity
  - Localized titles/descriptions for search relevance
  - Same OpenGraph identity across languages
  - Avoids duplicate English metadata on non-English pages
*/

const SITE_NAME = 'YugNex Technology'
const BASE_URL = 'https://yugnex.com'

// Simple locale → language name mapping (can expand later)
const LOCALE_LABEL: Record<string, string> = {
  'en': 'English',
  'en-IN': 'English (India)',
  'hi': 'Hindi',
  'fr': 'French',
  'de': 'German',
  'ja': 'Japanese',
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const locale = params.locale
  const langLabel = LOCALE_LABEL[locale] || 'English'

  const title = `YugNex Technology – Foundational AI Systems Lab (${langLabel})`
  const description =
    'Autonomous software engineering intelligence with persistent memory, reasoning, and organizational continuity. Built in India for the world.'

  const url = `${BASE_URL}/${locale}`

  return {
    title,
    description,

    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: `${BASE_URL}/og/yugnex-og.png`,
          width: 1200,
          height: 630,
          alt: 'YugNex – Autonomous Software Engineering Intelligence',
        },
      ],
      locale,
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/og/yugnex-og.png`],
    },

    robots: {
      index: true,
      follow: true,
    },
  }
}
