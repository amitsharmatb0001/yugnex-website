import type { Metadata } from 'next'
import { Locale } from '@/app/lib/i18n'
import { buildSeo } from '@/app/lib/seo'
import EngineSimulator from '@/app/components/sections/EngineSimulator'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params

    return buildSeo({
        locale,
        title: 'System Engine Simulator',
        description: 'Interactive demonstration of the YugNex autonomous software engineering reasoning engine in action.',
        path: '/simulator',
    })
}

export default async function SimulatorPage() {
    return (
        <div className="page-container text-white">
            <EngineSimulator />
        </div>
    )
}
