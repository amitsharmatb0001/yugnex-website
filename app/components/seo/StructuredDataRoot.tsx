// Mounts all global structured data in one place (layout head).

import OrganizationSchema from './OrganizationSchema'

export default function StructuredDataRoot() {
  return (
    <>
      <OrganizationSchema />
      {/* BreadcrumbSchema and ArticleSchema are mounted per-page, not globally */}
    </>
  )
}
