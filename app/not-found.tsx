export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center text-center">
      <div>
        <h1 className="text-3xl mb-2">404 — Page Not Found</h1>
        <p className="text-gray-300">
          The interface you are looking for does not exist or has moved.
        </p>
        <a href="/" className="mt-4 inline-block text-yellow-300 underline">
          Return to Home
        </a>
      </div>
    </div>
  )
}
