'use client'
import React, { useState, useRef, useEffect } from 'react'

interface CodeSliderProps {
  beforeCode: string
  afterCode: string
  beforeTitle?: string
  afterTitle?: string
  beforeHighlight?: string
  afterHighlight?: string
}

export default function CodeSlider({
  beforeCode,
  afterCode,
  beforeTitle = 'Tactical Autocomplete (Current LLMs)',
  afterTitle = 'YugNex System Intelligence',
  beforeHighlight = 'Duplicate database calls, N+1 query problem, SQL injection vulnerability',
  afterHighlight = 'Batched queries (DataLoader), parameterized sanitization, clean architecture'
}: CodeSliderProps) {
  const [position, setPosition] = useState(50) // Percentage from left (0 to 100)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(percent)
  }

  const handleMouseDown = () => {
    isDragging.current = true
  }

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      handleMove(e.clientX)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX)
      }
    }

    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchend', handleMouseUp)
    window.addEventListener('touchmove', handleTouchMove)

    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchend', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return (
    <div className="flex flex-col h-full">
      {/* Header Info */}
      <div className="flex justify-between items-center text-[10px] px-3 py-1.5 border-b border-white/5 bg-black/40">
        <span className="text-red-400 font-medium">← Drag to Compare</span>
        <span className="text-green-400 font-medium">YugNex Reasoning →</span>
      </div>

      {/* Main Slider Container */}
      <div
        ref={containerRef}
        className="slider-container flex-grow bg-[#09090b] relative font-mono text-xs select-none"
      >
        {/* Left Pane (Before - LLM Spaghetti) */}
        <div className="absolute inset-0 p-4 overflow-y-auto text-red-100 bg-[#0e0202]/30 select-text">
          <div className="text-[10px] text-red-400 font-bold uppercase mb-2 tracking-wider">
            {beforeTitle}
          </div>
          <div className="text-[10px] text-gray-500 mb-3 italic">
            // {beforeHighlight}
          </div>
          <pre className="whitespace-pre-wrap leading-relaxed opacity-60">
            <code>{beforeCode}</code>
          </pre>
        </div>

        {/* Right Pane (After - YugNex Clean Code) */}
        <div
          className="absolute inset-y-0 right-0 p-4 overflow-y-auto text-green-100 bg-[#020b05]/30 select-text border-l border-green-500/25"
          style={{
            left: `${position}%`,
            width: `${100 - position}%`,
          }}
        >
          {/* Prevent clipping/wrapping issues by keeping width stable inside absolute wrapper */}
          <div style={{ width: containerRef.current?.getBoundingClientRect().width || 400 }}>
            <div className="text-[10px] text-green-400 font-bold uppercase mb-2 tracking-wider">
              {afterTitle}
            </div>
            <div className="text-[10px] text-gray-400 mb-3 italic">
              // {afterHighlight}
            </div>
            <pre className="whitespace-pre-wrap leading-relaxed">
              <code>{afterCode}</code>
            </pre>
          </div>
        </div>

        {/* Divider line */}
        <div
          className="slider-divider"
          style={{ left: `${position}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        />

        {/* Floating circular handle */}
        <div
          className="slider-handle"
          style={{ left: `${position}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 8 4 4-4 4" />
            <path d="m6 8-4 4 4 4" />
            <path d="M2 12h20" />
          </svg>
        </div>
      </div>
    </div>
  )
}
