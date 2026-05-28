// Highlighted callout for important statements or principles.

interface CalloutProps {
  title?: string
  children: React.ReactNode
}

export default function Callout({ title, children }: CalloutProps) {
  return (
    <aside className="border border-white/10 rounded-lg p-6 bg-white/5 my-8">
      {title && (
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
      )}
      <div className="text-gray-300">
        {children}
      </div>
    </aside>
  )
}
