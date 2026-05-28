'use client'

import { useState, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

/*
  Admin registration page
  - First user registration (no auth required)
  - Additional user registration (requires auth)
*/

export default function AdminRegister() {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [isFirstUser, setIsFirstUser] = useState(false)
    const [checkingAuth, setCheckingAuth] = useState(true)

    useEffect(() => {
        // Check if user is authenticated (for adding additional admins)
        async function checkAuth() {
            try {
                const res = await fetch('/api/admin/me')
                const data = await res.json()

                if (data.user) {
                    // User is authenticated, can add additional admin
                    setIsFirstUser(false)
                } else {
                    // User not authenticated, assume first user setup
                    setIsFirstUser(true)
                }
            } catch {
                setIsFirstUser(true)
            } finally {
                setCheckingAuth(false)
            }
        }
        checkAuth()
    }, [])

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setError('')

        // Validate passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters')
            return
        }

        setLoading(true)

        try {
            const res = await fetch('/api/admin/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            })

            const data = await res.json()

            if (res.ok) {
                // Redirect
                if (data.isFirstUser) {
                    // First user is auto-logged in, go to dashboard
                    router.push(window.location.pathname.replace('/register', '/analytics'))
                } else {
                    // Additional user created, go back to user list
                    alert('Admin user created successfully!')
                    router.push(window.location.pathname.replace('/register', '/users'))
                }
            } else {
                setError(data.error || 'Registration failed')
            }
        } catch (err) {
            setError('An error occurred. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    if (checkingAuth) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-gray-400">Loading...</div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">
                        <span className="text-yellow-400">YugNex</span> Admin
                    </h1>
                    <p className="text-gray-400">
                        {isFirstUser ? 'Initial Setup - Create First Admin' : 'Add New Admin User'}
                    </p>
                </div>

                {/* Registration Form */}
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

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 bg-black border border-gray-700 rounded text-white focus:border-yellow-400 focus:outline-none"
                                required
                                autoComplete="email"
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
                                minLength={8}
                                autoComplete="new-password"
                            />
                            <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-2 bg-black border border-gray-700 rounded text-white focus:border-yellow-400 focus:outline-none"
                                required
                                minLength={8}
                                autoComplete="new-password"
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-900/20 border border-red-500 text-red-400 px-4 py-3 rounded">
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Creating Account...' : 'Create Admin Account'}
                        </button>
                    </form>

                    {/* Login Link */}
                    {isFirstUser && (
                        <div className="mt-6 text-center text-sm text-gray-400">
                            <p>This is the initial setup. After creating your account, you'll be logged in automatically.</p>
                        </div>
                    )}

                    {!isFirstUser && (
                        <div className="mt-6 text-center">
                            <Link
                                href={window.location.pathname.replace('/register', '/users')}
                                className="text-yellow-400 hover:text-yellow-500 text-sm"
                            >
                                ← Back to User Management
                            </Link>
                        </div>
                    )}
                </div>

                {/* Security Notice */}
                <div className="mt-6 text-center text-gray-600 text-sm">
                    <p>🔒 Passwords are hashed with bcrypt</p>
                </div>
            </div>
        </div>
    )
}
