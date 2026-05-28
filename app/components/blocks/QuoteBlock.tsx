// For founder statements, research principles, or vision quotes.

interface QuoteBlockProps {
  quote: string
  author?: string
}

export default function QuoteBlock({ quote, author }: QuoteBlockProps) {
  return (
    <blockquote className="border-l-4 border-yellow-500/40 pl-4 italic text-gray-300">
      “{quote}”
      {author && <div className="mt-2 text-sm text-gray-400">— {author}</div>}
    </blockquote>
  )
}
