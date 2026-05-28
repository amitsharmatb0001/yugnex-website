import './globals.css'
import type { Metadata, Viewport } from 'next'
import Providers from './providers'
import StructuredData from '@/app/components/seo/StructuredData'
import * as React from 'react'

/*
  Global SEO metadata.
  This defines how YugNex is represented in search results,
  social previews, and browser UI.
*/
export const metadata: Metadata = {
    manifest: '/manifest.webmanifest',
    metadataBase: new URL('https://yugnex.com'),
    title: {
        default: 'YugNex Technology – The Old Ends. The Next Begins.',
        template: '%s | YugNex Technology',
    },
    description:
        'Foundational AI Systems Lab building persistent autonomous software engineering intelligence. DPIIT Recognized Startup. Built in India for the world.',
    openGraph: {
        title: 'YugNex — Autonomous Software Engineering Platform',
        description: 'The world’s first persistent software engineering intelligence.',
        url: 'https://yugnex.com',
        siteName: 'YugNex',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {},
}

/*
  Viewport & mobile rendering discipline.
  Improves layout stability and mobile performance.
*/
export const viewport: Viewport = {
    themeColor: '#000000',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                {/*
          Structured Data (JSON-LD)

          This is the machine-readable identity layer.
          It tells search engines and knowledge graphs:

          - YugNex Technology = Organization
          - Foundational AI Systems Lab = ResearchOrganization
          - NexSidi = SoftwareApplication
          - Category = Autonomous Software Engineering Intelligence

          This is what makes Google treat you as an entity,
          not just a webpage.
        */}
                <StructuredData locale="en" />

                {/*
          Preload critical fonts (self-hosted, privacy-safe).

          Why:
          - Eliminates font loading delay
          - Improves LCP (Largest Contentful Paint)
          - Prevents layout shift from font swapping
          - Keeps everything first-party (no Google font tracking)
        */}
                <link
                    rel="preload"
                    href="/fonts/Inter-VariableFont_opsz,wght.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/JetBrainsMono[wght].woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
            </head>

            <body style={{ backgroundColor: '#000', color: '#fff' }}>
                {/*
          Providers is the global client boundary.

          It currently:
          - Wraps the app in ErrorBoundary
          - Boots privacy-first analytics
          - Becomes the future home of auth, experiments, theming

          Server layout stays pure.
          Client logic lives here.
        */}
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
