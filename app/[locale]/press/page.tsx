// Press & Media Page - Locale-aware version

import type { Metadata } from 'next'
import { Locale } from '@/app/lib/i18n'
import { buildSeo } from '@/app/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params

    return buildSeo({
        locale,
        title: 'Press & Media',
        description: 'Latest news, announcements, and media coverage from YugNex Technology. Official press releases, research publications, and conference participation.',
        path: '/press',
        keywords: [
            'YugNex news',
            'AI press releases',
            'YugNex announcements',
            'AI research news',
            'YugNex media',
            'India AI Summit',
            'autonomous software engineering news'
        ],
    })
}

interface PressItem {
    date: string
    category: 'announcement' | 'research' | 'media'
    title: string
    summary: string
    link?: string
}

const pressItems: PressItem[] = [
    {
        date: 'Coming Soon',
        category: 'announcement',
        title: 'Official Product Launch',
        summary: 'YugNex will announce its flagship autonomous software engineering platform, NexSidi, later this year. Stay tuned for details.'
    }
]

export default async function PressPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params

    return (
        <div className="page-container text-white">
            <div className="relative z-10 container mx-auto px-6 max-w-5xl page-inner-container">
                <div className="text-center">
                    <div className="mb-8 animate-fade-in">
                        <span className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-semibold tracking-wider uppercase">
                            Newsroom
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">
                            Press & Media
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Official announcements, news releases, and resources from YugNex Technology.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="space-y-8">
                        {pressItems.map((item, idx) => (
                            <div key={idx} className="p-8 rounded-2xl border border-white/5 bg-zinc-950/20 backdrop-blur-sm relative overflow-hidden group hover:border-yellow-500/20 transition-all duration-300">
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                    <span className="text-xs text-yellow-500 uppercase tracking-wider font-mono">
                                        {item.date}
                                    </span>
                                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 capitalize">
                                        {item.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-200 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {item.summary}
                                </p>
                                {item.link && (
                                    <a
                                        href={item.link}
                                        className="inline-flex items-center gap-1.5 text-sm text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                                    >
                                        Read more
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center">
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-yellow-500/20 blur-2xl rounded-full" />
                            <div className="relative p-8 rounded-2xl border border-yellow-500/30 backdrop-blur-sm bg-black/40">
                                <p className="text-lg text-gray-300 mb-4">
                                    For press inquiries or media partnerships:
                                </p>
                                <a
                                    href="mailto:press@yugnex.com"
                                    className="inline-block px-8 py-3 rounded-full bg-yellow-500/20 border-2 border-yellow-500 text-yellow-300 font-semibold hover:bg-yellow-500/30 hover:border-yellow-400 transition-all duration-300"
                                >
                                    press@yugnex.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}