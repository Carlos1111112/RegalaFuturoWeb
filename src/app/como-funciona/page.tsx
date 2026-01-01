import Card from '@/components/ui/Card'
import Stepper from '@/components/ui/Stepper'
import CTASection from '@/components/ui/CTASection'

export const metadata = {
  title: 'Cómo Funciona',
  description: 'Conoce nuestro modelo de trabajo estructurado y transparente, desde la identificación de comunidades hasta el seguimiento del impacto educativo.',
}

export default function HowItWorksPage() {
  const workflowSteps = [
    {
      title: 'Identificación de Comunidades',
      description: 'Trabajamos con UGEL, municipalidades y organizaciones locales para identificar comunidades prioritarias que más necesitan apoyo.',
    },
    {
      title: 'Diagnóstico de Necesidades',
      description: 'Visitamos las escuelas y comunidades para evaluar las necesidades específicas de cada grupo de estudiantes.',
    },
    {
      title: 'Campañas y Alianzas',
      description: 'Organizamos campañas de donación y establecemos alianzas con empresas, instituciones y ciudadanos comprometidos.',
    },
    {
      title: 'Armado de Kits',
      description: 'Preparamos kits educativos personalizados según edad, nivel escolar y necesidades específicas de cada estudiante.',
    },
    {
      title: 'Entrega Documentada',
      description: 'Distribuimos los kits directamente en las comunidades con registro fotográfico, firma de conformidad y actas de entrega.',
    },
    {
      title: 'Seguimiento del Impacto',
      description: 'Monitoreamos indicadores educativos (asistencia, rendimiento, permanencia) y reportamos resultados a donantes.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-50 to-warm-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
            Cómo Funciona Regala Futuro
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Nuestro modelo de trabajo estructurado y transparente asegura que cada donación genere 
            un impacto real, medible y sostenible en las comunidades que más lo necesitan.
          </p>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="section-container bg-white">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Cada paso está diseñado para garantizar transparencia, eficiencia y máximo impacto
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Stepper steps={workflowSteps} orientation="vertical" />
        </div>
      </section>

      {/* Kit Details */}
      <section className="bg-gradient-to-br from-warm-50 to-primary-50 section-container">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
            Qué Incluyen los Kits Educativos de Acceso
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Cada kit está diseñado según la edad, nivel escolar y necesidades específicas de los estudiantes. 
            No hay dos kits iguales, porque cada estudiante es único.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card hover>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Útiles Básicos
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Cuadernos (varios tipos)</li>
                <li>• Lápices y lapiceros</li>
                <li>• Colores y plumones</li>
                <li>• Regla, borrador, tajador</li>
                <li>• Mochila de calidad</li>
              </ul>
            </div>
          </Card>

          <Card hover>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Libros
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Textos escolares actualizados</li>
                <li>• Libros de lectura por edad</li>
                <li>• Diccionarios</li>
                <li>• Material complementario</li>
                <li>• Guías de estudio</li>
              </ul>
            </div>
          </Card>

          <Card hover>
            <div className="text-center">
              <div className="w-16 h-16 bg-warm-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Tecnología
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Tablets educativas</li>
                <li>• Mini-laptops básicas</li>
                <li>• Calculadoras científicas</li>
                <li>• Accesorios (cargadores, fundas)</li>
                <li>• (Según disponibilidad)</li>
              </ul>
            </div>
          </Card>

          <Card hover>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Material Digital
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Apps educativas precargadas</li>
                <li>• Contenido curricular digital</li>
                <li>• Videos educativos offline</li>
                <li>• Libros digitales</li>
                <li>• Material de refuerzo</li>
              </ul>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto bg-primary-50 border-2 border-primary-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Personalización por Nivel
                </h3>
                <p className="text-gray-700">
                  Los kits varían según el nivel educativo: inicial, primaria o secundaria. 
                  Un estudiante de primaria recibirá cuadernos de práctica y libros de cuentos, 
                  mientras que un estudiante de secundaria recibirá textos más avanzados y calculadora científica.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Beneficiaries */}
      <section className="section-container bg-white">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
            A Quiénes Apoyamos
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Priorizamos comunidades y escuelas identificadas por su alta vulnerabilidad y necesidad de recursos educativos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card hover className="border-l-4 border-primary-500">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">
                  Escuelas Públicas Vulnerables
                </h3>
                <p className="text-gray-600">
                  Instituciones educativas con recursos limitados, identificadas por las UGEL como prioritarias 
                  por su situación socioeconómica.
                </p>
              </div>
            </div>
          </Card>

          <Card hover className="border-l-4 border-secondary-500">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">
                  Comunidades Rurales
                </h3>
                <p className="text-gray-600">
                  Escuelas en zonas rurales alejadas, con difícil acceso a materiales educativos 
                  y tecnología.
                </p>
              </div>
            </div>
          </Card>

          <Card hover className="border-l-4 border-primary-500">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">
                  Asentamientos Humanos
                </h3>
                <p className="text-gray-600">
                  Zonas urbanas marginales donde las familias enfrentan dificultades para acceder 
                  a materiales educativos básicos.
                </p>
              </div>
            </div>
          </Card>

          <Card hover className="border-l-4 border-secondary-500">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">
                  Organizaciones Comunitarias
                </h3>
                <p className="text-gray-600">
                  Ollas comunes, comedores populares y organizaciones de base que apoyan 
                  a estudiantes en situación vulnerable.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Transparency */}
      <section className="bg-gradient-to-br from-secondary-50 to-primary-50 section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
              Transparencia Total
            </h2>
            <p className="text-lg text-gray-700">
              Cada donación es rastreada y documentada. Así garantizamos confianza y rendición de cuentas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Registro Fotográfico
              </h3>
              <p className="text-sm text-gray-600">
                Documentamos cada entrega con fotografías de los estudiantes recibiendo sus kits.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Actas de Entrega
              </h3>
              <p className="text-sm text-gray-600">
                Cada entrega incluye actas firmadas por directores, profesores y autoridades locales.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-warm-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Reportes de Impacto
              </h3>
              <p className="text-sm text-gray-600">
                Enviamos reportes periódicos a donantes con indicadores de asistencia y rendimiento.
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              Todos nuestros reportes e indicadores están disponibles públicamente
            </p>
            <a href="/impacto" className="btn-primary">
              Ver Impacto y Transparencia
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Listo para ser parte del cambio?"
        description="Tu donación se convertirá en kits educativos reales que transformarán vidas. Únete a nuestra comunidad de donantes comprometidos."
        primaryButton={{
          text: 'Donar Ahora',
          href: '/donar',
        }}
        secondaryButton={{
          text: 'Solicitar Apoyo',
          href: '/solicitar-apoyo',
        }}
      />
    </>
  )
}

