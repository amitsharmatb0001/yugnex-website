// scripts/init-research-db.js
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

// Load environment variables if .env exists
try {
  const envPath = path.join(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
      const parts = line.split('=');
      if (parts.length === 2) {
        process.env[parts[0].trim()] = parts[1].trim();
      }
    });
  }
} catch (e) {
  console.log('No .env file read, using defaults');
}

const dbConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'yugnex_prod',
  insecureAuth: true
};

async function run() {
  console.log('Connecting to database:', dbConfig.database);
  const connection = await mysql.createConnection(dbConfig);

  try {
    // 1. Create table
    console.log('Creating table research_papers...');
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS \`research_papers\` (
        \`id\` VARCHAR(100) PRIMARY KEY,
        \`title\` VARCHAR(500) NOT NULL,
        \`description\` TEXT NOT NULL,
        \`publish_date\` DATE NOT NULL,
        \`authors\` VARCHAR(500) NOT NULL,
        \`tags\` VARCHAR(500) NOT NULL,
        \`pdf_url\` VARCHAR(500) DEFAULT NULL,
        \`content_html\` LONGTEXT NOT NULL,
        \`created_at\` DATETIME DEFAULT CURRENT_TIMESTAMP,
        \`updated_at\` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX \`idx_publish_date\` (\`publish_date\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // 2. Load NexSidi Paper HTML
    console.log('Reading nexsidi-research.html...');
    const nexsidiHtmlPath = 'E:/yugnex-website/nexsidi-research.html';
    let nexsidiHtml = fs.readFileSync(nexsidiHtmlPath, 'utf8');
    
    // Extract the body content between <body> and </body>
    const bodyStartIndex = nexsidiHtml.indexOf('<body>') + 6;
    const bodyEndIndex = nexsidiHtml.indexOf('</body>');
    const nexsidiBody = nexsidiHtml.substring(bodyStartIndex, bodyEndIndex).trim();

    const nexsidiPaper = {
      id: 'nexsidi',
      title: 'NexSidi: Persistent Multi-Agent Software Engineering with Fully Adversarial Verification and Cryptographic Context Integrity',
      description: 'A multi-agent framework for autonomous software engineering with fully adversarial quality assurance, cryptographic context integrity, and hardware-enforced execution isolation.',
      publish_date: '2026-01-24',
      authors: 'Amit Sharma',
      tags: 'Multi-Agent Systems, Adversarial QA, Software Engineering, Context Preservation',
      pdf_url: null,
      content_html: nexsidiBody
    };

    // 3. Load and structure Toward Autonomous Paper
    console.log('Formatting toward-autonomous paper...');
    const towardAutonomousBody = `
<!-- NAV -->
<nav class="nav">
  <a class="nav-logo" href="/en">
    <div class="nav-logo-box">N</div>
    YugNex
  </a>
  <div class="nav-divider"></div>
  <div class="nav-crumb">
    <a href="/en/research">Research</a>
    <span class="nav-crumb-sep">/</span>
    <span style="color:var(--tx2)">Toward Autonomous</span>
  </div>
  <div class="nav-right">
    <a class="nav-link" href="/en/technology">Technology</a>
    <a class="nav-link" href="/en/vision">Vision</a>
    <a class="nav-cta" href="/en">yugnex.com</a>
  </div>
</nav>

<!-- HERO -->
<header class="hero">
  <div class="hero-tags">
    <span class="htag htag-am">Research Paper</span>
    <span class="htag htag-tl">Multi-Agent Systems</span>
    <span class="htag htag-gr">Software Reasoning</span>
    <span class="htag htag-wt">AI Architecture</span>
    <span class="htag htag-wt">Context Problem</span>
  </div>

  <h1 class="hero-title">
    Toward Autonomous Software Engineering: <span class="acc">Challenges and Architectural Directions</span>
  </h1>
  <p class="hero-subtitle">A Research Perspective on Multi-Agent AI Systems for Software Development</p>

  <div class="hero-meta">
    <div class="meta-block">
      <div class="meta-label">Author</div>
      <div class="meta-val"><strong>YugNex Technology Research Division</strong><small>Bhilwara, Rajasthan, India</small></div>
    </div>
    <div class="meta-block">
      <div class="meta-label">Institution</div>
      <div class="meta-val"><strong>YugNex Technology</strong><small>Foundational AI Systems Lab<small>DPIIT Recognized · DIPP234393</small></small></div>
    </div>
    <div class="meta-block">
      <div class="meta-label">Published</div>
      <div class="meta-val"><strong>January 2026</strong><small>Technical Whitepaper · v1.0</small></div>
    </div>
    <div class="meta-block">
      <div class="meta-label">Status</div>
      <div class="meta-val"><strong style="color:var(--am)">Patent Pending</strong><small>Active R&D</small></div>
    </div>
  </div>

  <div class="hero-actions">
    <a class="btn btn-gold" href="/en/technology">⬡ Explore Technology</a>
    <a class="btn btn-outline" href="/en/research">← All Research</a>
    <a class="btn btn-outline" href="/YugNex_Research_Whitepaper.pdf" target="_blank" rel="noopener noreferrer">⟶ Download original PDF</a>
  </div>
</header>

<!-- ABSTRACT -->
<section class="abstract-wrap">
  <div class="abstract-box">
    <div class="abstract-lbl">Abstract</div>
    <p class="abstract-p">The complexity of modern software systems continues to grow exponentially while developer productivity remains fundamentally constrained by human cognitive limitations. Current AI-assisted development tools, despite significant advances in code generation capabilities, have not addressed the core challenge: enabling machines to reason about software systems with the depth and contextual awareness of experienced engineers. This paper explores fundamental questions around autonomous software understanding, architectural reasoning, and collaborative AI systems designed specifically for the unique demands of software engineering. We present our research directions in multi-agent architectures, discuss the limitations of existing approaches, and outline key challenges that must be addressed to achieve truly autonomous software engineering capabilities.</p>
  </div>
</section>

<!-- LAYOUT -->
<div class="layout">
  <!-- TOC -->
  <aside class="toc">
    <div class="toc-lbl">Contents</div>
    <ul class="toc-list">
      <li><a class="toc-a active" href="#intro"><span class="toc-n">1</span>Introduction</a></li>
      <li><a class="toc-a" href="#state"><span class="toc-n">2</span>State of AI Development</a></li>
      <li><a class="toc-a" href="#multiagent"><span class="toc-n">3</span>Multi-Agent Architectures</a></li>
      <li><a class="toc-a" href="#architectural"><span class="toc-n">4</span>Architectural Understanding</a></li>
      <li><a class="toc-a" href="#context"><span class="toc-n">5</span>The Context Problem</a></li>
      <li><a class="toc-a" href="#lessons"><span class="toc-n">6</span>Lessons from Failures</a></li>
      <li><a class="toc-a" href="#methodology"><span class="toc-n">7</span>Research Methodology</a></li>
      <li><a class="toc-a" href="#status"><span class="toc-n">8</span>Status and Directions</a></li>
      <li><a class="toc-a" href="#conclusion"><span class="toc-n">9</span>Conclusion</a></li>
    </ul>
    <div class="toc-hr"></div>
    <div class="toc-stat">
      <div class="toc-stat-row"><span class="toc-stat-k">Status</span><span class="toc-stat-v">Patent Pending</span></div>
      <div class="toc-stat-row"><span class="toc-stat-k">Publisher</span><span class="toc-stat-v">YugNex Research</span></div>
      <div class="toc-stat-row"><span class="toc-stat-k">DPIIT</span><span class="toc-stat-v">DIPP234393</span></div>
    </div>
  </aside>

  <!-- PAPER -->
  <main class="paper">
    <!-- 1. INTRODUCTION -->
    <section class="sec" id="intro">
      <div class="sec-hdr">
        <span class="sec-num">01</span>
        <h2 class="sec-title">Introduction</h2>
      </div>
      <p class="p">Software engineering in 2026 faces a fundamental paradox. While AI models have achieved remarkable capabilities in code generation and natural language understanding, their application to real-world software development remains largely superficial. Developers receive autocomplete suggestions and snippet generation, but the fundamental bottleneck persists: <em>understanding complex systems, reasoning about architectural implications, and making safe transformations at scale.</em></p>
      <p class="p">The problem is not a lack of computational power or training data. Rather, it is the absence of architectures designed specifically for the unique challenges of software system reasoning. Modern codebases are not simply collections of text to be processed; they are intricate webs of dependencies, implicit contracts, and emergent behaviors that arise from component interactions. A single change can cascade through dozens of modules, affecting functionality in non-obvious ways.</p>
      <p class="p">This paper presents our research directions at YugNex Technology, where we are exploring architectural approaches to enable genuine autonomous software engineering. We discuss the limitations of current approaches, present our perspective on multi-agent architectures for software reasoning, and identify key challenges that must be addressed to move beyond code generation toward true system understanding.</p>
    </section>

    <!-- 2. THE STATE OF AI-ASSISTED DEVELOPMENT -->
    <section class="sec" id="state">
      <div class="sec-hdr">
        <span class="sec-num">02</span>
        <h2 class="sec-title">The State of AI-Assisted Development</h2>
      </div>
      <p class="p">The application of artificial intelligence to software engineering has produced remarkable results in narrow domains. Modern tools can autocomplete code with high accuracy, generate functions from natural language descriptions, and even translate between programming languages. Yet these achievements, while practically useful, represent a fundamentally limited approach to the broader challenge of software engineering.</p>
      <p class="p">The limitation stems from a mismatch between the architectures we apply and the nature of software itself. Code is not simply text to be generated; it is a precise specification of behavior embedded within complex systems of dependencies, abstractions, and emergent properties. When developers work on real-world systems, they engage in reasoning that extends far beyond the immediate code they're writing.</p>
      
      <div class="subsec">
        <h3 class="subsec-h">2.1 Current Approaches and Their Limitations</h3>
        <p class="p">Existing AI coding assistants primarily operate through pattern matching and statistical prediction. Given a code context, they predict the most likely continuation based on patterns learned from training data. This approach works well for common patterns but fails when faced with novel architectural decisions or complex system-level reasoning. Three fundamental limitations characterize current approaches:</p>
        <ul class="ref-list">
          <li>
            <span class="ref-n">1</span>
            <span><strong>Context Limitations:</strong> Software systems often comprise millions of lines of code distributed across thousands of files. No single model's context window can contain even a fraction of this code, yet understanding it is often essential for making correct decisions. Simple retrieval mechanisms can surface relevant snippets, but determining what is truly relevant requires already understanding the system—a circular dependency.</span>
          </li>
          <li>
            <span class="ref-n">2</span>
            <span><strong>Reasoning Depth:</strong> Code generation and code understanding are fundamentally different tasks. Generating syntactically correct code that matches patterns is insufficient for professional software engineering. Understanding why code exists, what invariants it maintains, and how it contributes to system-level goals requires reasoning about developer intent and architectural principles that may never be explicitly documented.</span>
          </li>
          <li>
            <span class="ref-n">3</span>
            <span><strong>Systemic Effects:</strong> Changes to software propagate through dependency chains in ways that are often non-obvious. A modification to a low-level utility function might affect dozens of higher-level components, each in slightly different ways. Reasoning about these cascade effects requires understanding not just individual components but their relationships and interactions.</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- 3. MULTI-AGENT ARCHITECTURES -->
    <section class="sec" id="multiagent">
      <div class="sec-hdr">
        <span class="sec-num">03</span>
        <h2 class="sec-title">Multi-Agent Architectures for Software Reasoning</h2>
      </div>
      <p class="p">Our research is grounded in the observation that expert software engineering is fundamentally a collaborative, multi-perspective activity. When senior engineers approach a complex change, they don't simply write code. They analyze architecture, evaluate dependencies, consider performance implications, assess security risks, and reason about maintainability. This multifaceted analysis cannot be effectively compressed into a single model's forward pass.</p>
      <p class="p">We propose and are actively researching multi-agent architectures where specialized AI components, each designed for specific domains of software reasoning, collaborate to achieve comprehensive system understanding. This approach mirrors how engineering teams naturally organize—with individuals bringing specialized expertise in areas like architecture, security, performance, and domain logic.</p>

      <div class="subsec">
        <h3 class="subsec-h">3.1 Specialization as a Design Principle</h3>
        <p class="p">The key insight driving our architectural approach is that different aspects of software engineering require different types of reasoning. Security analysis requires different knowledge bases and analytical frameworks than performance optimization, which in turn differs from architectural design. A monolithic approach must balance these competing demands, while a more structured architecture can bring specialized capabilities to bear on each concern.</p>
        <p class="p">Early validation in our research suggests that specialized components significantly outperform generalist approaches when reasoning about complex architectural decisions. A component focused on performance analysis, for instance, can identify bottlenecks that a general-purpose model overlooks because its attention is necessarily distributed across many concerns.</p>
      </div>

      <div class="subsec">
        <h3 class="subsec-h">3.2 Coordination and Consensus Mechanisms</h3>
        <p class="p">The challenge in multi-agent architectures lies not in the individual components, but in how they coordinate. Software reasoning requires components to share context dynamically, challenge each other's assumptions, and reach consensus through structured deliberation. Our research explores coordination mechanisms that enable components to maintain consistent system understanding while operating semi-autonomously within their domains of expertise.</p>
        <p class="p">This coordination problem is distinct from traditional ensemble methods or voting schemes. Software engineering decisions often require weighing trade-offs between competing concerns—security versus performance, abstraction versus simplicity, flexibility versus maintainability. The coordination layer must facilitate these nuanced discussions rather than simply aggregating predictions.</p>
      </div>
    </section>

    <!-- 4. BEYOND CODE GENERATION: ARCHITECTURAL UNDERSTANDING -->
    <section class="sec" id="architectural">
      <div class="sec-hdr">
        <span class="sec-num">04</span>
        <h2 class="sec-title">Beyond Code Generation: Architectural Understanding</h2>
      </div>
      <p class="p">Perhaps the most significant limitation of current AI coding tools is their focus on generation over comprehension. These systems are optimized to produce code that matches patterns in their training data, but they lack mechanisms for understanding why code exists, how it relates to broader architectural goals, or what implicit contracts it satisfies.</p>
      <p class="p">Our research develops what we term "architectural reasoning capabilities"—the ability to understand software not as text, but as a system with emergent properties. This requires moving beyond syntax and semantics into the realm of intentionality and design rationale.</p>

      <div class="subsec">
        <h3 class="subsec-h">4.1 Layered Analysis Framework</h3>
        <p class="p">We approach architectural understanding through layered analysis. Lower-level components parse syntax and understand immediate control flow. Higher-level components reason about module relationships, dependency graphs, and architectural patterns. The highest-level components consider system-wide properties like scalability constraints, security boundaries, and business logic correctness.</p>
        <p class="p">Information flows bidirectionally in this framework—low-level insights inform architectural reasoning, while architectural understanding constrains low-level decisions. This hierarchical approach addresses a critical failure mode we observed in flat architectures: the inability to distinguish between implementation details and architectural constraints.</p>
      </div>
    </section>

    <!-- 5. THE CONTEXT PROBLEM IN SOFTWARE AI -->
    <section class="sec" id="context">
      <div class="sec-hdr">
        <span class="sec-num">05</span>
        <h2 class="sec-title">The Context Problem in Software AI</h2>
      </div>
      <p class="p">One of the most persistent challenges in applying AI to software engineering is what we term the "context problem." Modern language models operate within fixed context windows, but real-world software systems are orders of magnitude larger. A developer working on a module may need to understand code spread across hundreds of files, spanning millions of lines.</p>
      <p class="p">Simple retrieval-augmented generation (RAG) approaches attempt to address this by retrieving relevant code snippets, but this fundamentally misunderstands the nature of software context. Relevance in software is not merely textual similarity—it's about causal relationships, dependency chains, and architectural boundaries. A function might be textually dissimilar to the code being modified but absolutely critical to understanding because of a subtle dependency relationship.</p>

      <div class="subsec">
        <h3 class="subsec-h">5.1 Dynamic Context Construction</h3>
        <p class="p">Our research develops context management strategies that go beyond retrieval. Rather than pulling disconnected snippets, we are exploring approaches to build dynamic context representations that capture the relevant portions of system architecture. These representations capture not just code, but relationships: which modules depend on others, what invariants must be maintained, where abstraction boundaries exist.</p>
        <p class="p">The challenge is that these relationships are often implicit, emerging from the interaction of multiple components rather than being explicitly encoded anywhere. Understanding them requires inference and reasoning, which in turn requires context—a circular dependency that must be carefully unwound through iterative refinement.</p>
      </div>
    </section>

    <!-- 6. LESSONS FROM FAILED APPROACHES -->
    <section class="sec" id="lessons">
      <div class="sec-hdr">
        <span class="sec-num">06</span>
        <h2 class="sec-title">Lessons from Failed Approaches</h2>
      </div>
      <p class="p">Research progress requires honesty about failures. Many approaches that appear promising in theory or on carefully constructed benchmarks prove inadequate when applied to real-world software systems. We document several key learnings from our exploration of various architectural approaches:</p>
      <ul class="ref-list">
        <li>
          <span class="ref-n">1</span>
          <span><strong>Model Scale Alone Is Insufficient:</strong> Scaling model size does not solve the reasoning gap. Larger models can memorize more patterns and handle more context, but they do not fundamentally change the nature of the reasoning process. We have observed that models can grow skilled at pattern matching without developing genuine understanding of software principles.</span>
        </li>
        <li>
          <span class="ref-n">2</span>
          <span><strong>Domain Fine-Tuning Has Limits:</strong> Fine-tuning on domain-specific code does not confer architectural reasoning abilities. A model trained on millions of repositories learns to replicate common patterns but struggles with novel architectural decisions that require first-principles reasoning rather than analogy to training examples.</span>
        </li>
        <li>
          <span class="ref-n">3</span>
          <span><strong>Benchmark Performance Misleads:</strong> Standard benchmarks correlate poorly with real-world utility. A system can achieve high scores on code generation tasks while producing code that introduces subtle bugs, violates architectural principles, or creates maintainability problems that only become apparent over time. This realization has fundamentally shaped our evaluation methodology.</span>
        </li>
        <li>
          <span class="ref-n">4</span>
          <span><strong>Complexity Cannot Be Hidden:</strong> Early prototypes that attempted to present users with simple interfaces inevitably failed because software engineering is not a simple task. The interface must reflect the actual complexity of the reasoning process, even as the system handles much of that complexity internally.</span>
        </li>
      </ul>
    </section>

    <!-- 7. RESEARCH METHODOLOGY -->
    <section class="sec" id="methodology">
      <div class="sec-hdr">
        <span class="sec-num">07</span>
        <h2 class="sec-title">Research Methodology and Validation</h2>
      </div>
      <p class="p">Our research methodology prioritizes production-grade reliability over benchmark performance. This requires testing against real-world codebases with their full complexity—messy dependencies, inconsistent patterns, incomplete documentation, and all the characteristics that academic benchmarks carefully exclude.</p>
      <p class="p">Evaluation focuses on multiple dimensions simultaneously. We assess not just whether generated code is correct, but whether it respects architectural boundaries, maintains system invariants, follows established patterns, and can be understood by human maintainers. A solution that succeeds on one dimension while failing on others is not a solution at all.</p>
      <p class="p">This comprehensive evaluation is expensive and slow, but we believe it essential. Systems that work well in controlled environments but fail unpredictably in production are worse than useless—they create false confidence and hidden failures that only manifest later.</p>
    </section>

    <!-- 8. STATUS AND FUTURE DIRECTIONS -->
    <section class="sec" id="status">
      <div class="sec-hdr">
        <span class="sec-num">08</span>
        <h2 class="sec-title">Current Status and Future Directions</h2>
      </div>
      <p class="p">We are currently engaged in what might be termed "deep prototyping"—building systems sophisticated enough to test our architectural hypotheses while maintaining the flexibility to pivot as we learn. This work spans several interconnected areas, each presenting distinct challenges.</p>
      <p class="p">One focus is developing mechanisms for reliable reasoning under the constraints of real-world systems—incomplete information, evolving codebases, and the need to operate within strict correctness and safety requirements. Another is exploring how systems can learn from experience, improving their reasoning over time without requiring complete retraining.</p>
      <p class="p">We have achieved preliminary validation of our core architectural approaches on complex reasoning tasks. Significant challenges remain, particularly around edge case handling, reasoning under uncertainty, and maintaining performance at enterprise scale. These challenges represent the current frontier of our research.</p>

      <div class="subsec">
        <h3 class="subsec-h">8.1 Open Questions</h3>
        <p class="p">Many fundamental questions remain open in the field of autonomous software engineering:</p>
        <ul class="ref-list">
          <li><span class="ref-n">?</span><span>How can systems reason about software when documentation is incomplete or contradictory?</span></li>
          <li><span class="ref-n">?</span><span>How do we ensure that autonomous decisions remain aligned with developer intent even as systems operate with increasing independence?</span></li>
          <li><span class="ref-n">?</span><span>How can systems detect when they've reached the limits of their understanding and know to ask for human guidance?</span></li>
          <li><span class="ref-n">?</span><span>Can machines move beyond assisting with existing code to participating in architectural design from first principles?</span></li>
        </ul>
      </div>
    </section>

    <!-- 9. CONCLUSION -->
    <section class="sec" id="conclusion">
      <div class="sec-hdr">
        <span class="sec-num">09</span>
        <h2 class="sec-title">Conclusion</h2>
      </div>
      <p class="p">The path to autonomous software engineering is not simply a matter of larger models or more training data. It requires fundamental advances in how AI systems represent, reason about, and operate on complex software systems. The challenges are significant, but we believe they are tractable with the right architectural approaches and sufficient research commitment.</p>
      <p class="p">Our work at YugNex Technology suggests that progress is possible, but it will require moving beyond current paradigms toward systems specifically designed for the unique demands of software engineering. Multi-agent architectures offer a promising direction, enabling specialized reasoning while maintaining system-wide coherence.</p>
      <p class="p">The goal is not to replace human engineers but to create true collaborative partners—systems that understand, reason, and contribute at levels previously requiring human expertise. Achieving this goal will require continued research, rigorous validation, and willingness to build systems that work reliably rather than systems that demo impressively.</p>
    </section>
  </main>
</div>

<!-- FOOTER -->
<footer class="footer">
  <div class="footer-brand">
    <div class="footer-box">N</div>
    <div>
      <div style="color:var(--tx2);font-weight:600;font-size:13px">YugNex Technology</div>
      <div style="color:var(--tx4);font-size:11px;margin-top:1px">Foundational AI Systems Lab · Bhilwara, India · DPIIT DIPP234393</div>
    </div>
  </div>
  <div class="footer-links">
    <a href="/en">Home</a>
    <a href="/en/research">Research</a>
    <a href="/en/technology">Technology</a>
    <a href="/en/vision">Vision</a>
    <a href="/en/platform">Platform</a>
    <a href="/en/contact">Contact</a>
    <a href="/en/ip">IP Policy</a>
  </div>
</footer>
    `;

    const towardAutonomousPaper = {
      id: 'toward-autonomous',
      title: 'Toward Autonomous Software Engineering: Challenges and Architectural Directions',
      description: 'Research on reasoning, context, and architectural understanding in AI-assisted software engineering. This whitepaper explores the foundational challenges in building persistent, autonomous software engineering intelligence.',
      publish_date: '2026-01-01',
      authors: 'YugNex Technology Research Division',
      tags: 'AI, Software Engineering, Autonomous Systems, Research',
      pdf_url: '/YugNex_Research_Whitepaper.pdf',
      content_html: towardAutonomousBody.trim()
    };

    // 4. Check if papers exist, delete, and insert
    console.log('Checking existing data...');
    const [existing] = await connection.execute('SELECT id FROM research_papers');
    if (existing.length > 0) {
      console.log('Clearing existing research_papers data...');
      await connection.execute('DELETE FROM research_papers');
    }

    console.log('Inserting NexSidi paper...');
    await connection.execute(
      `INSERT INTO research_papers (id, title, description, publish_date, authors, tags, pdf_url, content_html) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [nexsidiPaper.id, nexsidiPaper.title, nexsidiPaper.description, nexsidiPaper.publish_date, nexsidiPaper.authors, nexsidiPaper.tags, nexsidiPaper.pdf_url, nexsidiPaper.content_html]
    );

    console.log('Inserting Toward Autonomous paper...');
    await connection.execute(
      `INSERT INTO research_papers (id, title, description, publish_date, authors, tags, pdf_url, content_html) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [towardAutonomousPaper.id, towardAutonomousPaper.title, towardAutonomousPaper.description, towardAutonomousPaper.publish_date, towardAutonomousPaper.authors, towardAutonomousPaper.tags, towardAutonomousPaper.pdf_url, towardAutonomousPaper.content_html]
    );

    console.log('Database initialized and seeded successfully!');
  } catch (err) {
    console.error('Database initialization failed:', err);
  } finally {
    await connection.end();
  }
}

run().catch(console.error);
