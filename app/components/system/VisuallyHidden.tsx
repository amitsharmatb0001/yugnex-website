// Utility to hide content visually but keep it for screen readers.

interface VisuallyHiddenProps {
  children: React.ReactNode
}

export default function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <span className="sr-only">{children}</span>
}
