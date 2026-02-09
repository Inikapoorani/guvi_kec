'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/curriculum', label: 'Curriculum' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/register', label: 'Register' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-accent-foreground">
              K
            </div>
            <span className="font-bold text-lg hidden sm:inline">KEC × GUVI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/login">
              <Button
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary/80 bg-transparent"
              >
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-primary/80"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-primary/50 mt-4 pt-4 space-y-2">
              <Link
                href="/login"
                className="block"
                onClick={() => setIsOpen(false)}
              >
                <Button
                  variant="outline"
                  className="w-full border-primary-foreground text-primary-foreground hover:bg-primary/80 bg-transparent"
                >
                  Login
                </Button>
              </Link>
              <Link
                href="/signup"
                className="block"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
