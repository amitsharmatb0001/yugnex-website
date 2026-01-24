/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            // ============================================================
            // SECURITY HEADERS (Fallback Layer)
            // ============================================================
            {
                // Apply to all routes
                source: '/:path*',
                headers: [
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()'
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
                            "style-src 'self' 'unsafe-inline'",
                            "img-src 'self' data: https:",
                            "font-src 'self' data: https:",
                            "connect-src 'self' https:",
                            "frame-src 'self' https://challenges.cloudflare.com",
                            "child-src 'self' https://challenges.cloudflare.com",
                            "frame-ancestors 'none'",
                            "base-uri 'self'",
                            "form-action 'self'"
                        ].join('; ')
                    },
                    {
                        key: 'Cross-Origin-Opener-Policy',
                        value: 'same-origin'
                    },
                    {
                        key: 'Cross-Origin-Resource-Policy',
                        value: 'same-origin'
                    }
                ]
            },

            // ============================================================
            // STATIC ASSET CACHING
            // ============================================================
            {
                source: '/:path*\\.(svg|png|jpg|jpeg|webp|woff2)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ]
    },
}

export default nextConfig
