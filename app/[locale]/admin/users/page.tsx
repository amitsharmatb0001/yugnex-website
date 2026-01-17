'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

/*
  Admin User Management Page
  - View all admin users
  - Delete users (except self)
  - Add new users
*/

interface AdminUser {
    id: number
    username: string
    email: string
    created_at: string
    last_login: string | null
}

export default function UserManagement() {
    const router = useRouter()
    const [users, setUsers] = useState<AdminUser[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        setLoading(true)
        try {
            const res = await fetch('/api/admin/users')

            if (res.status === 401) {
                router.push(window.location.pathname.replace('/users', '/login'))
                return
            }

            const data = await res.json()
            setUsers(data)
        } catch (error) {
            console.error('Failed to fetch users:', error)
        } finally {
            setLoading(false)
        }
    }

    async function handleDelete(userId: number, username: string) {
        if (!confirm(`Are you sure you want to delete user "${username}"?`)) {
            return
        }

        try {
            const res = await fetch(`/api/admin/users?id=${userId}`, {
                method: 'DELETE',
            })

            if (res.ok) {
                alert('User deleted successfully')
                fetchUsers() // Refresh list
            } else {
                const data = await res.json()
                alert(data.error || 'Failed to delete user')
            }
        } catch (error) {
            alert('An error occurred while deleting the user')
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-gray-400">Loading...</div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-8 flex justify-between items-start">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">
                            <span className="text-yellow-400">Admin</span> Users
                        </h1>
                        <p className="text-gray-400">Manage administrator accounts</p>
                    </div>
                    <div className="flex gap-3">
                        <Link
                            href={window.location.pathname.replace('/users', '/register')}
                            className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition-colors font-semibold"
                        >
                            + Add New Admin
                        </Link>
                        <Link
                            href={window.location.pathname.replace('/users', '/analytics')}
                            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                        >
                            ← Back to Dashboard
                        </Link>
                    </div>
                </div>

                {/* User Table */}
                <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-800">
                                <th className="text-left p-4 text-gray-300 font-semibold">Username</th>
                                <th className="text-left p-4 text-gray-300 font-semibold">Email</th>
                                <th className="text-left p-4 text-gray-300 font-semibold">Created</th>
                                <th className="text-left p-4 text-gray-300 font-semibold">Last Login</th>
                                <th className="text-right p-4 text-gray-300 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                                    <td className="p-4 text-white font-medium">{user.username}</td>
                                    <td className="p-4 text-gray-400">{user.email}</td>
                                    <td className="p-4 text-gray-400">
                                        {new Date(user.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="p-4 text-gray-400">
                                        {user.last_login
                                            ? new Date(user.last_login).toLocaleDateString()
                                            : 'Never'}
                                    </td>
                                    <td className="p-4 text-right">
                                        <button
                                            onClick={() => handleDelete(user.id, user.username)}
                                            className="px-3 py-1 bg-red-900/20 text-red-400 border border-red-800 rounded hover:bg-red-900/40 transition-colors text-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {users.length === 0 && (
                        <div className="p-8 text-center text-gray-500">
                            No admin users found
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="mt-6 text-sm text-gray-600">
                    <p>💡 You cannot delete your own account while logged in</p>
                </div>
            </div>
        </div>
    )
}
