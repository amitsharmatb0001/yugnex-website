'use client'

import { useState } from 'react'
import Script from 'next/script'
import InputField from './InputField'
import SubmitButton from './SubmitButton'

interface ContactFormProps {
    labels: {
        name: string
        email: string
        org: string
        message: string
        submit: string
    }
}

declare global {
    interface Window {
        turnstile: any
    }
}

export default function ContactForm({ labels }: ContactFormProps) {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    const [token, setToken] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget // Capture form reference immediately
        setErrorMessage('')

        if (!token) {
            setErrorMessage('Please complete the verification check.')
            return
        }

        setStatus('submitting')

        const formData = new FormData(form)
        formData.append('turnstileToken', token)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                // Content-Type header is not set for FormData; browser sets it with boundary
                body: formData
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || 'Failed to send message')
            }

            setStatus('success')
            form.reset() // Use validated form reference
            setToken('')

            // Reset form after 5 seconds
            setTimeout(() => {
                setStatus('idle')
            }, 5000)
        } catch (error) {
            setStatus('error')
            setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again or email us directly.')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                strategy="afterInteractive"
                onLoad={() => {
                    const interval = setInterval(() => {
                        if (window.turnstile && document.getElementById('turnstile-widget')) {
                            clearInterval(interval)
                            window.turnstile.render('#turnstile-widget', {
                                sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
                                callback: (t: string) => setToken(t),
                            })
                        }
                    }, 200)
                }}
            />


            <div className="grid md:grid-cols-2 gap-6">
                <InputField
                    label={labels.name}
                    name="name"
                    required
                    placeholder="Jane Doe"
                />
                <InputField
                    label={labels.email}
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                />
            </div>

            <InputField
                label={labels.org}
                name="organization"
                placeholder="Company Ltd."
            />

            <div className={`form-group`}>
                <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
                    {labels.message} <span className="text-yellow-500">*</span>
                </label>
                <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-gray-200 focus:border-yellow-500/50 focus:outline-none transition-colors resize-none"
                    placeholder="How can we collaborate?"
                />
            </div>

            {/* Turnstile Container */}
            <div id="turnstile-widget" className="min-h-[65px]"></div>

            <SubmitButton
                loading={status === 'submitting'}
                disabled={status === 'submitting' || status === 'success'}
            >
                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent!' : labels.submit}
            </SubmitButton>

            {errorMessage && (
                <div className="p-4 bg-red-900/20 border border-red-500/30 text-red-400 rounded">
                    {errorMessage}
                </div>
            )}

            {status === 'success' && (
                <div className="p-4 bg-green-900/20 border border-green-500/30 text-green-400 rounded">
                    ✓ Message sent successfully! We'll be in touch shortly.
                </div>
            )}

            {status === 'error' && !errorMessage && (
                <div className="p-4 bg-red-900/20 border border-red-500/30 text-red-400 rounded">
                    Failed to send message. Please try again or contact us directly at contact@yugnex.com
                </div>
            )}
        </form>
    )
}
