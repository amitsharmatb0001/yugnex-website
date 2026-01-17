'use client'
import { useEffect, useRef } from 'react'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getScale() {
  const w = window.innerWidth
  if (w >= 1024) return 1
  if (w >= 768) return 0.6
  return 0.3
}

export default function ParticleBackground({ count = 40 }: { count?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return

    const scale = getScale()
    const memory = (navigator as any).deviceMemory || 4
    const memoryFactor = memory <= 2 ? 0.5 : memory <= 4 ? 0.75 : 1
    const finalCount = Math.max(6, Math.floor(count * scale * memoryFactor))

    for (let i = 0; i < finalCount; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      p.style.left = `${Math.random() * 100}%`
      p.style.background = '#fbbf24' // Gold
      p.style.boxShadow = '0 0 8px rgba(251, 191, 36, 0.6)' // Gold Glow
      p.style.animationDuration = `${15 + Math.random() * 10}s`
      p.style.animationDelay = `${Math.random() * 20}s`
      ref.current.appendChild(p)
    }

    return () => {
      if (ref.current) {
        ref.current.innerHTML = ''
      }
    }
  }, [count])

  return <div ref={ref} className="particle-container fixed inset-0 z-0 pointer-events-none" />
}
