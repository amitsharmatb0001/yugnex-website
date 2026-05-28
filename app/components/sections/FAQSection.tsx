'use client'
import React, { useState, useMemo } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import styles from './FAQSection.module.css'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
}

type CategoryType = 'all' | 'product' | 'security' | 'general'

export default function FAQSection({ items, title }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all')

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  // Dynamic categorisation based on keywords to keep localization intact
  const itemsWithCategories = useMemo(() => {
    return items.map((item) => {
      const questionLower = item.question.toLowerCase()
      const answerLower = item.answer.toLowerCase()
      
      let category: CategoryType = 'general'
      
      if (
        questionLower.includes('security') ||
        questionLower.includes('training') ||
        questionLower.includes('proprietary') ||
        answerLower.includes('sovereignty') ||
        answerLower.includes('private') ||
        answerLower.includes('encryption')
      ) {
        category = 'security'
      } else if (
        questionLower.includes('completion') ||
        questionLower.includes('replace') ||
        questionLower.includes('ide') ||
        questionLower.includes('language') ||
        questionLower.includes('legacy') ||
        questionLower.includes('copilot') ||
        questionLower.includes('cursor') ||
        answerLower.includes('architecture') ||
        answerLower.includes('reasoning')
      ) {
        category = 'product'
      }

      return {
        ...item,
        category,
      }
    })
  }, [items])

  const filteredItems = useMemo(() => {
    return itemsWithCategories.filter((item) => {
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [itemsWithCategories, searchQuery, activeCategory])

  if (!items || items.length === 0) return null

  return (
    <div className={styles.faqContainer}>
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-12 tracking-tight">
        {title || 'Frequently Asked Questions'}
      </h2>

      {/* Search Input */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search questions or keywords..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setActiveIndex(null) // Reset accordion expansion on search
          }}
        />
      </div>

      {/* Categories Tabs */}
      <div className={styles.categoryFilter}>
        <button
          className={`${styles.categoryTab} ${activeCategory === 'all' ? styles.categoryTabActive : ''}`}
          onClick={() => {
            setActiveCategory('all')
            setActiveIndex(null)
          }}
        >
          All Questions
        </button>
        <button
          className={`${styles.categoryTab} ${activeCategory === 'product' ? styles.categoryTabActive : ''}`}
          onClick={() => {
            setActiveCategory('product')
            setActiveIndex(null)
          }}
        >
          Product & Architecture
        </button>
        <button
          className={`${styles.categoryTab} ${activeCategory === 'security' ? styles.categoryTabActive : ''}`}
          onClick={() => {
            setActiveCategory('security')
            setActiveIndex(null)
          }}
        >
          Security & Privacy
        </button>
        <button
          className={`${styles.categoryTab} ${activeCategory === 'general' ? styles.categoryTabActive : ''}`}
          onClick={() => {
            setActiveCategory('general')
            setActiveIndex(null)
          }}
        >
          General & Hiring
        </button>
      </div>

      {/* Accordion List */}
      <div className={styles.faqAccordion}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => {
            const isActive = activeIndex === index
            return (
              <div
                key={index}
                className={`${styles.faqAccordionItem} ${isActive ? styles.faqAccordionItemActive : ''}`}
              >
                <button
                  className={styles.faqAccordionHeader}
                  onClick={() => toggleItem(index)}
                  aria-expanded={isActive}
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown size={18} className={styles.faqAccordionIcon} />
                </button>

                <div
                  className={`${styles.faqAccordionContent} ${
                    isActive ? styles.faqAccordionContentActive : ''
                  }`}
                >
                  <div className={styles.faqAccordionInner}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <div className={styles.noResults}>
            No results found matching "{searchQuery}" in this category.
          </div>
        )}
      </div>
    </div>
  )
}
