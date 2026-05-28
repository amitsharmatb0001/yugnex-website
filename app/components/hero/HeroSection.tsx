// app/components/hero/HeroSection.tsx
// Institutional hero block with focus-in animation and premium CTA buttons
import styles from './HeroSection.module.css'

interface HeroProps {
  title: string
  tagline: string
  subline: string
  banner?: string
  credentials?: string
  slogan?: string
  introduction?: string
  locale?: string
}

export default function HeroSection({
  title,
  tagline,
  subline,
  banner,
  credentials,
  slogan,
  introduction,
  locale = 'en'
}: HeroProps) {
  return (
    <section
      id="main-content"
      role="main"
      className={styles.heroSection}
    >
      <h1 className={`${styles.heroTitle} animate-focus`}>
        {title}
      </h1>

      <p className={styles.heroTagline}>
        {tagline}
      </p>

      <p className={styles.heroSubline}>
        {subline}
      </p>

      {banner && (
        <p className="mt-6 text-sm text-gray-500 italic max-w-2xl mx-auto">
          {banner}
        </p>
      )}

      <p className={styles.heroSlogan}>
        {slogan || 'The Old Ends. The Next Begins.'}
      </p>

      <p className={styles.heroIntro}>
        {introduction || 'YugNex AI is laying the foundation for a new class of artificial intelligence that functions as a lasting engineering organization.'}
      </p>

      {/* Modern CTA Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href={`/${locale}/simulator`} className="glow-button glow-button-primary w-full sm:w-auto">
          Launch Simulator
        </a>
        <a href={`/${locale}/technology`} className="glow-button glow-button-secondary w-full sm:w-auto">
          Explore Technology
        </a>
      </div>

      {credentials && (
        <div className={styles.heroCredentials}>
          {credentials}
        </div>
      )}
    </section>
  )
}
