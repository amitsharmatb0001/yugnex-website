// Standard header for inner sections inside a page.

interface SectionHeaderProps {
  title: string
  description?: string
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <header className="mb-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {description && (
        <p className="mt-2 text-gray-400 max-w-2xl">
          {description}
        </p>
      )}
    </header>
  )
}
