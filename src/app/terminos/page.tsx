import Card from '@/components/ui/Card'

export const metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso del sitio web de Regala Futuro.',
}

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-secondary-50 to-warm-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
            Términos y Condiciones
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Última actualización: {new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <Card>
            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-700 mb-6">
              Al acceder y utilizar el sitio web de Regala Futuro, aceptas estar sujeto a estos Términos y Condiciones. 
              Si no estás de acuerdo, por favor no utilices este sitio.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-8">2. Sobre Regala Futuro</h2>
            <p className="text-gray-700 mb-6">
              Regala Futuro es una organización sin fines de lucro registrada en el Perú, comprometida con reducir 
              la brecha educativa mediante donación estructurada de materiales educativos.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-8">3. Donaciones</h2>
            <p className="text-gray-700 mb-4">
              Todas las donaciones a Regala Futuro son voluntarias y no reembolsables. Las donaciones se utilizan 
              exclusivamente para los fines educativos descritos en nuestro sitio web.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Las donaciones monetarias son procesadas de forma segura</li>
              <li>Se emitirán certificados de donación para fines fiscales</li>
              <li>Las donaciones en especie deben estar en buen estado</li>
              <li>Nos reservamos el derecho de rechazar donaciones inapropiadas</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-8">4. Uso del Sitio Web</h2>
            <p className="text-gray-700 mb-4">Te comprometes a:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Proporcionar información veraz y actualizada</li>
              <li>No utilizar el sitio para fines ilegales</li>
              <li>No intentar interferir con el funcionamiento del sitio</li>
              <li>Respetar los derechos de propiedad intelectual</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-8">5. Propiedad Intelectual</h2>
            <p className="text-gray-700 mb-6">
              Todo el contenido de este sitio (textos, imágenes, logos, diseño) es propiedad de Regala Futuro 
              o sus licenciantes y está protegido por las leyes de propiedad intelectual del Perú.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-8">6. Limitación de Responsabilidad</h2>
            <p className="text-gray-700 mb-6">
              Regala Futuro no será responsable por daños indirectos, incidentales o consecuentes que resulten 
              del uso o la imposibilidad de usar este sitio web.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-8">7. Modificaciones</h2>
            <p className="text-gray-700 mb-6">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones 
              entrarán en vigor inmediatamente después de su publicación en el sitio.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-8">8. Ley Aplicable</h2>
            <p className="text-gray-700 mb-6">
              Estos términos se rigen por las leyes de la República del Perú. Cualquier disputa será resuelta 
              en los tribunales competentes de Lima, Perú.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-8">9. Contacto</h2>
            <p className="text-gray-700">
              Para preguntas sobre estos términos, contáctanos en:{' '}
              <a href="mailto:legal@regalafuturo.org" className="text-primary-600 hover:text-primary-700">
                legal@regalafuturo.org
              </a>
            </p>
          </Card>
        </div>
      </section>
    </>
  )
}

