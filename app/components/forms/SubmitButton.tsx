// Primary submit button. Handles loading and disabled state.

interface SubmitButtonProps {
  children: React.ReactNode
  loading?: boolean
  disabled?: boolean
}

export default function SubmitButton({ children, loading, disabled }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      className="inline-flex items-center justify-center rounded-md border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-blue-300 hover:bg-blue-500/20 disabled:opacity-50"
    >
      {loading ? 'Submitting…' : children}
    </button>
  )
}
