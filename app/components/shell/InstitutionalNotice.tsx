// For compliance banners (privacy summary, legal notice, research disclaimer).

interface InstitutionalNoticeProps {
  text: string
}

export default function InstitutionalNotice({ text }: InstitutionalNoticeProps) {
  return (
    <div className="border border-yellow-500/30 bg-yellow-500/5 text-yellow-200 text-sm p-4 rounded-md my-6">
      {text}
    </div>
  )
}
