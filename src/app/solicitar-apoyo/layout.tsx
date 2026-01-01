import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solicitar Apoyo',
  description: 'Si tu escuela, comunidad u organización necesita apoyo educativo, solicítalo aquí. Evaluaremos tu solicitud y nos pondremos en contacto contigo.',
  openGraph: {
    title: 'Solicitar Apoyo | Regala Futuro',
    description: 'Solicita apoyo educativo para tu comunidad. Evaluamos todas las solicitudes y priorizamos según necesidad.',
  },
}

export default function RequestSupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

