// Renders markdown to HTML on server
// Keeps legal content separate from code for audit & future updates

import fs from 'fs'
import path from 'path'
import { marked } from 'marked'

export function renderMarkdown(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath)
  const content = fs.readFileSync(fullPath, 'utf8')
  return marked.parse(content)
}
