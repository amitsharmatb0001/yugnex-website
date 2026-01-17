// IP Notice Page - Enhanced Visual Design
// Professional but visually engaging

import { renderMarkdown } from '@/app/lib/renderMarkdown'
import ParticleBackground from '@/app/background/ParticleBackground'
import CodeBackground from '@/app/background/CodeBackground'
import NeuralCanvas from '@/app/background/NeuralCanvas'

export default async function IPNoticePage() {
    const html = await renderMarkdown('legal/ip_notice.md')

    return (
        <main className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-black text-white">
            <NeuralCanvas />
            <CodeBackground />
            <ParticleBackground />

            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/8 via-transparent to-black/60 pointer-events-none z-0" />
            <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-yellow-500/15 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse-slow" />
            <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-yellow-500/15 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse-slow" style={{ animationDelay: '2s' }} />

            <div className="relative z-10 max-w-5xl mx-auto px-6">

                {/* Hero Header Section */}
                <div className="mb-16 text-center">
                    <div className="mb-6 animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Protected Innovation
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
                            Intellectual Property
                        </span>
                        <span className="block text-2xl md:text-3xl text-gray-400 mt-2">
                            Notice
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4">
                        Our innovations and intellectual property are protected. Please respect these rights.
                    </p>

                    <p className="text-sm text-gray-500">
                        Last Updated: January 17, 2026
                    </p>

                    <div className="mt-6 flex justify-center items-center gap-3">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-500/50" />
                    </div>
                </div>

                {/* IP Status Overview */}
                <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-yellow-500/30">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">Patent Protection</h3>
                                <p className="text-sm text-gray-300 mb-1">Status: <span className="text-yellow-400 font-semibold">Patent Pending</span></p>
                                <p className="text-xs text-gray-400">Core innovations in autonomous software engineering protected</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-yellow-500/30">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">Trademark Status</h3>
                                <p className="text-sm text-gray-300 mb-1">Status: <span className="text-yellow-400 font-semibold">Applications Filed</span></p>
                                <p className="text-xs text-gray-400">Brand names and logos under trademark protection</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content with Better Visual Design */}
                <div className="relative">
                    {/* Decorative side accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500/60 via-yellow-500/30 to-transparent rounded-full" />

                    <article
                        className="prose prose-invert prose-lg max-w-none p-8 md:p-12 ml-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/10 shadow-2xl"
                        style={{
                            '--tw-prose-body': '#e5e7eb',
                            '--tw-prose-headings': '#fbbf24',
                            '--tw-prose-links': '#fbbf24',
                            '--tw-prose-bold': '#f9fafb',
                            '--tw-prose-code': '#fcd34d',
                            '--tw-prose-pre-bg': 'rgba(0,0,0,0.3)',
                        } as any}
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>

                {/* Warning Notice */}
                <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-red-500/10 to-yellow-500/10 border-l-4 border-yellow-500 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                        <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Important Notice</h3>
                            <p className="text-sm text-gray-300">
                                Unauthorized use of our intellectual property may result in legal action. We actively monitor and protect our innovations. If you're uncertain whether your use is authorized, please contact us first.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-transparent border border-yellow-500/30 backdrop-blur-sm text-center">
                    <h2 className="text-2xl font-bold mb-3 text-white">
                        IP-Related Inquiries?
                    </h2>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        For licensing, partnership opportunities, or questions about our intellectual property, please reach out to our team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="mailto:info@yugnex.com"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contact Us
                        </a>
                        <span className="text-sm text-gray-400">
                            info@yugnex.com
                        </span>
                    </div>
                </div>
            </div>
        </main>
    )
}