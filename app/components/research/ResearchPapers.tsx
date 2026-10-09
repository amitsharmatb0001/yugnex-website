'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getUILabels } from '@/app/lib/uiLabels'
import { type Locale } from '@/app/lib/i18n'
import { Download, BookOpen, FileText, CheckCircle } from 'lucide-react'
import styles from './ResearchPapers.module.css'

interface ResearchPaper {
  id: string
  title: string
  description: string
  pdfUrl: string
  fileName: string
  publishDate: string
  authors?: string[]
  tags?: string[]
}

interface ResearchPapersProps {
  locale?: string
  papers: ResearchPaper[]
  subtitle?: string
  ledgerTitle?: string
  formatLabel?: string
  formatValue?: string
  noPublications?: string
  peerSignature?: string
  peerSignStamp?: string
}

export default function ResearchPapers({
  locale = 'en',
  papers,
  subtitle,
  ledgerTitle,
  formatLabel,
  formatValue,
  noPublications,
  peerSignature,
  peerSignStamp
}: ResearchPapersProps) {
  const ui = getUILabels(locale as Locale)
  const [activePaperIndex, setActivePaperIndex] = useState<number>(0)
  const [typedAbstract, setTypedAbstract] = useState<string>('')
  
  const activePaper = papers[activePaperIndex] || papers[0]

  useEffect(() => {
    if (!activePaper) return
    
    // Typewriter effect simulation for the abstract
    setTypedAbstract('')
    let i = 0
    const fullText = activePaper.description
    
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTypedAbstract(prev => prev + fullText.slice(i, i + 3))
        i += 3 // Type out 3 characters at a time for smooth readability
      } else {
        clearInterval(interval)
      }
    }, 15)

    return () => clearInterval(interval)
  }, [activePaperIndex])

  return (
    <section className={styles.papersSection}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600 mb-4">
          {ui.researchPublications || 'Research Publications'}
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto font-light">
          {subtitle || 'Explore our publications, whitepapers, and findings on building persistent autonomous software intelligence models.'}
        </p>
      </div>

      {papers.length > 0 ? (
        <div className={styles.dossierLayout}>
          {/* Left: Ledger List */}
          <div className={styles.ledgerList}>
            {papers.map((paper, index) => {
              const isActive = activePaperIndex === index
              return (
                <div
                  key={paper.id}
                  onClick={() => setActivePaperIndex(index)}
                  className={`${styles.paperTab} ${isActive ? styles.activeTab : ''}`}
                >
                  <h3 className={styles.paperTitle}>{paper.title}</h3>
                  {paper.authors && (
                    <p className={styles.authorList}>
                      {paper.authors.join(', ')}
                    </p>
                  )}
                  <span className={styles.publishDate}>
                    {new Date(paper.publishDate).toLocaleDateString(locale, {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Right: Active Dossier Viewer */}
          <div className={styles.dossierCard}>
            <div>
              <div className={styles.dossierHeader}>
                <div className={styles.dossierLabel}>{ledgerTitle || 'DOCUMENT DOSSIER // '}{activePaper.id.toUpperCase()}</div>
                <h3 className={styles.dossierTitle}>{activePaper.title}</h3>
              </div>

              {/* Typewriter Abstract Reader */}
              <div className={styles.dossierAbstract}>
                <span className="text-yellow-500 font-bold mr-1">&gt;</span>
                {typedAbstract}
                <span className="animate-pulse">|</span>
              </div>

              {/* Peer Agent Stamp */}
              <div className="mt-4 p-3 rounded bg-green-500/5 border border-green-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span className="text-[10px] font-mono text-green-400 font-bold uppercase tracking-wider">{peerSignature || 'GPG Peer Agent Signature Verified'}</span>
                </div>
                <span className="text-[9px] font-mono text-gray-500">{peerSignStamp || 'SIGN: ARCHITECT_AGENT_0x028A'}</span>
              </div>

              {/* Meta Blocks */}
              <div className={styles.dossierMeta}>
                <div className={styles.metaBlock}>
                  <span className={styles.metaLabel}>{ui.published || 'Published'}</span>
                  <span className={styles.metaValue}>
                    {new Date(activePaper.publishDate).toLocaleDateString(locale, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className={styles.metaBlock}>
                  <span className={styles.metaLabel}>{formatLabel || 'Format'}</span>
                  <span className={styles.metaValue}>{formatValue || 'Technical PDF (English)'}</span>
                </div>
              </div>
            </div>

            <div className={styles.dossierFooter}>
              <div className="flex gap-4 flex-wrap mt-6">
                <Link
                  href={`/${locale}/research/${activePaper.id}`}
                  className={styles.readButton}
                >
                  <BookOpen size={16} />
                  <span>Read Online</span>
                </Link>
                {activePaper.pdfUrl && activePaper.pdfUrl.endsWith('.pdf') && (
                  <a
                    href={activePaper.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.downloadButton}
                  >
                    <Download size={16} />
                    <span>{ui.downloadPDF || 'Download PDF'}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.defaultView}>
          <FileText size={48} className="mb-4 opacity-40" />
          <p>{noPublications || 'No research publications found.'}</p>
        </div>
      )}

      {/* Coming Soon Notice */}
      <div className="text-center p-8 bg-black/20 border border-yellow-500/10 rounded-lg mt-12">
        <p className="text-gray-400 text-sm font-light">
          {ui.moreResearchComingSoon || 'Additional technical papers and runtime evaluations are currently undergoing security sweep and will be published soon.'}
        </p>
      </div>
    </section>
  )
}
