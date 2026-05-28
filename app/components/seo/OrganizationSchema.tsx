// Global Organization structured data (JSON-LD).
// This is how Google, Bing, and knowledge graphs understand "who YugNex is".

export default function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "YugNex Technology",
    url: "https://yugnex.com",
    logo: "https://yugnex.com/logo-512.png",
    sameAs: [
      "https://www.linkedin.com/company/yugnex-technology/",
      "https://x.com/yugnex",
      "https://www.instagram.com/yug.nex"
    ],
    description:
      "Foundational AI Systems Lab building persistent autonomous software engineering intelligence. Built in India for the world."
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
