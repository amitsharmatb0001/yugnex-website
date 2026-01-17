// For PDFs, whitepapers, policy docs, research briefs.

interface ResourceDownloadProps {
  title: string
  description: string
  fileUrl: string
}

export default function ResourceDownload({
  title,
  description,
  fileUrl,
}: ResourceDownloadProps) {
  return (
    <div className="flex items-center justify-between border border-white/10 rounded-lg p-5 bg-white/5">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <a
        href={fileUrl}
        className="text-blue-400 text-sm underline"
        download
      >
        Download
      </a>
    </div>
  )
}
