'use client'
import React, { useState } from 'react'
import styles from './WorkflowStepper.module.css'

interface Step {
  title: string
  label: string
  desc: string
  points: string[]
  terminalCode: string
}

const STEPS: Step[] = [
  {
    title: 'Scan Codebase',
    label: '01 / SCAN',
    desc: 'Deeply analyzes your entire repository. Resolves external dependencies, inspects local package mappings, and builds a comprehensive system-level syntax tree.',
    points: [
      'Locates unused configurations and packages',
      'Identifies circular dependencies and deadlocks',
      'Highlights security vulnerabilities and memory leaks',
    ],
    terminalCode: `$ yugnex scan --dir=./project
[info] Parsing AST for 184 source files...
[info] Resolving npm modules...
[warn] Memory leak detected in utils/worker.ts:L45
[warn] Circular dependency: router.ts -> auth.ts -> router.ts
[success] Scan complete. Found 2 warnings.`,
  },
  {
    title: 'Draft Resolution Plan',
    label: '02 / PLAN',
    desc: 'Formulates a multi-layered implementation plan detailing the exact modules to alter. Our AI models reason about the system-wide effects of each proposed change.',
    points: [
      'Minimizes runtime breaking changes',
      'Orders refactoring steps by priority',
      'Generates detailed roll-back scripts',
    ],
    terminalCode: `$ yugnex plan --issue=memleak
[info] Synthesizing remediation steps...
[plan] Proposed fixes:
  1. Modify utils/worker.ts (de-register event listeners)
  2. Reorder middleware declarations in router.ts
[info] Validating impact boundary: Zero public API breaking changes.`,
  },
  {
    title: 'Apply Automated Refactoring',
    label: '03 / REFACTOR',
    desc: 'Applies localized modifications directly inside your workspace files, generating clean, document-compliant code matching your design system rules.',
    points: [
      'Replaces legacy configurations automatically',
      'Applies strict typing overrides',
      'Follows local code conventions and lint configurations',
    ],
    terminalCode: `$ yugnex refactor --apply
[info] Writing modification chunk to utils/worker.ts:L45
-  window.addEventListener('scroll', handler)
+  useEffect(() => {
+    window.addEventListener('scroll', handler)
+    return () => window.removeEventListener('scroll', handler)
+  }, [])
[success] Applied 2 file modifications.`,
  },
  {
    title: 'Validate Integrity & Verify',
    label: '04 / VALIDATE',
    desc: 'Runs full workspace validation including typescript verification, automated tests, and compiler validation checks to guarantee zero regressions.',
    points: [
      'Ensures type-check passes successfully',
      'Triggers local test runner cycles',
      'Validates production compilation bundles',
    ],
    terminalCode: `$ yugnex validate
[info] Running TypeScript compiler verification...
[info] Executing: npm run test
✓ tests/worker.test.ts (142ms)
✓ tests/router.test.ts (89ms)
[success] Validation passed. Build is stable.`,
  },
]

export default function WorkflowStepper() {
  const [activeStep, setActiveStep] = useState<number>(0)
  const step = STEPS[activeStep]

  return (
    <div className={styles.stepperContainer}>
      <div className={styles.stepTabs}>
        {STEPS.map((s, index) => {
          const isActive = activeStep === index
          return (
            <button
              key={index}
              className={`${styles.tabButton} ${isActive ? styles.tabActive : ''}`}
              onClick={() => setActiveStep(index)}
            >
              <span className={styles.tabNumber}>{s.label}</span>
              <span>{s.title.split(' ')[0]}</span>
            </button>
          )
        })}
      </div>

      <div className={styles.stepContentCard}>
        <div className={styles.leftCol}>
          <h4 className={styles.stepTitle}>{step.title}</h4>
          <p className={styles.stepDesc}>{step.desc}</p>
          <div>
            {step.points.map((pt, i) => (
              <div key={i} className={styles.stepPoint}>
                <span className={styles.pointIcon}>▹</span>
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.terminalWrapper}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalDots}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>
              <span className={styles.terminalTitle}>yugnex-terminal</span>
            </div>
            <div className={styles.terminalBody}>
              {step.terminalCode}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
