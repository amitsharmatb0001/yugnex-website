import React from 'react'

interface FAQProps {
    items: Array<{
        question: string
        answer: string
    }>
}

export default function FAQSection({ items }: FAQProps) {
    if (!items || items.length === 0) return null

    return (
        <section className="relative z-10 container mx-auto px-6 py-24 max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-white mb-16">
                Frequently Asked Questions
            </h2>
            <div className="space-y-6">
                {items.map((item, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                        <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                            {item.question}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            {item.answer}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
