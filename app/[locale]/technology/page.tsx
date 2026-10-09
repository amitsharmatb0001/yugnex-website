import type { Metadata } from 'next'
import { Locale } from '@/app/lib/i18n'
import { resolveLocaleForPage } from '@/app/lib/localeGuard'
import { loadTechnologyContent } from '@/app/lib/contentLoader'
import { buildSeo } from '@/app/lib/seo'
import TechnologyInteractive from '@/app/components/sections/TechnologyInteractive'
import { getUILabels } from '@/app/lib/uiLabels'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params

    return buildSeo({
        locale,
        title: 'Technology - System Understanding AI',
        description: 'Explore the YugNex approach to software engineering AI. Beyond text generation to systemic architectural understanding and multi-level validation.',
        path: '/technology',
    })
}

export default async function TechnologyPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    const effectiveLocale = resolveLocaleForPage(locale, 'technology')
    const content = await loadTechnologyContent(effectiveLocale)
    const ui = getUILabels(locale)

    return (
        <div className="page-container text-gray-200">
            <div className="relative z-10 page-inner-container">
                {/* Header */}
                <div className="container mx-auto px-6 text-center">
                    <div className="mb-6 animate-fade-in">
                        <span className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-semibold tracking-wider uppercase">
                            {ui.technology || 'Technology'}
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">
                        {content.title}
                    </h1>
                </div>

                {/* Problem Section Introduction */}
                <section className="container mx-auto px-6 max-w-5xl">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">{content.problem.title}</h2>
                        <p className="text-xl text-yellow-100/90 italic mb-6">{content.problem.subtitle}</p>
                        <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">{content.problem.body}</p>
                    </div>
                </section>

                {/* Main Interactive Hub */}
                <section className="container mx-auto px-6 max-w-6xl">
                    <TechnologyInteractive 
                        limitations={content.problem.limitations} 
                        approachSections={content.approach.sections}
                        diagnosticsTitle={content.diagnosticsTitle}
                        approachTitle={content.approachTitle}
                        debateTitle={content.debateTitle}
                        debateSubtitle={content.debateSubtitle}
                        limitationLogs={content.limitationLogs}
                        approachDiagrams={content.approachDiagrams}
                        liveTelemetry={content.liveTelemetry}
                        codeLensContent={content.codeLens}
                    />
                </section>

                {/* Difference Section */}
                <section className="container mx-auto px-6 max-w-4xl border-t border-white/10 pt-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">{content.difference.title}</h2>
                    <div className="space-y-6">
                        {content.difference.comparison.map((comp, i) => (
                            <div key={i} className="grid md:grid-cols-[1fr,2fr] gap-6 p-6 bg-white/5 rounded-lg border border-white/10 items-center">
                                <div className="font-bold text-yellow-500 uppercase tracking-widest text-sm text-right md:border-r md:border-white/10 md:pr-6">
                                    {comp.label}
                                </div>
                                <div className="text-gray-200">
                                    {comp.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
