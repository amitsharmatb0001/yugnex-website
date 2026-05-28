'use client'
import React, { useState } from 'react'
import styles from './TechnologyInteractive.module.css'
import CodeLens from './CodeLens'
import { Terminal as TermIcon, ArrowRight, Layers, Cpu, GitMerge, Radio, TerminalSquare } from 'lucide-react'

interface LimitationItem {
  title: string
  description: string
}

interface ApproachItem {
  title: string
  body: string
}

interface TechnologyInteractiveProps {
  limitations: LimitationItem[]
  approachSections: ApproachItem[]
}

const LIMITATION_LOGS = [
  {
    cmd: 'yugnex run trace --target=./src',
    logs: [
      '[INFO] Executing repository architecture trace...',
      '[WARN] Context limit reached at file index 512.',
      '[FAIL] context_overflow: stack size 1,048,576 bytes exceeded standard context window.',
      '[CRITICAL] Parser aborted. Traditional LLM fails to resolve system-wide relationships.',
      '[YUGNEX SOLUTION] Re-routing to Causal Context Substrate...',
      '[SUCCESS] Causal Graph trace complete. 48,091 files indexed with persistent cache nodes.'
    ]
  },
  {
    cmd: 'yugnex run refactor --task="Update API params in userController.ts"',
    logs: [
      '[INFO] Initializing parameter refactor job...',
      '[INFO] Analyzer running symbolic reasoning check across dependency nodes...',
      '[WARN] Traditional assistant generated code: userService.ts parameter list mismatch (missing token).',
      '[CRITICAL] compilation_error: code syntax is valid but will break invocation in production.',
      '[YUGNEX SOLUTION] Symbolic reasoning block intercepted invalid parameter list. Reverting changes...',
      '[SUCCESS] Applied parameterized bindings and synchronized callers in 14 dependant modules.'
    ]
  },
  {
    cmd: 'yugnex run check-invariants --ci',
    logs: [
      '[INFO] Initiating CI pipeline verification...',
      '[INFO] Scanning models/ for user query injection security vectors...',
      '[WARN] direct_interpolation: query interpolation detected in profileSearch.ts.',
      '[FAIL] Invariant 02 violated: database parameters must be bound. Build status: BLOCKED.',
      '[YUGNEX SOLUTION] Auto-fixing parameters with parameterized SQL queries...',
      '[SUCCESS] Invariants passed. Security checks verified (0 risks found). Build released.'
    ]
  }
]

const APPROACH_DIAGRAMS = [
  `[AST Parser Agent] =======> [Causal Solver Agent]\n                                   ||\n                                   \\/ \n[Consensus Agent] <======== [Refactor Agent]\nSTATUS: Specialized collaborative reasoning online.`,
  `Agent[Architect]: "Direct SQL interpolation violates standard."\nAgent[Security]: "Vulnerability confirmed. Auto-blocking build."\nAgent[Developer]: "Updating query binds. Injecting fix..."\nSTATUS: Consensus reached. Code patched successfully.`,
  `Level 5 (Architectural Design Patterns) - ACTIVE\nLevel 4 (Module Interdependencies)      - ACTIVE\nLevel 3 (Semantic Variable Binding)     - ACTIVE\nLevel 2 (Abstract Syntax Tree)          - ACTIVE\nSTATUS: System-wide layered reasoning verified.`,
  `Causal Relations Cached: 184,902\nActive Context Nodes: 12,042\nLookup Latency: 1.2ms (98% speedup over LLM search)\nSTATUS: Causal graphs fully synched.`
]

