// Press & Media Page - Locale-aware version

import type { Metadata } from 'next'
import { Locale } from '@/app/lib/i18n'
import { buildSeo } from '@/app/lib/seo'
import ParticleBackground from '@/app/background/ParticleBackground'
import CodeBackground from '@/app/background/CodeBackground'
import NeuralCanvas from '@/app/background/NeuralCanvas'

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
        summary: 'YugNex will announce its flagship autonomous software engineering platform.',
    },
    {
        date: 'Coming Soon',
        category: 'research',
        title: 'Research Publications',
        summary: 'Technical papers on persistent AI systems and autonomous software engineering.',
    },
    {
        date: 'Coming Soon',
        category: 'media',
        title: 'Conference Participation',
        summary: 'Speaking engagements, demos, and industry events including India AI Summit.',
    },
]

export default function PressPage() {
    return (
        <main className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-black text-white">
            <NeuralCanvas />
            <CodeBackground />
            <ParticleBackground />

            {/* Enhanced Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-black/60 pointer-events-none z-0" />
            <div className="absolute top-1/4 right-1/2 w-[600px] h-[600px] bg-yellow-500/15 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-slow" />

            <div className="relative z-10 container mx-auto px-6 max-w-7xl">

                {/* Header Section */}
                <div className="mb-20 text-center">
                    <div className="mb-8 animate-fade-in">
                        <span className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-semibold tracking-wider uppercase">
                            Press & Media
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 animate-gradient">
                        News & Updates
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Official announcements, research updates, and media coverage from YugNex Technology
                    </p>

                    <div className="flex justify-center items-center gap-3 mt-8">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-500" />
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {/* Announcements */}
                    <div className="relative group animate-slide-up" style={{ animationDelay: '0ms' }}>
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                        <div className="relative p-8 rounded-2xl bg-black/80 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-500">
                            <div className="text-4xl mb-4">📢</div>
                            <h3 className="text-2xl font-bold text-yellow-300 mb-3">Announcements</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Official releases, milestones, and public communications. Stay updated on our journey.
                            </p>
                        </div>
                    </div>

                    {/* Research */}
                    <div className="relative group animate-slide-up" style={{ animationDelay: '100ms' }}>
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                        <div className="relative p-8 rounded-2xl bg-black/80 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-500">
                            <div className="text-4xl mb-4">🔬</div>
                            <h3 className="text-2xl font-bold text-yellow-300 mb-3">Research Notes</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Technical papers, research directions, and explorations in autonomous AI systems.
                            </p>
                        </div>
                    </div>

                    {/* Media & Events */}
                    <div className="relative group animate-slide-up" style={{ animationDelay: '200ms' }}>
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                        <div className="relative p-8 rounded-2xl bg-black/80 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-500">
                            <div className="text-4xl mb-4">🎤</div>
                            <h3 className="text-2xl font-bold text-yellow-300 mb-3">Media & Events</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Conference talks, demos, and industry events. Including India AI Summit participation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Press Items / Coming Soon */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-yellow-300 mb-12">Latest Updates</h2>

                    <div className="space-y-6">
                        {pressItems.map((item, index) => (
                            <div
                                key={index}
                                className="animate-slide-up p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 hover:border-yellow-500/30 transition-all duration-700 hover:shadow-xl hover:shadow-yellow-500/10"
                                style={{ animationDelay: `${(index + 3) * 100}ms` }}
                            >
                                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
                                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                        </span>
                                        <span className="text-sm text-gray-400">{item.date}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-yellow-100 mb-3">{item.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.summary}</p>

                                {item.link && (
                                    <a
                                        href={item.link}
                                        className="inline-flex items-center gap-2 mt-4 text-yellow-400 hover:text-yellow-300 transition-colors"
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
                    <div className="mt-16 text-center">
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
        </main>
    )
}
