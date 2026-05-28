// app/[locale]/page.tsx
// Main locale-aware home page.
// Loads content via contentLoader and renders Hero + background layers.

import { Locale } from '@/app/lib/i18n'
import { loadHomeContent } from '@/app/lib/contentLoader'
import { getUILabels } from '@/app/lib/uiLabels'
import HeroSection from '@/app/components/hero/HeroSection'
import FAQSection from '@/app/components/sections/FAQSection'
import NeuralCanvas from '@/app/background/NeuralCanvas'
import CodeBackground from '@/app/background/CodeBackground'
import ParticleBackground from '@/app/background/ParticleBackground'

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
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background layers */}
            <NeuralCanvas />
            <CodeBackground />
            <ParticleBackground />

            {/* Foreground content */}
            <HeroSection
                title={content.heroTitle}
                tagline={content.tagline}
                subline={content.subline}
                banner={content.banner}
                credentials={content.credentials}
                slogan={ui.heroSlogan}
                introduction={ui.heroIntro}
            />
        </div>
    )
}
