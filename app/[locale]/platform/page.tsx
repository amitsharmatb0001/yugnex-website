import { Locale } from '@/app/lib/i18n'
import { resolveLocaleForPage } from '@/app/lib/localeGuard'
import { loadPlatformContent } from '@/app/lib/contentLoader'
import ParticleBackground from '@/app/background/ParticleBackground'
import CodeBackground from '@/app/background/CodeBackground'
import NeuralCanvas from '@/app/background/NeuralCanvas'

export default async function PlatformPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    const effectiveLocale = resolveLocaleForPage(locale, 'platform')
    const content = await loadPlatformContent(effectiveLocale)

    return (
        <main className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-black text-gray-200">
            <NeuralCanvas />
            <CodeBackground />
            <ParticleBackground />

            {/* Header */}
            <div className="relative z-10 container mx-auto px-6 mb-20 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600 mb-6">
                    {content.hero.title}
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    {content.hero.description}
                </p>
            </div>

            {/* Capabilities */}
            <section className="relative z-10 container mx-auto px-6 mb-24">
                <div className="grid md:grid-cols-3 gap-8">
                    {content.capabilities.map((cap, i) => (
                        <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-yellow-500/30 transition-colors">
                            <h3 className="text-xl font-semibold text-white mb-3">{cap.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{cap.description}</p>
                            <ul className="space-y-2">
                                {cap.points.map((pt, j) => (
                                    <li key={j} className="text-xs text-gray-500 flex items-start gap-2">
                                        <span className="text-yellow-500">▹</span> {pt}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Use Cases */}
            <section className="relative z-10 container mx-auto px-6 mb-24">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {content.useCases.map((useCase, i) => (
                        <div key={i} className="p-8 border border-yellow-500/20 bg-yellow-900/5 backdrop-blur-sm rounded-lg">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-4">{useCase.title}</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-1">The Challenge</h4>
                                    <p className="text-gray-300 text-sm">{useCase.challenge}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-1">Our Solution</h4>
                                    <p className="text-gray-300 text-sm">{useCase.solution}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
