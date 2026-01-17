import { Locale } from '@/app/lib/i18n'
import { resolveLocaleForPage } from '@/app/lib/localeGuard'
import { loadContactContent } from '@/app/lib/contentLoader'
import ParticleBackground from '@/app/background/ParticleBackground'
import CodeBackground from '@/app/background/CodeBackground'
import NeuralCanvas from '@/app/background/NeuralCanvas'
import TextBlock from '@/app/components/sections/TextBlock'
import ContactForm from '@/app/components/forms/ContactForm'

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    const effectiveLocale = resolveLocaleForPage(locale, 'contact')
    const content = await loadContactContent(effectiveLocale)

    return (
        <main className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-black text-gray-200">
            <NeuralCanvas />
            <CodeBackground />
            <ParticleBackground />

            <div className="relative z-10 container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: Intro & Context */}
                    <div className="space-y-12">
                        <div>
                            <h1 className="text-5xl font-bold text-white mb-8">{content.title}</h1>
                            <TextBlock
                                title={content.intro.title}
                                paragraphs={[content.intro.body]}
                                size="medium"
                            />
                        </div>

                        {/* Social / Direct Channels */}
                        <div className="border-t border-white/10 pt-8 space-y-4">
                            <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold">Connect</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-3">
                                    <span className="text-yellow-500 opacity-70">Email</span>
                                    <a href={`mailto:${content.socials.email}`} className="hover:text-yellow-400 transition-colors">{content.socials.email}</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-yellow-500 opacity-70">Follow</span>
                                    <a href="https://x.com/YugNex" target="_blank" className="hover:text-yellow-400 transition-colors">{content.socials.twitter}</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-yellow-500 opacity-70">Location</span>
                                    <span>{content.socials.location}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Functional Form */}
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-8 backdrop-blur-md">
                        <h2 className="text-2xl font-bold text-white mb-6">{content.form.title}</h2>
                        <ContactForm
                            labels={{
                                name: content.form.nameLabel,
                                email: content.form.emailLabel,
                                org: content.form.orgLabel,
                                message: content.form.messageLabel,
                                submit: content.form.submitLabel
                            }}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
