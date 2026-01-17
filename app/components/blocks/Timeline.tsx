// Vertical timeline for roadmap, history, or evolution.

interface TimelineItem {
  year: string
  text: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <ul className="space-y-6 border-l border-white/10 pl-6">
      {items.map((item, i) => (
        <li key={i}>
          <div className="text-sm text-gray-400">{item.year}</div>
          <div className="text-gray-200">{item.text}</div>
        </li>
      ))}
    </ul>
  )
}
