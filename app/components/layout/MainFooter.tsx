// MainFooter.tsx
// Purpose: Legal identity, research access, trust surface, and navigation
// This is the institutional anchor of the site, not a marketing toy.
import Link from 'next/link'

export default function MainFooter({ locale = 'en' }: { locale?: string }) {
    return (
        <footer className="border-t border-yellow-500/20 bg-black/80 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
                {/* Column 1: Company Identity */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <img
                            src="/png/yugnex-logo-64.png"
                            alt="YugNex Logo"
                            width={48}
                            height={48}
                            className="opacity-90"
                        />
                        <div className="text-yellow-300 text-xl font-semibold">
                            YugNex<sup className="text-xs">™</sup>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        YugNex Technology OPC Private Limited<br />
                        DPIIT Recognized Startup (DIPP234393)<br />
                        Bhilwara, Rajasthan, India
                    </p>
                </div>

                {/* Column 2: Support */}
                <div>
                    <h4 className="text-yellow-300 mb-4 text-base font-medium uppercase tracking-wider">Support</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            <Link href={`/${locale}/faq`} className="hover:text-yellow-300 transition-colors">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/contact`} className="hover:text-yellow-300 transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Connect */}
                <div>
                    <h4 className="text-yellow-300 mb-4 text-base font-medium uppercase tracking-wider">Connect</h4>
                    <p className="text-gray-400 text-sm mb-4">Follow us on</p>
                    <div className="flex gap-5 items-center">
                        <a href="https://instagram.com/yug.nex" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400 transition-colors" aria-label="Instagram">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </a>
                        <a href="https://x.com/yugnex" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400 transition-colors" aria-label="X">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                        </a>
                        <a href="https://linkedin.com/company/yugnex" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400 transition-colors" aria-label="LinkedIn">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a href="https://github.com/yugnex" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400 transition-colors" aria-label="GitHub">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                    </div>
                </div>

                {/* Column 4: Legal */}
                <div className="md:text-right">
                    <h4 className="text-yellow-300 mb-4 text-base font-medium uppercase tracking-wider">Legal</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href={`/${locale}/privacy`} className="hover:text-yellow-300 transition-colors">Privacy Policy</Link></li>
                        <li><Link href={`/${locale}/terms`} className="hover:text-yellow-300 transition-colors">Terms of Use</Link></li>
                        <li><Link href={`/${locale}/ip`} className="hover:text-yellow-300 transition-colors">Intellectual Property</Link></li>
                        <li className="pt-3"><a href="mailto:contact@yugnex.com" className="hover:text-yellow-300 transition-colors">contact@yugnex.com</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-yellow-500/10 py-4 text-center text-xs text-gray-500 uppercase tracking-widest">
                Â© {new Date().getFullYear()} YugNex Technology OPC Pvt. Ltd. All rights reserved.
            </div>
        </footer>
    )
}