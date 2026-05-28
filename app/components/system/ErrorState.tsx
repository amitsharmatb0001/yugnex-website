// Generic error surface for unexpected failures.

interface ErrorStateProps {
  title?: string
  message: string
}

export default function ErrorState({ title = 'Something went wrong', message }: ErrorStateProps) {
  return (
    <div className="border border-red-500/30 bg-red-500/5 text-red-300 p-6 rounded-lg max-w-xl mx-auto text-center">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm">{message}</p>
    </div>
  )
}
