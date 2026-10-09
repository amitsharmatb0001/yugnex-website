'use client'
import React, { useState, useEffect } from 'react'
import styles from './MissionConsole.module.css'
import { Play, Check, ShieldAlert, Cpu, Network, Zap } from 'lucide-react'

interface MissionConsoleProps {
  paragraphs: string[]
  pipelineIntegrationFlow?: string
  triggerDiagnostic?: string
  runningDiagnostic?: string
  layerMetas?: string[]
  pipelineMap?: MissionPipeline[]
}

interface PipelineStep {
  label: string
}

interface MissionPipeline {
  steps: PipelineStep[]
  logs: string[]
}

const PIPELINE_MAP: MissionPipeline[] = [
  {
    steps: [
      { label: 'Initialize AST parsing schemas' },
      { label: 'Map causal semantic nodes' },
      { label: 'Instantiate Docker sandbox runtimes' }
    ],
    logs: [
      'ast_parser: reading codebase tokens...',
      'dependency_resolver: matching parameter list constraints',
      'sandbox_manager: compiling container node layout...',
      'SUCCESS: Foundational substrate layer fully active.'
    ]
  },
  {
    steps: [
      { label: 'Hook Git commit pipeline events' },
      { label: 'Compile repository differential trees' },
      { label: 'Verify architectural invariant bounds' }
    ],
    logs: [
      'vcs_monitor: listening to main branch pushes...',
      'diff_engine: parsing 14 changed AST files',
      'invariant_runner: testing 8 validation checks...',
      'SUCCESS: Evolutionary compiler loops completed. Build synched.'
    ]
  },
  {
    steps: [
      { label: 'Extract multi-module import pathways' },
      { label: 'Scale context scope limits dynamically' },
      { label: 'Coordinate multi-agent consensus checks' }
    ],
    logs: [
      'context_engine: reading inter-module dependency connections',
      'agent_consensus: matching security audits with developer edits',
      'validation_agent: analyzing AST reasoning trees...',
      'SUCCESS: Causal relationships consolidated into context maps.'
    ]
  },
  {
    steps: [
      { label: 'Monitor active IDE workspaces' },
      { label: 'Analyze real-time developer parameters' },
      { label: 'Output structural diagnostic reports' }
    ],
    logs: [
      'workspace_daemon: active on file system changes',
      'lint_check: testing parameters against framework APIs',
      'audit_writer: compiling documentation integrity notes...',
      'SUCCESS: Architectural compliance verified. 0 defects logged.'
    ]
  }
]

export default function MissionConsole({
  paragraphs,
  pipelineIntegrationFlow = "Pipeline Integration Flow",
  triggerDiagnostic = "TRIGGER DIAGNOSTIC",
  runningDiagnostic = "RUNNING...",
  layerMetas = ['Foundational Substrates', 'Perpetual Evolution', 'Architectural Context', 'Augmented Validation'],
  pipelineMap = PIPELINE_MAP
}: MissionConsoleProps) {
  const [activeLayer, setActiveLayer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [logFeed, setLogFeed] = useState<string[]>([])

  const getLayerMeta = (idx: number) => {
    return layerMetas[idx] || `Layer 0${idx + 1}`
  }

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Cpu size={14} />
      case 1: return <Zap size={14} />
      case 2: return <Network size={14} />
      default: return <ShieldAlert size={14} />
    }
  }

  const activeData = pipelineMap[activeLayer] || pipelineMap[0]

  useEffect(() => {
    // Populate logs when layer changes
    setLogFeed(activeData.logs.slice(0, 2))
    setIsRunning(false)
  }, [activeLayer, activeData])

  const triggerSimulation = () => {
    if (isRunning) return
    setIsRunning(true)
    setLogFeed(activeData.logs.slice(0, 2))

    setTimeout(() => {
      setLogFeed(prev => [...prev, activeData.logs[2]])
    }, 1000)

    setTimeout(() => {
      setLogFeed(prev => [...prev, activeData.logs[3]])
      setIsRunning(false)
    }, 2000)
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.layout}>
        {/* Left: Sidebar navigation */}
        <div className={styles.sidebar}>
          {paragraphs.map((p, idx) => {
            const isActive = activeLayer === idx
            return (
              <button
                key={idx}
                onClick={() => setActiveLayer(idx)}
                className={`${styles.layerButton} ${isActive ? styles.layerButtonActive : ''}`}
              >
                <span className={styles.layerMeta}>
                  {getLayerMeta(idx)}
                </span>
                <span className={styles.layerTextPreview}>
                  {p}
                </span>
              </button>
            )
          })}
        </div>

        {/* Right: Mission content & dynamic pipeline */}
        <div key={activeLayer} className={styles.mainPanel}>
          <div className={styles.contentCard}>
            <span className={styles.quoteDecoration}>“</span>
            <p className={styles.fullText}>{paragraphs[activeLayer]}</p>
          </div>

          {/* Interactive Pipeline simulation */}
          <div className={styles.pipelineGrid}>
            {/* Visual Steps */}
            <div className={styles.pipelineFlow}>
              <div className="flex items-center gap-1.5 text-xs text-yellow-500 font-bold uppercase tracking-wider mb-2">
                {getIcon(activeLayer)}
                <span>{pipelineIntegrationFlow}</span>
              </div>

              {activeData.steps.map((step, sIdx) => (
                <div key={sIdx} className={styles.flowStep}>
                  <div className={styles.stepNumber}>{sIdx + 1}</div>
                  <span className={styles.stepLabel}>{step.label}</span>
                </div>
              ))}
            </div>

            {/* Diagnostic Console */}
            <div className={styles.pipelineConsole}>
              <div className={styles.consoleHeader}>
                <span>CONSOLE: {getLayerMeta(activeLayer).toUpperCase().replace(' ', '_')}</span>
                <button
                  onClick={triggerSimulation}
                  disabled={isRunning}
                  className={styles.consoleAction}
                >
                  <Play size={10} fill="#fbbf24" />
                  <span>{isRunning ? runningDiagnostic : triggerDiagnostic}</span>
                </button>
              </div>
              <div className={styles.consoleBody}>
                {logFeed.map((log, lIdx) => {
                  const isSuccess = log.startsWith('SUCCESS')
                  return (
                    <div
                      key={lIdx}
                      className={styles.logEntry}
                      style={{ color: isSuccess ? '#22c55e' : '#9ca3af', fontWeight: isSuccess ? '600' : 'normal' }}
                    >
                      <span className={styles.logPrompt}>$</span>
                      {log}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
