'use client'
import { useState, useEffect } from 'react'
import { Cpu, Terminal, Shield, GitCommit } from 'lucide-react'
import styles from './MissionBlueprint.module.css'

interface BlueprintLayer {
  id: string
  num: string
  name: string
  badge: string
  telemetryTitle: string
  logs: string[]
}

const BLUEPRINT_LAYERS: BlueprintLayer[] = [
  {
    id: 'ingestion',
    num: 'LAYER_01',
    name: 'Semantic Source Ingestion Substrate',
    badge: 'Parsing AST',
    telemetryTitle: 'SYSTEM::INGESTION_CONTROLLER',
    logs: [
      '$ yugnex core --parse-directory=./src',
      'Scanning codebase directory: 1,420 files matched.',
      'Constructing Abstract Syntax Tree (AST) references...',
      'Mapping call graphs and relational vectors.',
      'SUCCESS: 12,450 AST nodes synapsed into Context Substrate Graph.',
      'Active listeners registered: file system watcher on --poll-interval=500ms'
    ]
  },
  {
    id: 'solver',
    num: 'LAYER_02',
    name: 'Multi-Agent Invariant Solver',
    badge: 'Debating Logic',
    telemetryTitle: 'SYSTEM::AGENT_CONSENSUS_SOLVER',
    logs: [
      '$ yugnex-agents --start-consensus --vulnerability-id=CVE-2026-SQL',
      'Launching debate room with: [Architect, Developer, Auditor]',
      '[PO]: Flagged raw SQL query interpolation inside userController.ts:L24',
      '[Developer]: Proposing regex replacement for input validation.',
      '[Architect]: REJECTED. Regex replacement is bypassable. Must rewrite to parameter binding query.',
      '[Auditor]: Validating parameterized query path. Invariant analysis complete.',
      'Consensus reached. Solution generated: parameterized statement injection.'
    ]
  },
  {
    id: 'sandbox',
    num: 'LAYER_03',
    name: 'Isolated Verification Sandbox Engine',
    badge: 'Testing Exec',
    telemetryTitle: 'SYSTEM::SANDBOX_VALIDATION_POOL',
    logs: [
      '$ yugnex-sandbox --instantiate-container --sandbox-id=sb-0x992',
      'Container spawned. Image: node-alpine-yugnex:latest',
      'Injecting refactored files into container filesystem.',
      'Running compiler validation... SUCCESS: exit code 0.',
      'Executing unit test sweep... 48/48 tests passed (240ms).',
      'Monitoring memory heap leaks... stable at 42.1 MB sweeps.',
      'Sandbox tests complete. Verification status: VERIFIED SAFE.'
    ]
  },
  {
    id: 'sync',
    num: 'LAYER_04',
    name: 'Perpetual VCS Synchronizer',
    badge: 'Commit Sync',
    telemetryTitle: 'SYSTEM::VCS_INTEGRATION_GATE',
    logs: [
      '$ yugnex-sync --stage-commits --remote=github.com/yugnex/repo',
      'Creating local branch: yugnex/patch-secure-auth',
      'Committing changes: 2 files modified, zero warnings.',
      'Verifying commit signatures... GPG signature validated.',
      'Pushing branch to upstream VCS... done.',
      'Opening pull request: [Security Refactor] Secure SQL Query Parameterization.',
      'VCS pipeline status: green, awaiting reviewer merge.'
    ]
  }
]

export default function MissionBlueprint() {
  const [activeLayerId, setActiveLayerId] = useState<string>('ingestion')
  const [activeLogs, setActiveLogs] = useState<string[]>([])

  const currentLayer = BLUEPRINT_LAYERS.find(l => l.id === activeLayerId) || BLUEPRINT_LAYERS[0]

  useEffect(() => {
    // Simulate typing out logs when layer changes
    setActiveLogs([])
    let timerIds: NodeJS.Timeout[] = []
    
    currentLayer.logs.forEach((log, index) => {
      const id = setTimeout(() => {
        setActiveLogs(prev => [...prev, log])
      }, index * 250)
      timerIds.push(id)
    })

    return () => timerIds.forEach(clearTimeout)
  }, [activeLayerId])

  return (
    <div className={styles.blueprintContainer}>
      {/* Blueprint Grid layout */}
      <div className={styles.blueprintBox}>
        {/* Futuristic grid background lines */}
        <div className={styles.gridLines} />
        
        {/* Staggered Blueprint Layers */}
        <div className={styles.layersWrapper}>
          {BLUEPRINT_LAYERS.map((layer) => (
            <div
              key={layer.id}
              onClick={() => setActiveLayerId(layer.id)}
              className={`${styles.layerCard} ${activeLayerId === layer.id ? styles.activeLayer : ''}`}
            >
              <div className={styles.layerMeta}>
                <span className={styles.layerNumber}>{layer.num}</span>
                <span className={styles.layerName}>{layer.name}</span>
              </div>
              <span className={`${styles.layerBadge} ${activeLayerId === layer.id ? styles.layerBadgeActive : ''}`}>
                {layer.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Futuristic Telemetry Console */}
      <div className={styles.telemetryPanel}>
        <div className={styles.telemetryHeader}>
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-yellow-400" />
            <span className={styles.telemetryTitle}>{currentLayer.telemetryTitle}</span>
          </div>
          <span className="text-[10px] text-gray-500 font-mono">SYS_VER=1.0.8</span>
        </div>
        
        <div className={styles.telemetryLog}>
          {activeLogs.map((log, index) => {
            const isCmd = log.startsWith('$')
            return (
              <div key={index} className="mb-1 leading-relaxed">
                {isCmd ? <span className={styles.commandPrompt}>$ </span> : ''}
                {isCmd ? log.substring(2) : log}
              </div>
            )
          })}
          <div className="text-yellow-500 animate-pulse mt-1">$ awaiting pipeline execution...</div>
        </div>
      </div>
    </div>
  )
}
