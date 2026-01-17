// app/sitemap.ts
import { MetadataRoute } from 'next'
import { SUPPORTED_LOCALES } from '@/app/lib/i18n'

/*
  Multilingual, canonical-safe sitemap for YugNex.

  Design goals:
  - One global authority: https://yugnex.com
  - Multiple language surfaces via path prefixes
  - No duplicate root URLs
  - No split knowledge graph
  - No indexing of internal / API / framework routes
*/

const BASE_URL = 'https://yugnex.com'

// Public, indexable top-level routes
// (Never include /api, /_next, admin, or experimental paths)
const ROUTES = [
  '/',            // Home
  '/vision',      // Vision
  '/mission',     // Mission
  '/about',       // About
  '/research',    // Research & Lab
  '/platform',    // Product / System
  '/technology',  // Core Tech
  '/privacy',     // Legal
  '/terms',       // Legal
  '/ip',          // Legal (Intellectual Property)
  '/contact',     // Contact & Collaboration
  '/press',       // Press & Updates
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const entries: MetadataRoute.Sitemap = []

  for (const locale of SUPPORTED_LOCALES) {
    for (const route of ROUTES) {
      entries.push({
        url: `${BASE_URL}/${locale}${route === '/' ? '' : route}`,
        lastModified: now,

        // Institutional cadence
        changeFrequency: route === '/' ? 'weekly' : 'monthly',

        // Priority logic
        priority:
          route === '/'
            ? 1.0
            : ['/research', '/platform', '/technology'].includes(route)
              ? 0.8
              : ['/vision', '/mission'].includes(route)
                ? 0.7
                : 0.5, // Legal, Contact, Press
      })
    }
  }

  return entries
}
