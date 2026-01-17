'use client';

import React, { useState } from 'react';
import { Download, FileText, ExternalLink } from 'lucide-react';

interface PdfViewerProps {
    pdfUrl: string;
    title: string;
    description?: string;
    downloadFileName?: string;
}

/**
 * Static PDF Viewer Component
 * 
 * Features:
 * - Embedded PDF preview (desktop)
 * - Download button
 * - Mobile-friendly fallback
 * - Accessibility labels
 */
export default function PdfViewer({
    pdfUrl,
    title,
    description,
    downloadFileName = 'document.pdf'
}: PdfViewerProps) {
    const [viewMode, setViewMode] = useState<'embed' | 'download'>('embed');

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = downloadFileName;
        link.click();
    };

    const handleOpenNewTab = () => {
        window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="w-full bg-black/40 border border-yellow-500/20 rounded-xl overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-yellow-500/20">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <FileText className="w-6 h-6 text-yellow-300" aria-hidden="true" />
                            <h3 className="text-xl font-semibold text-yellow-300">{title}</h3>
                        </div>
                        {description && (
                            <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-4">
                    <button
                        onClick={handleDownload}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/40 text-yellow-300 rounded-lg hover:bg-yellow-500/20 transition-colors"
                        aria-label={`Download ${title}`}
                    >
                        <Download className="w-4 h-4" aria-hidden="true" />
                        <span>Download PDF</span>
                    </button>

                    <button
                        onClick={handleOpenNewTab}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 border border-yellow-500/20 text-gray-300 rounded-lg hover:bg-yellow-500/10 transition-colors"
                        aria-label={`Open ${title} in new tab`}
                    >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        <span>Open in New Tab</span>
                    </button>
                </div>
            </div>

            {/* PDF Embed (Desktop) */}
            <div className="hidden md:block">
                <embed
                    src={pdfUrl}
                    type="application/pdf"
                    className="w-full h-[600px]"
                    aria-label={`PDF viewer for ${title}`}
                />
            </div>

            {/* Mobile Fallback */}
            <div className="md:hidden p-6 text-center">
                <p className="text-gray-400 mb-4">
                    PDF preview is not available on mobile devices.
                </p>
                <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500/10 border border-yellow-500/40 text-yellow-300 rounded-lg hover:bg-yellow-500/20 transition-colors"
                >
                    <Download className="w-5 h-5" aria-hidden="true" />
                    <span>Download to View</span>
                </button>
            </div>

            {/* Browser Compatibility Notice */}
            <div className="p-4 bg-black/60 border-t border-yellow-500/10">
                <p className="text-xs text-gray-500 text-center">
                    If the PDF doesn't display, please download it or open in a new tab.
                    Supported browsers: Chrome, Firefox, Safari, Edge.
                </p>
            </div>
        </div>
    );
}
