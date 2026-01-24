// app/lib/navigationLabels.ts
import { Locale } from './i18n'

/**
 * Navigation label translations for all supported languages
 * Used for translating menu items like Vision, Mission, About, etc.
 */

export const NAV_LABELS: Record<Locale, {
    vision: string
    mission: string
    about: string
    research: string
    platform: string
    technology: string
    press: string
    contact: string
}> = {
    'en': {
        vision: 'Vision',
        mission: 'Mission',
        about: 'About',
        research: 'Research',
        platform: 'Platform',
        technology: 'Technology',
        press: 'Press',
        contact: 'Contact',
    },
    'en-IN': {
        vision: 'Vision',
        mission: 'Mission',
        about: 'About',
        research: 'Research',
        platform: 'Platform',
        technology: 'Technology',
        press: 'Press',
        contact: 'Contact',
    },
    'hi': {
        vision: 'विज़न',
        mission: 'मिशन',
        about: 'हमारे बारे में',
        research: 'अनुसंधान',
        platform: 'प्लेटफॉर्म',
        technology: 'प्रौद्योगिकी',
        press: 'प्रेस',
        contact: 'संपर्क करें',
    },
    'hi-Latn': {
        vision: 'Vision',
        mission: 'Mission',
        about: 'Hamare Baare Mein',
        research: 'Anusandhan',
        platform: 'Platform',
        technology: 'Technology',
        press: 'Press',
        contact: 'Sampark',
    },
    'ta': {
        vision: 'தொலைநோக்கு',
        mission: 'நோக்கம்',
        about: 'எங்களைப் பற்றி',
        research: 'ஆராய்ச்சி',
        platform: 'தளம்',
        technology: 'தொழில்நுட்பம்',
        press: 'ஊடகம்',
        contact: 'தொடர்பு',
    },
    'te': {
        vision: 'దృష్టి',
        mission: 'లక్ష్యం',
        about: 'మా గురించి',
        research: 'పరిశోధన',
        platform: 'వేదిక',
        technology: 'సాంకేతికత',
        press: 'పత్రికా',
        contact: 'సంప్రదించండి',
    },
    'bn': {
        vision: 'দৃষ্টিভঙ্গি',
        mission: 'মিশন',
        about: 'আমাদের সম্পর্কে',
        research: 'গবেষণা',
        platform: 'প্ল্যাটফর্ম',
        technology: 'প্রযুক্তি',
        press: 'প্রেস',
        contact: 'যোগাযোগ',
    },
    'mr': {
        vision: 'व्हिजन',
        mission: 'मिशन',
        about: 'आमच्याबद्दल',
        research: 'संशोधन',
        platform: 'प्लॅटफॉर्म',
        technology: 'तंत्रज्ञान',
        press: 'प्रेस',
        contact: 'संपर्क',
    },
    'gu': {
        vision: 'વિઝન',
        mission: 'મિશન',
        about: 'અમારા વિશે',
        research: 'સંશોધન',
        platform: 'પ્લેટફોર્મ',
        technology: 'ટેકનોલોજી',
        press: 'પ્રેસ',
        contact: 'સંપર્ક',
    },
    'kn': {
        vision: 'ದೃಷ್ಟಿ',
        mission: 'ಧ್ಯೇಯ',
        about: 'ನಮ್ಮ ಬಗ್ಗೆ',
        research: 'ಸಂಶೋಧನೆ',
        platform: 'ವೇದಿಕೆ',
        technology: 'ತಂತ್ರಜ್ಞಾನ',
        press: 'ಪತ್ರಿಕಾ',
        contact: 'ಸಂಪರ್ಕಿಸಿ',
    },
    'ml': {
        vision: 'ദർശനം',
        mission: 'ദൗത്യം',
        about: 'ഞങ്ങളെക്കുറിച്ച്',
        research: 'ഗവേഷണം',
        platform: 'പ്ലാറ്റ്ഫോം',
        technology: 'സാങ്കേതികവിദ്യ',
        press: 'പ്രസ്',
        contact: 'ബന്ധപ്പെടുക',
    },
    'pa': {
        vision: 'ਵਿਜ਼ਨ',
        mission: 'ਮਿਸ਼ਨ',
        about: 'ਸਾਡੇ ਬਾਰੇ',
        research: 'ਖੋਜ',
        platform: 'ਪਲੇਟਫਾਰਮ',
        technology: 'ਤਕਨਾਲੋਜੀ',
        press: 'ਪ੍ਰੈਸ',
        contact: 'ਸੰਪਰਕ',
    },
    'fr': {
        vision: 'Vision',
        mission: 'Mission',
        about: 'À propos',
        research: 'Recherche',
        platform: 'Plateforme',
        technology: 'Technologie',
        press: 'Presse',
        contact: 'Contact',
    },
    'de': {
        vision: 'Vision',
        mission: 'Mission',
        about: 'Über uns',
        research: 'Forschung',
        platform: 'Plattform',
        technology: 'Technologie',
        press: 'Presse',
        contact: 'Kontakt',
    },
    'ja': {
        vision: 'ビジョン',
        mission: 'ミッション',
        about: '会社概要',
        research: '研究',
        platform: 'プラットフォーム',
        technology: 'テクノロジー',
        press: 'プレス',
        contact: 'お問い合わせ',
    },
    'es': {
        vision: 'Visión',
        mission: 'Misión',
        about: 'Acerca de',
        research: 'Investigación',
        platform: 'Plataforma',
        technology: 'Tecnología',
        press: 'Prensa',
        contact: 'Contacto',
    },
    'pt': {
        vision: 'Visão',
        mission: 'Missão',
        about: 'Sobre',
        research: 'Pesquisa',
        platform: 'Plataforma',
        technology: 'Tecnologia',
        press: 'Imprensa',
        contact: 'Contato',
    },
    'zh': {
        vision: '愿景',
        mission: '使命',
        about: '关于我们',
        research: '研究',
        platform: '平台',
        technology: '技术',
        press: '新闻',
        contact: '联系',
    },
    'ar': {
        vision: 'الرؤية',
        mission: 'المهمة',
        about: 'من نحن',
        research: 'البحث',
        platform: 'المنصة',
        technology: 'التكنولوجيا',
        press: 'الصحافة',
        contact: 'اتصل بنا',
    },
    'ru': {
        vision: 'Видение',
        mission: 'Миссия',
        about: 'О нас',
        research: 'Исследования',
        platform: 'Платформа',
        technology: 'Технология',
        press: 'Пресса',
        contact: 'Контакт',
    },
    'ko': {
        vision: '비전',
        mission: '미션',
        about: '회사 소개',
        research: '연구',
        platform: '플랫폼',
        technology: '기술',
        press: '언론',
        contact: '연락처',
    },
}

/**
 * Get navigation labels for a specific locale
 */
export function getNavLabels(locale: Locale) {
    return NAV_LABELS[locale] || NAV_LABELS['en']
}
