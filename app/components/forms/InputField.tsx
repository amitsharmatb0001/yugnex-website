// Standard text/email input with institutional styling.

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export default function InputField({ label, className, ...props }: InputFieldProps) {
    return (
        <div className={className}>
            {label && (
                <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
                    {label} {props.required && <span className="text-yellow-500">*</span>}
                </label>
            )}
            <input
                {...props}
                suppressHydrationWarning
                className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
        </div>
    )
}
