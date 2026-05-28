// Keyboard accessibility: lets users jump straight to main content.
// Invisible normally, visible on tab focus.

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only fixed top-2 left-2 z-50 bg-black text-white px-3 py-2 rounded"
    >
      Skip to main content
    </a>
  )
}
