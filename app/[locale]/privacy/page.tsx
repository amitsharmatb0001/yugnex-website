import type { Metadata } from 'next'
import { Locale } from '@/app/lib/i18n'
import { buildSeo } from '@/app/lib/seo'
import { renderMarkdown } from '@/app/lib/renderMarkdown'
import styles from '../../components/layout/Legal.module.css'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params

    return buildSeo({
        locale,
        title: 'Privacy Policy',
        description: 'Privacy Policy for YugNex Technology OPC Private Limited.',
        path: '/privacy',
    })
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    const html = await renderMarkdown('legal/privacy_policy.md')

    return (
        <div className="page-container text-white">
            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/8 via-transparent to-black/60 pointer-events-none z-0" />
            <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-yellow-500/15 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse-slow" />
            <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-yellow-500/15 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse-slow" style={{ animationDelay: '2s' }} />

            <div className="relative z-10 max-w-5xl mx-auto px-6 page-inner-container">
                {/* Hero Header Section */}
                <div className="text-center">
                    <div className="mb-6 animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Privacy Protected
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
                            Privacy Policy
                        </span>
                    </h1>
                </div>

                <div className="relative">
                    <article className={`prose prose-invert prose-lg max-w-none p-8 md:p-12 ml-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/10 shadow-2xl ${styles.legalArticle}`} dangerouslySetInnerHTML={{ __html: html }} />
                </div>

                {/* Contact Section */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-transparent border border-yellow-500/30 backdrop-blur-sm text-center">
                    <h2 className="text-2xl font-bold mb-3 text-white">
                        Questions About Your Privacy?
                    </h2>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        We're committed to protecting your data and being transparent. If you have any questions or concerns about our privacy practices, we're here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="mailto:info@yugnex.com"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Email Us
                        </a>
                        <span className="text-sm text-gray-400">
                            info@yugnex.com
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}