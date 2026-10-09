// scripts/generate-markdown-sql.js
const fs = require('fs');
const path = require('path');

function escapeSqlString(str) {
  return str.replace(/'/g, "''");
}

function convertHtmlToMarkdown(html) {
  let md = html;

  // Remove nav and footer comment sections
  const navStart = md.indexOf('<!-- NAV -->');
  const navEnd = md.indexOf('</nav>') + 6;
  if (navStart !== -1 && navEnd !== -1) {
    md = md.substring(0, navStart) + md.substring(navEnd);
  }
  const footerStart = md.indexOf('<!-- FOOTER -->');
  const footerEnd = md.indexOf('</footer>') + 9;
  if (footerStart !== -1 && footerEnd !== -1) {
    md = md.substring(0, footerStart) + md.substring(footerEnd);
  }

  // Remove body wrapper tags if present
  md = md.replace(/<body[^>]*>/i, '').replace(/<\/body>/i, '');
  md = md.replace(/<html[^>]*>/i, '').replace(/<\/html>/i, '');
  md = md.replace(/<!DOCTYPE[^>]*>/i, '');
  md = md.replace(/<head>[\s\S]*?<\/head>/gi, '');

  // Convert Header tags to Markdown headings
  // Example: <div class="sec-hdr"><span class="sec-num">01</span><h2 class="sec-title">Title</h2></div>
  md = md.replace(/<div class="sec-hdr">\s*<span class="sec-num">(\d+)<\/span>\s*<h2 class="sec-title">([\s\S]*?)<\/h2>\s*<\/div>/gi, '## $1 $2');
  md = md.replace(/<h3 class="subsec-h">([\s\S]*?)<\/h3>/gi, '### $1');

  // Convert paragraphs
  md = md.replace(/<p class="p">([\s\S]*?)<\/p>/gi, '$1\n\n');

  // Convert lists
  // e.g. <ul class="ref-list"> ... <li><span class="ref-n">1</span><span>Text</span></li> ... </ul>
  md = md.replace(/<li>\s*<span class="ref-n">([\s\S]*?)<\/span>\s*<span>([\s\S]*?)<\/span>\s*<\/li>/gi, '* [$1] $2');
  md = md.replace(/<ul class="ref-list">([\s\S]*?)<\/ul>/gi, '$1');

  // Convert bold and italic tags
  md = md.replace(/<strong>([\s\S]*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<em>([\s\S]*?)<\/em>/gi, '*$1*');
  md = md.replace(/<code>([\s\S]*?)<\/code>/gi, '`$1`');

  // Convert code blocks
  // e.g. <div class="code-wrap">...<pre><code>(content)</code></pre></div>
  md = md.replace(/<div class="code-wrap">[\s\S]*?<pre><code>([\s\S]*?)<\/code><\/pre>\s*<\/div>/gi, (match, code) => {
    // Decode HTML entities in code block if any
    const cleanCode = code
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
    return '\n```typescript\n' + cleanCode.trim() + '\n```\n';
  });

  // Scrub personal details and location data
  md = md.replace(/Amit Sharma/g, 'YugNex Technology Research Division');
  md = md.replace(/Director, YugNex Technology \(OPC\) Pvt\. Ltd\./gi, 'Foundational AI Systems Lab');
  md = md.replace(/Bhilwara, Rajasthan, India/gi, '');
  md = md.replace(/Bhilwara, Rajasthan/gi, '');
  md = md.replace(/Sharma, Amit/g, 'YugNex Technology Research Division');

  return md.trim();
}

function sanitizeText(md) {
  let clean = md;

  // 1. Scrub specific agent counts
  clean = clean.replace(/38 specialized AI agents/g, 'specialized AI agents');
  clean = clean.replace(/38 specialized agents/g, 'specialized agents');
  clean = clean.replace(/38 specialized/g, 'specialized');
  clean = clean.replace(/three domain-specialized agents/g, 'domain-specialized agents');
  clean = clean.replace(/three domain-specialized adversary agents/g, 'domain-specialized adversary agents');
  clean = clean.replace(/three adversaries/g, 'domain adversaries');

  // 2. Scrub cryptographic details
  clean = clean.replace(/cryptographic context integrity/gi, 'context integrity');
  clean = clean.replace(/cryptographically-verified review/gi, 'verified review');
  clean = clean.replace(/cryptographically verified review/gi, 'verified review');
  clean = clean.replace(/cryptographic context/gi, 'context');
  clean = clean.replace(/cryptographically-verified/gi, 'verified');
  clean = clean.replace(/SHA-256 context chains/gi, 'secure context chains');
  clean = clean.replace(/SHA-256/gi, 'secure hashing');
  clean = clean.replace(/GPG Peer Agent Signature Verified/gi, 'Verified');
  clean = clean.replace(/SIGN: ARCHITECT_AGENT_0x028A/gi, 'Verified');

  // 3. Remove patent numbers and DPIIT registration details if any
  clean = clean.replace(/DPIIT Recognized/gi, 'Patent Pending');
  clean = clean.replace(/DIPP234393/gi, '');
  clean = clean.replace(/DIPP 234393/gi, '');

  // 4. Remove SVG diagrams (anything in diag-wrap class)
  clean = clean.replace(/<div class="diag-wrap">[\s\S]*?<\/div>/gi, '');

  // 5. Remove any table of toc-stat agents details that has "38 specialized"
  clean = clean.replace(/<div class="toc-stat-row"><span class="toc-stat-k">Agents<\/span><span class="toc-stat-v">38 specialized<\/span><\/div>/gi, '');

  return clean;
}

function run() {
  console.log('Generating database/research_papers_table.sql with Markdown format...');

  // 1. Convert NexSidi
  const nexsidiHtmlPath = 'E:/yugnex-website/nexsidi-research.html';
  if (!fs.existsSync(nexsidiHtmlPath)) {
    console.error('Error: nexsidi-research.html not found!');
    return;
  }
  const nexsidiHtml = fs.readFileSync(nexsidiHtmlPath, 'utf8');
  const nexsidiMarkdownRaw = convertHtmlToMarkdown(nexsidiHtml);
  const nexsidiMarkdown = sanitizeText(nexsidiMarkdownRaw);

  const nexsidiPaper = {
      id: 'nexsidi',
      title: 'NexSidi: Persistent Multi-Agent Software Engineering with Fully Adversarial Verification and Cryptographic Context Integrity',
      description: 'A multi-agent framework for autonomous software engineering with fully adversarial quality assurance, cryptographic context integrity, and hardware-enforced execution isolation.',
      publish_date: '2026-07-20',
      authors: 'YugNex Technology Research Division',
      tags: 'Multi-Agent Systems, Adversarial QA, Software Engineering, Context Preservation',
      pdf_url: '/YugNex_Research_Whitepaper.pdf',
      content_markdown: nexsidiMarkdown
    };

    // 3. Load and structure Toward Autonomous Paper
    console.log('Formatting toward-autonomous paper...');
    const towardAutonomousMarkdownRaw = `<!-- HERO -->
<header class="hero">
  <div class="hero-tags">
    <span class="htag htag-am">Research Paper</span>
    <span class="htag htag-tl">AI Systems</span>
    <span class="htag htag-gr">Software Engineering</span>
    <span class="htag htag-wt">Autonomous Intelligence</span>
  </div>

  <h1 class="hero-title">
    Toward Autonomous Software Engineering: <span class="acc">Challenges and Architectural Directions</span>
  </h1>
  <p class="hero-subtitle">A Research Perspective on Multi-Agent AI Systems for Software Development</p>

  <div class="hero-meta">
    <div class="meta-block">
      <div class="meta-label">Author</div>
      <div class="meta-val">**YugNex Technology Research Division**<small>Foundational AI Systems Lab</small></div>
    </div>
    <div class="meta-block">
      <div class="meta-label">Published</div>
      <div class="meta-val">**20 July 2026**<small>Technical Whitepaper · v1.0</small></div>
    </div>
    <div class="meta-block">
      <div class="meta-label">Status</div>
      <div class="meta-val"><strong style="color:var(--am)">Patent Pending</strong><small>Active R&D</small></div>
    </div>
  </div>

  <div class="hero-actions">
    <a class="btn btn-gold" href="/YugNex_Research_Whitepaper.pdf" target="_blank" rel="noopener noreferrer">⟶ Download PDF</a>
    <a class="btn btn-outline" href="https://yugnex.com/en/research">← All Research</a>
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
      <li><a class="toc-a" href="#architectures"><span class="toc-n">3</span>Multi-Agent Reasoning</a></li>
      <li><a class="toc-a" href="#understanding"><span class="toc-n">4</span>Architectural Understanding</a></li>
      <li><a class="toc-a" href="#context"><span class="toc-n">5</span>The Context Problem</a></li>
      <li><a class="toc-a" href="#lessons"><span class="toc-n">6</span>Lessons Learned</a></li>
      <li><a class="toc-a" href="#methodology"><span class="toc-n">7</span>Research Methodology</a></li>
      <li><a class="toc-a" href="#status"><span class="toc-n">8</span>Current Status</a></li>
      <li><a class="toc-a" href="#conclusion"><span class="toc-n">9</span>Conclusion</a></li>
    </ul>
    <div class="toc-hr"></div>
    <div class="toc-stat">
      <div class="toc-stat-row"><span class="toc-stat-k">Status</span><span class="toc-stat-v">Patent Pending</span></div>
      <div class="toc-stat-row"><span class="toc-stat-k">Publisher</span><span class="toc-stat-v">YugNex</span></div>
      <div class="toc-stat-row"><span class="toc-stat-k">Scope</span><span class="toc-stat-v">Foundational AI</span></div>
    </div>
  </aside>

  <!-- PAPER -->
  <main class="paper">

    <!-- 1. INTRODUCTION -->
    <section class="sec" id="intro">
      ## 01 Introduction

      Software engineering in 2026 faces a fundamental paradox. While AI models have achieved remarkable capabilities in code generation and natural language understanding, their application to real-world software development remains largely superficial. Developers receive autocomplete suggestions and snippet generation, but the fundamental bottleneck persists: *understanding complex systems, reasoning about architectural implications, and making safe transformations at scale.*

      The problem is not a lack of computational power or training data. Rather, it is the absence of architectures designed specifically for the unique challenges of software system reasoning. Modern codebases are not simply collections of text to be processed; they are intricate webs of dependencies, implicit contracts, and emergent behaviors that arise from component interactions. A single change can cascade through dozens of modules, affecting functionality in non-obvious ways.

      This paper presents our research directions at YugNex Technology, where we are exploring architectural approaches to enable genuine autonomous software engineering. We discuss the limitations of current approaches, present our perspective on multi-agent architectures for software reasoning, and identify key challenges that must be addressed to move beyond code generation toward true system understanding.
    </section>

    <!-- 2. STATE OF AI DEVELOPMENT -->
    <section class="sec" id="state">
      ## 02 The State of AI-Assisted Development

      The application of artificial intelligence to software engineering has produced remarkable results in narrow domains. Modern tools can autocomplete code with high accuracy, generate functions from natural language descriptions, and even translate between programming languages. Yet these achievements, while practically useful, represent a fundamentally limited approach to the broader challenge of software engineering.

      The limitation stems from a mismatch between the architectures we apply and the nature of software itself. Code is not simply text to be generated; it is a precise specification of behavior embedded within complex systems of dependencies, abstractions, and emergent properties. When developers work on real-world systems, they engage in reasoning that extends far beyond the immediate code they're writing.

      <div class="subsec">
        ### 2.1 Current Approaches and Their Limitations
        Existing AI coding assistants primarily operate through pattern matching and statistical prediction. Given a code context, they predict the most likely continuation based on patterns learned from training data. Three fundamental limitations characterize current approaches:

        * [1] **Context Limitations:** Software systems often comprise millions of lines of code distributed across thousands of files. No single model's context window can contain even a fraction of this code, yet understanding it is often essential for making correct decisions.
        * [2] **Reasoning Depth:** Code generation and code understanding are fundamentally different tasks. Generating syntactically correct code that matches patterns is insufficient for professional software engineering.
        * [3] **Systemic Effects:** Changes to software propagate through dependency chains in ways that are often non-obvious. A modification to a low-level utility function might affect dozens of higher-level components.
      </div>
    </section>

    <!-- 3. MULTI-AGENT ARCHITECTURES -->
    <section class="sec" id="architectures">
      ## 03 Multi-Agent Architectures for Software Reasoning

      Our research is grounded in the observation that expert software engineering is fundamentally a collaborative, multi-perspective activity. When senior engineers approach a complex change, they don't simply write code. They analyze architecture, evaluate dependencies, consider performance implications, assess security risks, and reason about maintainability.

      We propose and are actively researching multi-agent architectures where specialized AI components, each designed for specific domains of software reasoning, collaborate to achieve comprehensive system understanding. This approach mirrors how engineering teams naturally organize.

      <div class="subsec">
        ### 3.1 Specialization as a Design Principle
        The key insight driving our architectural approach is that different aspects of software engineering require different types of reasoning. Security analysis requires different knowledge bases and analytical frameworks than performance optimization, which in turn differs from architectural design.
      </div>

      <div class="subsec">
        ### 3.2 Coordination and Consensus Mechanisms
        The challenge in multi-agent architectures lies not in the individual components, but in how they coordinate. Software reasoning requires components to share context dynamically, challenge each other's assumptions, and reach consensus through structured deliberation.
      </div>
    </section>

    <!-- 4. ARCHITECTURAL UNDERSTANDING -->
    <section class="sec" id="understanding">
      ## 04 Beyond Code Generation: Architectural Understanding

      Perhaps the most significant limitation of current AI coding tools is their focus on generation over comprehension. These systems are optimized to produce code that matches patterns in their training data, but they lack mechanisms for understanding why code exists, how it relates to broader architectural goals, or what implicit contracts it satisfies.

      Our research develops what we term "architectural reasoning capabilities"—the ability to understand software not as text, but as a system with emergent properties.

      <div class="subsec">
        ### 4.1 Layered Analysis Framework
        We approach architectural understanding through layered analysis. Lower-level components parse syntax and understand immediate control flow. Higher-level components reason about module relationships, dependency graphs, and architectural patterns.
      </div>
    </section>

    <!-- 5. CONTEXT PROBLEM -->
    <section class="sec" id="context">
      ## 05 The Context Problem in Software AI

      One of the most persistent challenges in applying AI to software engineering is what we term the "context problem." Modern language models operate within fixed context windows, but real-world software systems are orders of magnitude larger.

      <div class="subsec">
        ### 5.1 Dynamic Context Construction
        Our research develops context management strategies that go beyond retrieval. Rather than pulling disconnected snippets, we are exploring approaches to build dynamic context representations that capture the relevant portions of system architecture.
      </div>
    </section>

    <!-- 6. LESSONS LEARNED -->
    <section class="sec" id="lessons">
      ## 06 Lessons from Failed Approaches

      Research progress requires honesty about failures. We document several key learnings from our exploration of various architectural approaches:

      * [1] **Model Scale Alone Is Insufficient:** Scaling model size does not solve the reasoning gap. Larger models can memorize more patterns but do not change the nature of the reasoning process.
      * [2] **Domain Fine-Tuning Has Limits:** Fine-tuning on domain-specific code does not confer architectural reasoning abilities.
      * [3] **Benchmark Performance Misleads:** Standard benchmarks correlate poorly with real-world utility.
      * [4] **Complexity Cannot Be Hidden:** Interfaces must reflect the actual complexity of the reasoning process.
    </section>

    <!-- 7. METHODOLOGY -->
    <section class="sec" id="methodology">
      ## 07 Research Methodology and Validation

      Our research methodology prioritizes production-grade reliability over benchmark performance. Evaluation focuses on multiple dimensions simultaneously: assessing whether generated code respects architectural boundaries, maintains system invariants, and can be understood by human maintainers.
    </section>

    <!-- 8. STATUS -->
    <section class="sec" id="status">
      ## 08 Current Status and Future Directions

      We are currently engaged in "deep prototyping"—building systems sophisticated enough to test our architectural hypotheses while maintaining the flexibility to pivot as we learn.
    </section>

    <!-- 9. CONCLUSION -->
    <section class="sec" id="conclusion">
      ## 09 Conclusion

      The path to autonomous software engineering is not simply a matter of larger models or more training data. It requires fundamental advances in how AI systems represent, reason about, and operate on complex software systems.

      Multi-agent architectures offer a promising direction, enabling specialized reasoning while maintaining system-wide coherence. The goal is to create true collaborative partners that understand, reason, and contribute at levels previously requiring human expertise.
    </section>

  </main>
</div>
`;
    const towardAutonomousMarkdown = sanitizeText(towardAutonomousMarkdownRaw);

  const sqlContent = `-- ============================================================
-- Seeding Research Papers Migration (Markdown Format)
-- ============================================================

CREATE TABLE IF NOT EXISTS \`research_papers\` (
  \`id\` VARCHAR(100) PRIMARY KEY,
  \`title\` VARCHAR(500) NOT NULL,
  \`description\` TEXT NOT NULL,
  \`publish_date\` DATE NOT NULL,
  \`authors\` VARCHAR(500) NOT NULL,
  \`tags\` VARCHAR(500) NOT NULL,
  \`pdf_url\` VARCHAR(500) DEFAULT NULL,
  \`content_markdown\` LONGTEXT NOT NULL,
  \`created_at\` DATETIME DEFAULT CURRENT_TIMESTAMP,
  \`updated_at\` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX \`idx_publish_date\` (\`publish_date\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Clean existing data to avoid duplicate key errors
DELETE FROM \`research_papers\` WHERE \`id\` IN ('nexsidi', 'toward-autonomous');

-- Insert NexSidi Publication
INSERT INTO \`research_papers\` (\`id\`, \`title\`, \`description\`, \`publish_date\`, \`authors\`, \`tags\`, \`pdf_url\`, \`content_markdown\`)
VALUES (
  'nexsidi',
  'NexSidi: Persistent Multi-Agent Software Engineering with Fully Adversarial Verification and Cryptographic Context Integrity',
  'A multi-agent framework for autonomous software engineering with fully adversarial quality assurance, cryptographic context integrity, and hardware-enforced execution isolation.',
  '2026-07-20',
  'YugNex Technology Research Division',
  'Multi-Agent Systems, Adversarial QA, Software Engineering, Context Preservation',
  '/YugNex_Research_Whitepaper.pdf',
  '${escapeSqlString(nexsidiMarkdown)}'
);

-- Insert Toward Autonomous Publication
INSERT INTO \`research_papers\` (\`id\`, \`title\`, \`description\`, \`publish_date\`, \`authors\`, \`tags\`, \`pdf_url\`, \`content_markdown\`)
VALUES (
  'toward-autonomous',
  'Toward Autonomous Software Engineering: Challenges and Architectural Directions',
  'Research on reasoning, context, and architectural understanding in AI-assisted software engineering. This whitepaper explores the foundational challenges in building persistent, autonomous software engineering intelligence.',
  '2026-07-20',
  'YugNex Technology Research Division',
  'AI, Software Engineering, Autonomous Systems, Research',
  '/YugNex_Research_Whitepaper.pdf',
  '${escapeSqlString(towardAutonomousMarkdown.trim())}'
);
`;

  fs.writeFileSync('database/research_papers_table.sql', sqlContent, 'utf8');
  console.log('Successfully generated database/research_papers_table.sql!');
}

run();
