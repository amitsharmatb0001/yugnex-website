'use client'

export default function Error() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center text-center">
      <div>
        <h1 className="text-3xl mb-2">500 — System Error</h1>
        <p className="text-gray-300">A temporary fault occurred. Our systems are recovering.</p>
        <a href="/" className="mt-4 inline-block text-yellow-300 underline">Retry</a>
      </div>
    </div>
  )
}
