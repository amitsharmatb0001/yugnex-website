// Card for individual research topics or papers.

interface ResearchCardProps {
  title: string
  summary: string
}

export default function ResearchCard({ title, summary }: ResearchCardProps) {
  return (
    <article className="border border-white/10 rounded-lg p-6 bg-black/40">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-400 text-sm">{summary}</p>
    </article>
  )
}
