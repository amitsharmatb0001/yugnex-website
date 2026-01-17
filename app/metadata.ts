import type { Metadata, Viewport } from 'next'

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
        description: 'The worlds first persistent software engineering intelligence.',
        url: 'https://yugnex.com',
        siteName: 'YugNex',
        type: 'website',
        images: [
            {
                url: 'https://yugnex.com/og/yugnex-og.png',
                width: 1200,
                height: 630,
                alt: 'YugNex — Autonomous Software Engineering Intelligence',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'YugNex — Autonomous Software Engineering Platform',
        description: 'Persistent software engineering intelligence. Built in India for the world.',
        images: ['https://yugnex.com/og/yugnex-og.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
            { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
            { url: '/favicon-48.png', type: 'image/png', sizes: '48x48' },
            { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
            { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
            { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
        ],
        apple: [
            { url: '/apple-icon.svg', type: 'image/svg+xml' },
            { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
        ],
    },
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
