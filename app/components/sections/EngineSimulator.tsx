'use client'
import React, { useState, useEffect, useRef } from 'react'
import DependencyMap from './DependencyMap'
import CodeSlider from './CodeSlider'
import { Play, Pause, RotateCcw, AlertTriangle, CheckCircle, Terminal as TermIcon, GitBranch, Cpu, MessageSquare } from 'lucide-react'

interface DebateMsg {
  role: 'Architect' | 'Developer' | 'PO' | 'Auditor'
  text: string
}

interface SimulatorTask {
  id: string
  name: string
  prompt: string
  debate: DebateMsg[]
  beforeCode: string
  afterCode: string
  beforeHighlight: string
  afterHighlight: string
  terminal: string[]
}

const TASKS: SimulatorTask[] = [
  {
    id: 'oauth',
    name: 'OAuth2 Authentication',
    prompt: 'Implement OAuth2 token authentication in user routes',
    debate: [
      { role: 'PO', text: 'We need to secure our API endpoints using standard OAuth2 JWT tokens.' },
      { role: 'Developer', text: 'I will write a custom auth middleware that extracts Bearer token and verifies it.' },
      { role: 'Architect', text: 'Wait, do not write custom token verification. Use our trusted JSONWebToken library to avoid cryptographic vulnerabilities, and apply it globally.' },
      { role: 'Developer', text: 'Agreed. Refactoring the auth middleware configuration. Checking dependency map.' },
      { role: 'Auditor', text: 'Audited. Ensure secrets are loaded from process.env, not hardcoded.' }
    ],
    beforeCode: `// userController.ts\napp.post('/api/profile', (req, res) => {\n  const token = req.headers['authorization'];\n  // VULNERABLE: Direct string comparison\n  if (token === 'admin-secret') {\n    res.send(db.getUser(req.body.id));\n  }\n});`,
    afterCode: `// authMiddleware.ts\nimport jwt from 'jsonwebtoken';\n\nexport const authenticateJWT = (req, res, next) => {\n  const authHeader = req.headers.authorization;\n  if (authHeader?.startsWith('Bearer ')) {\n    const token = authHeader.substring(7);\n    jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {\n      if (err) return res.sendStatus(403);\n      req.user = user;\n      next();\n    });\n  } else {\n    res.sendStatus(401);\n  }\n};`,
    beforeHighlight: 'Direct string verification, easily bypassable',
    afterHighlight: 'Cryptographically secure verification, env-loaded secrets',
    terminal: [
      '$ yugnex run scan --target routes/',
      'Scanned 14 files. Found security gaps in: userController.ts',
      '$ yugnex run refactor --task "Implement OAuth2 authMiddleware"',
      'Created app/lib/authMiddleware.ts',
      'Modified app/routes/userController.ts',
      '$ npm run test',
      '✓ authMiddleware.ts - Token Validation (140ms)',
      '✓ userController.ts - Secure Profiles (72ms)',
      'Success! Build and compilation verified (1.1s)'
    ]
  },
  {
    id: 'sql',
    name: 'Sanitize SQL Queries',
    prompt: 'Sanitize user queries in database profile search routes',
    debate: [
      { role: 'PO', text: 'The penetration test team flagged a SQL injection vulnerability in profile searches.' },
      { role: 'Developer', text: 'I can add single-quote string replacement to clean the input.' },
      { role: 'Architect', text: 'Rejecting string replacements. They are bypassable. Re-write the database layer to use prepared statements.' },
      { role: 'Developer', text: 'Applying prepared statement parameterization. Re-linking DB query nodes.' },
      { role: 'Auditor', text: 'Prepared statements verify inputs successfully. Security audit passes.' }
    ],
    beforeCode: `// userModel.ts\nconst searchUser = async (username) => {\n  // VULNERABLE: Direct SQL injection possible\n  const query = \`SELECT * FROM users WHERE name = '\${username}'\`;\n  const [rows] = await db.query(query);\n  return rows;\n}`,
    afterCode: `// userModel.ts\nconst searchUser = async (username) => {\n  // SAFE: Prepared statement parameterization\n  const query = 'SELECT * FROM users WHERE name = ?';\n  const [rows] = await db.query(query, [username]);\n  return rows;\n}`,
    beforeHighlight: 'Direct string interpolation of untrusted input',
    afterHighlight: 'Query binding ensures input is treated as literal, not SQL',
    terminal: [
      '$ yugnex run audit --target models/',
      'CRITICAL: SQL injection vulnerability found in userModel.ts:L4',
      '$ yugnex run refactor --task "Parameterize raw database queries"',
      'Modified userModel.ts to parameter binding',
      '$ npm run test',
      '✓ userModel.ts - Prepared Statements (120ms)',
      '✓ auth.ts - Parameter validation (50ms)',
      'Success! Security checks passed (0.9s)'
    ]
  },
  {
    id: 'graphql',
    name: 'GraphQL N+1 Resolution',
    prompt: 'Optimize relational database caching in resolvers',
    debate: [
      { role: 'PO', text: 'Users are complaining that books schema load is lagging.' },
      { role: 'Developer', text: 'It executes database queries for every single author row returned.' },
      { role: 'Architect', text: 'Classic N+1 relational database bottleneck. Let\'s introduce a DataLoader batching system to optimize cache queries.' },
      { role: 'Developer', text: 'Implemented DataLoader batching. Resolving dependency schema.' },
      { role: 'Auditor', text: 'Performance audit validated. No redundant query calls.' }
    ],
    beforeCode: `// resolvers.ts\nconst authorResolver = {\n  books: async (author) => {\n    // N+1 problem: query executed for every single author\n    return await db.query(\n      'SELECT * FROM books WHERE author_id = ' + author.id\n    );\n  }\n}`,
    afterCode: `// resolvers.ts\nimport DataLoader from 'dataloader';\n\nconst bookLoader = new DataLoader(async (authorIds) => {\n  const books = await db.query(\n    'SELECT * FROM books WHERE author_id IN (?)',\n    [authorIds]\n  );\n  return authorIds.map(id => books.filter(b => b.author_id === id));\n});\n\nconst authorResolver = {\n  books: (author) => bookLoader.load(author.id)\n}`,
    beforeHighlight: 'Executes individual query loop for every author',
    afterHighlight: 'Batches dynamic ID lookups into a single sql execution',
    terminal: [
      '$ yugnex run performance --target graphql/',
      'WARNING: GraphQL N+1 query loop found in authorResolver',
      '$ yugnex run refactor --task "Batch queries using DataLoader"',
      'Implemented DataLoader inside resolvers.ts',
      '$ npm run benchmark',
      'Queries executed: 120 -> 2 (98.3% database speedup)',
      'Success! Speed performance metrics validated (1.4s)'
    ]
  },
  {
    id: 'leak',
    name: 'Fix Connection Leak',
    prompt: 'Fix event listener leakage in websocket pool',
    debate: [
      { role: 'PO', text: 'Memory charts show container usage climbs steadily over 24 hours.' },
      { role: 'Developer', text: 'There seems to be an unclosed handler on socket connection.' },
      { role: 'Architect', text: 'Correct. The process listener is registered but never unregistered when the client disconnects. Add a teardown callback.' },
      { role: 'Developer', text: 'Writing close listener callback. Re-building socket server node.' },
      { role: 'Auditor', text: 'Verified heap usage remains stable over 10,000 connection sweeps.' }
    ],
    beforeCode: `// server.ts\nwss.on('connection', (ws) => {\n  // leak: listener created but never destroyed on socket close\n  process.on('message', (msg) => {\n    ws.send(JSON.stringify(msg));\n  });\n});`,
    afterCode: `// server.ts\nwss.on('connection', (ws) => {\n  const handler = (msg) => {\n    if (ws.readyState === ws.OPEN) {\n      ws.send(JSON.stringify(msg));\n    }\n  };\n  process.on('message', handler);\n  \n  // SAFE: Listener cleaned up on socket closure\n  ws.on('close', () => {\n    process.off('message', handler);\n  });\n});`,
    beforeHighlight: 'Process event listener persists forever, leaking memory',
    afterHighlight: 'Listener is correctly removed on socket disconnect',
    terminal: [
      '$ yugnex run diagnostic --target connection/',
      'DETECTED: Memory leak in server.ts (listener leak on process)',
      '$ yugnex run refactor --task "Close handler registration"',
      'Added socket close cleanup hook',
      '$ npm run test',
      '✓ server.ts - Connection Teardown (130ms)',
      'Success! Heap leak verified resolved (1.2s)'
    ]
  }
]

