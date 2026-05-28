// Terms of Use Page - Enhanced Visual Design
// Professional but visually engaging

import { renderMarkdown } from '@/app/lib/renderMarkdown'
import ParticleBackground from '@/app/background/ParticleBackground'
import CodeBackground from '@/app/background/CodeBackground'
import NeuralCanvas from '@/app/background/NeuralCanvas'

export default async function TermsOfUsePage() {
    const html = await renderMarkdown('legal/terms_of_use.md')

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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Legal Agreement
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
                            Terms of Use
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4">
                        Please read these terms carefully before using our platform and services.
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

                {/* Quick Links / Table of Contents */}
                <div className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-yellow-500/20">
                    <h2 className="text-lg font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        Quick Navigation
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <a href="#acceptance" className="text-gray-300 hover:text-yellow-400 transition-colors">→ Acceptance of Terms</a>
                        <a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">→ Our Services</a>
                        <a href="#usage" className="text-gray-300 hover:text-yellow-400 transition-colors">→ Acceptable Use</a>
                        <a href="#ip" className="text-gray-300 hover:text-yellow-400 transition-colors">→ Intellectual Property</a>
                        <a href="#liability" className="text-gray-300 hover:text-yellow-400 transition-colors">→ Limitation of Liability</a>
                        <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">→ Contact Information</a>
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

                {/* Key Points Highlight */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-300">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-semibold text-white mb-2">Fair Terms</h3>
                        <p className="text-xs text-gray-400">Clear, reasonable terms that protect both parties</p>
                    </div>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-300">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-semibold text-white mb-2">Protected Rights</h3>
                        <p className="text-xs text-gray-400">Your rights and our intellectual property clearly defined</p>
                    </div>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-300">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-semibold text-white mb-2">Always Updated</h3>
                        <p className="text-xs text-gray-400">We notify you of any changes to these terms</p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-transparent border border-yellow-500/30 backdrop-blur-sm text-center">
                    <h2 className="text-2xl font-bold mb-3 text-white">
                        Questions About These Terms?
                    </h2>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        If you have questions or concerns about our terms of use, please don't hesitate to reach out. We're here to clarify and assist.
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