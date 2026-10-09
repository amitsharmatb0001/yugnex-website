import type { Metadata } from 'next'
import { Locale } from '@/app/lib/i18n'
import { resolveLocaleForPage } from '@/app/lib/localeGuard'
import { loadPlatformContent } from '@/app/lib/contentLoader'
import { getUILabels } from '@/app/lib/uiLabels'
import { buildSeo } from '@/app/lib/seo'
import DeveloperCockpit from '@/app/components/sections/DeveloperCockpit'
import PlatformInteractive from '@/app/components/sections/PlatformInteractive'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params

    return buildSeo({
        locale,
        title: 'Platform - Autonomous Software Engineering',
        description: 'Explore the YugNex platform. Collaborative engineering partner featuring architectural understanding, systemic reasoning, and validation.',
        path: '/platform',
    })
}

export default async function PlatformPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    const effectiveLocale = resolveLocaleForPage(locale, 'platform')
    const content = await loadPlatformContent(effectiveLocale)
    const ui = getUILabels(locale)

    return (
        <div className="page-container text-white">
            <div className="relative z-10 page-inner-container">
                {/* Hero Section */}
                <section className="container mx-auto px-6 max-w-6xl flex flex-col items-center text-center">
                    <div className="mb-6 animate-fade-in">
                        <span className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-semibold tracking-wider uppercase">
                            {ui.platform || 'Platform'}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600 mb-6 leading-tight">
                        {content.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl font-light">{content.subtitle}</p>
                </section>

                {/* Interactive Developer Cockpit Widget */}
                <section className="container mx-auto px-6 max-w-5xl">
                    <DeveloperCockpit content={content} />
                </section>

                {/* Capabilities & Use Cases Interactive Hub */}
                <section className="container mx-auto px-6 max-w-6xl">
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {content.hero.title}
                        </h2>
                        <p className="text-gray-300 leading-relaxed font-light">
                            {content.hero.description}
                        </p>
                    </div>
                    
                    <PlatformInteractive
                        capabilities={content.capabilities}
                        useCases={content.useCases}
                        capabilitiesTitle={content.capabilitiesTitle}
                        consoleSandboxRunner={content.consoleSandboxRunner}
                        btnExecuting={content.btnExecuting}
                        btnRun={content.btnRun}
                        capLogs={content.capLogs}
                        uiLabels={{
                            theChallenge: ui.theChallenge,
                            ourSolution: ui.ourSolution,
                            useCases: ui.useCases
                        }}
                    />
                </section>
            </div>
        </div>
    )
}