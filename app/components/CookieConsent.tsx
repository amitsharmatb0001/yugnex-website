'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 border-t border-yellow-500/30 backdrop-blur-md px-6 py-3 text-xs text-gray-300 flex flex-col md:flex-row items-center justify-between gap-3">
      <span>
        We use minimal, privacy‑respecting analytics (no cross‑site tracking). By continuing, you
        agree to essential cookies only.
      </span>
      <div className="flex items-center gap-2">
        <button
          onClick={handleAccept}
          className="px-3 py-1 rounded border border-yellow-500/40 text-yellow-300 hover:bg-yellow-500/10"
        >
          Accept
        </button>
        <a
          href="/legal/cookies"
          className="px-3 py-1 rounded border border-gray-500/40 text-gray-300 hover:bg-white/5"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}