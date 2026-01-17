'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

/*
  Simple admin analytics dashboard
  Shows pageview and security event statistics
  Requires JWT authentication
*/

interface AnalyticsData {
    topPages: Array<{ path: string; views: number }>
    topReferrers: Array<{ referrer: string; count: number }>
    countries: Array<{ country: string; count: number }>
    securityEvents: Array<{ event_name: string; count: number; last_occurrence: string }>
    totalViews: number
    dateRange: string
}

export default function AnalyticsDashboard() {
    const router = useRouter()
    const [data, setData] = useState<AnalyticsData | null>(null)
    const [loading, setLoading] = useState(true)
    const [days, setDays] = useState(7)

    useEffect(() => {
        fetchAnalytics()
    }, [days])

    async function fetchAnalytics() {
        setLoading(true)
        try {
            const res = await fetch(`/api/admin/analytics?days=${days}`)

            // Check if unauthorized
            if (res.status === 401) {
                router.push(window.location.pathname.replace('/analytics', '/login'))
                return
            }

            const json = await res.json()
            setData(json)
        } catch (error) {
            console.error('Failed to fetch analytics:', error)
        } finally {
            setLoading(false)
        }
    }

    async function handleLogout() {
        try {
            await fetch('/api/admin/logout', { method: 'POST' })
            router.push(window.location.pathname.replace('/analytics', '/login'))
        } catch (error) {
            console.error('Logout failed:', error)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-gray-400">Loading analytics...</div>
            </div>
        )
    }

    if (!data) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-red-400">Failed to load analytics data</div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-8 flex justify-between items-start">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">
                            <span className="text-yellow-400">YugNex</span> Analytics Dashboard
                        </h1>
                        <p className="text-gray-400">Privacy-first analytics • Self-hosted • No tracking</p>
                    </div>
                    <div className="flex gap-3">
                        <a
                            href={window.location.pathname.replace('/analytics', '/users')}
                            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                        >
                            Users
                        </a>
                        <a
                            href={window.location.pathname.replace('/analytics', '/change-password')}
                            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                        >
                            Change Password
                        </a>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* Date Filter */}
                <div className="mb-8 flex gap-4">
                    <button
                        onClick={() => setDays(7)}
                        className={`px-4 py-2 rounded ${days === 7 ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-white hover:bg-gray-700'
                            }`}
                    >
                        Last 7 Days
                    </button>
                    <button
                        onClick={() => setDays(30)}
                        className={`px-4 py-2 rounded ${days === 30 ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-white hover:bg-gray-700'
                            }`}
                    >
                        Last 30 Days
                    </button>
                    <button
                        onClick={() => setDays(365)}
                        className={`px-4 py-2 rounded ${days === 365 ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-white hover:bg-gray-700'
                            }`}
                    >
                        Last Year
                    </button>
                </div>

                {/* Total Views */}
                <div className="mb-8 bg-gray-900 border border-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2 text-gray-300">Total Pageviews</h2>
                    <p className="text-5xl font-bold text-yellow-400">{data.totalViews.toLocaleString()}</p>
                    <p className="text-sm text-gray-500 mt-2">{data.dateRange}</p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Top Pages */}
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4 text-yellow-400">Top Pages</h2>
                        <div className="space-y-3">
                            {data.topPages.length > 0 ? (
                                data.topPages.map((page, idx) => (
                                    <div key={idx} className="flex justify-between items-center">
                                        <span className="text-gray-300 font-mono text-sm truncate">{page.path}</span>
                                        <span className="text-yellow-400 font-semibold ml-4">{page.views}</span>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No data yet</p>
                            )}
                        </div>
                    </div>

                    {/* Top Referrers */}
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4 text-yellow-400">Top Referrers</h2>
                        <div className="space-y-3">
                            {data.topReferrers.length > 0 ? (
                                data.topReferrers.map((ref, idx) => (
                                    <div key={idx} className="flex justify-between items-center">
                                        <span className="text-gray-300 text-sm truncate">{ref.referrer}</span>
                                        <span className="text-yellow-400 font-semibold ml-4">{ref.count}</span>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No referrer data yet</p>
                            )}
                        </div>
                    </div>

                    {/* Countries */}
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4 text-yellow-400">Top Countries</h2>
                        <div className="space-y-3">
                            {data.countries.length > 0 ? (
                                data.countries.map((country, idx) => (
                                    <div key={idx} className="flex justify-between items-center">
                                        <span className="text-gray-300 uppercase">{country.country || 'Unknown'}</span>
                                        <span className="text-yellow-400 font-semibold ml-4">{country.count}</span>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No country data yet</p>
                            )}
                        </div>
                    </div>

                    {/* Security Events */}
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4 text-red-400">Security Events</h2>
                        <div className="space-y-3">
                            {data.securityEvents.length > 0 ? (
                                data.securityEvents.map((event, idx) => (
                                    <div key={idx} className="flex justify-between items-center">
                                        <div>
                                            <span className="text-gray-300 block">{event.event_name}</span>
                                            <span className="text-xs text-gray-500">
                                                Last: {new Date(event.last_occurrence).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <span className="text-red-400 font-semibold ml-4">{event.count}</span>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No security events</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-8 text-center text-gray-600 text-sm">
                    <p>🔒 Privacy-first analytics • No IP addresses stored • User agents hashed</p>
                </div>
            </div>
        </div>
    )
}
