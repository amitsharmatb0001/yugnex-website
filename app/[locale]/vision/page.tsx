import NeuralCanvas from '@/app/background/NeuralCanvas'
import CodeBackground from '@/app/background/CodeBackground'
import ParticleBackground from '@/app/background/ParticleBackground'
import { loadVisionContent } from '@/app/lib/contentLoader'
import { type Locale } from '@/app/lib/i18n'
import { getUILabels } from '@/app/lib/uiLabels'
import { resolveLocaleForPage } from '@/app/lib/localeGuard'

export default async function VisionPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    const effectiveLocale = resolveLocaleForPage(locale, 'vision')
    const content = await loadVisionContent(effectiveLocale)
    const ui = getUILabels(locale)

    return (
        <main className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-black text-white">
            <NeuralCanvas />
            <CodeBackground />
            <ParticleBackground />

            <div className="relative z-10 container mx-auto px-6 max-w-6xl">

                {/* Epic Title Section */}
                <div className="mb-20 text-center">
                    <div className="mb-8 animate-fade-in">
                        <span className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-semibold tracking-wider uppercase">
                            {ui.vision}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 animate-gradient pb-2">
                            {ui.heroSlogan || 'The Old Ends. The Next Begins.'}
                        </span>
                    </h1>

                    <div className="flex justify-center items-center gap-3 mb-6">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-500" />
                    </div>
                </div>

                {/* Lead Statement - Hero Impact */}
                <div className="mb-20 max-w-4xl mx-auto">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-yellow-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                        <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-transparent backdrop-blur-md border-2 border-yellow-500/40 shadow-2xl">
                            {/* Corner decorations */}
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-yellow-400/50 rounded-tl-3xl" />
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-yellow-400/50 rounded-br-3xl" />

                            <p className="text-2xl md:text-3xl lg:text-4xl text-yellow-50 leading-relaxed font-light text-center">
                                {content.lead}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Paragraphs with Smart Visual Hierarchy */}
                <div className="space-y-8 max-w-5xl mx-auto">
                    {content.paragraphs.map((paragraph: string, index: number) => {
                        // Detect key paragraphs for special styling
                        const isProblem = index === 0 // First paragraph about broken system
                        const isThreshold = paragraph.toLowerCase().includes('threshold') || paragraph.toLowerCase().includes('moment before')
                        const isYugNex = paragraph.toLowerCase().includes('yugnex') && paragraph.includes('युग')
                        const isInfrastructure = paragraph.toLowerCase().includes("we're not building another") || paragraph.toLowerCase().includes('infrastructure')
                        const isFuture = paragraph.toLowerCase().includes('what the next epoch looks like')
                        const isFinal = index === content.paragraphs.length - 1

                        // Special styling for different paragraph types
                        if (isFinal) {
                            // Final call to action - maximum impact
                            return (
                                <div
                                    key={index}
                                    className="animate-slide-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="relative p-10 md:p-12 rounded-2xl bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-yellow-500/20 backdrop-blur-sm border-2 border-yellow-500/60 shadow-2xl shadow-yellow-500/30">
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <div className="w-20 h-1.5 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50" />
                                        </div>
                                        <p className="text-xl md:text-2xl text-yellow-50 leading-relaxed font-medium text-center">
                                            {paragraph}
                                        </p>
                                    </div>
                                </div>
                            )
                        }

                        if (isYugNex || isThreshold) {
                            // Key concept paragraphs - strong emphasis
                            return (
                                <div
                                    key={index}
                                    className="animate-slide-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent backdrop-blur-sm border-l-4 border-yellow-500/60 border-r border-r-white/10 border-t border-t-white/10 border-b border-b-white/10 hover:border-l-yellow-500/80 transition-all duration-700 hover:shadow-xl hover:shadow-yellow-500/20 group">
                                        <div className="absolute -left-3 top-10 w-6 h-6 rounded-full bg-yellow-500/40 border-2 border-yellow-500 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                                        </div>
                                        <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    </div>
                                </div>
                            )
                        }

                        if (isInfrastructure || isFuture) {
                            // Vision paragraphs - medium emphasis
                            return (
                                <div
                                    key={index}
                                    className="animate-slide-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/8 via-white/4 to-transparent backdrop-blur-sm border border-yellow-500/25 hover:border-yellow-500/40 transition-all duration-700 hover:transform hover:scale-[1.01] hover:shadow-xl hover:shadow-yellow-500/10 group">
                                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                                            {paragraph}
                                        </p>
                                        <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
                                    </div>
                                </div>
                            )
                        }

                        // Regular paragraphs - clean, readable
                        return (
                            <div
                                key={index}
                                className="animate-slide-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="p-8 md:p-10 rounded-xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 hover:border-yellow-500/30 transition-all duration-700 hover:shadow-xl hover:shadow-yellow-500/10">
                                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                        {paragraph}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Closing Visual Element */}
                <div className="mt-24 flex justify-center">
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full border-2 border-yellow-500/30 flex items-center justify-center animate-spin-slow">
                            <div className="w-24 h-24 rounded-full border-2 border-yellow-500/50 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/40 to-yellow-600/40 backdrop-blur animate-pulse" />
                            </div>
                        </div>
                        <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-2xl" />
                    </div>
                </div>

            </div>
        </main>
    )
}