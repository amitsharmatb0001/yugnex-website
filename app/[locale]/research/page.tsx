import type { Metadata } from 'next'
import { Locale } from '@/app/lib/i18n'
import { resolveLocaleForPage } from '@/app/lib/localeGuard'
import { loadResearchContent } from '@/app/lib/contentLoader'
import { buildSeo } from '@/app/lib/seo'
import ParticleBackground from '@/app/background/ParticleBackground'
import TextBlock from '@/app/components/sections/TextBlock'
import ResearchPapers from '@/app/components/research/ResearchPapers'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params

    return buildSeo({
        locale,
        title: 'Research',
        description: 'Explore YugNex Technology\'s research on foundational AI systems, autonomous software engineering, and persistent intelligence architectures. Read our whitepapers and technical publications.',
        path: '/research',
        keywords: [
            'AI research',
            'autonomous software engineering',
            'foundational AI systems',
            'persistent intelligence',
            'software engineering research',
            'YugNex research',
            'AI whitepapers',
            'technical publications'
        ],
    })
}

export default async function ResearchPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    const effectiveLocale = resolveLocaleForPage(locale, 'research')
    const content = await loadResearchContent(effectiveLocale)

    return (
        <main className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-black text-gray-200">
            <ParticleBackground />

            {/* Header */}
            <div className="relative z-10 container mx-auto px-6 mb-16">
                <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600 mb-6">
                    {content.title}
                </h1>
            </div>

            {/* Philosophy Section */}
            <section className="relative z-10 container mx-auto px-6 max-w-4xl mb-20">
                <TextBlock
                    title={content.philosophy.title}
                    paragraphs={[content.philosophy.body]}
                    size="medium"
                />

                {/* Points */}
                <ul className="mt-12 space-y-4 border-l border-yellow-500/20 pl-8">
                    {content.philosophy.points.map((point, i) => (
                        <li key={i} className="text-xl text-gray-300 font-light">
                            {point}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Research Papers Section */}
            <section className="relative z-10 container mx-auto px-6 max-w-6xl">
                <ResearchPapers locale={effectiveLocale} />
            </section>
        </main>
    )
}
