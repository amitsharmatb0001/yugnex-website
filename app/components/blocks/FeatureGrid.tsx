// Grid for product / platform features.
// Clean, responsive, no JS, no motion.

interface Feature {
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <div key={i} className="border border-white/10 rounded-lg p-5 bg-white/5">
          <h3 className="font-semibold mb-2">{f.title}</h3>
          <p className="text-gray-400 text-sm">{f.description}</p>
        </div>
      ))}
    </div>
  )
}
