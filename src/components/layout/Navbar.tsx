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
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RF</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-gray-900">
                  Regala Futuro
                </span>
                <span className="text-xs text-gray-600 hidden sm:block">
                  Educación para todos
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/solicitar-apoyo"
                className="text-secondary-600 hover:text-secondary-700 font-semibold transition-colors"
              >
                Solicitar Apoyo
              </Link>
              <Link
                href="/donar"
                className="btn-primary"
              >
                Donar Ahora
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-gray-100 focus:outline-none"
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

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-white border-t`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/solicitar-apoyo"
              className="block px-3 py-2 rounded-md text-base font-medium text-secondary-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Solicitar Apoyo
            </Link>
            <div className="px-3 py-2">
              <Link
                href="/donar"
                className="block text-center btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                Donar Ahora
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sticky Donate Button (Mobile) */}
      <Link
        href="/donar"
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-6 rounded-full shadow-2xl transition-all duration-200 hover:scale-105"
      >
        Donar
      </Link>
    </>
  )
}

