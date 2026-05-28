import { Locale } from '@/app/lib/i18n'
import { resolveLocaleForPage } from '@/app/lib/localeGuard'
import { loadTechnologyContent } from '@/app/lib/contentLoader'
import ParticleBackground from '@/app/background/ParticleBackground'
import CodeBackground from '@/app/background/CodeBackground'
import NeuralCanvas from '@/app/background/NeuralCanvas'
import TextBlock from '@/app/components/sections/TextBlock'

export default async function TechnologyPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    const effectiveLocale = resolveLocaleForPage(locale, 'technology')
    const content = await loadTechnologyContent(effectiveLocale)

    return (
        <main className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-black text-gray-200">
            <NeuralCanvas />
            <CodeBackground />
            <ParticleBackground />

            {/* Header */}
            <div className="relative z-10 container mx-auto px-6 mb-20 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600 mb-6">
                    {content.title}
                </h1>
            </div>

            {/* Problem Section */}
            <section className="relative z-10 container mx-auto px-6 mb-24 max-w-5xl">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">{content.problem.title}</h2>
                    <p className="text-xl text-yellow-100/90 italic mb-6">{content.problem.subtitle}</p>
                    <p className="text-gray-300 leading-relaxed text-lg">{content.problem.body}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {content.problem.limitations.map((limit, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-colors">
                            <h3 className="text-lg font-semibold text-red-400 mb-3">{limit.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{limit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Approach */}
            <section className="relative z-10 container mx-auto px-6 mb-24 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">{content.approach.title}</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">{content.approach.subtitle}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {content.approach.sections.map((section, i) => (
                        <div key={i} className="p-8 border border-yellow-500/20 bg-yellow-900/5 backdrop-blur-sm rounded-lg hover:bg-yellow-900/10 transition-colors">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-4">{section.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{section.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Difference */}
            <section className="relative z-10 container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">{content.difference.title}</h2>
                <div className="space-y-6">
                    {content.difference.comparison.map((comp, i) => (
                        <div key={i} className="grid md:grid-cols-[1fr,2fr] gap-6 p-6 bg-white/5 rounded-lg border border-white/10 items-center">
                            <div className="font-bold text-yellow-500 uppercase tracking-widest text-sm text-right md:border-r md:border-white/10 md:pr-6">
                                {comp.label}
                            </div>
                            <div className="text-gray-200">
                                {comp.value}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
