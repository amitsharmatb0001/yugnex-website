import type { Metadata } from 'next'
import { Locale } from '@/app/lib/i18n'
import { resolveLocaleForPage } from '@/app/lib/localeGuard'
import { loadMissionContent } from '@/app/lib/contentLoader'
import { buildSeo } from '@/app/lib/seo'
import { getUILabels } from '@/app/lib/uiLabels'
import MissionBlueprint from '@/app/components/sections/MissionBlueprint'
import MissionConsole from '@/app/components/sections/MissionConsole'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params

    return buildSeo({
        locale,
        title: 'Our Mission',
        description: 'Building autonomous software engineering platforms through continuous human-AI collaboration. Fusing architectural reasoning with deep contextual understanding.',
        path: '/mission',
    })
}

export default async function MissionPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    const effectiveLocale = resolveLocaleForPage(locale, 'mission')
    const content = await loadMissionContent(effectiveLocale)
    const ui = getUILabels(locale)

    return (
        <div className="page-container text-white">
            <div className="relative z-10 container mx-auto px-6 max-w-6xl page-inner-container">
                {/* Mission Header */}
                <div className="text-center">
                    <div className="mb-6 animate-fade-in">
                        <span className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-semibold tracking-wider uppercase">
                            {ui.mission || 'Mission'}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
                            {content.title}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-yellow-100 font-light leading-relaxed max-w-3xl mx-auto">
                        {content.lead}
                    </p>
                </div>

                {/* Interactive architecture blueprint */}
                <section>
                    <MissionBlueprint
                        blueprint={content.blueprint}
                        awaitingPipeline={content.awaitingPipeline}
                    />
                </section>

                {/* Interactive detailed mission console */}
                <section>
                    <MissionConsole
                        paragraphs={content.paragraphs}
                        pipelineIntegrationFlow={content.pipelineIntegrationFlow}
                        triggerDiagnostic={content.triggerDiagnostic}
                        runningDiagnostic={content.runningDiagnostic}
                        layerMetas={content.layerMetas}
                        pipelineMap={content.pipelineMap}
                    />
                </section>

                {/* Closing Statement */}
                <div className="max-w-3xl mx-auto text-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full" />
                        <div className="relative p-8 rounded-2xl border border-yellow-500/30 backdrop-blur-sm">
                            <p className="text-xl md:text-2xl text-yellow-100 font-light leading-relaxed italic">
                                "{content.closingStatement}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}