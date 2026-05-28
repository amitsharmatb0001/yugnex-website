// Shared layout wrapper for Privacy Policy, Terms, Cookies, Compliance pages.

interface LegalPageLayoutProps {
  title: string
  children: React.ReactNode
}

export default function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <section className="container section max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="text-gray-300 leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  )
}
