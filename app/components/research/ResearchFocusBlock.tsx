// For highlighting a core research direction (memory, reasoning, safety, etc.)

interface ResearchFocusBlockProps {
  title: string
  description: string
}

export default function ResearchFocusBlock({ title, description }: ResearchFocusBlockProps) {
  return (
    <div className="border border-white/10 rounded-lg p-6 bg-white/5">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}
