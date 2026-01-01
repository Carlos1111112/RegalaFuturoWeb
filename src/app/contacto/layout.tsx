import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contáctanos para consultas, alianzas, voluntariado o más información sobre Regala Futuro. Estamos aquí para ayudarte.',
  openGraph: {
    title: 'Contacto | Regala Futuro',
    description: '¿Tienes preguntas o quieres crear una alianza? Contáctanos y nuestro equipo te responderá a la brevedad.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

