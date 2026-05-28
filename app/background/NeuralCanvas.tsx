'use client'
import { useEffect } from 'react'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getScale() {
  const w = window.innerWidth
  if (w >= 1024) return 1
  if (w >= 768) return 0.6
  return 0.3
}

export default function NeuralCanvas() {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const canvas = document.getElementById('neuralCanvas') as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.max(1, window.devicePixelRatio || 1)
    const resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    window.addEventListener('resize', resize)

    const scale = getScale()
    const DOTS = Math.max(40, Math.floor(100 * scale))
    const LINK_DIST = Math.floor(90 * scale)

    const dots = Array.from({ length: DOTS }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08,
    }))

    let raf = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0 || d.x > window.innerWidth) d.vx *= -1
        if (d.y < 0 || d.y > window.innerHeight) d.vy *= -1
        ctx.beginPath()
        ctx.arc(d.x, d.y, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = '#93c5fd'
        ctx.globalAlpha = 0.4
        ctx.fill()
      }

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(147,197,253,${1 - dist / LINK_DIST})`
            ctx.lineWidth = 0.3
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      id="neuralCanvas"
      className="fixed inset-0 z-0 pointer-events-none opacity-30"
      aria-hidden
    />
  )
}
