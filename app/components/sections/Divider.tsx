// Simple visual + semantic section divider.
// Keeps rhythm between major blocks.

export default function Divider() {
  return (
    <div className="container my-12" aria-hidden="true">
      <div className="h-px bg-white/10 w-full" />
    </div>
  )
}
