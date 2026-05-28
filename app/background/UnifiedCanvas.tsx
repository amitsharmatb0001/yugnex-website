'use client'
import { useEffect, useRef } from 'react'
import { generateDynamicCodeSnippet } from './codeSnippets'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  initialX: number
  initialY: number
}

interface CodeText {
  x: number
  y: number
  text: string
  speed: number
  alpha: number
  color: string
  parentNodeIndex: number
  distanceLimit: number
}

export default function UnifiedCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const scrollRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set pixel ratio
    const dpr = Math.max(1, typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1)
    
    // Check user settings
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    let w = window.innerWidth
    let h = window.innerHeight

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    
    resize()
    window.addEventListener('resize', resize)

    // Capture mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }
    const handleMouseLeave = () => {
      mouseRef.current.x = -1000
      mouseRef.current.y = -1000
    }
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        scrollRef.current = docHeight > 0 ? window.scrollY / docHeight : 0
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll, { passive: true })

    const density = w < 768 ? 0.4 : w < 1024 ? 0.7 : 1.0
    const nodesCount = Math.floor((prefersReduced ? 10 : 110) * density)
    const codeColors = ['rgba(251,191,36,', 'rgba(34,211,238,', 'rgba(74,222,128,', 'rgba(248,113,113,'] // gold, bright cyan, bright green, bright red

    // Initialize Neural Nodes
    const nodes: Node[] = Array.from({ length: nodesCount }, () => {
      const rx = Math.random() * w
      const ry = Math.random() * h
      return {
        x: rx,
        y: ry,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 1.2 + 0.8,
        alpha: Math.random() * 0.25 + 0.35,
        initialX: rx,
        initialY: ry
      }
    })

    // Initialize Code Streams linked to parent nodes
    const codeStreams: CodeText[] = []
    const spawnCodeStream = (nodeIndex: number): CodeText => {
      const parent = nodes[nodeIndex]
      const colorBase = codeColors[Math.floor(Math.random() * codeColors.length)]
      return {
        x: parent.x + (Math.random() - 0.5) * 60,
        y: parent.y - 15,
        text: generateDynamicCodeSnippet(),
        speed: -(Math.random() * 0.35 + 0.2),
        alpha: Math.random() * 0.2 + 0.3,
        color: colorBase,
        parentNodeIndex: nodeIndex,
        distanceLimit: Math.random() * 150 + 100
      }
    }

    let rafId = 0
    const startTime = performance.now()
    let lastTime = performance.now()

    const animate = (time: number) => {
      const delta = Math.min(50, time - lastTime) / 16.666
      lastTime = time

      const elapsed = time - startTime
      const isBooting = elapsed < 2000
      const isInitializing = elapsed >= 2000 && elapsed < 3500
      const isFullyOperational = elapsed >= 3500

      ctx.clearRect(0, 0, w, h)

      // Interactive scroll multiplier
      const scrollFactor = scrollRef.current // 0 to 1
      const linkAlphaMultiplier = Math.max(0.1, 1 - scrollFactor * 0.7)
      const codeDensityMultiplier = Math.min(1.5, 0.4 + scrollFactor * 1.1)

      // 1. Draw Constellation Links (if not reduced motion)
      if (!prefersReduced) {
        const maxDistance = 120
        ctx.lineWidth = 0.5
        for (let i = 0; i < nodes.length; i++) {
          const n1 = nodes[i]
          for (let j = i + 1; j < nodes.length; j++) {
            const n2 = nodes[j]
            const dx = n1.x - n2.x
            const dy = n1.y - n2.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < maxDistance) {
              const alpha = (1 - dist / maxDistance) * 0.28 * linkAlphaMultiplier
              ctx.strokeStyle = `rgba(251, 191, 36, ${alpha})`
              ctx.beginPath()
              ctx.moveTo(n1.x, n1.y)
              ctx.lineTo(n2.x, n2.y)
              ctx.stroke()
            }
          }
        }
      }

      // 2. Draw Neural Nodes & Handle Physics
      for (const n of nodes) {
        if (!prefersReduced) {
          n.x += n.vx * delta
          n.y += n.vy * delta

          // Mouse Attraction / Repulsion
          const mdx = mouseRef.current.x - n.x
          const mdy = mouseRef.current.y - n.y
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
          if (mDist < 160) {
            const force = (160 - mDist) / 160 * 0.04
            n.x += mdx / mDist * force * delta
            n.y += mdy / mDist * force * delta
          }

          // Boundary bounce
          if (n.x < 0) { n.x = 0; n.vx *= -1 }
          else if (n.x > w) { n.x = w; n.vx *= -1 }
          if (n.y < 0) { n.y = 0; n.vy *= -1 }
          else if (n.y > h) { n.y = h; n.vy *= -1 }
        }

        // Mouse hover dynamic brightening
        const mdx = mouseRef.current.x - n.x
        const mdy = mouseRef.current.y - n.y
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
        const isHovered = mDist < 130
        const finalAlpha = isHovered 
          ? Math.min(0.85, n.alpha * 1.6) 
          : n.alpha * (isBooting ? 1.2 : 1.0)

        ctx.shadowBlur = isHovered ? 5 : 2
        ctx.shadowColor = 'rgba(251, 191, 36, 0.45)'
        ctx.fillStyle = `rgba(251, 191, 36, ${finalAlpha})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.radius * (isHovered ? 1.3 : 1.0), 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0 // Reset shadow
      }

      // 3. Draw Boot Messages during Initialization Phase
      if (isInitializing) {
        ctx.font = '12px "JetBrains Mono", monospace'
        ctx.fillStyle = 'rgba(251, 191, 36, 0.6)'
        ctx.textAlign = 'center'
        
        const bootLogs = [
          '[YUGNEX ENGINE: COGNITIVE SUBSTRATE BOOTING...]',
          '[LOAD AGENT REASONING CORE: ACTIVE]',
          '[NEURAL NODE LINK: ONLINE]'
        ]
        
        const currentLogIndex = Math.min(2, Math.floor((elapsed - 2000) / 500))
        for (let i = 0; i <= currentLogIndex; i++) {
          ctx.fillText(bootLogs[i], w / 2, h / 2 - 20 + i * 20)
        }
      }

      // 4. Code Streams & Connections (Active only post-boot)
      if (isFullyOperational && !prefersReduced) {
        // Dynamically spawn code streams based on node index
        if (codeStreams.length < Math.floor(nodesCount * 0.8 * codeDensityMultiplier)) {
          // Select a random parent node that doesn't have too many active streams
          const randNodeIdx = Math.floor(Math.random() * nodes.length)
          codeStreams.push(spawnCodeStream(randNodeIdx))
        }

        ctx.font = '9px "JetBrains Mono", Courier, monospace'
        ctx.textAlign = 'left'

        for (let i = codeStreams.length - 1; i >= 0; i--) {
          const c = codeStreams[i]
          const parent = nodes[c.parentNodeIndex]

          c.y += c.speed * delta
          
          // Calculate distance from parent node
          const dx = c.x - parent.x
          const dy = c.y - parent.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          // Calculate distance from mouse
          const mdx = mouseRef.current.x - c.x
          const mdy = mouseRef.current.y - c.y
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
          const isMouseNear = mDist < 140

          // Fade out based on distance and scroll
          const distRatio = Math.min(1, dist / c.distanceLimit)
          const baseAlpha = isMouseNear ? Math.min(0.75, c.alpha * 2.0) : c.alpha
          const currentAlpha = baseAlpha * (1 - distRatio) * (0.8 + scrollFactor * 0.2)

          if (dist >= c.distanceLimit || c.y < -30) {
            codeStreams.splice(i, 1)
            continue
          }

          // Draw Connecting line between parent node and code text
          if (distRatio < 0.8) {
            ctx.lineWidth = 0.4
            ctx.strokeStyle = `rgba(251, 191, 36, ${(isMouseNear ? 0.25 : 0.12) * (1 - distRatio / 0.8)})`
            ctx.beginPath()
            ctx.moveTo(parent.x, parent.y)
            ctx.lineTo(c.x, c.y + 6) // Center line to code block
            ctx.stroke()
          }

          // Draw floating code snippet text
          ctx.shadowBlur = isMouseNear ? 5 : 2
          ctx.shadowColor = `${c.color}0.45)`
          ctx.fillStyle = `${c.color}${currentAlpha})`
          ctx.fillText(c.text, c.x, c.y)
          ctx.shadowBlur = 0 // Reset shadow
        }
      }

      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden
    />
  )
}
