import type { Metadata } from 'next'
import { Locale } from '@/app/lib/i18n'
import { resolveLocaleForPage } from '@/app/lib/localeGuard'
import { loadAboutContent } from '@/app/lib/contentLoader'
import { buildSeo } from '@/app/lib/seo'
import TextBlock from '@/app/components/sections/TextBlock'
import { getUILabels } from '@/app/lib/uiLabels'
import MilestoneTimeline from '@/app/components/sections/MilestoneTimeline'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params

    return buildSeo({
        locale,
        title: 'About Us',
        description: 'Learn about YugNex Technology, a DPIIT recognized startup building foundational AI systems for autonomous software engineering. Based in India, building for the world.',
        path: '/about',
        keywords: [
            'YugNex Technology',
            'DPIIT startup',
            'AI company India',
            'autonomous software engineering',
            'foundational AI systems',
            'about YugNex',
            'AI research lab India'
        ],
    })
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    const effectiveLocale = resolveLocaleForPage(locale, 'about')
    const content = await loadAboutContent(effectiveLocale)
    const ui = getUILabels(locale)

    return (
        <div className="page-container text-gray-200">
            <div className="relative z-10 container mx-auto px-6 max-w-5xl page-inner-container">
                <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">
                    {content.title}
                </h1>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Left Column: Narrative & Founder */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl text-yellow-50 mb-4">{content.company.name}</h2>
                            <p className="text-gray-400 leading-relaxed mb-4">{content.company.recognition}</p>
                            <p className="text-gray-400 leading-relaxed">{content.company.location}</p>
                        </div>

                        <div>
                            <h3 className="text-xl text-white mb-3">{ui.founder}</h3>
                            <div className="p-6 bg-yellow-900/5 border border-yellow-500/10 rounded-lg">
                                <p className="text-yellow-200 font-medium mb-2">{content.founder.name}</p>
                                <p className="text-gray-400 text-sm">{content.founder.bio}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Approach & Stats */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-xl text-white mb-6">{ui.ourApproach}</h3>
                            <ul className="space-y-3">
                                {content.approach.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-300">
                                        <span className="text-yellow-500">▹</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {content.credentials.map((cred, i) => (
                                <div key={i} className="p-4 bg-gray-900/50 border border-gray-800 rounded">
                                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{cred.label}</div>
                                    <div className="text-sm text-yellow-100 font-medium">{cred.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Timeline Section */}
                <section className="border-t border-white/10 pt-8">
                    <h3 className="text-3xl font-bold text-center text-white mb-6">
                        {content.journeyTitle}
                    </h3>
                    <MilestoneTimeline
                        milestones={content.milestones}
                        ledgerLabel={content.ledgerLabel}
                    />
                </section>
            </div>
        </div>
    )
}
