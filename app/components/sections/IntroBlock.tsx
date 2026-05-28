// Reusable intro block for top of pages (Vision, Mission, Research, etc.)
// Pure layout + semantics. No animation, no logic.

interface IntroBlockProps {
  title: string
  subtitle?: string
  description?: string
}

export default function IntroBlock({ title, subtitle, description }: IntroBlockProps) {
  return (
    <section className="container section text-center">
      <h1 className="text-3xl font-bold tracking-wide">{title}</h1>

      {subtitle && (
        <p className="mt-3 text-lg text-gray-300">{subtitle}</p>
      )}

      {description && (
        <p className="mt-2 max-w-3xl mx-auto text-gray-400">
          {description}
        </p>
      )}
    </section>
  )
}
