'use client'
import React from 'react'

export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center text-center">
          <div>
            <h1 className="text-xl">System Interface Temporarily Unavailable</h1>
            <p className="text-gray-300 mt-2">Please refresh to continue.</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
