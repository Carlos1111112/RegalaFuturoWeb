import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eventos y Voluntariado',
  description: 'Únete a nuestra comunidad de voluntarios. Participa en chocolatadas, rosadarios, entregas de kits y eventos que transforman vidas.',
  openGraph: {
    title: 'Eventos y Voluntariado | Regala Futuro',
    description: 'Sé parte del cambio. Únete como voluntario y participa en nuestros eventos comunitarios.',
  },
}

export default function EventsVolunteeringLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

