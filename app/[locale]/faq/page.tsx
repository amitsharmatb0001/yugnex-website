import type { Metadata } from 'next'
import { Locale } from '@/app/lib/i18n'
import { buildSeo } from '@/app/lib/seo'
import FAQSection from '@/app/components/sections/FAQSection'
import ParticleBackground from '@/app/background/ParticleBackground'
import CodeBackground from '@/app/background/CodeBackground'
import NeuralCanvas from '@/app/background/NeuralCanvas'
import { resolveLocaleForPage } from '@/app/lib/localeGuard'
import { loadFAQContent } from '@/app/lib/contentLoader'
import { getUILabels } from '@/app/lib/uiLabels'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params

    return buildSeo({
        locale,
        title: 'FAQ - Frequently Asked Questions',
        description: 'Find answers to common questions about YugNex Technology, our autonomous software engineering platform, research, and how we\'re building foundational AI systems.',
        path: '/faq',
        keywords: [
            'YugNex FAQ',
            'autonomous software engineering questions',
            'AI platform FAQ',
            'YugNex support',
            'foundational AI FAQ',
            'software engineering AI questions'
        ],
    })
}

export default async function FAQPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    const effectiveLocale = resolveLocaleForPage(locale, 'faq')
    const content = await loadFAQContent(effectiveLocale)
    const ui = getUILabels(locale)

    return (
        <main className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-black text-white">
            <NeuralCanvas />
            <CodeBackground />
            <ParticleBackground />

            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-black/50 pointer-events-none z-0" />
            <div className="absolute top-40 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none z-0" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">

                {/* Page Header */}
                <div className="mb-16 text-center">
                    <div className="mb-4">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold tracking-wider uppercase">
                            {ui.support}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                        {ui.frequentlyAskedQuestions}
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {ui.findAnswers}
                    </p>
                </div>

                {/* FAQ Content */}
                <div className="mb-12">
                    <FAQSection items={content} />
                </div>

                {/* Footer CTA */}
                <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-transparent border border-yellow-500/20 text-center">
                    <h2 className="text-2xl font-bold mb-3 text-white">
                        {ui.stillHaveQuestions}
                    </h2>
                    <p className="text-gray-300 mb-6">
                        We're here to help. Reach out to our team and we'll get back to you within 48 hours.
                    </p>
                    <a
                        href="mailto:info@yugnex.com"
                        className="inline-block px-8 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors duration-300"
                    >
                        {ui.contactUs}
                    </a>
                </div>
            </div>
        </main>
    )
}