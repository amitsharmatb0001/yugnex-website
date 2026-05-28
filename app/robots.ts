import { MetadataRoute } from 'next'

/*
  Controls how search engines crawl YugNex.

  We allow:
  - Googlebot
  - Bingbot
  - Research crawlers

  We disallow:
  - Internal APIs
  - Admin paths (future)
*/

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://yugnex.com/sitemap.xml',
  }
}
