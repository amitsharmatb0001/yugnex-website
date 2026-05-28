// For sections with no data yet (research, press, etc.)

interface EmptyStateProps {
  title: string
  message: string
}

export default function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <div className="border border-white/10 rounded-lg p-8 text-center bg-white/5">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{message}</p>
    </div>
  )
}
