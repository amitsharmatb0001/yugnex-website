import { Locale } from './i18n'
import type { HomeContent, VisionContent, MissionContent, ResearchContent, TechnologyContent, PlatformContent, ContactContent, AboutContent } from './contentTypes'

async function load<T>(locale: Locale, path: string, fallback: string, exportName: string): Promise<T> {
    try {
        const mod = await import(`@/content/${locale}/${path}`)
        return mod[exportName] || mod.default || mod
    } catch {
        const mod = await import(`@/content/en/${fallback}`)
        return mod[exportName] || mod.default || mod
    }
}

export const loadHomeContent = (l: Locale): Promise<HomeContent> => load<HomeContent>(l, 'home', 'home', 'homeContent')
export const loadVisionContent = (l: Locale): Promise<VisionContent> => load<VisionContent>(l, 'vision', 'vision', 'visionContent')
export const loadMissionContent = (l: Locale): Promise<MissionContent> => {
    // Mission is a hybrid page, but currently we load 'mission-content' file which corresponds to 'mission' path
    return load<MissionContent>(l, 'mission', 'mission', 'missionContent')
}
export const loadResearchContent = (l: Locale): Promise<ResearchContent> => load<ResearchContent>(l, 'research', 'research', 'researchContent')
export const loadTechnologyContent = (l: Locale): Promise<TechnologyContent> => load<TechnologyContent>(l, 'technology', 'technology', 'technologyContent')
export const loadPlatformContent = (l: Locale): Promise<PlatformContent> => load<PlatformContent>(l, 'platform', 'platform', 'platformContent')
export const loadContactContent = (l: Locale): Promise<ContactContent> => load<ContactContent>(l, 'contact', 'contact', 'contactContent')
export const loadAboutContent = (l: Locale): Promise<AboutContent> => load<AboutContent>(l, 'about', 'about', 'aboutContent')
export const loadFAQContent = (l: Locale): Promise<Array<{ question: string, answer: string }>> => load<Array<{ question: string, answer: string }>>(l, 'faq', 'faq', 'faqContent')

