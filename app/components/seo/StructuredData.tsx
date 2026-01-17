// app/components/seo/StructuredData.tsx
// NOTE: This file controls Knowledge Graph identity across languages.
// It must never contain UI logic. SEO only.

import Script from 'next/script'

interface Props {
  locale: string
}

export default function StructuredData({ locale }: Props) {
  const baseUrl = 'https://yugnex.com'

  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'YugNex Technology',
      url: `${baseUrl}/${locale}`,
      logo: `${baseUrl}/logo-512.png`,
      sameAs: [
        'https://www.linkedin.com/company/yugnex-technology',
        'https://x.com/yugnex',
        'https://www.instagram.com/yug.nex',
      ],
      foundingLocation: {
        '@type': 'Place',
        name: 'India',
      },
      description:
        'Foundational AI Systems Lab building persistent autonomous software engineering intelligence.',
      inLanguage: locale,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ScholarlyArticle',
      headline: 'Toward Autonomous Software Engineering: Challenges and Directions',
      description:
        'Research on reasoning, context, and architectural understanding in AI-assisted software engineering.',
      author: {
        '@type': 'Organization',
        name: 'YugNex Technology Research Division',
      },
      publisher: {
        '@type': 'Organization',
        name: 'YugNex Technology',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo-512.png`,
        },
      },
      inLanguage: locale,
      url: `${baseUrl}/research/YugNex-Research-Whitepaper.pdf`,
      datePublished: '2026-01-01',
    },
  ]

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
