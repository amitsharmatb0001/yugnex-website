// For long-form content like Vision, Mission, Research notes.

interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  datePublished?: string
}

export default function ArticleSchema({
  title,
  description,
  url,
  datePublished,
}: ArticleSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: url,
    publisher: {
      "@type": "Organization",
      name: "YugNex Technology",
      logo: {
        "@type": "ImageObject",
        url: "https://yugnex.com/og/yugnex-og.png",
      },
    },
    ...(datePublished && { datePublished }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
