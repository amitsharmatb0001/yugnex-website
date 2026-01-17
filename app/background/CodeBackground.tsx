'use client'
import { useEffect, useRef } from 'react'

interface CodeSnippet {
  text: string
  type: 'python' | 'javascript' | 'java' | 'success' | 'error'
}

const CODE_SNIPPETS: CodeSnippet[] = [
  { text: 'import tensorflow as tf', type: 'python' },
  { text: 'model.compile(optimizer="adam")', type: 'python' },
  { text: 'const transform = async () => {}', type: 'javascript' },
  { text: 'export default function App()', type: 'javascript' },
  { text: 'public class Evolution {', type: 'java' },
  { text: '200 OK', type: 'success' },
  { text: '404 Not Found', type: 'error' },
  { text: '500 Internal Error', type: 'error' },
]

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getScale() {
  const w = window.innerWidth
  if (w >= 1024) return 1
  if (w >= 768) return 0.6
  return 0.3
}

export default function CodeBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return

    const scale = getScale()
    const memory = (navigator as any).deviceMemory || 4
    const memoryFactor = memory <= 2 ? 0.5 : memory <= 4 ? 0.75 : 1
    const count = Math.max(5, Math.floor(40 * scale * memoryFactor))

    for (let i = 0; i < count; i++) {
      const s = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)]
      const el = document.createElement('div')
      el.className = `code-snippet code-${s.type}`
      el.textContent = s.text
      el.style.left = `${Math.random() * 95}%`
      el.style.bottom = `${Math.random() * 100}%`
      el.style.animationDuration = `${30 + Math.random() * 15}s`
      el.style.animationDelay = `${Math.random() * 10}s`
      ref.current.appendChild(el)
    }

    return () => {
      if (ref.current) {
        ref.current.innerHTML = ''
      }
    }
  }, [])

  return <div ref={ref} className="code-background fixed inset-0 z-0 pointer-events-none" />
}
