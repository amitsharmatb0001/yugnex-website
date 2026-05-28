'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

/*
  Forgot Password Page
  For admin users who forgot their password
  NOTE: Currently admin must contact system administrator
  Future: Can implement email-based password reset
*/

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        // TODO: Implement email-based password reset
        setSubmitted(true)
    }

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">
                        <span className="text-yellow-400">Forgot</span> Password
                    </h1>
                    <p className="text-gray-400">Reset your admin password</p>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                    {!submitted ? (
                        <>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-2 bg-black border border-gray-700 rounded text-white focus:border-yellow-400 focus:outline-none"
                                        required
                                        autoComplete="email"
                                        placeholder="Enter your registered email"
                                    />
                                </div>

                                {/* Info Message */}
                                <div className="bg-blue-900/20 border border-blue-500 text-blue-400 px-4 py-3 rounded text-sm">
                                    <p className="font-semibold mb-1">ℹ️ Password Reset</p>
                                    <p>For security reasons, please contact your system administrator to reset your password.</p>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-500 transition-colors"
                                >
                                    Request Password Reset
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center space-y-4">
                            <div className="bg-green-900/20 border border-green-500 text-green-400 px-4 py-3 rounded">
                                <p className="font-semibold mb-2">✅ Request Submitted</p>
                                <p className="text-sm">Please contact your system administrator with your email address to reset your password.</p>
                            </div>
                        </div>
                    )}

                    {/* Back Link */}
                    <div className="mt-6 text-center">
                        <Link
                            href={window.location.pathname.replace('/forgot-password', '/login')}
                            className="text-yellow-400 hover:text-yellow-500 text-sm"
                        >
                            ← Back to Login
                        </Link>
                    </div>
                </div>

                {/* Alternative */}
                <div className="mt-6 text-center text-sm text-gray-600">
                    <p>💡 Alternative: Another admin can create a new account for you</p>
                </div>
            </div>
        </div>
    )
}
