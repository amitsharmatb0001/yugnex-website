'use client'
import React, { useState } from 'react'
import styles from './PlatformInteractive.module.css'
import { Terminal as TermIcon, Play, Code, Check } from 'lucide-react'

interface CapabilityItem {
  title: string
  description: string
  points: string[]
}

interface UseCaseItem {
  title: string
  challenge: string
  solution: string
}

interface PlatformInteractiveProps {
  capabilities: CapabilityItem[]
  useCases: UseCaseItem[]
  uiLabels: {
    theChallenge?: string
    ourSolution?: string
    useCases?: string
  }
}

const CAP_LOGS = [
  {
    cmd: 'yugnex build --analyze-architecture',
    logs: [
      '[INFO] Scanning codebase directories...',
      '[INFO] Constructing causal inter-module graph (1,284 nodes)...',
      '[VCS] Checking architectural boundaries against design specifications...',
      '[SUCCESS] Dependency schema built. 0 boundary violations found.'
    ]
  },
  {
    cmd: 'yugnex diff --check-implications --file=userModel.ts',
    logs: [
      '[INFO] Tracing downstream imports for userModel.ts...',
      '[INFO] Checking dependency chains inside routes/ and controllers/...',
      '[WARN] userService.ts depends on changed database schemas. Validating parameters...',
      '[SUCCESS] Causal paths verified. Refactoring risk assessment: 0 issues.'
    ]
  },
  {
    cmd: 'yugnex validate --invariants --level=all',
    logs: [
      '[INFO] Executing multi-level invariant validation checks...',
      '[INFO] Level 1: Syntax Parsing (PASS) | Level 2: Types (PASS)',
      '[INFO] Level 3: Security Sandboxing (PASS) | Level 4: Memory checks (PASS)',
      '[SUCCESS] Formal validation completed successfully. Code safe.'
    ]
  }
]

export default function PlatformInteractive({ capabilities, useCases, uiLabels }: PlatformInteractiveProps) {
  const [activeCap, setActiveCap] = useState(0)
  const [activeCase, setActiveCase] = useState(0)
  const [runningCapLogs, setRunningCapLogs] = useState<string[]>([])
  const [isRunning, setIsRunning] = useState(false)

  const triggerCapSimulation = (idx: number) => {
    if (isRunning) return
    setIsRunning(true)
    setActiveCap(idx)
    setRunningCapLogs([CAP_LOGS[idx].logs[0]])

    setTimeout(() => {
      setRunningCapLogs(prev => [...prev, CAP_LOGS[idx].logs[1]])
    }, 800)

    setTimeout(() => {
      setRunningCapLogs(prev => [...prev, CAP_LOGS[idx].logs[2]])
    }, 1600)

    setTimeout(() => {
      setRunningCapLogs(prev => [...prev, CAP_LOGS[idx].logs[3]])
      setIsRunning(false)
    }, 2400)
  }

  React.useEffect(() => {
    // Reset logs when tab changes
    setRunningCapLogs(CAP_LOGS[activeCap].logs.slice(0, 2))
    setIsRunning(false)
  }, [activeCap])

  return (
    <div className={styles.container}>
      {/* 1. Capabilities Section */}
      <section className="relative">
        <h2 className={styles.sectionTitle}>Interactive Platform Capabilities</h2>
        <div className={styles.capLayout}>
          <div className={styles.capTabs}>
            {capabilities.map((cap, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCap(idx)}
                className={`${styles.capTabButton} ${activeCap === idx ? styles.capTabButtonActive : ''}`}
              >
                <div className="flex items-center gap-2">
                  <Code size={16} />
                  <span>{cap.title.split(',')[0]}</span>
                </div>
              </button>
            ))}
          </div>

          <div key={activeCap} className={styles.capContent}>
            <div>
              <h3 className={styles.capTitle}>{capabilities[activeCap].title}</h3>
              <p className={styles.capDesc}>{capabilities[activeCap].description}</p>
            </div>

            <div className={styles.capPointsList}>
              {capabilities[activeCap].points.map((point, pIdx) => (
                <div key={pIdx} className={styles.capPointItem}>
                  <Check size={14} className="text-yellow-500 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Sandbox Console */}
            <div className={styles.capConsole}>
              <div className={styles.capConsoleHeader}>
                <span>CONSOLE: SANDBOX_RUNNER</span>
                <button
                  onClick={() => triggerCapSimulation(activeCap)}
                  disabled={isRunning}
                  className="flex items-center gap-1 text-yellow-500 font-bold hover:text-yellow-400 disabled:opacity-50"
                >
                  <Play size={10} fill="#fbbf24" />
                  <span>{isRunning ? 'EXECUTING...' : 'RUN'}</span>
                </button>
              </div>
              <div className={styles.capConsoleBody}>
                <div>
                  <span className="text-purple-400 mr-2">$</span>
                  <span className="text-white">{CAP_LOGS[activeCap].cmd}</span>
                </div>
                {runningCapLogs.map((log, lIdx) => {
                  const isSuccess = log.startsWith('[SUCCESS]')
                  return (
                    <div
                      key={lIdx}
                      className="text-gray-300 font-mono"
                      style={{ color: isSuccess ? '#22c55e' : '#9ca3af', fontWeight: isSuccess ? '600' : 'normal' }}
                    >
                      {log}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Use Cases Section */}
      <section className="relative">
        <h2 className={styles.sectionTitle}>{uiLabels.useCases || 'Core Use Cases'}</h2>
        <div className={styles.casesLayout}>
          {/* Selectors */}
          <div className={styles.casesSelectors}>
            {useCases.map((useCase, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCase(idx)}
                className={`${styles.caseSelectButton} ${activeCase === idx ? styles.caseSelectButtonActive : ''}`}
              >
                {useCase.title}
              </button>
            ))}
          </div>

          {/* Active Display Panel */}
          <div key={activeCase} className={styles.caseDisplay}>
            <h3 className={styles.caseTitle}>{useCases[activeCase].title}</h3>
            
            <div className={styles.caseCompareGrid}>
              <div className={styles.challengeBox}>
                <div className={styles.challengeLabel}>
                  {uiLabels.theChallenge || 'The Challenge'}
                </div>
                <p className={styles.caseText}>
                  {useCases[activeCase].challenge}
                </p>
              </div>

              <div className={styles.solutionBox}>
                <div className={styles.solutionLabel}>
                  {uiLabels.ourSolution || 'Our Solution'}
                </div>
                <p className={styles.caseText}>
                  {useCases[activeCase].solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
