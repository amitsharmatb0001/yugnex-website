// Body text wrapper with consistent width and spacing.

interface TextBlockProps {
    title?: string
    highlightedText?: string
    paragraphs: string[]
    alignment?: 'left' | 'center'
    size?: 'medium' | 'large'
    className?: string
}

export default function TextBlock({
    title,
    highlightedText,
    paragraphs,
    alignment = 'left',
    size = 'medium',
    className = ''
}: TextBlockProps) {
    return (
        <div className={`max-w-3xl text-gray-300 leading-relaxed ${className}`}>
            {title && (
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                    {title}
                </h1>
            )}

            {highlightedText && (
                <p className={`mb-8 font-medium text-yellow-500/90 ${size === 'large' ? 'text-xl md:text-2xl' : 'text-lg'}`}>
                    {highlightedText}
                </p>
            )}

            <div className="space-y-6 text-gray-400">
                {paragraphs.map((para, index) => (
                    <p key={index} className={size === 'large' ? 'text-lg' : 'text-base'}>
                        {para}
                    </p>
                ))}
            </div>
        </div>
    )
}
