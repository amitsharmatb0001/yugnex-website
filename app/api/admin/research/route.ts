import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/app/lib/db'
import { verifyToken } from '@/app/lib/auth'

/*
  Research Papers Management API (Protected)
  - GET: Fetch all papers or a single paper by ID
  - POST: Create a new paper
  - PUT: Update an existing paper
  - DELETE: Delete a paper by ID
*/

async function checkAuth(req: NextRequest) {
    const token = req.cookies.get('admin_token')?.value
    if (!token) return null
    return verifyToken(token)
}

export async function GET(req: NextRequest) {
    try {
        const payload = await checkAuth(req)
        if (!payload) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { searchParams } = new URL(req.url)
        const id = searchParams.get('id')

        if (id) {
            const [rows] = await db.execute<any[]>(
                'SELECT * FROM research_papers WHERE id = ?',
                [id]
            )
            if (rows.length === 0) {
                return NextResponse.json({ error: 'Paper not found' }, { status: 404 })
            }
            return NextResponse.json(rows[0])
        }

        const [rows] = await db.execute<any[]>(
            'SELECT id, title, description, publish_date, authors, tags, pdf_url FROM research_papers ORDER BY publish_date DESC'
        )
        return NextResponse.json(rows)
    } catch (error) {
        console.error('Research GET error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    try {
        const payload = await checkAuth(req)
        if (!payload) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await req.json()
        const { id, title, description, publish_date, authors, tags, pdf_url, content_markdown } = body

        if (!id || !title || !description || !publish_date || !authors || !content_markdown) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        // Check if ID already exists
        const [existing] = await db.execute<any[]>(
            'SELECT id FROM research_papers WHERE id = ?',
            [id]
        )
        if (existing.length > 0) {
            return NextResponse.json({ error: 'Paper with this ID already exists' }, { status: 400 })
        }

        await db.execute(
            `INSERT INTO research_papers (id, title, description, publish_date, authors, tags, pdf_url, content_markdown)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [id, title, description, publish_date, authors, tags || '', pdf_url || null, content_markdown]
        )

        return NextResponse.json({ success: true, id })
    } catch (error) {
        console.error('Research POST error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

export async function PUT(req: NextRequest) {
    try {
        const payload = await checkAuth(req)
        if (!payload) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await req.json()
        const { id, title, description, publish_date, authors, tags, pdf_url, content_markdown } = body

        if (!id || !title || !description || !publish_date || !authors || !content_markdown) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        // Check if exists
        const [existing] = await db.execute<any[]>(
            'SELECT id FROM research_papers WHERE id = ?',
            [id]
        )
        if (existing.length === 0) {
            return NextResponse.json({ error: 'Paper not found' }, { status: 404 })
        }

        await db.execute(
            `UPDATE research_papers 
             SET title = ?, description = ?, publish_date = ?, authors = ?, tags = ?, pdf_url = ?, content_markdown = ?
             WHERE id = ?`,
            [title, description, publish_date, authors, tags || '', pdf_url || null, content_markdown, id]
        )

        return NextResponse.json({ success: true, id })
    } catch (error) {
        console.error('Research PUT error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const payload = await checkAuth(req)
        if (!payload) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { searchParams } = new URL(req.url)
        const id = searchParams.get('id')

        if (!id) {
            return NextResponse.json({ error: 'Paper ID required' }, { status: 400 })
        }

        // Check if exists
        const [existing] = await db.execute<any[]>(
            'SELECT id FROM research_papers WHERE id = ?',
            [id]
        )
        if (existing.length === 0) {
            return NextResponse.json({ error: 'Paper not found' }, { status: 404 })
        }

        await db.execute('DELETE FROM research_papers WHERE id = ?', [id])

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Research DELETE error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