export default function EngineSimulator() {
  const [activeTaskId, setActiveTaskId] = useState<string>('oauth')
  const [phase, setPhase] = useState<'idle' | 'scanning' | 'modifying' | 'testing' | 'success'>('idle')
  const [isPlaying, setIsPlaying] = useState(false)
  const [visibleDebate, setVisibleDebate] = useState<DebateMsg[]>([])
  const [visibleTerminal, setVisibleTerminal] = useState<string[]>([])
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1) // Speed scale

  const activeTask = TASKS.find(t => t.id === activeTaskId) || TASKS[0]
  const timerRef = useRef<NodeJS.Timeout[]>([])

  const clearTimers = () => {
    timerRef.current.forEach(clearTimeout)
    timerRef.current = []
  }

  const selectTask = (taskId: string) => {
    clearTimers()
    setActiveTaskId(taskId)
    setPhase('idle')
    setIsPlaying(false)
    setVisibleDebate([])
    setVisibleTerminal([])
  }

  const runSimulation = () => {
    clearTimers()
    setPhase('scanning')
    setVisibleDebate([])
    setVisibleTerminal([])

    const delay = (ms: number) => ms / playbackSpeed

    // 1. Scanning Phase
    let currentDebate: DebateMsg[] = []
    let currentTerminal: string[] = []

    // Push PO message
    timerRef.current.push(setTimeout(() => {
      currentDebate.push(activeTask.debate[0])
      setVisibleDebate([...currentDebate])
      currentTerminal.push(activeTask.terminal[0])
      setVisibleTerminal([...currentTerminal])
    }, delay(500)))

    // Push Developer message & terminal scan result
    timerRef.current.push(setTimeout(() => {
      currentDebate.push(activeTask.debate[1])
      setVisibleDebate([...currentDebate])
      currentTerminal.push(activeTask.terminal[1])
      setVisibleTerminal([...currentTerminal])
    }, delay(2200)))

    // Move to Modifying Phase
    timerRef.current.push(setTimeout(() => {
      setPhase('modifying')
      currentDebate.push(activeTask.debate[2])
      setVisibleDebate([...currentDebate])
      currentTerminal.push(activeTask.terminal[2])
      setVisibleTerminal([...currentTerminal])
    }, delay(4000)))

    // Push Architect reply and code file creation logs
    timerRef.current.push(setTimeout(() => {
      currentDebate.push(activeTask.debate[3])
      setVisibleDebate([...currentDebate])
      currentTerminal.push(activeTask.terminal[3])
      if (activeTask.terminal[4]) currentTerminal.push(activeTask.terminal[4])
      setVisibleTerminal([...currentTerminal])
    }, delay(6000)))

    // Move to Testing Phase
    timerRef.current.push(setTimeout(() => {
      setPhase('testing')
      const testCmdIndex = activeTask.id === 'oauth' || activeTask.id === 'sql' ? 5 : 4
      currentTerminal.push(activeTask.terminal[testCmdIndex])
      setVisibleTerminal([...currentTerminal])
    }, delay(8500)))

    // Push test reports
    timerRef.current.push(setTimeout(() => {
      const testReportIndex = activeTask.id === 'oauth' || activeTask.id === 'sql' ? 6 : 5
      currentTerminal.push(activeTask.terminal[testReportIndex])
      if (activeTask.id === 'oauth' || activeTask.id === 'sql') {
        currentTerminal.push(activeTask.terminal[7])
      }
      setVisibleTerminal([...currentTerminal])
    }, delay(10000)))

    // Move to Success / Audit Verified Phase
    timerRef.current.push(setTimeout(() => {
      setPhase('success')
      currentDebate.push(activeTask.debate[4])
      setVisibleDebate([...currentDebate])
      const successIndex = activeTask.id === 'oauth' || activeTask.id === 'sql' ? 8 : 6
      currentTerminal.push(activeTask.terminal[successIndex])
      setVisibleTerminal([...currentTerminal])
      setIsPlaying(false)
    }, delay(11800)))
  }

  // Toggle playback
  useEffect(() => {
    if (isPlaying) {
      runSimulation()
    } else {
      clearTimers()
    }
    return () => clearTimers()
  }, [isPlaying, activeTaskId, playbackSpeed])

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'Architect': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'Developer': return 'bg-pink-500/20 text-pink-400 border-pink-500/30'
      case 'PO': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'Auditor': return 'bg-green-500/20 text-green-400 border-green-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <section id="simulator" className="relative z-10 py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          The YugNex Engine in Action
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light">
          Watch our specialized AI agents coordinate, verify architectural boundaries, run test suites, and audit security in real time.
        </p>
      </div>

      {/* R&D Simulation Disclaimer Banner */}
      <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-lg p-4 text-xs text-yellow-500/80 leading-relaxed max-w-4xl mx-auto mb-8 text-center backdrop-blur-sm">
        <strong>⚠️ R&D Simulation Disclaimer:</strong> This interface is an interactive demonstration for conceptual visualization purposes. The YugNex autonomous software engineering reasoning engine is currently in the Research & Development (R&D) phase. No public production digital application or fully optimized system is active at this time.
      </div>

      {/* Control Navigation Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 border border-white/10 bg-white/5 rounded-t-xl backdrop-blur-md">
        {/* Task Selectors */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {TASKS.map((task) => (
            <button
              key={task.id}
              onClick={() => selectTask(task.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all duration-300 ${
                activeTaskId === task.id
                  ? 'bg-yellow-500 text-black border-yellow-500 shadow-md'
                  : 'bg-transparent text-gray-400 border-white/10 hover:text-white hover:border-white/30'
              }`}
            >
              {task.name}
            </button>
          ))}
        </div>

        {/* Playback Controls */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          {/* Speed switch */}
          <button
            onClick={() => setPlaybackSpeed(prev => (prev === 1 ? 2 : prev === 2 ? 4 : 1))}
            className="px-3 py-1.5 text-[10px] font-bold uppercase rounded border border-white/10 text-gray-400 hover:text-white transition-colors"
          >
            Speed: {playbackSpeed}x
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-5 py-2 text-xs font-bold rounded-lg bg-yellow-500 text-black hover:bg-yellow-400 transition-colors shadow-md"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            {isPlaying ? 'Pause' : 'Start Simulation'}
          </button>

          <button
            onClick={() => selectTask(activeTaskId)}
            className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-white transition-colors"
            title="Reset"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Simulator Workspace Grid */}
      <div className="workspace-container bg-black/50 border border-t-0 border-white/10 rounded-b-xl overflow-hidden">
        {/* Panel 1: Agent Debate Console */}
        <div className="sim-panel">
          <div className="sim-panel-header">
            <div className="sim-panel-title">
              <MessageSquare size={13} className="text-yellow-500" />
              <span>Agent Debate Feed</span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/70" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
              <span className="w-2 h-2 rounded-full bg-green-500/70" />
            </div>
          </div>
          <div className="flex-grow p-4 overflow-y-auto space-y-4 font-sans text-xs min-h-[180px] max-h-[350px] lg:max-h-none">
            {visibleDebate.length === 0 ? (
              <div className="text-gray-500 italic text-center pt-8">
                Simulation idle. Click 'Start Simulation' to begin.
              </div>
            ) : (
              visibleDebate.map((msg, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className={`px-2 py-0.5 rounded border text-[9px] font-bold uppercase tracking-wider ${getRoleBadge(msg.role)}`}>
                      {msg.role}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-gray-300 leading-relaxed">
                    {msg.text}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Panel 2: Interactive Dependency Map */}
        <div className="sim-panel">
          <div className="sim-panel-header">
            <div className="sim-panel-title">
              <GitBranch size={13} className="text-yellow-500" />
              <span>System Dependency Map</span>
            </div>
            <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Interactive Nodes</span>
          </div>
          <div className="flex-grow overflow-hidden relative min-h-[320px]">
            <DependencyMap activePhase={phase} />
          </div>
        </div>

        {/* Panel 3: Before/After Code Slider */}
        <div className="sim-panel">
          <div className="sim-panel-header">
            <div className="sim-panel-title">
              <Cpu size={13} className="text-yellow-500" />
              <span>Code Refactor Workspace</span>
            </div>
            <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest font-mono">auth.ts</span>
          </div>
          <div className="flex-grow overflow-hidden">
            <CodeSlider
              beforeCode={activeTask.beforeCode}
              afterCode={activeTask.afterCode}
              beforeHighlight={activeTask.beforeHighlight}
              afterHighlight={activeTask.afterHighlight}
            />
          </div>
        </div>

        {/* Panel 4: Terminal Console (Bottom, spans full width) */}
        <div className="col-span-1 lg:col-span-3 sim-panel" style={{ height: '220px' }}>
          <div className="sim-panel-header bg-[#050505]">
            <div className="sim-panel-title text-gray-400">
              <TermIcon size={13} className="text-yellow-500" />
              <span>System Console Diagnostics</span>
            </div>
            <span className="text-[9px] text-gray-600 font-mono">yugnexd --daemon</span>
          </div>
          <div className="flex-grow p-4 bg-[#050505] text-[#d4d4d4] font-mono text-[10px] sm:text-xs overflow-y-auto space-y-1.5">
            {visibleTerminal.length === 0 ? (
              <div className="text-gray-600 italic">
                $ waiting for engine initialization hook...
              </div>
            ) : (
              visibleTerminal.map((line, idx) => {
                const isCmd = line.startsWith('$')
                const isSuccess = line.includes('Success!') || line.includes('✓')
                const isCritical = line.includes('CRITICAL') || line.includes('DETECTED')
                const isWarning = line.includes('WARNING')

                let textColor = 'text-gray-300'
                if (isCmd) textColor = 'text-yellow-500/80 font-semibold'
                else if (isSuccess) textColor = 'text-green-400 font-medium'
                else if (isCritical) textColor = 'text-red-400 font-bold'
                else if (isWarning) textColor = 'text-orange-400 font-medium'

                return (
                  <div key={idx} className={`${textColor} leading-relaxed`}>
                    {line}
                  </div>
                )
              })
            )}
            {phase !== 'idle' && phase !== 'success' && isPlaying && (
              <div className="text-yellow-500 animate-pulse font-semibold">
                $ compiling and analyzing<span className="cursor-blink">_</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
