'use client';

import React from 'react';
import { getUILabels } from '@/app/lib/uiLabels';
import { type Locale } from '@/app/lib/i18n';
import { Download } from 'lucide-react';

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
    papers: ResearchPaper[];
}

/**
 * Research Papers Component
 * 
 * Displays available research papers
 */
export default function ResearchPapers({ locale = 'en', papers }: ResearchPapersProps) {
    const ui = getUILabels(locale as Locale);

    return (
        <section className="space-y-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600 mb-4">
                    {ui.researchPublications}
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto">
                    {/* Localization note: This text might need to be moved to uiLabels if not already there */}
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

                            <p className="text-gray-300 leading-relaxed mb-6">
                                {paper.description}
                            </p>

                            <a
                                href={paper.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition-colors"
                            >
                                <Download size={20} />
                                {ui.downloadPDF || 'Download PDF'}
                            </a>
                        </div>
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
