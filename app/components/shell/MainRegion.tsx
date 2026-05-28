// Wraps the main content area with proper landmark semantics.

interface MainRegionProps {
  children: React.ReactNode
}

export default function MainRegion({ children }: MainRegionProps) {
  return (
    <main id="main-content" role="main" className="relative">
      {children}
    </main>
  )
}
