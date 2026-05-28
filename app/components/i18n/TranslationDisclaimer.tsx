'use client'

/**
 * Translation Disclaimer
 * Displays a notice that content is machine-translated and users should refer to English for accuracy
 */

export default function TranslationDisclaimer({ locale }: { locale: string }) {
    // Only show for non-English locales
    if (locale === 'en') return null

    const disclaimers: Record<string, string> = {
        'hi': '⚠️ यह सामग्री स्वचालित रूप से अनुवादित है। सटीकता के लिए कृपया अंग्रेजी देखें।',
        'hi-Latn': '⚠️ Yeh content automatically translate kiya gaya hai. Accuracy ke liye English dekhen.',
        'ta': '⚠️ இந்த உள்ளடக்கம் தானாக மொழிபெயர்க்கப்பட்டது. துல்லியத்திற்கு தயவுசெய்து ஆங்கிலம் பார்க்கவும்.',
        'te': '⚠️ ఈ కంటెంట్ స్వయంచాలకంగా అనువదించబడింది. ఖచ్చితత్వం కోసం దయచేసి ఆంగ్లం చూడండి.',
        'bn': '⚠️ এই বিষয়বস্তু স্বয়ংক্রিয়ভাবে অনুবাদ করা হয়েছে। নির্ভুলতার জন্য অনুগ্রহ করে ইংরেজি দেখুন।',
        'mr': '⚠️ ही सामग्री स्वयंचलितपणे अनुवादित आहे. अचूकतेसाठी कृपया इंग्रजी पहा।',
        'gu': '⚠️ આ સામગ્રી આપોઆપ અનુવાદિત છે. ચોકસાઈ માટે કૃપા કરી અંગ્રેજી જુઓ।',
        'kn': '⚠️ ಈ ವಿಷಯವನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಅನುವಾದಿಸಲಾಗಿದೆ. ನಿಖರತೆಗಾಗಿ ದಯವಿಟ್ಟು ಇಂಗ್ಲಿಷ್ ನೋಡಿ.',
        'ml': '⚠️ ഈ ഉള്ളടക്കം സ്വയമേവ വിവർത്തനം ചെയ്യപ്പെട്ടിരിക്കുന്നു. കൃത്യതയ്ക്കായി ദയവായി ഇംഗ്ലീഷ് കാണുക.',
        'pa': '⚠️ ਇਹ ਸਮੱਗਰੀ ਸਵੈਚਲਿਤ ਰੂਪ ਵਿੱਚ ਅਨੁਵਾਦਿਤ ਕੀਤੀ ਗਈ ਹੈ. ਸਟੀਕਤਾ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਅੰਗਰੇਜ਼ੀ ਦੇਖੋ.',
        'en-IN': '⚠️ Some content may be auto-translated. Please refer to English for accuracy.',
        'fr': '⚠️ Ce contenu est traduit automatiquement. Veuillez consulter la version anglaise pour plus de précision.',
        'de': '⚠️ Dieser Inhalt wurde automatisch übersetzt. Bitte beziehen Sie sich auf Englisch für Genauigkeit.',
        'es': '⚠️ Este contenido se traduce automáticamente. Por favor, consulte el inglés para mayor precisión.',
        'pt': '⚠️ Este conteúdo é traduzido automaticamente. Por favor, consulte o inglês para precisão.',
        'ja': '⚠️ このコンテンツは自動翻訳されています。正確性については英語を参照してください。',
        'ko': '⚠️ 이 콘텐츠는 자동 번역되었습니다. 정확성을 위해 영어를 참조하십시오.',
        'zh': '⚠️ 此内容为自动翻译。准确性请参考英文。',
        'ar': '⚠️ تمت ترجمة هذا المحتوى تلقائيًا. يرجى الرجوع إلى اللغة الإنجليزية للحصول على الدقة.',
        'ru': '⚠️ Этот контент переведен автоматически. Пожалуйста, обратитесь к английскому языку для точности.',
    }

    const message = disclaimers[locale] || '⚠️ This content is auto-translated. Please refer to English for accuracy.'

    return (
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3 mb-6 text-sm text-yellow-200/90">
            {message}
        </div>
    )
}
