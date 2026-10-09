'use client'
import React, { useState, useEffect } from 'react'
import styles from './VisionConsole.module.css'
import { Eye, Shield, Radio, Activity } from 'lucide-react'

interface VisionConsoleProps {
  paragraphs: string[]
  pillarMetas?: string[]
  telemetryTitle?: string
  telemetryStatus?: string
  telemetryMap?: Array<{
    stats: Array<{ label: string; value: string; pct: number }>
    logs: string[]
  }>
}

interface TelemetryData {
  stats: { label: string; value: string; pct: number }[]
  logs: string[]
}

const TELEMETRY_MAP: TelemetryData[] = [
  {
    stats: [
      { label: 'Cognitive Bandwidth Span', value: '1024x expand', pct: 95 },
      { label: 'Parser Memory Overhead', value: '-92% reduction', pct: 92 },
      { label: 'Context Coherence Rate', value: '99.4%', pct: 99 }
    ],
    logs: [
      'parser_core: initializing semantic dependency map',
      'cortex_substrate: tracking structural relationships',
      'thread_evaluator: parsing AST nodes in background...',
      'status: active reasoning bounds established.'
    ]
  },
  {
    stats: [
      { label: 'Human-AI Sync Latency', value: '< 2.4ms', pct: 98 },
      { label: 'Consensus Convergence Depth', value: 'Level 12 reached', pct: 88 },
      { label: 'Interface Feedback Index', value: '0.985 / 1.0', pct: 96 }
    ],
    logs: [
      'nex_bridge: connecting neural consensus channels',
      'coordinator: polling PO, Architect, and Developer agents',
      'consensus: resolving code recommendations...',
      'status: continuous autonomous collaboration online.'
    ]
  },
  {
    stats: [
      { label: 'Intent Preservation Success', value: '99.98%', pct: 99 },
      { label: 'Causal Link Connection Depth', value: '12,042 routes', pct: 91 },
      { label: 'State Snapshot Lifecycle', value: 'Continuous', pct: 100 }
    ],
    logs: [
      'context_cache: loading repository topology nodes',
      'causal_mapper: caching 4,920 link updates',
      'state_preserver: verifying code design invariant checks...',
      'status: persistent system intelligence operational.'
    ]
  },
  {
    stats: [
      { label: 'Co-Engineering Productivity', value: '+184.2% increase', pct: 94 },
      { label: 'Validation Confidence Metric', value: '100% verified', pct: 100 },
      { label: 'Architectural Debt Index', value: '0.04 (minimal)', pct: 96 }
    ],
    logs: [
      'symbiotic_cortex: spawning invariant verification testbeds',
      'diagnostic: checking 89 safety properties in staging',
      'compiler_verify: structural boundaries passed clean',
      'status: human creativity augmented with machine continuity.'
    ]
  }
]

export default function VisionConsole({
  paragraphs,
  pillarMetas = ['System Limits', 'The Next Epoch', 'Digital Intelligence', 'Human-AI Symbiosis'],
  telemetryTitle = "Substrate Metrics",
  telemetryStatus = "RUNNING",
  telemetryMap = TELEMETRY_MAP
}: VisionConsoleProps) {
  const [activePillar, setActivePillar] = useState(0)
  const [animatedPct, setAnimatedPct] = useState<number[]>([0, 0, 0])

  useEffect(() => {
    // Reset and animate progress bars when changing pillars
    setAnimatedPct([0, 0, 0])
    const data = telemetryMap[activePillar] || telemetryMap[0]
    const timer = setTimeout(() => {
      setAnimatedPct(data.stats.map(s => s.pct))
    }, 100)
    return () => clearTimeout(timer)
  }, [activePillar, telemetryMap])

  const getPillarMeta = (idx: number) => {
    return pillarMetas[idx] || `Pillar 0${idx + 1}`
  }

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Activity size={15} />
      case 1: return <Radio size={15} />
      case 2: return <Shield size={15} />
      default: return <Eye size={15} />
    }
  }

  const activeData = telemetryMap[activePillar] || telemetryMap[0]

  return (
    <div className={styles.dashboard}>
      <div className={styles.layout}>
        {/* Left: Sidebar navigation */}
        <div className={styles.sidebar}>
          {paragraphs.map((p, idx) => {
            const isActive = activePillar === idx
            return (
              <button
                key={idx}
                onClick={() => setActivePillar(idx)}
                className={`${styles.pillarButton} ${isActive ? styles.pillarButtonActive : ''}`}
              >
                <span className={styles.pillarMeta}>
                  {getPillarMeta(idx)}
                </span>
                <span className={styles.pillarTextPreview}>
                  {p}
                </span>
              </button>
            )
          })}
        </div>

        {/* Right: Detailed content & live telemetry */}
        <div key={activePillar} className={styles.mainPanel}>
          <div className={styles.contentCard}>
            <span className={styles.quoteDecoration}>“</span>
            <p className={styles.fullText}>{paragraphs[activePillar]}</p>
          </div>

          {/* Telemetry section */}
          <div className={styles.telemetryGrid}>
            {/* Live Stats */}
            <div className={styles.telemetryStats}>
              <div className="flex items-center gap-1.5 text-xs text-yellow-500 font-bold uppercase tracking-wider mb-2">
                {getIcon(activePillar)}
                <span>{telemetryTitle}</span>
              </div>
              
              {activeData.stats.map((stat, sIdx) => (
                <div key={sIdx} className={styles.statItem}>
                  <div className={styles.statLabel}>
                    <span>{stat.label}</span>
                    <span className="text-yellow-400 font-semibold">{stat.value}</span>
                  </div>
                  <div className={styles.statBarContainer}>
                    <div
                      className={styles.statBarFill}
                      style={{ width: `${animatedPct[sIdx] || 0}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Diagnostic Terminal */}
            <div className={styles.telemetryConsole}>
              <div className={styles.consoleHeader}>
                <span>THREAD: {getPillarMeta(activePillar).toUpperCase().replace(' ', '_')}</span>
                <span className={styles.consoleStatus}>{telemetryStatus}</span>
              </div>
              <div className={styles.consoleBody}>
                {activeData.logs.map((log, lIdx) => (
                  <div key={lIdx} className={styles.logEntry}>
                    <span className={styles.logPrompt}>&gt;</span>
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
