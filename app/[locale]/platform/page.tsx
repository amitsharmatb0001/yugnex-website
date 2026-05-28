import { Locale } from '@/app/lib/i18n'
import { resolveLocaleForPage } from '@/app/lib/localeGuard'
import { loadPlatformContent } from '@/app/lib/contentLoader'
import NeuralCanvas from '@/app/background/NeuralCanvas'
import CodeBackground from '@/app/background/CodeBackground'
import ParticleBackground from '@/app/background/ParticleBackground'
import TextBlock from '@/app/components/sections/TextBlock'
import { getUILabels } from '@/app/lib/uiLabels'

export default async function PlatformPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    const effectiveLocale = resolveLocaleForPage(locale, 'platform')
    const content = await loadPlatformContent(effectiveLocale)
    const ui = getUILabels(locale)

    return (
        <main className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-black text-white">
            {/* Background Layers */}
            <NeuralCanvas />
            <CodeBackground />
            <ParticleBackground />

            {/* Hero Section - Fixed Alignment */}
            <section className="relative z-10 container mx-auto px-6 mb-24 max-w-6xl flex flex-col items-center text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600 mb-8 leading-tight">
                    {content.title}
                </h1>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl">{content.subtitle}</p>
                
                {/* Wrapped TextBlock to ensure internal centering */}
                <div className="w-full flex justify-center">
                    <TextBlock
                        title={content.hero.title}
                        paragraphs={[content.hero.description]}
                        size="large"
                    />
                </div>
            </section>

            {/* Capabilities Grid - Improved Spacing */}
            <section className="relative z-10 container mx-auto px-6 mb-24 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {content.capabilities.map((cap, i) => (
                        <div key={i} className="flex flex-col p-8 border border-yellow-500/20 bg-yellow-900/5 backdrop-blur-sm rounded-lg hover:border-yellow-500/40 transition-colors">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-4">{cap.title}</h3>
                            <p className="text-gray-300 mb-6 flex-grow">{cap.description}</p>
                            <ul className="space-y-3 text-sm text-gray-400">
                                {cap.points.map((point, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                        <span className="text-yellow-500 font-bold">•</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Use Cases - Centered Header and Balanced Grid */}
            <section className="relative z-10 container mx-auto px-6 mb-24 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">{ui.useCases}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {content.useCases.map((useCase, i) => (
                        <div key={i} className="p-8 border border-yellow-500/20 bg-yellow-900/5 backdrop-blur-sm rounded-lg">
                            <h3 className="text-2xl font-semibold text-yellow-400 mb-6">{useCase.title}</h3>
                            <div className="space-y-6">
                                <div className="border-l-2 border-red-500/30 pl-4">
                                    <h4 className="text-xs uppercase tracking-widest text-red-400/70 font-bold mb-2">{ui.theChallenge}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">{useCase.challenge}</p>
                                </div>
                                <div className="border-l-2 border-green-500/30 pl-4">
                                    <h4 className="text-xs uppercase tracking-widest text-green-400/70 font-bold mb-2">{ui.ourSolution}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">{useCase.solution}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
