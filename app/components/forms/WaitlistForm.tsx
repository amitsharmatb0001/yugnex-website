'use client'
import React, { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

interface WaitlistFormProps {
  placeholder?: string
  joiningText?: string
  joinBtnText?: string
  successTitle?: string
  successDesc?: string
}

export default function WaitlistForm({
  placeholder = "Enter your professional email",
  joiningText = "Joining...",
  joinBtnText = "Join Waitlist",
  successTitle = "You are on the list!",
  successDesc = "Thank you for joining the YugNex waitlist. We will notify you as soon as early developer access begins."
}: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('submitting')
    // Simulate API request
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1200)
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-yellow-500/10 border border-yellow-500/20 rounded-xl max-w-md mx-auto text-center animate-fade-in">
        <CheckCircle size={36} className="text-yellow-500 mb-3" />
        <h3 className="text-lg font-bold text-white mb-2">{successTitle}</h3>
        <p className="text-sm text-gray-400">
          {successDesc}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto p-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="flex-grow px-4 py-3 bg-transparent border-0 text-white placeholder-gray-500 focus:outline-none focus:ring-0 text-sm"
        disabled={status === 'submitting'}
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="glow-button glow-button-primary py-2.5 px-6 font-semibold flex items-center justify-center gap-2 text-xs shrink-0"
      >
        <span>{status === 'submitting' ? joiningText : joinBtnText}</span>
        <Send size={12} />
      </button>
    </form>
  )
}
