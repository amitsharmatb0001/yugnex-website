'use client'
import { useState } from 'react'
import { GitPullRequest, Code, Terminal as CliIcon, CheckCircle2, ChevronRight, Play } from 'lucide-react'
import styles from './DeveloperCockpit.module.css'

type TabType = 'github' | 'ide' | 'cicd'

export default function DeveloperCockpit() {
  const [activeTab, setActiveTab] = useState<TabType>('github')

  return (
    <div className={styles.cockpitContainer}>
      {/* R&D Simulation Disclaimer Banner */}
      <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-lg p-4 text-xs text-yellow-500/80 leading-relaxed max-w-4xl mx-auto text-center backdrop-blur-sm">
        <strong>⚠️ R&D Simulation Disclaimer:</strong> This interface is an interactive demonstration for conceptual visualization purposes. The YugNex autonomous software engineering system is currently in the Research & Development (R&D) phase. No public production digital application or fully optimized system is active at this time.
      </div>

      {/* Tab Selectors */}
      <div className={styles.tabBar}>
        <button
          onClick={() => setActiveTab('github')}
          className={`${styles.tabButton} ${activeTab === 'github' ? styles.activeTab : ''}`}
        >
          <div className="flex items-center gap-2">
            <GitPullRequest size={16} />
            <span>GitHub Pull Request</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('ide')}
          className={`${styles.tabButton} ${activeTab === 'ide' ? styles.activeTab : ''}`}
        >
          <div className="flex items-center gap-2">
            <Code size={16} />
            <span>IDE Workspace Integration</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('cicd')}
          className={`${styles.tabButton} ${activeTab === 'cicd' ? styles.activeTab : ''}`}
        >
          <div className="flex items-center gap-2">
            <CliIcon size={16} />
            <span>CI/CD Invariant pipeline</span>
          </div>
        </button>
      </div>

      {/* Interactive Cockpit Panel */}
      <div className={styles.cockpitCard}>
        {activeTab === 'github' && (
          <div className="animate-fade-in space-y-4">
            <div className={styles.prHeader}>
              <div className="flex items-center gap-2">
                <span className={styles.prNumber}>#402</span>
                <span className={styles.prTitle}>Secure auth payload structure & security headers</span>
              </div>
              <span className={styles.prStatus}>Open</span>
            </div>

            <div className={styles.securityScoreCard}>
              <div className={styles.scoreInfo}>
                <span className={styles.scoreLabel}>Security Integrity Score</span>
                <span className={styles.scoreValue}>98 / 100</span>
              </div>
              <div className={styles.scoreMeter}>
                <div className={styles.scoreFill} />
              </div>
            </div>

            {/* Simulated Git Diff */}
            <div className={styles.diffContainer}>
              <div className={styles.diffUnchanged}>// authMiddleware.ts</div>
              <div className={styles.diffUnchanged}>export const authenticateJWT = (req, res, next) =&gt; &#123;</div>
              <div className={styles.diffDel}>-   jwt.verify(token, 'hardcoded-secret', (err, user) =&gt; &#123;</div>
              <div className={styles.diffAdd}>+   jwt.verify(token, process.env.JWT_SECRET!, (err, user) =&gt; &#123;</div>
              <div className={styles.diffAdd}>+     res.setHeader('X-Frame-Options', 'DENY');</div>
              <div className={styles.diffUnchanged}>      if (err) return res.sendStatus(403);</div>
              <div className={styles.diffUnchanged}>      req.user = user;</div>
              <div className={styles.diffUnchanged}>      next();</div>
              <div className={styles.diffUnchanged}>    &#125;);</div>
              <div className={styles.diffUnchanged}>&#125;</div>
            </div>

            {/* Agent Feedback feed */}
            <div className={styles.agentFeed}>
              <div className={styles.agentMessage}>
                <div className={styles.agentMeta}>
                  <span className={styles.agentBadge}>Security Auditor Agent</span>
                  <span className={styles.agentTime}>Verified 2m ago</span>
                </div>
                <p className={styles.agentText}>
                  "Vulnerability resolution verified. The hardcoded JWT secret key has been parameterized to run from system environmental variables. X-Frame-Options security headers have been successfully injected globally. Invariant checks passed."
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ide' && (
          <div className="animate-fade-in space-y-4">
            <div className={styles.prHeader}>
              <div className="flex items-center gap-2">
                <Code size={18} className="text-yellow-400" />
                <span className={styles.prTitle}>VSCode Inline Workspace integration</span>
              </div>
              <span className={styles.prStatus} style={{ color: '#fbbf24', borderColor: 'rgba(251,191,36,0.3)', background: 'rgba(251,191,36,0.05)' }}>Reviewing</span>
            </div>

            {/* IDE Mockup */}
            <div className={styles.diffContainer}>
              <div className="text-gray-600">// server.ts</div>
              <div>wss.on('connection', (ws) =&gt; &#123;</div>
              <div className="bg-yellow-500/10 border-l-2 border-yellow-500 p-3 my-2 rounded">
                <div className="text-xs text-yellow-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <CheckCircle2 size={12} />
                  <span>YugNex: Resolve listener leak in WebSockets</span>
                </div>
                <div className="text-gray-400 text-xs mb-2">Memory leak resolved by declaring explicit close handler.</div>
                <div className="bg-black/80 p-2 rounded text-[11px] font-mono text-green-300">
                  + const handler = (msg) =&gt; ws.send(JSON.stringify(msg));<br />
                  + process.on('message', handler);<br />
                  + ws.on('close', () =&gt; process.off('message', handler));
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="px-3 py-1 bg-yellow-500 text-black text-[10px] font-bold rounded hover:bg-yellow-400 transition-colors">Accept Suggestion</button>
                  <button className="px-3 py-1 bg-transparent border border-white/20 text-white text-[10px] font-bold rounded hover:bg-white/5 transition-colors">Decline</button>
                </div>
              </div>
              <div>&#125;);</div>
            </div>
          </div>
        )}

        {activeTab === 'cicd' && (
          <div className="animate-fade-in space-y-4">
            <div className={styles.prHeader}>
              <div className="flex items-center gap-2">
                <CliIcon size={18} className="text-yellow-400" />
                <span className={styles.prTitle}>Continuous Deployment Invariant Runner</span>
              </div>
              <span className={styles.prStatus}>Pipeline Passed</span>
            </div>

            {/* CLI Console */}
            <div className={styles.cliPanel}>
              <div className={styles.cliHeader}>
                <span>RUNNER ID: #run-89025</span>
                <span className={styles.cliSuccess}>STATUS: SUCCESS</span>
              </div>
              <div>
                <span className={styles.cliPrompt}>$ </span>yugnex-pipeline --check-invariants --sandbox=docker
              </div>
              <div>[INFO] Spawning production runtime containers...</div>
              <div>[INFO] Bundling modules and scanning compiler build trees...</div>
              <div>[INFO] Executing formal invariant sweeps:</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✓ Invariant 01: API authentication integrity (passed)</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✓ Invariant 02: Resource allocation constraints (passed)</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✓ Invariant 03: Circular dependency verification (passed)</div>
              <div className={styles.cliSuccess}>[SUCCESS] System compilation build verified. Execution integrity passes with 0 memory leaks.</div>
              <div className={styles.cliPrompt}>$ deploying to production edge...</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
