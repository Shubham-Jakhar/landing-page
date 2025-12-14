"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = ["Services", "About", "Why Us", "Contact"]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg shadow-purple-500/5 border-b border-white/20 dark:border-gray-700/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            Sammunat
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="relative px-4 py-2 text-gray-700 dark:text-gray-200 font-medium rounded-full transition-all duration-300 hover:text-purple-600 dark:hover:text-purple-400 group"
              >
                <span className="absolute inset-0 rounded-full bg-purple-100 dark:bg-purple-900/30 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                <span className="relative z-10">{link}</span>
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="relative p-2 ml-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
              {mounted && theme === "dark" ? (
                <Sun className="relative h-5 w-5 text-gray-700 dark:text-gray-200 transition-transform group-hover:rotate-45" />
              ) : (
                <Moon className="relative h-5 w-5 text-gray-700 dark:text-gray-200 transition-transform group-hover:rotate-12" />
              )}
            </button>
            
            <div className="ml-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 py-2 px-4 rounded-md">
              Get Started
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              )}
            </button>
            <button className="p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-b-2xl">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="block py-3 px-4 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg mx-2 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="px-2 mt-4">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
