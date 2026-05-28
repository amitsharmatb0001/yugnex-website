'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

/*
  Change Password Page
  Allows admin to change password from UI
*/

export default function ChangePassword() {
    const router = useRouter()
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [newHash, setNewHash] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setError('')
        setSuccess('')
        setNewHash('')

        // Validate passwords match
        if (newPassword !== confirmPassword) {
            setError('New passwords do not match')
            return
        }

        if (newPassword.length < 8) {
            setError('New password must be at least 8 characters')
            return
        }

        setLoading(true)

        try {
            const res = await fetch('/api/admin/change-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ currentPassword, newPassword }),
            })

            const data = await res.json()

            if (res.ok) {
                setSuccess(data.message)
                setNewHash(data.newHash)
                setCurrentPassword('')
                setNewPassword('')
                setConfirmPassword('')
            } else {
                setError(data.error || 'Failed to change password')
            }
        } catch (err) {
            setError('An error occurred. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="container mx-auto max-w-2xl">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">
                        <span className="text-yellow-400">Change</span> Password
                    </h1>
                    <p className="text-gray-400">Update your admin password</p>
                </div>

                {/* Back Link */}
                <Link
                    href={window.location.pathname.replace('/change-password', '/analytics')}
                    className="inline-block mb-6 text-yellow-400 hover:text-yellow-500 transition-colors"
                >
                    ← Back to Dashboard
                </Link>

                {/* Change Password Form */}
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Current Password */}
                        <div>
                            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-300 mb-2">
                                Current Password
                            </label>
                            <input
                                type="password"
                                id="currentPassword"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="w-full px-4 py-2 bg-black border border-gray-700 rounded text-white focus:border-yellow-400 focus:outline-none"
                                required
                                autoComplete="current-password"
                            />
                        </div>

                        {/* New Password */}
                        <div>
                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300 mb-2">
                                New Password
                            </label>
                            <input
                                type="password"
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-4 py-2 bg-black border border-gray-700 rounded text-white focus:border-yellow-400 focus:outline-none"
                                required
                                minLength={8}
                                autoComplete="new-password"
                            />
                            <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
                        </div>

                        {/* Confirm New Password */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                                Confirm New Password
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

                        {/* Success Message */}
                        {success && (
                            <div className="bg-green-900/20 border border-green-500 text-green-400 px-4 py-3 rounded">
                                <p className="font-semibold">✅ Password updated successfully!</p>
                                <p className="text-sm mt-2">You can now use your new password to login.</p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Updating...' : 'Change Password'}
                        </button>
                    </form>
                </div>

                {/* Security Notice */}
                <div className="mt-6 text-center text-gray-600 text-sm">
                    <p>🔒 Your password is hashed with bcrypt (10 rounds)</p>
                </div>
            </div>
        </div>
    )
}
