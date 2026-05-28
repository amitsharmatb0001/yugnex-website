'use client'
import React, { useState } from 'react'
import styles from './CodeLens.module.css'
import { ShieldAlert, Zap, RefreshCw, MessageSquare } from 'lucide-react'

interface DebateMsg {
  role: 'Architect' | 'Developer' | 'Security Auditor' | 'QA Auditor'
  text: string
}

interface LineData {
  text: string
  hasWarning: boolean
  warningType?: 'security' | 'performance'
  warningTitle?: string
  warningDesc?: string
  fixCode?: string
  debate?: DebateMsg[]
}

const LINES: LineData[] = [
  { text: 'const getActiveProfiles = async (req, res) => {', hasWarning: false },
  {
    text: '  const query = `SELECT * FROM users WHERE status = \'${req.query.status}\'`;',
    hasWarning: true,
    warningType: 'security',
    warningTitle: 'SQL Injection Vulnerability',
    warningDesc: 'Directly interpolating user input into an SQL query string allows attackers to inject malicious SQL commands and bypass authentication or view unauthorized tables.',
    fixCode: 'const query = "SELECT * FROM users WHERE status = ?";\nconst [users] = await db.execute(query, [req.query.status]);',
    debate: [
      { role: 'Architect', text: 'Direct SQL query interpolation detected. This violates our security standards.' },
      { role: 'Security Auditor', text: 'Remote exploit possible via status parameters. Commit blocked.' },
      { role: 'Developer', text: 'Re-writing query to parameterized binding using db.execute(query, [status]).' }
    ]
  },
  { text: '  const users = await db.execute(query);', hasWarning: false },
  { text: '  const enrichedUsers = [];', hasWarning: false },
  { text: '  for (const user of users) {', hasWarning: false },
  {
    text: '    const profile = await db.execute(`SELECT * FROM profiles WHERE user_id = ${user.id}`);',
    hasWarning: true,
    warningType: 'performance',
    warningTitle: 'N+1 Query Bottleneck',
    warningDesc: 'Executing a separate database query inside a loop causes N queries for N users. This leads to heavy latency spikes and server overload as database connection pools saturate.',
    fixCode: 'const userIds = users.map(u => u.id);\nconst [profiles] = await db.execute(\n  "SELECT * FROM profiles WHERE user_id IN (?)",\n  [userIds]\n);',
    debate: [
      { role: 'Architect', text: 'Relational database bottleneck. Executing queries inside a loop is blocked.' },
      { role: 'Developer', text: 'Aggregating user IDs to batch fetch profiles in a single SELECT ... WHERE IN (?) query.' },
      { role: 'QA Auditor', text: 'Verified. Benchmark metrics show total queries executed dropped from N to 1.' }
    ]
  },
  { text: '    enrichedUsers.push({ ...user, profile });', hasWarning: false },
  { text: '  }', hasWarning: false },
  { text: '  res.json(enrichedUsers);', hasWarning: false },
  { text: '};', hasWarning: false },
]

export default function CodeLens() {
  const [selectedLine, setSelectedLine] = useState<number | null>(1)
  const line = selectedLine !== null ? LINES[selectedLine] : null

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'Architect': return 'rgba(168, 85, 247, 0.15) text-purple-400 border-purple-500/20'
      case 'Developer': return 'rgba(236, 72, 153, 0.15) text-pink-400 border-pink-500/20'
      case 'Security Auditor': return 'rgba(239, 68, 68, 0.15) text-red-400 border-red-500/20'
      case 'QA Auditor': return 'rgba(34, 197, 94, 0.15) text-green-400 border-green-500/20'
      default: return 'rgba(156, 163, 175, 0.15) text-gray-400 border-gray-500/20'
    }
  }

  return (
    <div className={styles.lensContainer}>
      <div className={styles.lensLayout}>
        {/* Left: Code Editor Container */}
        <div className={styles.codePanel}>
          <div className={styles.codeHeader}>
            <div className={styles.dots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <span className={styles.panelTitle}>active_routes.js — Hover/Click lines with alert nodes</span>
          </div>
          <div className={styles.codeBody}>
            {LINES.map((l, index) => {
              const isSelected = selectedLine === index
              return (
                <div
                  key={index}
                  className={`${styles.codeLine} ${isSelected ? styles.lineSelected : ''}`}
                  onMouseEnter={() => setSelectedLine(index)}
                  onClick={() => setSelectedLine(index)}
                >
                  <div className={styles.lineNumber}>
                    {l.hasWarning ? (
                      <span className="text-yellow-500 font-bold">!</span>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div className={styles.lineContent}>{l.text}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right: Insight / Fix Sidebar */}
        <div className={styles.insightPanel}>
          {line && line.hasWarning ? (
            <div className="space-y-4">
              <div className={styles.insightTitle}>
                {line.warningType === 'security' ? (
                  <ShieldAlert className="text-red-500 shrink-0" size={24} />
                ) : (
                  <Zap className="text-yellow-500 shrink-0" size={24} />
                )}
                <span>{line.warningTitle}</span>
              </div>
              <p className={styles.insightDesc}>{line.warningDesc}</p>
              
              <div className={styles.solutionCard}>
                <div className={styles.solutionTitle}>YugNex Auto-Fix Recommendation</div>
                <pre className={styles.solutionCode}>{line.fixCode}</pre>
              </div>

              {line.debate && (
                <div className="mt-4 pt-4 border-t border-white/10 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs text-yellow-500 font-bold uppercase tracking-wider">
                    <MessageSquare size={13} />
                    <span>Agent Resolution Debate</span>
                  </div>
                  <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                    {line.debate.map((msg, i) => (
                      <div key={i} className="text-[11px] leading-relaxed p-2 rounded bg-white/5 border border-white/5">
                        <span className={`inline-block px-1.5 py-0.5 rounded border text-[9px] font-bold uppercase tracking-wide mr-1.5 ${getRoleBadgeColor(msg.role)}`}>
                          {msg.role}
                        </span>
                        <span className="text-gray-300">{msg.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className={styles.solutionsDefault}>
              <RefreshCw className="mx-auto mb-4 animate-spin text-yellow-500/60" size={32} />
              <p className="text-sm">Hover over lines of code on the left to activate the YugNex autonomous analyzer lens.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