export default function TechnologyInteractive({ limitations, approachSections }: TechnologyInteractiveProps) {
  const [activeLimitation, setActiveLimitation] = useState(0)
  const [activeApproach, setActiveApproach] = useState<number | null>(0)

  return (
    <div className={styles.container}>
      {/* 1. Limitations Simulator */}
      <section className="relative">
        <h2 className={styles.sectionTitle}>Interactive Limitations Diagnostics</h2>
        <div className={styles.explorerLayout}>
          <div className={styles.tabsList}>
            {limitations.map((lim, idx) => (
              <button
                key={idx}
                onClick={() => setActiveLimitation(idx)}
                className={`${styles.tabButton} ${activeLimitation === idx ? styles.tabButtonActive : ''}`}
              >
                <div className="flex items-center gap-2">
                  <TerminalSquare size={16} />
                  <span>{lim.title}</span>
                </div>
              </button>
            ))}
          </div>

          <div key={activeLimitation} className={styles.panelContent}>
            <div>
              <h3 className={styles.panelTitle}>{limitations[activeLimitation].title}</h3>
              <p className={styles.panelDesc}>{limitations[activeLimitation].description}</p>
            </div>

            {/* Diagnostic Terminal */}
            <div className={styles.terminalConsole}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDots}>
                  <span className={`${styles.dot} ${styles.dotRed}`} />
                  <span className={`${styles.dot} ${styles.dotYellow}`} />
                  <span className={`${styles.dot} ${styles.dotGreen}`} />
                </div>
                <span>diagnostic_runner.sh</span>
              </div>
              <div className={styles.terminalBody}>
                <div>
                  <span className={styles.terminalPrompt}>$ </span>
                  <span className="text-white">{LIMITATION_LOGS[activeLimitation].cmd}</span>
                </div>
                {LIMITATION_LOGS[activeLimitation].logs.map((log, lIdx) => {
                  let logClass = styles.terminalLog
                  if (log.startsWith('[FAIL]') || log.startsWith('[CRITICAL]')) logClass = styles.terminalError
                  if (log.startsWith('[WARN]')) logClass = styles.terminalWarn
                  if (log.startsWith('[SUCCESS]') || log.startsWith('[YUGNEX')) logClass = styles.terminalSuccess

                  return (
                    <div key={lIdx} className={logClass}>
                      {log}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Approach Section */}
      <section className="relative">
        <h2 className={styles.sectionTitle}>Our Layered Approach</h2>
        <div className={styles.approachGrid}>
          {approachSections.map((sec, idx) => {
            const isActive = activeApproach === idx
            return (
              <div
                key={idx}
                onClick={() => setActiveApproach(idx === activeApproach ? null : idx)}
                className={`${styles.approachCard} ${isActive ? styles.approachCardActive : ''}`}
              >
                <div className={styles.approachHeader}>
                  <div className="flex items-center gap-2">
                    {idx === 0 && <Layers size={18} className={isActive ? 'text-yellow-400' : 'text-gray-400'} />}
                    {idx === 1 && <GitMerge size={18} className={isActive ? 'text-yellow-400' : 'text-gray-400'} />}
                    {idx === 2 && <Cpu size={18} className={isActive ? 'text-yellow-400' : 'text-gray-400'} />}
                    {idx === 3 && <Radio size={18} className={isActive ? 'text-yellow-400' : 'text-gray-400'} />}
                    <h3 className={styles.approachTitle}>{sec.title}</h3>
                  </div>
                  <ArrowRight size={14} className={`text-gray-500 transition-transform ${isActive ? 'rotate-90 text-yellow-400' : ''}`} />
                </div>
                <p className={styles.approachBody}>{sec.body}</p>

                {isActive && (
                  <div className={styles.approachSimulation}>
                    <div className={styles.simulationStatus}>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                      <span>Live Telemetry Graph</span>
                    </div>
                    <pre className={styles.simulationDiagram}>
                      {APPROACH_DIAGRAMS[idx]}
                    </pre>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* 3. The Multi-Agent Debate CodeLens */}
      <section className="relative">
        <h2 className={styles.sectionTitle}>Autonomous Analyzer Consensuses</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto -mt-6 mb-8 text-sm font-light">
          Hover over code lines to activate YugNex's multi-agent consensus panel debating security and refactoring concerns.
        </p>
        <CodeLens />
      </section>
    </div>
  )
}
