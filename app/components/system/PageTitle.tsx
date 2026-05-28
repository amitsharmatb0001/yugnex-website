// Semantic + SEO-safe page title wrapper.

interface PageTitleProps {
  children: React.ReactNode
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="text-3xl font-bold tracking-wide mb-6">
      {children}
    </h1>
  )
}
