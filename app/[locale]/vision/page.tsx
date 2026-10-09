import type { Metadata } from 'next'
import { Locale } from '@/app/lib/i18n'
import { buildSeo } from '@/app/lib/seo'
import { loadVisionContent } from '@/app/lib/contentLoader'
import { getUILabels } from '@/app/lib/uiLabels'
import { resolveLocaleForPage } from '@/app/lib/localeGuard'
import VisionPortal from '@/app/components/sections/VisionPortal'
import VisionConsole from '@/app/components/sections/VisionConsole'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params

    return buildSeo({
        locale,
        title: 'Our Vision',
        description: 'The transition to a new epoch of persistent, evolving engineering intelligence. Bridge between the human-only and autonomous collaborative era.',
        path: '/vision',
    })
}

export default async function VisionPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    const effectiveLocale = resolveLocaleForPage(locale, 'vision')
    const content = await loadVisionContent(effectiveLocale)
    const ui = getUILabels(locale)

    return (
        <div className="page-container text-white">
            <div className="relative z-10 container mx-auto px-6 max-w-6xl page-inner-container">
                {/* Epic Title Section */}
                <div className="text-center">
                    <div className="mb-6 animate-fade-in">
                        <span className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-semibold tracking-wider uppercase">
                            {ui.vision || 'Vision'}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 pb-2">
                            {content.title}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-yellow-100 font-light leading-relaxed max-w-3xl mx-auto">
                        {content.lead}
                    </p>
                </div>

                {/* Interactive comparison portal */}
                <section>
                    <VisionPortal content={content} />
                </section>

                {/* Interactive detailed vision console */}
                <section>
                    <VisionConsole
                        paragraphs={content.paragraphs}
                        pillarMetas={content.pillarMetas}
                        telemetryTitle={content.telemetryTitle}
                        telemetryStatus={content.telemetryStatus}
                        telemetryMap={content.telemetryMap}
                    />
                </section>
            </div>
        </div>
    )
}