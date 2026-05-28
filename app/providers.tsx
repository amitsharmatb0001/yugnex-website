'use client'

import ErrorBoundary from '@/app/components/ErrorBoundary'
import { useAnalytics } from '@/app/lib/useAnalytics'

/*
  Providers is the root client-side wrapper.

  Responsibilities:
  - Catch rendering errors (ErrorBoundary)
  - Start global client-only systems (analytics, etc.)
  - Provide a single hydration boundary for layout.tsx

  It must export a DEFAULT component called Providers.
*/

import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fbbf24', // Gold
      dark: '#f59e0b',
      light: '#fde047',
    },
    secondary: {
      main: '#67e8f9', // Cyan
    },
    background: {
      default: '#000000',
      paper: '#09090b',
    },
    text: {
      primary: '#ffffff',
      secondary: '#9ca3af',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#09090b',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#09090b',
          border: '1px solid rgba(251, 191, 36, 0.2)',
          borderRadius: '12px',
        },
      },
    },
  },
})

import ThemeRegistry from '@/app/components/theme/ThemeRegistry'

export default function Providers({ children }: { children: React.ReactNode }) {
  // Start privacy-respecting analytics on route change
  useAnalytics()

  // Wrap the entire app in error boundary
  return (
    <ErrorBoundary>
      <ThemeRegistry>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </ThemeRegistry>
    </ErrorBoundary>
  )
}
