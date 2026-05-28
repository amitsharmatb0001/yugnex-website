// Card for a single press release or announcement.

interface PressReleaseCardProps {
  title: string
  date: string
  summary: string
  href?: string
}

export default function PressReleaseCard({
  title,
  date,
  summary,
  href,
}: PressReleaseCardProps) {
  return (
    <article className="border border-white/10 rounded-lg p-6 bg-black/40">
      <div className="text-xs text-gray-400">{date}</div>
      <h3 className="mt-1 font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-400">{summary}</p>
      {href && (
        <a href={href} className="text-blue-400 text-sm underline mt-2 inline-block">
          Read more
        </a>
      )}
    </article>
  )
}
