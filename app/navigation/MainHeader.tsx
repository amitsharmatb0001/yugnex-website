'use client'
import { useEffect } from 'react'
import Link from 'next/link'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function MainHeader({ locale = 'en' }: { locale?: string }) {
  useEffect(() => {
    const header = document.getElementById('headerMorph')
    if (!header || prefersReducedMotion()) return

    const sanskrit = header.getAttribute('data-sanskrit') || ''
    const english = header.getAttribute('data-english') || ''
    let i = 0
    header.textContent = ''

    const start = () => {
      const interval = setInterval(() => {
        if (i < sanskrit.length) {
          header.textContent += sanskrit[i]
          i++
        } else {
          clearInterval(interval)
          setTimeout(() => {
            header.textContent = english
            header.classList.add('animate-focus')
          }, 600)
        }
      }, 120)
    }

    setTimeout(start, 800)
  }, [])

  return (
    <header
      role="navigation"
      aria-label="Primary"
      className="fixed top-0 left-0 right-0 z-50 h-14 backdrop-blur-xl bg-gradient-to-b from-black/80 to-black/40 border-b border-yellow-500/20 flex items-center justify-between px-8"
    >
      <div className="flex items-center gap-3">
        <Link href={`/${locale}`} className="cursor-pointer">
          <span
            id="headerMorph"
            aria-live="polite"
            aria-atomic="true"
            className="text-base tracking-widest text-yellow-300 hover:text-yellow-400 transition-colors"
            data-sanskrit="युगनेक्स"
            data-english="YugNex"
          >
            YugNex
          </span>
        </Link>
      </div>
      <div className="text-right">
        <span className="text-[11px] tracking-wide text-gray-300">
          Foundational AI Systems Lab · From India to the World
        </span>
      </div>
    </header>
  )
}
