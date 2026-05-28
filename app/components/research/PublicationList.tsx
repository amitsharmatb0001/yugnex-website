// Displays a list of research publications or technical notes.
// Pure presentational. No fetching. No routing.

interface Publication {
  title: string
  authors: string
  year: string
  link?: string
}

interface PublicationListProps {
  items: Publication[]
}

export default function PublicationList({ items }: PublicationListProps) {
  return (
    <ul className="space-y-4">
      {items.map((pub, i) => (
        <li key={i} className="border border-white/10 rounded p-4 bg-black/40">
          <h3 className="font-semibold">{pub.title}</h3>
          <p className="text-sm text-gray-400">
            {pub.authors} · {pub.year}
          </p>
          {pub.link && (
            <a
              href={pub.link}
              className="text-blue-400 text-sm underline mt-1 inline-block"
            >
              Read paper
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}
