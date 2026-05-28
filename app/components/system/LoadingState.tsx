// Shown during route transitions, data fetch, or ISR revalidation.

export default function LoadingState() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center text-gray-400">
      <span>Loading…</span>
    </div>
  )
}
