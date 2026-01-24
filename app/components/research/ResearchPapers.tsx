'use client';

import React from 'react';
import PdfViewer from './PdfViewer';
import { getUILabels } from '@/app/lib/uiLabels';
import { type Locale } from '@/app/lib/i18n';

interface ResearchPaper {
    id: string;
    title: string;
    description: string;
    pdfUrl: string;
    fileName: string;
    publishDate: string;
    authors?: string[];
    tags?: string[];
}

interface ResearchPapersProps {
    locale?: string;
}

/**
 * Research Papers Component
 * 
 * Displays available research papers with PDF viewers
 */
export default function ResearchPapers({ locale = 'en' }: ResearchPapersProps) {
    const ui = getUILabels(locale as Locale);

    // Research papers data
    const papers: ResearchPaper[] = [
        {
            id: 'whitepaper-2026',
            title: 'Toward Autonomous Software Engineering: Challenges and Directions',
            description: 'Research on reasoning, context, and architectural understanding in AI-assisted software engineering. This whitepaper explores the foundational challenges in building persistent, autonomous software engineering intelligence.',
            pdfUrl: '/YugNex_Research_Whitepaper.pdf',
            fileName: 'YugNex_Research_Whitepaper.pdf',
            publishDate: '2026-01-01',
            authors: ['YugNex Technology Research Division'],
            tags: ['AI', 'Software Engineering', 'Autonomous Systems', 'Research'],
        },
    ];

    return (
        <section className="space-y-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600 mb-4">
                    {ui.researchPublications}
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto">
                    Explore our research on foundational AI systems, autonomous software engineering,
                    and persistent intelligence architectures.
                </p>
            </div>

            {/* Papers List */}
            <div className="space-y-8">
                {papers.map((paper) => (
                    <div key={paper.id} className="space-y-6">
                        {/* Paper Metadata */}
                        <div className="bg-black/20 border border-yellow-500/10 rounded-lg p-6">
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
                                        {paper.title}
                                    </h3>
                                    {paper.authors && paper.authors.length > 0 && (
                                        <p className="text-sm text-gray-400 mb-2">
                                            <span className="font-medium">{ui.authors}:</span>{' '}
                                            {paper.authors.join(', ')}
                                        </p>
                                    )}
                                    <p className="text-sm text-gray-500">
                                        {ui.published}: {new Date(paper.publishDate).toLocaleDateString(locale, {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>

                            {/* Tags */}
                            {paper.tags && paper.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {paper.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-xs bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <p className="text-gray-300 leading-relaxed">
                                {paper.description}
                            </p>
                        </div>

                        {/* PDF Viewer */}
                        <PdfViewer
                            pdfUrl={paper.pdfUrl}
                            title={paper.title}
                            downloadFileName={paper.fileName}
                        />
                    </div>
                ))}
            </div>

            {/* Coming Soon Notice */}
            <div className="text-center p-8 bg-black/20 border border-yellow-500/10 rounded-lg">
                <p className="text-gray-400">
                    {ui.moreResearchComingSoon}
                </p>
            </div>
        </section>
    );
}
