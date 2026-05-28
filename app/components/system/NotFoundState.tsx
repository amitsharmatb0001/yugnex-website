// Used by not-found.tsx pages for consistent 404 presentation.

export default function NotFoundState() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
      <p className="text-gray-400 mb-4">
        The interface you are trying to access does not exist or has moved.
      </p>
      <a href="/" className="text-blue-400 underline">
        Return to Home
      </a>
    </div>
  )
}
