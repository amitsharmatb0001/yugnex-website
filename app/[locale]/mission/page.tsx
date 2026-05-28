import { Locale } from '@/app/lib/i18n'
import { resolveLocaleForPage } from '@/app/lib/localeGuard'
import { loadMissionContent } from '@/app/lib/contentLoader'
import ParticleBackground from '@/app/background/ParticleBackground'
import CodeBackground from '@/app/background/CodeBackground'
import NeuralCanvas from '@/app/background/NeuralCanvas'

export default async function MissionPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    const effectiveLocale = resolveLocaleForPage(locale, 'mission')
    const content = await loadMissionContent(effectiveLocale)

    return (
        <main className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-black text-white">
            <NeuralCanvas />
            <CodeBackground />
            <ParticleBackground />

            <div className="relative z-10 container mx-auto px-6 max-w-6xl">

                {/* Mission Header */}
                <div className="mb-20 text-center">
                    <div className="mb-8 animate-fade-in">
                        <span className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-semibold tracking-wider uppercase">
                            Our Mission
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 animate-gradient">
                            {content.title}
                        </span>
                    </h1>

                    <div className="flex justify-center items-center gap-3">
                        <div className="h-px w-20 bg-gradient-to-r from-transparent to-yellow-500" />
                        <div className="w-3 h-3 rotate-45 bg-yellow-500 animate-pulse" />
                        <div className="h-px w-20 bg-gradient-to-l from-transparent to-yellow-500" />
                    </div>
                </div>

                {/* Mission Statement - Bold & Clear */}
                <div className="mb-16 max-w-4xl mx-auto">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/30 via-yellow-500/10 to-yellow-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                        <div className="relative p-10 md:p-14 rounded-3xl bg-black/80 backdrop-blur-md border-2 border-yellow-500/50 shadow-2xl">
                            <div className="absolute top-4 left-4 w-14 h-14 border-t-2 border-l-2 border-yellow-400/60 rounded-tl-2xl" />
                            <div className="absolute bottom-4 right-4 w-14 h-14 border-b-2 border-r-2 border-yellow-400/60 rounded-br-2xl" />

                            <p className="text-2xl md:text-3xl lg:text-4xl text-yellow-50 leading-relaxed font-light text-center relative z-10">
                                {content.lead}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission Paragraphs with Strong Visual Hierarchy */}
                <div className="space-y-8 max-w-5xl mx-auto">
                    {content.paragraphs.map((paragraph: string, index: number) => {
                        // Detect key paragraphs
                        const isReject = paragraph.toLowerCase().startsWith('our mission starts with rejection') || paragraph.toLowerCase().includes('we reject')
                        const isBuilding = paragraph.toLowerCase().includes("we're building ai that treats")
                        const isPersonal = paragraph.toLowerCase().includes('this mission is personal')
                        const isDemocratization = paragraph.toLowerCase().includes('democratization')
                        const isPrinciples = paragraph.toLowerCase().includes('our principles') || paragraph.toLowerCase().includes('context is sacred')
                        const isFinal = index === content.paragraphs.length - 1

                        if (isFinal) {
                            // Final statement - maximum impact
                            return (
                                <div
                                    key={index}
                                    className="animate-slide-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="relative p-10 md:p-12 rounded-2xl bg-gradient-to-br from-yellow-500/20 via-yellow-500/10 to-transparent border-2 border-yellow-500/60 shadow-2xl shadow-yellow-500/30">
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <div className="w-24 h-1.5 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50" />
                                        </div>
                                        <p className="text-xl md:text-2xl text-yellow-50 leading-relaxed font-medium text-center">
                                            {paragraph}
                                        </p>
                                        <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full" />
                                    </div>
                                </div>
                            )
                        }

                        if (isReject) {
                            // Rejection statement - bold and defiant
                            return (
                                <div
                                    key={index}
                                    className="animate-slide-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-red-500/10 via-yellow-500/10 to-transparent backdrop-blur-sm border-l-4 border-red-500/50 border-r border-r-white/10 border-t border-t-white/10 border-b border-b-white/10 hover:border-l-red-500/70 transition-all duration-700 group">
                                        <div className="absolute -left-3 top-10 w-6 h-6 rounded-full bg-red-500/40 border-2 border-red-400 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                                        </div>
                                        <p className="text-lg md:text-xl text-gray-100 leading-relaxed font-medium">
                                            {paragraph}
                                        </p>
                                    </div>
                                </div>
                            )
                        }

                        if (isPersonal) {
                            // Personal mission - emotional connection
                            return (
                                <div
                                    key={index}
                                    className="animate-slide-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-yellow-500/15 via-yellow-500/8 to-transparent backdrop-blur-sm border border-yellow-500/40 hover:border-yellow-500/60 transition-all duration-700 hover:shadow-2xl hover:shadow-yellow-500/20 group">
                                        <div className="absolute top-4 right-4 text-4xl opacity-20">💫</div>
                                        <p className="text-lg md:text-xl text-yellow-50 leading-relaxed italic">
                                            {paragraph}
                                        </p>
                                    </div>
                                </div>
                            )
                        }

                        if (isBuilding || isDemocratization) {
                            // Core mission statements - strong emphasis
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

                        if (isPrinciples) {
                            // Principles paragraph - special formatting
                            return (
                                <div
                                    key={index}
                                    className="animate-slide-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/8 via-white/4 to-transparent backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-700 hover:shadow-xl hover:shadow-yellow-500/15">
                                        <div className="absolute top-4 left-4 text-3xl">⚡</div>
                                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                                            {paragraph}
                                        </p>
                                        <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
                                    </div>
                                </div>
                            )
                        }

                        // Regular paragraphs
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

                {/* Closing Statement */}
                <div className="mt-20 max-w-3xl mx-auto text-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full" />
                        <div className="relative p-8 rounded-2xl border border-yellow-500/30 backdrop-blur-sm">
                            <p className="text-xl md:text-2xl text-yellow-100 font-light leading-relaxed italic">
                                "The new epoch isn't a distant vision. It's infrastructure we're building right now."
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}