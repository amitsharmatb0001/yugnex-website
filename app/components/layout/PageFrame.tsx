// app/components/layout/PageFrame.tsx
// Reusable inner-page frame. Keeps margins, width, rhythm consistent.

import type { ReactNode } from 'react'

interface PageFrameProps {
  title: string
  children: ReactNode
}

export default function PageFrame({ title, children }: PageFrameProps) {
  return (
    <section className="container section">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="prose prose-invert max-w-none">{children}</div>
    </section>
  )
}
