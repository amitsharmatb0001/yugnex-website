// app/[locale]/page.tsx
// Main locale-aware home page.
// Integrates Unified Canvas background, Hero, and the Waitlist.

import { Locale } from '@/app/lib/i18n'
import { loadHomeContent } from '@/app/lib/contentLoader'
import { getUILabels } from '@/app/lib/uiLabels'
import HeroSection from '@/app/components/hero/HeroSection'
import WaitlistForm from '@/app/components/forms/WaitlistForm'

export const revalidate = 300 // ISR: refresh every 5 minutes

export default async function HomePage({
    params,
}: {
    params: Promise<{ locale: Locale }>
}) {
    const { locale } = await params
    const content = await loadHomeContent(locale)
    const ui = getUILabels(locale)

    return (
        <div className="page-container">
            <div className="relative z-10 page-inner-container">
                {/* Hero Block */}
                <HeroSection
                    title={content.heroTitle}
                    tagline={content.tagline}
                    subline={content.subline}
                    banner={content.banner}
                    credentials={content.credentials}
                    slogan={ui.heroSlogan}
                    introduction={ui.heroIntro}
                    locale={locale}
                />

                {/* Call-to-Action Waitlist Section */}
                <section className="px-6 max-w-4xl mx-auto text-center relative w-full">
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="glass-card p-10 md:p-14 bg-black/60 relative">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                            Build the Next Epoch of Software
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-10 font-light leading-relaxed">
                            YugNex is currently in private R&D testing with select partners. Enter your email below to reserve priority access when public testing begins.
                        </p>

                        {/* Waitlist Form */}
                        <WaitlistForm />
                    </div>
                </section>
            </div>
        </div>
    )
}
