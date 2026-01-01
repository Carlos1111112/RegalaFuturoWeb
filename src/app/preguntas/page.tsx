import Card from '@/components/ui/Card'
import CTASection from '@/components/ui/CTASection'

export const metadata = {
  title: 'Preguntas Frecuentes',
  description: 'Encuentra respuestas a las preguntas más comunes sobre donaciones, solicitudes de apoyo, voluntariado y cómo funciona Regala Futuro.',
}

export default function FAQPage() {
  const faqs = [
    {
      category: 'Donaciones',
      questions: [
        {
          q: '¿Cómo puedo hacer una donación?',
          a: 'Puedes donar a través de nuestra página de donaciones en línea. Aceptamos donaciones monetarias (una vez o mensuales) y donaciones en especie (útiles escolares, libros, tecnología). El proceso es simple y seguro.',
        },
        {
          q: '¿Mi donación es deducible de impuestos?',
          a: 'Sí, somos una organización sin fines de lucro registrada en el Perú. Las donaciones pueden ser deducibles de impuestos según la legislación peruana vigente. Te proporcionaremos un certificado de donación que puedes usar para tu declaración de impuestos.',
        },
        {
          q: '¿Qué tipo de donaciones en especie aceptan?',
          a: 'Aceptamos cuadernos, libros escolares y de lectura, calculadoras, laptops/tablets (en buen estado), mochilas, útiles escolares (lápices, colores, reglas, etc.) y material educativo digital. Los artículos deben estar en buen estado y ser apropiados para estudiantes de inicial, primaria o secundaria.',
        },
        {
          q: '¿Puedo saber dónde va mi donación?',
          a: 'Absolutamente. Enviamos reportes periódicos a todos nuestros donantes con información sobre las comunidades beneficiadas, fotografías de las entregas y métricas de impacto. Nuestra página de Impacto y Transparencia también muestra información actualizada.',
        },
        {
          q: '¿Cuál es el monto mínimo de donación?',
          a: 'No hay un monto mínimo. Toda donación, sin importar el tamaño, es valiosa y contribuye a nuestro objetivo. S/ 20 pueden comprar útiles básicos, S/ 50 un kit completo, y S/ 100 un kit con libros.',
        },
      ],
    },
    {
      category: 'Solicitud de Apoyo',
      questions: [
        {
          q: '¿Quiénes pueden solicitar apoyo?',
          a: 'Pueden solicitar apoyo escuelas públicas, organizaciones comunitarias (ollas comunes, comedores), municipalidades, ONGs y asociaciones que trabajen con comunidades educativas vulnerables. Priorizamos comunidades con alta necesidad y recursos limitados.',
        },
        {
          q: '¿Cuánto demora el proceso de solicitud?',
          a: 'El proceso típico toma entre 2-4 semanas. Primero revisamos la solicitud (3-5 días), luego coordinamos una visita de diagnóstico (1-2 semanas), y finalmente planificamos la entrega de kits según disponibilidad de recursos.',
        },
        {
          q: '¿Qué documentación necesito para solicitar apoyo?',
          a: 'Necesitas completar nuestro formulario en línea con información básica de tu organización, número de beneficiarios y necesidades específicas. Opcionalmente puedes adjuntar documentos de respaldo como resoluciones, padrones de estudiantes o fotos de la situación actual.',
        },
        {
          q: '¿Todas las solicitudes son atendidas?',
          a: 'Evaluamos todas las solicitudes, pero priorizamos según vulnerabilidad, necesidad urgente y disponibilidad de recursos. Aunque no podamos atender todas inmediatamente, mantenemos todas las solicitudes en nuestra base de datos para futuras campañas.',
        },
      ],
    },
    {
      category: 'Voluntariado',
      questions: [
        {
          q: '¿Cómo puedo ser voluntario?',
          a: 'Completa el formulario de registro en nuestra página de Eventos y Voluntariado. Te agregaremos a nuestro grupo de WhatsApp y te notificaremos sobre eventos que coincidan con tu disponibilidad. No necesitas experiencia previa.',
        },
        {
          q: '¿Qué tipo de actividades realizan los voluntarios?',
          a: 'Los voluntarios participan en: armado de kits educativos, entregas en comunidades, chocolatadas y rosadarios, campañas de recolección, apoyo logístico y registro, fotografía y documentación, y eventos de difusión.',
        },
        {
          q: '¿Cuánto tiempo debo comprometer?',
          a: 'No hay compromiso de tiempo mínimo. Puedes participar en eventos puntuales (2-4 horas) o comprometerte más regularmente. La flexibilidad es importante para nosotros y valoramos cualquier tiempo que puedas aportar.',
        },
        {
          q: '¿Los voluntarios reciben capacitación?',
          a: 'Sí, todos los voluntarios nuevos reciben una guía de bienvenida y orientación antes de su primera actividad. Para eventos específicos (como entregas en zonas rurales), brindamos capacitación adicional sobre protocolo y seguridad.',
        },
        {
          q: '¿Hay límite de edad para ser voluntario?',
          a: 'Los voluntarios deben tener al menos 16 años. Los menores de 18 años deben contar con autorización de sus padres o tutores. Algunas actividades (como viajes a zonas rurales) pueden tener requisitos de edad específicos.',
        },
      ],
    },
    {
      category: 'Sobre Regala Futuro',
      questions: [
        {
          q: '¿Cómo garantizan la transparencia?',
          a: 'Documentamos cada entrega con fotografías, actas firmadas por autoridades y beneficiarios, y listas nominales. Hacemos seguimiento del impacto educativo (asistencia, rendimiento) y publicamos reportes periódicos. Todos nuestros informes financieros están disponibles públicamente.',
        },
        {
          q: '¿Cómo seleccionan las comunidades beneficiarias?',
          a: 'Trabajamos con UGEL, municipalidades y organizaciones locales que identifican comunidades prioritarias. Evaluamos vulnerabilidad socioeconómica, necesidad de recursos educativos, compromiso de la comunidad y viabilidad logística.',
        },
        {
          q: '¿Trabajan en todo el Perú?',
          a: 'Sí, actualmente tenemos presencia en 18 regiones del Perú, con mayor concentración en Lima, Cusco, Arequipa, Ayacucho y Puno. Estamos en constante expansión según disponibilidad de recursos y alianzas estratégicas.',
        },
        {
          q: '¿Qué porcentaje de las donaciones va a los programas?',
          a: '82% de las donaciones va directamente a programas educativos (kits, materiales, entregas). 10% a operaciones y logística, 5% a comunicación y transparencia, y solo 3% a administración. Somos muy eficientes en el uso de recursos.',
        },
        {
          q: '¿Puedo visitar su oficina o almacén?',
          a: 'Sí, coordinando previamente. Nos encanta recibir a donantes, aliados potenciales y personas interesadas en conocer nuestro trabajo. Contáctanos para agendar una visita y te mostraremos cómo operamos.',
        },
      ],
    },
    {
      category: 'Alianzas y Colaboraciones',
      questions: [
        {
          q: '¿Mi empresa puede crear una alianza con Regala Futuro?',
          a: 'Sí, trabajamos con empresas de todos los tamaños en programas de responsabilidad social empresarial. Podemos diseñar campañas conjuntas, programas de matching de donaciones, voluntariado corporativo, y patrocinios de comunidades específicas.',
        },
        {
          q: '¿Colaboran con otras ONGs?',
          a: 'Sí, creemos en la colaboración. Trabajamos con otras ONGs, fundaciones e instituciones que comparten nuestra visión de equidad educativa. Podemos coordinar esfuerzos, compartir recursos y amplificar el impacto colectivo.',
        },
        {
          q: '¿Puedo organizar una campaña de donación en mi colegio/universidad?',
          a: 'Definitivamente. Apoyamos a instituciones educativas que quieren organizar campañas de recolección. Proporcionamos materiales informativos, orientación y coordinamos la recepción de donaciones. Es una excelente experiencia educativa.',
        },
      ],
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-warm-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Encuentra respuestas a las preguntas más comunes sobre cómo funciona Regala Futuro, 
            donaciones, voluntariado y más.
          </p>
        </div>
      </section>

      {/* FAQs by Category */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, qIndex) => (
                  <Card key={qIndex} hover>
                    <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-start">
                      <span className="text-primary-500 mr-3 flex-shrink-0">Q:</span>
                      {faq.q}
                    </h3>
                    <p className="text-gray-700 pl-8">
                      <span className="text-secondary-500 font-semibold mr-2">R:</span>
                      {faq.a}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gradient-to-br from-secondary-50 to-warm-50 section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-6">
            ¿No Encuentras lo que Buscas?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Si tienes otras preguntas, no dudes en contactarnos. Nuestro equipo estará encantado de ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="btn-primary text-center">
              Contáctanos
            </a>
            <a href="mailto:contacto@regalafuturo.org" className="btn-secondary text-center">
              Enviar Email
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-container bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-gray-900 mb-8 text-center">
            Enlaces Útiles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card hover>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Donar</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Haz una donación monetaria o en especie
                </p>
                <a href="/donar" className="text-primary-600 hover:text-primary-700 font-medium">
                  Ir a Donaciones →
                </a>
              </div>
            </Card>

            <Card hover>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Solicitar Apoyo</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Completa el formulario de solicitud
                </p>
                <a href="/solicitar-apoyo" className="text-secondary-600 hover:text-secondary-700 font-medium">
                  Solicitar Apoyo →
                </a>
              </div>
            </Card>

            <Card hover>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Voluntariado</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Únete a nuestro equipo de voluntarios
                </p>
                <a href="/eventos-voluntariado" className="text-primary-700 hover:text-primary-800 font-medium">
                  Ser Voluntario →
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Listos para Ayudar"
        description="Ya sea donando, solicitando apoyo o siendo voluntario, estamos aquí para acompañarte en cada paso del camino."
        primaryButton={{
          text: 'Contactar',
          href: '/contacto',
        }}
        secondaryButton={{
          text: 'Ver Impacto',
          href: '/impacto',
        }}
      />
    </>
  )
}

