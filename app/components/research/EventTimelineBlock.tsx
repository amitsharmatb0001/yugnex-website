// Timeline for conferences, summits, demos, launches.

interface EventItem {
  date: string
  title: string
  location?: string
}

interface EventTimelineBlockProps {
  events: EventItem[]
}

export default function EventTimelineBlock({ events }: EventTimelineBlockProps) {
  return (
    <ul className="border-l border-white/10 pl-6 space-y-4">
      {events.map((e, i) => (
        <li key={i}>
          <div className="text-xs text-gray-400">{e.date}</div>
          <div className="font-medium">{e.title}</div>
          {e.location && <div className="text-sm text-gray-500">{e.location}</div>}
        </li>
      ))}
    </ul>
  )
}
