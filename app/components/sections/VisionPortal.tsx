'use client'
import { useState } from 'react'
import { Brain, Cpu, ShieldAlert, GitCompare, Activity, Layers, Disc } from 'lucide-react'
import styles from './VisionPortal.module.css'

interface Pillar {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  details: string
  terminalLog: string
}

const PILLARS: Pillar[] = [
  {
    id: 'context',
    name: 'Context Synthesis Substrate',
    icon: <Layers size={20} />,
    description: 'Bridges raw source directories into a unified, multi-dimensional semantic graph representation.',
    details: 'Unlike traditional retrieval-augmented coding assistants that rely on string matching or shallow vector indexing, our system operates directly on system-wide Abstract Syntax Tree (AST) relationships, data flows, and dependency networks. It tracks intent and reasoning paths across files, preserving absolute context continuity.',
    terminalLog: 'yugnex.engine --compile-context-substrate --target=all'
  },
  {
    id: 'reasoning',
    name: 'Causal Reasoning Engine',
    icon: <Brain size={20} />,
    description: 'Weighs trade-offs, coordinates specialized agents, and evaluates systemic impacts of proposed modifications.',
    details: 'Software engineering is a logic problem. Our multi-agent substrate brings together specialized agents representing different software engineering functions (Architect, Developer, Security Auditor, QA). Through structured, multi-turn reasoning debates, they establish consensus on implementation paths before writing a single line.',
    terminalLog: 'yugnex.agent.coordinator --evaluate-systemic-impact'
  },
  {
    id: 'verification',
    name: 'Perpetual Invariant Verification',
    icon: <Cpu size={20} />,
    description: 'Guarantees execution safety by executing, verifying, and testing all proposed changes in secure sandboxes.',
    details: 'Syntactically correct code is not the end goal. YugNex runs empirical validations within isolated container environments. It ensures that new code conforms to pre-established architectural invariants, passes unit test boundaries, and introduces zero security vulnerabilities or connection leaks.',
    terminalLog: 'yugnex.sandbox --verify-invariants --sandbox-id=sb-0x524'
  }
]

export default function VisionPortal() {
  const [activePillar, setActivePillar] = useState<string>('context')

  const currentPillar = PILLARS.find(p => p.id === activePillar) || PILLARS[0]

  return (
    <div className={styles.portalContainer}>
      {/* Split Grid: Old Yug vs Next Nex */}
      <div className={styles.splitGrid}>
        {/* Left Side: The Old Yug */}
        <div className={`${styles.epochCard} ${styles.oldCard}`}>
          <div className={styles.cardHeader}>
            <ShieldAlert size={22} className="text-red-400" />
            <h3 className={styles.cardTitle}>The Old Yug</h3>
          </div>
          <p className={styles.cardSubline}>
            Human-only software development. Constrained by individual cognitive limits, resulting in software decay, context fragmentation, and accumulated technical debt.
          </p>
          <div className="space-y-1">
            <div className={styles.statRow}>
              <span className={styles.statLabel}>Context Horizon</span>
              <span className={`${styles.statVal} ${styles.statValAlert}`}>~100K Tokens (Fragmented)</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statLabel}>Systemic Dependency Tracing</span>
              <span className={`${styles.statVal} ${styles.statValAlert}`}>Manual / Approximate</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statLabel}>Codebase Lifecycle</span>
              <span className={`${styles.statVal} ${styles.statValAlert}`}>Entropy & Degradation</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statLabel}>Verification Loop</span>
              <span className={`${styles.statVal} ${styles.statValAlert}`}>Post-Implementation Tests</span>
            </div>
          </div>
        </div>

        {/* Right Side: The Next Nex */}
        <div className={styles.epochCard}>
          <div className={styles.cardHeader}>
            <GitCompare size={22} className="text-yellow-400" />
            <h3 className={styles.cardTitle}>The Next Nex</h3>
          </div>
          <p className={styles.cardSubline}>
            Autonomous collaborative engineering. A persistent, semantic reasoning substrate that understands your architecture, verifies invariants, and works alongside you.
          </p>
          <div className="space-y-1">
            <div className={styles.statRow}>
              <span className={styles.statLabel}>Context Horizon</span>
              <span className={`${styles.statVal} ${styles.statValSuccess}`}>Infinite Graph Representation</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statLabel}>Systemic Dependency Tracing</span>
              <span className={`${styles.statVal} ${styles.statValSuccess}`}>Dynamic AST Trace (Causal)</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statLabel}>Codebase Lifecycle</span>
              <span className={`${styles.statVal} ${styles.statValSuccess}`}>Refactored / Zero-Debt</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statLabel}>Verification Loop</span>
              <span className={`${styles.statVal} ${styles.statValSuccess}`}>Pre-Commit Sandbox Invariants</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Pillars Section */}
      <div className={styles.pillarContainer}>
        <h3 className={styles.sectionTitle}>Cognitive Substrate Pillars</h3>
        
        <div className={styles.pillarsGrid}>
          {PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => setActivePillar(pillar.id)}
              className={`${styles.pillarCard} ${activePillar === pillar.id ? styles.activePillar : ''}`}
            >
              <div className={styles.pillarIcon}>
                {pillar.icon}
              </div>
              <h4 className={styles.pillarName}>{pillar.name}</h4>
              <p className={styles.pillarDesc}>{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Detail Panel */}
        <div className={styles.detailsPanel}>
          <div className={styles.detailsHeader}>
            <div className="flex items-center gap-2">
              <Activity size={14} className="text-yellow-400 animate-pulse" />
              <span className={styles.detailsTitle}>{currentPillar.terminalLog}</span>
            </div>
            <span className={styles.detailsStatus}>System Synapsed</span>
          </div>
          <div className={styles.detailsContent}>
            <p className="font-light text-gray-300 leading-relaxed">
              {currentPillar.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
