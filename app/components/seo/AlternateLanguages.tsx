// Outputs hreflang alternate links for multi-language SEO.

interface AlternateLanguagesProps {
  path: string
  locales: string[]
  domain?: string
}

export default function AlternateLanguages({
  path,
  locales,
  domain = "https://yugnex.com",
}: AlternateLanguagesProps) {
  return (
    <>
      {locales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`${domain}/${locale}${path}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${domain}/en${path}`}
      />
    </>
  )
}
