import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donar',
  description: 'Haz una donación a Regala Futuro. Contribuye con dinero o dona útiles escolares, libros y tecnología educativa para transformar vidas a través de la educación.',
  openGraph: {
    title: 'Donar | Regala Futuro',
    description: 'Transforma vidas a través de la educación. Tu donación se convierte en kits educativos que abren puertas y construyen futuros.',
  },
}

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

