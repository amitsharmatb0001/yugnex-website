// app/components/hero/HeroSection.tsx
// Institutional hero block with focus-in animation

interface HeroProps {
  title: string
  tagline: string
  subline: string
  banner?: string
  credentials?: string
  slogan?: string
  introduction?: string
}

export default function HeroSection({ title, tagline, subline, banner, credentials, slogan, introduction }: HeroProps) {
  return (
    <section
      id="main-content"
      role="main"
      style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        paddingTop: '6rem',
        paddingBottom: '4rem'
      }}
    >
      <h1
        className="animate-focus"
        style={{
          fontSize: '3rem',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.15
        }}
      >
        {title}
      </h1>

      <p style={{
        marginTop: '1rem',
        fontSize: '1.25rem',
        color: '#d1d5db'
      }}>
        {tagline}
      </p>

      <p style={{
        marginTop: '0.5rem',
        fontSize: '1.125rem',
        color: '#d1d5db'
      }}>
        {subline}
      </p>

      {banner && (
        <p style={{
          marginTop: '1.5rem',
          fontSize: '1rem',
          color: '#9ca3af',
          fontStyle: 'italic'
        }}>
          {banner}
        </p>
      )}

      <p style={{
        marginTop: '2rem',
        fontSize: '2rem',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '1rem'
      }}>
        {slogan || 'The Old Ends. The Next Begins.'}
      </p>

      <p style={{
        fontSize: '1.1rem',
        color: '#9ca3af',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '1rem',
        lineHeight: 1.6
      }}>
        {introduction || 'YugNex AI is laying the foundation for a new class of artificial intelligence that functions as a lasting engineering organization.'}
      </p>

      {credentials && (
        <div style={{
          marginTop: '2rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '0.6875rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'rgba(251,191,36,0.8)',
          border: '1px solid rgba(234,179,8,0.3)',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          borderRadius: '9999px'
        }}>
          {credentials}
        </div>
      )}
    </section>
  )
}
