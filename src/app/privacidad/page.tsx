import Card from '@/components/ui/Card'

export const metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Regala Futuro. Conoce cómo protegemos y utilizamos tu información personal.',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-warm-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
            Política de Privacidad
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Última actualización: {new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <Card>
            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">1. Introducción</h2>
            <p className="text-gray-700 mb-6">
              En Regala Futuro, valoramos y respetamos tu privacidad. Esta Política de Privacidad describe 
              cómo recopilamos, usamos, compartimos y protegemos tu información personal cuando visitas 
              nuestro sitio web o interactúas con nuestros servicios.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-8">2. Información que Recopilamos</h2>
            <p className="text-gray-700 mb-4">Recopilamos información que nos proporcionas directamente:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Información de contacto (nombre, email, teléfono)</li>
              <li>Información de donación (montos, frecuencia, métodos de pago)</li>
              <li>Información de voluntariado (disponibilidad, habilidades, experiencia)</li>
              <li>Información de solicitudes de apoyo (organización, necesidades, ubicación)</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-8">3. Uso de la Información</h2>
            <p className="text-gray-700 mb-4">Utilizamos tu información para:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Procesar donaciones y emitir certificados fiscales</li>
              <li>Coordinar actividades de voluntariado</li>
              <li>Evaluar y responder solicitudes de apoyo</li>
              <li>Enviar actualizaciones sobre nuestro impacto y programas</li>
              <li>Cumplir con obligaciones legales y fiscales</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-8">4. Protección de Datos</h2>
            <p className="text-gray-700 mb-6">
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu información 
              personal contra acceso no autorizado, pérdida, alteración o divulgación.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-8">5. Tus Derechos</h2>
            <p className="text-gray-700 mb-4">Tienes derecho a:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Acceder a tu información personal</li>
              <li>Rectificar información incorrecta</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al procesamiento de tus datos</li>
              <li>Retirar tu consentimiento en cualquier momento</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-8">6. Contacto</h2>
            <p className="text-gray-700">
              Para ejercer tus derechos o hacer consultas sobre privacidad, contáctanos en:{' '}
              <a href="mailto:privacidad@regalafuturo.org" className="text-primary-600 hover:text-primary-700">
                privacidad@regalafuturo.org
              </a>
            </p>
          </Card>
        </div>
      </section>
    </>
  )
}

