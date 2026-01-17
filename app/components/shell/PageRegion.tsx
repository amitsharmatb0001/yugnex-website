// Semantic section wrapper for large page blocks (Vision, Research, etc.)

interface PageRegionProps {
  title: string
  children: React.ReactNode
}

export default function PageRegion({ title, children }: PageRegionProps) {
  return (
    <section aria-labelledby={title.replace(/\s+/g, '-').toLowerCase()}>
      <h2 id={title.replace(/\s+/g, '-').toLowerCase()} className="sr-only">
        {title}
      </h2>
      {children}
    </section>
  )
}
