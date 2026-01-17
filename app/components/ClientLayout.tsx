'use client';

import React from 'react';
import CodeBackground from '@/app/background/CodeBackground';
import ParticleBackground from '@/app/background/ParticleBackground';
import NeuralCanvas from '@/app/background/NeuralCanvas';
import MainHeader from '@/app/components/layout/MainHeader';
import MainFooter from '@/app/components/layout/MainFooter';
import ErrorBoundary from '@/app/components/ErrorBoundary';
import CookieConsent from '@/app/components/CookieConsent';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <ErrorBoundary>
            <noscript>
                <div className="min-h-screen bg-black text-white flex items-center justify-center text-center">
                    <div className="max-w-xl px-6">
                        <h1 className="text-2xl mb-2">YugNex Technology</h1>
                        <p className="text-gray-300">
                            This experience uses JavaScript for interactive visuals and accessibility features.
                        </p>
                        <p className="text-gray-400 mt-2">
                            Core information is still available, but for the full research interface and
                            performance visuals, please enable JavaScript.
                        </p>
                    </div>
                </div>
            </noscript>

            {/* Skip to main content link */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-yellow-300 focus:text-black"
            >
                Skip to main content
            </a>

            {/* Main container */}
            <div className="min-h-screen bg-black text-white relative overflow-hidden" role="document">
                {/* Background effects */}
                <CodeBackground />
                <ParticleBackground count={50} />
                <NeuralCanvas />

                {/* Header */}
                <MainHeader />

                {/* Main content */}
                <main className="relative z-10">{children}</main>

                {/* Cookie consent banner */}
                <CookieConsent />

                {/* Footer */}
                <MainFooter />
            </div>
        </ErrorBoundary>
    );
}
