// Groups a label + field + help/error text with consistent spacing.

interface FieldGroupProps {
  label: string
  htmlFor: string
  children: React.ReactNode
  hint?: string
  error?: string
}

export default function FieldGroup({ label, htmlFor, children, hint, error }: FieldGroupProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-200">
        {label}
      </label>

      {children}

      {hint && !error && (
        <p className="text-xs text-gray-400">{hint}</p>
      )}

      {error && (
        <p className="text-xs text-red-400">{error}</p>
      )}
    </div>
  )
}
