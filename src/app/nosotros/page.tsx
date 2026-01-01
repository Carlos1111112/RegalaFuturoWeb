import Card from '@/components/ui/Card'
import CTASection from '@/components/ui/CTASection'

export const metadata = {
  title: 'Nosotros',
  description: 'Conoce más sobre Regala Futuro, nuestra misión, visión, valores y el equipo comprometido con reducir la brecha educativa en el Perú.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-warm-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
            Sobre Regala Futuro
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Somos una organización sin fines de lucro comprometida con eliminar las barreras educativas 
            que enfrentan miles de niños y jóvenes en comunidades vulnerables del Perú.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-container bg-white">
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-gradient-to-br from-primary-500 to-primary-600 text-white">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-3xl">Misión</h2>
            </div>
            <p className="text-lg leading-relaxed">
              Reducir la brecha educativa en comunidades vulnerables del Perú mediante la donación estructurada 
              de útiles escolares, libros y tecnología educativa básica, garantizando que ningún estudiante vea 
              limitado su desarrollo académico por falta de materiales esenciales.
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-3xl">Visión</h2>
            </div>
            <p className="text-lg leading-relaxed">
              Ser la organización líder en equidad educativa en el Perú, reconocida por transformar donaciones 
              en oportunidades reales, medibles y sostenibles que permitan a cada estudiante alcanzar su máximo potencial, 
              independientemente de su origen socioeconómico.
            </p>
          </Card>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-gradient-to-br from-warm-50 to-secondary-50 section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-8 text-center">
            El Problema que Enfrentamos
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              En el Perú, miles de estudiantes en comunidades vulnerables enfrentan una realidad invisible pero devastadora: 
              la falta de materiales educativos básicos. No se trata solo de útiles escolares, se trata de igualdad de oportunidades.
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">Sin cuadernos ni libros</h3>
                <p className="text-gray-600">
                  Estudiantes que asisten a clases sin los materiales básicos para tomar notas, hacer tareas o estudiar en casa.
                </p>
              </Card>
              <Card>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">Sin acceso a tecnología</h3>
                <p className="text-gray-600">
                  Escuelas rurales completamente desconectadas de las herramientas digitales que el mundo moderno requiere.
                </p>
              </Card>
              <Card>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">Deserción escolar</h3>
                <p className="text-gray-600">
                  Familias que no pueden costear materiales básicos, llevando a estudiantes a abandonar sus estudios.
                </p>
              </Card>
              <Card>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">Bajo rendimiento</h3>
                <p className="text-gray-600">
                  La falta de recursos afecta directamente el rendimiento académico y la motivación de los estudiantes.
                </p>
              </Card>
            </div>
            <p className="text-lg leading-relaxed">
              Esta desigualdad no solo afecta el presente de estos estudiantes, sino que compromete su futuro, 
              perpetuando ciclos de pobreza y exclusión. <strong>Regala Futuro</strong> existe para romper este ciclo.
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="bg-white section-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
            Nuestro Propósito
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Garantizar que ningún estudiante en el Perú vea limitado su desarrollo académico por falta de materiales esenciales. 
            Transformamos donaciones en oportunidades reales, medibles y sostenibles.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-gradient-to-br from-primary-50 to-warm-50 section-container">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
            Nuestros Principios
          </h2>
          <p className="text-lg text-gray-700">
            Los valores que guían cada una de nuestras acciones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              ),
              title: 'Equidad Educativa',
              description: 'Creemos que todos los estudiantes merecen las mismas oportunidades, independientemente de su origen.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: 'Transparencia',
              description: 'Documentamos cada entrega y reportamos resultados. Cada donante sabe exactamente dónde va su aporte.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              title: 'Impacto Medible',
              description: 'No solo entregamos materiales, medimos el impacto: asistencia, rendimiento y permanencia escolar.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: 'Enfoque Comunitario',
              description: 'Trabajamos de la mano con comunidades, escuelas, UGEL y autoridades locales para un impacto sostenible.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ),
              title: 'Sostenibilidad',
              description: 'Buscamos soluciones de largo plazo, no solo entregas puntuales, para transformaciones duraderas.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
              title: 'Compromiso y Pasión',
              description: 'Cada miembro de nuestro equipo y cada voluntario comparte la pasión por la educación y la equidad.',
            },
          ].map((principle, index) => (
            <Card key={index} hover>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {principle.icon}
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600">
                  {principle.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Expected Impact */}
      <section className="bg-white section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-8 text-center">
            Impacto Esperado
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-secondary-500">
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Mayor Asistencia Escolar</h3>
              <p className="text-gray-600">
                Estudiantes motivados que cuentan con los materiales necesarios asisten regularmente a clases.
              </p>
            </Card>
            <Card className="border-l-4 border-secondary-500">
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Mejor Rendimiento Académico</h3>
              <p className="text-gray-600">
                El acceso a materiales adecuados se traduce en mejor desempeño en evaluaciones y tareas.
              </p>
            </Card>
            <Card className="border-l-4 border-secondary-500">
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Menor Deserción Escolar</h3>
              <p className="text-gray-600">
                Reducimos una de las principales causas de abandono: la falta de recursos educativos.
              </p>
            </Card>
            <Card className="border-l-4 border-secondary-500">
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Mejor Entorno de Aprendizaje</h3>
              <p className="text-gray-600">
                Aulas equipadas donde todos los estudiantes tienen las mismas herramientas para aprender.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Súmate a nuestra misión"
        description="Juntos podemos garantizar que cada estudiante en el Perú tenga acceso a las herramientas que necesita para construir su futuro."
        primaryButton={{
          text: 'Donar Ahora',
          href: '/donar',
        }}
        secondaryButton={{
          text: 'Contáctanos',
          href: '/contacto',
        }}
        variant="secondary"
      />
    </>
  )
}

