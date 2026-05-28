'use client'

import { useState, FormEvent, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'

/*
  Admin login page
  - JWT authentication
  - HTTPS-only secure cookies
  - YugNex branded UI
*/

export default function AdminLogin() {
    const router = useRouter()
    const params = useParams()
    const locale = params?.locale || 'en'
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [showRegisterLink, setShowRegisterLink] = useState(false)

    const forgotPasswordPath = `/${locale}/admin/forgot-password`
    const registerPath = `/${locale}/admin/register`

    useEffect(() => {
        // Check if any users exist (to show/hide register link)
        async function checkUsers() {
            try {
                const res = await fetch('/api/admin/users')
                if (res.status === 401 || res.status === 500) {
                    // No authentication or error = likely no users exist
                    setShowRegisterLink(true)
                }
            } catch {
                setShowRegisterLink(true)
            }
        }
        checkUsers()
    }, [])

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            })

            const data = await res.json()

            if (res.ok) {
                // Redirect to analytics dashboard
                router.push(`/${locale}/admin/analytics`)
            } else {
                setError(data.error || 'Invalid credentials')
            }
        } catch (err) {
            setError('Login failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">
                        <span className="text-yellow-400">YugNex</span> Admin
                    </h1>
                    <p className="text-gray-400">Analytics Dashboard Login</p>
                </div>

                {/* Login Form */}
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Username */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-2 bg-black border border-gray-700 rounded text-white focus:border-yellow-400 focus:outline-none"
                                required
                                autoComplete="username"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 bg-black border border-gray-700 rounded text-white focus:border-yellow-400 focus:outline-none"
                                required
                                autoComplete="current-password"
                            />
                        </div>

                        {/* Forgot Password Link */}
                        <div className="text-right">
                            <Link
                                href={forgotPasswordPath}
                                className="text-sm text-yellow-400 hover:text-yellow-500"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-900/20 border border-red-500 text-red-400 px-4 py-3 rounded">
                                {error}
                            </div>
                        )}

                        {/* Security Notice Alert Box */}
                        <div className="bg-yellow-500/5 border border-yellow-500/10 rounded p-3.5 text-xs text-yellow-500/80 flex items-center gap-2">
                            <span>🔒</span>
                            <span>Secure HTTPS-only session. Passwords hashed using bcrypt.</span>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    {/* Register Link (only show if no users exist) */}
                    {showRegisterLink && (
                        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                            <p className="text-sm text-gray-400 mb-2">Don't have an account?</p>
                            <Link
                                href={registerPath}
                                className="text-yellow-400 hover:text-yellow-500 font-semibold"
                            >
                                Create First Admin Account →
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
