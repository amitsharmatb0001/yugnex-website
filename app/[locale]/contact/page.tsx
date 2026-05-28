import type { Metadata } from 'next'
import { Locale } from '@/app/lib/i18n'
import { buildSeo } from '@/app/lib/seo'
import ContactForm from '@/app/components/forms/ContactForm'
import TextBlock from '@/app/components/sections/TextBlock'
import { loadContactContent } from '@/app/lib/contentLoader'
import { getUILabels } from '@/app/lib/uiLabels'
import { resolveLocaleForPage } from '@/app/lib/localeGuard'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params

    return buildSeo({
        locale,
        title: 'Contact Us',
        description: 'Get in touch with YugNex Technology OPC Private Limited. For licensing, partnership opportunities, or general inquiries.',
        path: '/contact',
    })
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    const effectiveLocale = resolveLocaleForPage(locale, 'contact')
    const content = await loadContactContent(effectiveLocale)
    const ui = getUILabels(locale)

    return (
        <div className="page-container text-gray-200">
            <div className="relative z-10 container mx-auto px-6 max-w-6xl page-inner-container">
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

                        <div className="space-y-6 pt-6">
                            <h2 className="text-xl font-bold text-white">Direct Channels</h2>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <span className="text-yellow-500 opacity-70">Email</span>
                                    <a href={`mailto:${content.socials.email}`} className="hover:text-yellow-400 transition-colors">{content.socials.email}</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-yellow-500 opacity-70">Twitter</span>
                                    <a href="https://x.com/YugNex" target="_blank" className="hover:text-yellow-400 transition-colors">{content.socials.twitter}</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-yellow-500 opacity-70">{ui.location}</span>
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
                            messages={{
                                sending: ui.sending,
                                sent: ui.sent,
                                success: ui.successMessage,
                                error: ui.errorMessage,
                                verification: ui.verificationRequired,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
