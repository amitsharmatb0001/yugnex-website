// Simple breadcrumb navigation for deep pages.

interface Crumb {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: Crumb[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-4">
      <ol className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <li key={i}>
            <a href={item.href} className="hover:underline">
              {item.label}
            </a>
            {i < items.length - 1 && <span className="mx-1">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
