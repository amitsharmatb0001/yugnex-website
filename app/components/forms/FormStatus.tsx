// Displays success or error messages after submission.

interface FormStatusProps {
  type: 'success' | 'error'
  message: string
}

export default function FormStatus({ type, message }: FormStatusProps) {
  const color =
    type === 'success'
      ? 'border-green-500/40 text-green-300 bg-green-500/10'
      : 'border-red-500/40 text-red-300 bg-red-500/10'

  return (
    <div className={`rounded-md border px-4 py-3 text-sm ${color}`}>
      {message}
    </div>
  )
}
