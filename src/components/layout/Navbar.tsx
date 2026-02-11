'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/como-funciona', label: 'Cómo Funciona' },
    { href: '/impacto', label: 'Impacto' },
    { href: '/eventos-voluntariado', label: 'Eventos' },
    { href: '/contacto', label: 'Contacto' },
  ]

  return (
    <>
      {/* Navbar with warm amber background - inviting, not corporate */}
      <nav className="bg-white border-b-2 border-warm-200 shadow-soft sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with warm terracotta accent */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-xl flex items-center justify-center shadow-soft transition-transform duration-200 group-hover:scale-105">
                <span className="text-white font-bold text-xl">RF</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-text-primary">
                  Regala Futuro
                </span>
                <span className="text-xs text-text-muted hidden sm:block">
                  Educación para todos
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - warm text colors */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary hover:text-primary-600 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary-500 after:transition-all after:duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons - clear visual hierarchy */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/solicitar-apoyo"
                className="text-text-secondary hover:text-accent-600 font-semibold transition-colors duration-200"
              >
                Solicitar Apoyo
              </Link>
              {/* Primary CTA with warm amber - unmistakable but inviting */}
              <Link
                href="/donar"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5"
              >
                Donar Ahora
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-text-secondary hover:text-primary-600 hover:bg-warm-200 focus:outline-none transition-colors duration-200"
              aria-label="Menú principal"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu with warm background */}
        <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-warm-50 border-t border-warm-200`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-base font-medium text-text-secondary hover:text-primary-600 hover:bg-warm-200 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/solicitar-apoyo"
              className="block px-3 py-2 rounded-lg text-base font-medium text-text-secondary hover:text-accent-600 hover:bg-warm-200 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Solicitar Apoyo
            </Link>
            <div className="px-3 py-2">
              <Link
                href="/donar"
                className="block text-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-soft-md hover:shadow-soft-lg w-full"
                onClick={() => setIsOpen(false)}
              >
                Donar Ahora
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sticky Donate Button (Mobile) - warm and inviting */}
      <Link
        href="/donar"
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-bold py-4 px-6 rounded-full shadow-soft-xl transition-all duration-200 hover:scale-105"
      >
        Donar
      </Link>
    </>
  )
}

