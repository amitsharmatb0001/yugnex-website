// Multi-line input for messages, descriptions, research proposals.

interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function TextAreaField(props: TextAreaFieldProps) {
  return (
    <textarea
      {...props}
      className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
    />
  )
}
