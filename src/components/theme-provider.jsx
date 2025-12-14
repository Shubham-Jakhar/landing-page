"use client"

import * as React from "react"

const ThemeContext = React.createContext(null)

function getInitialTheme() {
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
  } catch (e) { }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  return 'light'
}

export default function ThemeProvider({ children }) {
  const [theme, setThemeState] = React.useState(() => {
    if (typeof window === 'undefined') return 'light'
    try {
      const s = localStorage.getItem('theme')
      if (s === 'light' || s === 'dark') return s
    } catch (e) { }
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    return 'light'
  })

  React.useEffect(() => {
    try {
      localStorage.setItem('theme', theme)
    } catch (e) { }
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const setTheme = React.useCallback((t) => {
    setThemeState(t)
  }, [])

  const toggleTheme = React.useCallback(() => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
