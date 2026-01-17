// Wraps long-form content to keep consistent typography and spacing.
// Used for Vision, Mission, Research Articles, Policy Pages.

interface StructuredContentWrapperProps {
  children: React.ReactNode
}

export default function StructuredContentWrapper({ children }: StructuredContentWrapperProps) {
  return (
    <div className="max-w-4xl mx-auto leading-relaxed text-gray-300 space-y-6">
      {children}
    </div>
  )
}
