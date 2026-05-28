'use client'
import React, { useState, useEffect, useRef } from 'react'
import styles from './DependencyMap.module.css'

interface MapNode {
  id: string
  label: string
  type: 'controller' | 'service' | 'db' | 'cache' | 'auth'
  x: number
  y: number
  state: 'idle' | 'scanning' | 'modifying' | 'testing' | 'success'
}

interface MapLink {
  source: string
  target: string
}

interface DependencyMapProps {
  activePhase: 'idle' | 'scanning' | 'modifying' | 'testing' | 'success'
  triggerNodeId?: string
}

const INITIAL_NODES: MapNode[] = [
  { id: 'auth', label: 'authMiddleware.ts', type: 'auth', x: 70, y: 110, state: 'idle' },
  { id: 'controller', label: 'userController.ts', type: 'controller', x: 200, y: 70, state: 'idle' },
  { id: 'service', label: 'userService.ts', type: 'service', x: 190, y: 200, state: 'idle' },
  { id: 'db', label: 'userModel.ts', type: 'db', x: 80, y: 280, state: 'idle' },
  { id: 'cache', label: 'redisCache.ts', type: 'cache', x: 280, y: 290, state: 'idle' },
  { id: 'db_conn', label: 'db.ts', type: 'db', x: 70, y: 390, state: 'idle' },
  { id: 'email', label: 'emailService.ts', type: 'service', x: 290, y: 160, state: 'idle' },
]

const LINKS: MapLink[] = [
  { source: 'auth', target: 'controller' },
  { source: 'controller', target: 'service' },
  { source: 'service', target: 'db' },
  { source: 'service', target: 'cache' },
  { source: 'service', target: 'email' },
  { source: 'db', target: 'db_conn' },
]

export default function DependencyMap({ activePhase, triggerNodeId }: DependencyMapProps) {
  const [nodes, setNodes] = useState<MapNode[]>(INITIAL_NODES)
  const [draggedNodeId, setDraggedNodeId] = useState<string | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  // Sync node states with simulator phases
  useEffect(() => {
    setNodes(prev => prev.map(node => {
      if (activePhase === 'idle') {
        return { ...node, state: 'idle' }
      }
      if (activePhase === 'scanning') {
        if (node.id === 'auth' || node.id === 'controller') {
          return { ...node, state: 'scanning' }
        }
        return { ...node, state: 'idle' }
      }
      if (activePhase === 'modifying') {
        if (node.id === 'controller' || node.id === 'service' || node.id === 'db') {
          return { ...node, state: 'modifying' }
        }
        return { ...node, state: 'idle' }
      }
      if (activePhase === 'testing') {
        return { ...node, state: 'testing' }
      }
      if (activePhase === 'success') {
        return { ...node, state: 'success' }
      }
      return node
    }))
  }, [activePhase])

  // Drag handlers
  const handleMouseDown = (nodeId: string) => {
    setDraggedNodeId(nodeId)
  }

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!draggedNodeId || !svgRef.current) return
    const rect = svgRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setNodes(prev => prev.map(node => {
      if (node.id === draggedNodeId) {
        return { ...node, x: Math.max(20, Math.min(rect.width - 20, x)), y: Math.max(20, Math.min(rect.height - 20, y)) }
      }
      return node
    }))
  }

  const handleMouseUp = () => {
    setDraggedNodeId(null)
  }

  // Helper colors for state representations
  const getNodeColor = (state: string, type: string) => {
    if (state === 'scanning') return '#eab308'
    if (state === 'modifying') return '#ef4444'
    if (state === 'testing') return '#3b82f6'
    if (state === 'success') return '#22c55e'
    
    if (type === 'auth') return '#a855f7'
    if (type === 'controller') return '#3b82f6'
    if (type === 'service') return '#ec4899'
    if (type === 'db') return '#f97316'
    return '#6b7280'
  }

  const getPhaseDescription = () => {
    switch (activePhase) {
      case 'scanning': return 'Scanning architecture dependency routes...'
      case 'modifying': return 'Applying structural edits to dependencies...'
      case 'testing': return 'Running integration tests across nodes...'
      case 'success': return 'Compilation verified. System clean.'
      default: return 'Engine Idle. Drag nodes to explore connections.'
    }
  }

  const getStatusLightClass = () => {
    switch (activePhase) {
      case 'scanning': return styles.mapStatusLightScanning
      case 'modifying': return styles.mapStatusLightModifying
      case 'testing': return styles.mapStatusLightTesting
      case 'success': return styles.mapStatusLightSuccess
      default: return styles.mapStatusLightIdle
    }
  }

  return (
    <div className={styles.mapContainer}>
      {/* Node status display */}
      <div className={styles.mapHeader}>
        <span className={`${styles.mapStatusLight} ${getStatusLightClass()}`} />
        <span>{getPhaseDescription()}</span>
      </div>

      {/* Physics Node Graph Container */}
      <svg
        ref={svgRef}
        className={styles.svgMap}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Draw Link Lines */}
        {LINKS.map((link, idx) => {
          const sNode = nodes.find(n => n.id === link.source)
          const tNode = nodes.find(n => n.id === link.target)
          if (!sNode || !tNode) return null

          const isLinkActive = sNode.state !== 'idle' && tNode.state !== 'idle'
          
          return (
            <line
              key={idx}
              x1={sNode.x}
              y1={sNode.y}
              x2={tNode.x}
              y2={tNode.y}
              stroke={isLinkActive ? getNodeColor(sNode.state, sNode.type) : 'rgba(255, 255, 255, 0.1)'}
              strokeWidth={isLinkActive ? 2 : 1}
              className={`${styles.linkLine} ${sNode.state === 'testing' ? styles.linkLineTesting : ''}`}
            />
          )
        })}

        {/* Draw Nodes */}
        {nodes.map((node) => {
          const color = getNodeColor(node.state, node.type)
          const isScanning = node.state === 'scanning'
          const isModifying = node.state === 'modifying'
          const isTesting = node.state === 'testing'
          const isSuccess = node.state === 'success'

          return (
            <g
              key={node.id}
              transform={`translate(${node.x}, ${node.y})`}
              onMouseDown={() => handleMouseDown(node.id)}
              className={`${styles.nodeGroup} ${draggedNodeId === node.id ? styles.nodeGroupActive : ''}`}
            >
              {/* Outer pulsing rings */}
              {(isScanning || isModifying || isTesting) && (
                <circle
                  r="18"
                  fill="none"
                  stroke={color}
                  strokeWidth="2"
                  className={styles.nodeRing}
                />
              )}

              {/* Glowing shadow filters */}
              <circle
                r="10"
                fill={color}
                opacity={isSuccess ? 0.35 : 0.15}
                className={isSuccess ? 'animate-pulse' : ''}
                style={{
                  filter: `drop-shadow(0 0 10px ${color})`,
                  transition: 'fill 0.4s ease'
                }}
              />

              {/* Core Node Circle */}
              <circle
                r="7"
                fill={color}
                stroke="#fff"
                strokeWidth="1.5"
                style={{ transition: 'fill 0.4s ease' }}
              />

              {/* Node Label Text */}
              <text
                y="-15"
                textAnchor="middle"
                fill={node.state !== 'idle' ? '#fff' : '#9ca3af'}
                fontSize="9"
                fontWeight="600"
                className="font-mono pointer-events-none"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)', transition: 'fill 0.4s ease' }}
              >
                {node.label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
