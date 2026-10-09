'use client'
import React, { useState } from 'react'
import { FileText, Award, Calendar, CheckCircle } from 'lucide-react'
import styles from './MilestoneTimeline.module.css'

interface Milestone {
  year: string
  title: string
  label: string
  description: string
  status: 'completed' | 'progress' | 'planned'
  statusText: string
  docs: { label: string; value: string }[]
}

const MILESTONES: Milestone[] = [
  {
    year: 'Oct 2025',
    title: 'Company Incorporation',
    label: 'Incorporation',
    description: 'YugNex Technology incorporated as an OPC Private Limited company under the Ministry of Corporate Affairs, initiating our mission to build persistent, autonomous software engineering systems.',
    status: 'completed',
    statusText: 'Completed',
    docs: [
      { label: 'Entity Name', value: 'YugNex Technology OPC Pvt Ltd' },
      { label: 'Registry ID', value: 'U72200RJ2025OPC098254' },
      { label: 'Location', value: 'Bhilwara, Rajasthan, India' },
      { label: 'Authority', value: 'MCA Government of India' }
    ]
  },
  {
    year: '16 Dec 2025',
    title: 'DPIIT Startup Recognition',
    label: 'DPIIT Cert',
    description: 'Received official recognition as a Startup from the Department for Promotion of Industry and Internal Trade (DPIIT), granting us startup status and IP/tax assistance privileges.',
    status: 'completed',
    statusText: 'Completed',
    docs: [
      { label: 'Certificate No', value: 'DIPP234393' },
      { label: 'Recognition Date', value: '16 December 2025' },
      { label: 'Category', value: 'AI Software Systems' },
      { label: 'Benefits', value: 'IP & Patent Fast-Track Support' }
    ]
  },
  {
    year: 'Jan 2026',
    title: 'Provisional Patent Filing',
    label: 'Patent Filed',
    description: 'Filed provisional patent documentation with the Indian Patent Office covering our proprietary symbolic-neural reasoning architecture and semantic AST graph structures.',
    status: 'completed',
    statusText: 'Completed',
    docs: [
      { label: 'Filing Category', value: 'System Reasoning Architecture' },
      { label: 'Provisional Date', value: 'January 2026' },
      { label: 'Scope', value: 'Multi-Agent Codebase Refactoring' },
      { label: 'Filing Status', value: 'Patent Pending' }
    ]
  },
  {
    year: 'Active 2026',
    title: 'Deep Research & MVP Prototyping',
    label: 'MVP Phase',
    description: 'Currently in the deep research and MVP development stage. We are testing initial multi-agent collaboration pipelines and validating the AST solver in secure container sandboxes.',
    status: 'progress',
    statusText: 'In Progress',
    docs: [
      { label: 'Development Phase', value: 'Active R&D & MVP Sandbox' },
      { label: 'Prototype Release', value: 'v0.4.5-alpha (internal)' },
      { label: 'Agent Coordination', value: 'Architect-Auditor consensus' },
      { label: 'Security Model', value: 'Turnstile Secure Sandboxes' }
    ]
  },
  {
    year: 'Late 2026',
    title: 'Full Swing Development Scale',
    label: 'Scale Up',
    description: 'Planned scale-up to full swing development phase for our autonomous platforms, expanding our research team and opening secure sandbox APIs to early select partners.',
    status: 'planned',
    statusText: 'Planned',
    docs: [
      { label: 'Expected Startup', value: 'Q4 2026' },
      { label: 'Focus Area', value: 'Production REST API / IDE plugins' },
      { label: 'Team Expansion', value: 'Core R&D Systems Engineers' },
      { label: 'Access Tier', value: 'Private Developer Beta' }
    ]
  },
  {
    year: '2027',
    title: 'Official Platform Launch',
    label: 'Public Launch',
    description: 'Official rollout of the YugNex autonomous software engineering platform to the public. Delivering the world’s first persistent software engineering intelligence.',
    status: 'planned',
    statusText: 'Planned',
    docs: [
      { label: 'Launch Schedule', value: '2027' },
      { label: 'Target Platforms', value: 'Cloud SaaS / On-Premise Engine' },
      { label: 'Scope', value: 'Enterprise Invariant Solvers' },
      { label: 'Security Standard', value: 'SOC2 / GPG Signed Deployments' }
    ]
  }
]

interface MilestoneTimelineProps {
  milestones?: Milestone[]
  ledgerLabel?: string
}

export default function MilestoneTimeline({
  milestones = MILESTONES,
  ledgerLabel = "Milestone Registry Ledger"
}: MilestoneTimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number>(3) // Default to Active MVP Phase

  const milestone = milestones[activeIndex] || milestones[0]

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'completed': return styles.statusCompleted
      case 'progress': return styles.statusProgress
      default: return styles.statusPlanned
    }
  }

  const getBadgeClass = (status: string) => {
    switch (status) {
      case 'completed': return `${styles.milestoneBadge} ${styles.badgeCompleted}`
      case 'progress': return `${styles.milestoneBadge} ${styles.badgeProgress}`
      default: return `${styles.milestoneBadge} ${styles.badgePlanned}`
    }
  }

  return (
    <div className={styles.timelineContainer}>
      {/* Navigation Buttons */}
      <div className={styles.milestonesNav}>
        {milestones.map((m, index) => {
          const isActive = activeIndex === index
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`${styles.milestoneButton} ${isActive ? styles.activeButton : ''}`}
            >
              <div className="flex items-center gap-1.5">
                <span className={`${styles.statusIndicator} ${getStatusClass(m.status)}`} />
                <span className={styles.milestoneDate}>{m.year}</span>
              </div>
              <span className={styles.milestoneLabel}>{m.label}</span>
            </button>
          )
        })}
      </div>

      {/* Interactive Detail Card */}
      <div className={styles.detailCard}>
        {/* Left: Description Block */}
        <div>
          <span className={getBadgeClass(milestone.status)}>
            {milestone.statusText}
          </span>
          <h4 className={styles.detailTitle}>{milestone.title}</h4>
          <p className={styles.detailDesc}>{milestone.description}</p>
        </div>

        {/* Right: Document Info Dossier */}
        <div className={styles.docPanel}>
          <div className={styles.docHeader}>
            <FileText size={15} />
            <span>{ledgerLabel}</span>
          </div>
          <div className="space-y-1">
            {milestone?.docs?.map((doc, idx) => (
              <div key={idx} className={styles.docLine}>
                <span>{doc.label}</span>
                <span className={styles.docValue}>{doc.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
