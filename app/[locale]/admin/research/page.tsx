'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'

interface ResearchPaper {
    id: string
    title: string
    description: string
    publish_date: string
    authors: string
    tags: string
    pdf_url: string
    content_markdown: string
}

export default function ResearchManager() {
    const router = useRouter()
    const params = useParams()
    const locale = params?.locale || 'en'
    
    const [papers, setPapers] = useState<ResearchPaper[]>([])
    const [loading, setLoading] = useState(true)
    const [view, setView] = useState<'list' | 'edit' | 'create'>('list')
    
    // Form fields
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [publishDate, setPublishDate] = useState('')
    const [authors, setAuthors] = useState('')
    const [tags, setTags] = useState('')
    const [pdfUrl, setPdfUrl] = useState('')
    const [contentMarkdown, setContentMarkdown] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        fetchPapers()
    }, [])

    async function fetchPapers() {
        setLoading(true)
        setError('')
        try {
            const res = await fetch(`/api/admin/research`)
            if (res.status === 401) {
                router.push(`/${locale}/admin/login`)
                return
            }
            const json = await res.json()
            setPapers(json)
        } catch (err) {
            console.error('Failed to fetch papers:', err)
            setError('Failed to load papers list.')
        } finally {
            setLoading(false)
        }
    }

    async function handleLogout() {
        try {
            await fetch('/api/admin/logout', { method: 'POST' })
            router.push(`/${locale}/admin/login`)
        } catch (err) {
            console.error('Logout failed:', err)
        }
    }

    function resetForm() {
        setId('')
        setTitle('')
        setDescription('')
        setPublishDate('')
        setAuthors('')
        setTags('')
        setPdfUrl('')
        setContentMarkdown('')
        setError('')
        setSuccess('')
    }

    function handleEdit(paper: ResearchPaper) {
        resetForm()
        setId(paper.id)
        setTitle(paper.title)
        setDescription(paper.description)
        // Format date string from date-picker YYYY-MM-DD
        const formattedDate = paper.publish_date ? paper.publish_date.substring(0, 10) : ''
        setPublishDate(formattedDate)
        setAuthors(paper.authors)
        setTags(paper.tags)
        setPdfUrl(paper.pdf_url || '')
        setContentMarkdown(paper.content_markdown)
        setView('edit')
    }

    async function handleDelete(paperId: string) {
        if (!confirm('Are you sure you want to delete this research paper?')) return
        try {
            const res = await fetch(`/api/admin/research?id=${paperId}`, {
                method: 'DELETE'
            })
            if (res.status === 401) {
                router.push(`/${locale}/admin/login`)
                return
            }
            const json = await res.json()
            if (json.error) {
                setError(json.error)
            } else {
                setSuccess('Paper deleted successfully!')
                fetchPapers()
            }
        } catch (err) {
            console.error('Failed to delete paper:', err)
            setError('Failed to delete paper.')
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setError('')
        setSuccess('')

        const body = {
            id,
            title,
            description,
            publish_date: publishDate,
            authors,
            tags,
            pdf_url: pdfUrl || null,
            content_markdown: contentMarkdown
        }

        try {
            const method = view === 'create' ? 'POST' : 'PUT'
            const res = await fetch(`/api/admin/research`, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })

            if (res.status === 401) {
                router.push(`/${locale}/admin/login`)
                return
            }

            const json = await res.json()
            if (json.error) {
                setError(json.error)
            } else {
                setSuccess(view === 'create' ? 'Paper published successfully!' : 'Paper updated successfully!')
                setTimeout(() => {
                    setView('list')
                    fetchPapers()
                    resetForm()
                }, 1000)
            }
        } catch (err) {
            console.error('Failed to save paper:', err)
            setError('Internal server error occurred.')
        }
    }

    if (loading && papers.length === 0) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-gray-400">Loading Research Manager...</div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-8 flex justify-between items-start border-b border-gray-800 pb-6">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">
                            <span className="text-yellow-400">YugNex</span> Research CMS
                        </h1>
                        <p className="text-gray-400">Publish and manage peer-reviewed HTML articles instantly.</p>
                    </div>
                    <div className="flex gap-3">
                        <Link
                            href={`/${locale}/admin/analytics`}
                            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                        >
                            Analytics
                        </Link>
                        <Link
                            href={`/${locale}/admin/users`}
                            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                        >
                            Users
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-950 text-red-200 rounded hover:bg-red-900 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-950 border border-red-800 text-red-200 rounded">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="mb-6 p-4 bg-green-950 border border-green-800 text-green-200 rounded">
                        {success}
                    </div>
                )}

                {/* List View */}
                {view === 'list' && (
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-semibold">Published Papers</h2>
                            <button
                                onClick={() => {
                                    resetForm()
                                    setView('create')
                                }}
                                className="px-5 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded transition-colors"
                            >
                                + Publish New Paper
                            </button>
                        </div>

                        {papers.length === 0 ? (
                            <div className="text-center py-12 bg-zinc-900/50 border border-zinc-800 rounded-lg text-gray-400">
                                No papers found in the database. Seeding/migration query is required.
                            </div>
                        ) : (
                            <div className="grid gap-4">
                                {papers.map((paper) => (
                                    <div
                                        key={paper.id}
                                        className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg flex justify-between items-start hover:border-yellow-500/20 transition-all"
                                    >
                                        <div className="flex-1 mr-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-xs font-mono px-2 py-0.5 bg-zinc-800 rounded text-yellow-400 font-bold uppercase">
                                                    {paper.id}
                                                </span>
                                                <span className="text-xs text-gray-500 font-mono">
                                                    {paper.publish_date.substring(0, 10)}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">{paper.title}</h3>
                                            <p className="text-sm text-gray-400 mb-2 font-light line-clamp-2">{paper.description}</p>
                                            <div className="text-xs text-gray-500">
                                                <strong>Authors:</strong> {paper.authors}
                                            </div>
                                        </div>
                                        <div className="flex gap-2 shrink-0">
                                            <button
                                                onClick={() => handleEdit(paper)}
                                                className="px-3.5 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded text-sm transition-colors"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(paper.id)}
                                                className="px-3.5 py-2 bg-red-950/40 hover:bg-red-950/80 border border-red-900/30 text-red-200 rounded text-sm transition-colors"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Edit / Create Form View */}
                {(view === 'edit' || view === 'create') && (
                    <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-lg max-w-4xl mx-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-semibold">
                                {view === 'create' ? 'Publish New Research Paper' : 'Edit Research Paper'}
                            </h2>
                            <button
                                onClick={() => setView('list')}
                                className="px-4 py-2 bg-zinc-850 hover:bg-zinc-800 text-gray-300 rounded transition-colors"
                            >
                                Back to List
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Paper ID (Slug)*</label>
                                    <input
                                        type="text"
                                        value={id}
                                        onChange={(e) => setId(e.target.value.toLowerCase().replace(/[^a-z0-9-_]/g, ''))}
                                        placeholder="e.g., nexsidi"
                                        disabled={view === 'edit'}
                                        required
                                        className="w-full px-4 py-2 bg-black border border-zinc-700 rounded focus:border-yellow-400 focus:outline-none disabled:opacity-50"
                                    />
                                    <span className="text-xs text-gray-500 mt-1 block">Used in route: /research/[id]</span>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Publish Date*</label>
                                    <input
                                        type="date"
                                        value={publishDate}
                                        onChange={(e) => setPublishDate(e.target.value)}
                                        required
                                        className="w-full px-4 py-2 bg-black border border-zinc-700 rounded focus:border-yellow-400 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Title*</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter paper title"
                                    required
                                    className="w-full px-4 py-2 bg-black border border-zinc-700 rounded focus:border-yellow-400 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Abstract / Brief Description*</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="A short summary of the publication to display on the research list page"
                                    required
                                    rows={3}
                                    className="w-full px-4 py-2 bg-black border border-zinc-700 rounded focus:border-yellow-400 focus:outline-none resize-none"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Authors*</label>
                                    <input
                                        type="text"
                                        value={authors}
                                        onChange={(e) => setAuthors(e.target.value)}
                                        placeholder="Comma-separated authors list"
                                        required
                                        className="w-full px-4 py-2 bg-black border border-zinc-700 rounded focus:border-yellow-400 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Tags</label>
                                    <input
                                        type="text"
                                        value={tags}
                                        onChange={(e) => setTags(e.target.value)}
                                        placeholder="e.g., AI, Multi-Agent Systems"
                                        className="w-full px-4 py-2 bg-black border border-zinc-700 rounded focus:border-yellow-400 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">PDF Download URL (Optional)</label>
                                <input
                                    type="text"
                                    value={pdfUrl}
                                    onChange={(e) => setPdfUrl(e.target.value)}
                                    placeholder="e.g., /YugNex_Research_Whitepaper.pdf"
                                    className="w-full px-4 py-2 bg-black border border-zinc-700 rounded focus:border-yellow-400 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Paper Body (Markdown Content)*</label>
                                <textarea
                                    value={contentMarkdown}
                                    onChange={(e) => setContentMarkdown(e.target.value)}
                                    placeholder="Paste/write the paper body in Markdown here. Include standard headings, lists, bold text, code blocks, or raw HTML wrappers (e.g. for equations/SVGs)."
                                    required
                                    rows={14}
                                    className="w-full px-4 py-2 bg-black border border-zinc-700 rounded font-mono text-sm focus:border-yellow-400 focus:outline-none"
                                />
                                <span className="text-xs text-gray-500 mt-1 block">Supports markdown formatting, code syntax blocks, equations, tables, and raw HTML blocks.</span>
                            </div>

                            <div className="pt-4 flex gap-3 justify-end border-t border-gray-800">
                                <button
                                    type="button"
                                    onClick={() => setView('list')}
                                    className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded transition-colors"
                                >
                                    {view === 'create' ? 'Publish Paper' : 'Save Changes'}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}
