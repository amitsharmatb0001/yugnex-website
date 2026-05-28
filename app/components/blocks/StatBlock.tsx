// Simple stat highlight (for traction, research scale, infra, etc.)

interface StatBlockProps {
  label: string
  value: string
}

export default function StatBlock({ label, value }: StatBlockProps) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}
