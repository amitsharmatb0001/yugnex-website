import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { db } from '@/app/lib/db'
import { Locale } from '@/app/lib/i18n'
import styles from './ResearchPaper.module.css'
import { Marked } from 'marked'

interface PaperPageProps {
  params: Promise<{
    locale: Locale
    id: string
  }>
}

export async function generateMetadata({ params }: PaperPageProps): Promise<Metadata> {
  const { id } = await params
  
  try {
    const [rows] = await db.execute<any[]>(
      'SELECT title, description FROM research_papers WHERE id = ?',
      [id]
    )
    if (rows && rows.length > 0) {
      return {
        title: `${rows[0].title} — YugNex Research`,
        description: rows[0].description,
      }
    }
  } catch (e) {
    console.error('Metadata generation failed for paper ID:', id, e)
  }

  return {
    title: 'Research Publication — YugNex',
  }
}

// Extract headings for Table of Contents
function extractSectionsFromMarkdown(markdown: string) {
  const lines = markdown.split('\n')
  const sections: Array<{ id: string; num: string; title: string }> = []
  
  for (const line of lines) {
    // Match ## 01 Introduction or ## 1. Introduction
    const headingMatch = line.match(/^##\s+(\d*)\s*(.*)/)
    if (headingMatch) {
      const rawNum = headingMatch[1] ? headingMatch[1].trim() : ''
      const title = headingMatch[2].trim()
      const cleanText = title.replace(/^[\d\.\s]+/, '').trim()
      const id = cleanText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      sections.push({
        id,
        num: rawNum,
        title: cleanText
      })
    }
  }
  return sections
}

// Clean markdown to only contain the paper body starting from Section 1
function cleanMarkdownBody(markdown: string) {
  let cleaned = markdown.trim()
  
  // Strip frontmatter
  cleaned = cleaned.replace(/^---[\s\S]*?---\r?\n/, '')
  
  const lines = cleaned.split('\n')
  const bodyLines: string[] = []
  let foundFirstHeading = false
  
  for (const line of lines) {
    if (!foundFirstHeading) {
      // Find headings like "## 01 " or "## 1 "
      if (/^##\s+\d+/.test(line.trim())) {
        foundFirstHeading = true
        bodyLines.push(line)
      }
    } else {
      bodyLines.push(line)
    }
  }
  
  if (bodyLines.length > 0) {
    return bodyLines.join('\n').trim()
  }
  return cleaned
}

// Create custom Marked compiler
const customMarked = new Marked()

const customRenderer: any = {
  heading(token: any) {
    const raw = token.raw || ''
    const text = token.text || ''
    const depth = token.depth
    const cleanText = raw.replace(/^##\s+(\d*)\s*/, '').replace(/^###\s+/, '').replace(/^[\d\.\s]+/, '').trim()
    const id = cleanText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    
    if (depth === 2) {
      const numMatch = raw.match(/^##\s*(\d+)/)
      const num = numMatch ? numMatch[1] : ''
      return `
        </section>
        <section class="sec" id="${id}">
          <div class="sec-hdr">
            ${num ? `<span class="sec-num">${num}</span>` : ''}
            <h2 class="sec-title">${cleanText}</h2>
          </div>
      `
    }
    
    if (depth === 3) {
      return `<h3 class="subsec-h" id="${id}">${text}</h3>`
    }
    
    return `<h${depth} id="${id}">${text}</h${depth}>`
  },
  
  paragraph(token: any) {
    const text = token.text || ''
    if (text.startsWith('&gt;')) {
      return `<blockquote class="pq"><p>${text.substring(4)}</p></blockquote>`
    }
    return `<p class="p">${text}</p>`
  },

  listitem(token: any) {
    const text = token.text || ''
    const numMatch = text.match(/^\[([\d\?]+)\]\s*(.*)/)
    if (numMatch) {
      const num = numMatch[1]
      const rest = numMatch[2]
      return `<li><span class="ref-n">${num}</span><span>${rest}</span></li>`
    }
    return `<li>${text}</li>`
  },

  code(token: any) {
    const code = token.text || ''
    const lang = token.lang || 'typescript'
    return `
      <div class="code-wrap">
        <div class="code-bar">
          <span class="code-name">source_code</span>
          <span class="code-lang">${lang}</span>
          <button class="copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.parentElement.querySelector('pre').innerText).then(() => { this.innerText = 'COPIED'; this.classList.add('ok'); setTimeout(() => { this.innerText = 'COPY'; this.classList.remove('ok') }, 2000); })">COPY</button>
        </div>
        <pre><code>${code.trim()}</code></pre>
      </div>
    `
  }
}

// Apply custom renderer
customMarked.use({ renderer: customRenderer })

export default async function ResearchPaperDetailPage({ params }: PaperPageProps) {
  const { locale, id } = await params
  
  let paper = null
  try {
    const [rows] = await db.execute<any[]>(
      'SELECT * FROM research_papers WHERE id = ?',
      [id]
    )
    if (rows && rows.length > 0) {
      paper = rows[0]
    }
  } catch (err) {
    console.error('Failed to load paper details from DB:', err)
  }

  if (!paper) {
    notFound()
  }

  // Parse Sections & Clean Content
  const rawMarkdown = paper.content_markdown || ''
  const sections = extractSectionsFromMarkdown(rawMarkdown)
  const bodyMarkdown = cleanMarkdownBody(rawMarkdown)
  
  // Compile Markdown to HTML
  let contentHtml = customMarked.parse(bodyMarkdown) as string
  if (contentHtml.trim().startsWith('</section>')) {
    contentHtml = contentHtml.replace('</section>', '')
  }
  contentHtml += '</section>'

  // Format date to 20 July 2026
  let formattedDate = '20 July 2026'
  if (paper.publish_date) {
    try {
      const d = paper.publish_date instanceof Date ? paper.publish_date : new Date(paper.publish_date)
      if (!isNaN(d.getTime())) {
        formattedDate = d.toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })
      }
    } catch {
      formattedDate = '20 July 2026'
    }
  }

  const authorsList = paper.authors ? paper.authors.split(',').map((a: string) => a.trim()) : ['YugNex Technology Research Division']
  const tagsList = paper.tags ? paper.tags.split(',').map((t: string) => t.trim()) : ['Research Paper']


  return (
    <div className={styles.paperContainer}>
      {/* HERO */}
      <header className="hero">
        <div className="hero-tags">
          <span className="htag htag-am">Research Paper</span>
          {tagsList.map((tag: string) => (
            <span key={tag} className="htag htag-wt">{tag}</span>
          ))}
        </div>

        <h1 className="hero-title">
          {paper.title}
        </h1>

        <div className="hero-meta">
          <div className="meta-block">
            <div className="meta-label">Author</div>
            <div className="meta-val">
              {authorsList.map((author: string, index: number) => (
                <div key={author}>
                  <strong>{author}</strong>
                  {index === 0 && <small>YugNex Foundational AI Systems Lab</small>}
                </div>
              ))}
            </div>
          </div>
          <div className="meta-block">
            <div className="meta-label">Published</div>
            <div className="meta-val"><strong>{formattedDate}</strong><small>Technical Publication</small></div>
          </div>
          <div className="meta-block">
            <div className="meta-label">Status</div>
            <div className="meta-val"><strong style={{ color: 'var(--am)' }}>Patent Pending</strong><small>Active R&D</small></div>
          </div>
        </div>

        <div className="hero-actions">
          <a className="btn btn-outline" href={`/${locale}/research`}>← All Research</a>
        </div>
      </header>

      {/* ABSTRACT */}
      {paper.description && (
        <section className="abstract-wrap">
          <div className="abstract-box">
            <div className="abstract-lbl">Abstract</div>
            <p className="abstract-p">{paper.description}</p>
          </div>
        </section>
      )}

      {/* LAYOUT */}
      <div className="layout">
        {/* TOC Sidebar */}
        <aside className="toc">
          <div className="toc-lbl">Contents</div>
          <ul className="toc-list">
            {sections.map((sec, idx) => (
              <li key={sec.id}>
                <a className={`toc-a ${idx === 0 ? 'active' : ''}`} href={`#${sec.id}`}>
                  <span className="toc-n">{sec.num || (idx + 1)}</span>
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="toc-hr"></div>
          <div className="toc-stat">
            <div className="toc-stat-row"><span className="toc-stat-k">Status</span><span className="toc-stat-v">Patent Pending</span></div>
            <div className="toc-stat-row"><span className="toc-stat-k">Publisher</span><span className="toc-stat-v">YugNex</span></div>
            <div className="toc-stat-row"><span className="toc-stat-k">Locale</span><span className="toc-stat-v">{locale.toUpperCase()}</span></div>
          </div>
        </aside>

        {/* PAPER BODY */}
        <main className="paper" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>

      {/* Scrollspy TOC Activation Script */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          const links = document.querySelectorAll('.toc-a');
          const secs  = document.querySelectorAll('.sec[id]');
          if (!links.length || !secs.length) return;
          const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
              if(e.isIntersecting){
                links.forEach(l => l.classList.remove('active'));
                const a = document.querySelector('.toc-a[href="#' + e.target.id + '"]');
                if(a) a.classList.add('active');
              }
            });
          },{rootMargin:'-20% 0px -70% 0px'});
          secs.forEach(s => obs.observe(s));
        })();
      `}} />
    </div>
  )
}
