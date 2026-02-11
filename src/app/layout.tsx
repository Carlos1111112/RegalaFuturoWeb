import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'Regala Futuro | Educación para todos los niños del Perú',
    template: '%s | Regala Futuro'
  },
  description: 'Organización sin fines de lucro que reduce la brecha educativa en comunidades vulnerables del Perú mediante donación estructurada de útiles escolares, libros y tecnología educativa básica.',
  keywords: ['educación', 'Perú', 'ONG', 'donaciones', 'útiles escolares', 'niños', 'equidad educativa'],
  authors: [{ name: 'Regala Futuro' }],
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://regalafuturo.org',
    siteName: 'Regala Futuro',
    title: 'Regala Futuro | Educación para todos los niños del Perú',
    description: 'Donar educación hoy, construir oportunidades para toda la vida.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Regala Futuro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Regala Futuro | Educación para todos los niños del Perú',
    description: 'Donar educación hoy, construir oportunidades para toda la vida.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

