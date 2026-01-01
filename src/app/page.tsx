import Link from 'next/link'
import IconCard from '@/components/ui/IconCard'
import CTASection from '@/components/ui/CTASection'
import Card from '@/components/ui/Card'

export const metadata = {
  title: 'Inicio',
  description: 'Regala Futuro: donar educación hoy, construir oportunidades para toda la vida. Organización sin fines de lucro que reduce la brecha educativa en comunidades vulnerables del Perú.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-warm-50 to-secondary-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
                Donar educación hoy, construir oportunidades para toda la vida
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Organización sin fines de lucro que reduce la brecha educativa en comunidades vulnerables del Perú mediante donación estructurada de útiles escolares, libros y tecnología educativa básica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/donar" className="btn-primary text-center">
                  Donar Ahora
                </Link>
                <Link href="/como-funciona" className="btn-outline text-center">
                  Cómo Funciona
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-8">
                <div>
                  <div className="text-3xl font-display font-bold text-primary-600">5,000+</div>
                  <div className="text-sm text-gray-600">Estudiantes beneficiados</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-secondary-600">120+</div>
                  <div className="text-sm text-gray-600">Comunidades atendidas</div>
                </div>
              </div>
            </div>
            <div className="relative slide-up">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-400 p-1 shadow-2xl">
                <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Imagen: Niños con útiles escolares</span>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">100% Transparente</div>
                    <div className="text-sm text-gray-600">Seguimiento documentado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-white section-container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
            El Desafío Educativo en el Perú
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Miles de estudiantes en comunidades vulnerables del Perú carecen de cuadernos, libros, materiales básicos 
            y herramientas tecnológicas. Esta falta de recursos afecta directamente su rendimiento académico, asistencia, 
            permanencia escolar e igualdad de oportunidades.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <div className="text-5xl font-display font-bold text-red-500 mb-3">40%</div>
            <p className="text-gray-700">de estudiantes sin materiales básicos</p>
          </Card>
          <Card className="text-center">
            <div className="text-5xl font-display font-bold text-red-500 mb-3">60%</div>
            <p className="text-gray-700">de escuelas rurales sin recursos tecnológicos</p>
          </Card>
          <Card className="text-center">
            <div className="text-5xl font-display font-bold text-red-500 mb-3">30%</div>
            <p className="text-gray-700">de deserción por falta de materiales</p>
          </Card>
        </div>
      </section>

      {/* Our Solution */}
      <section className="bg-gradient-to-br from-warm-50 to-primary-50 section-container">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
            Nuestra Solución: Kits Educativos de Acceso
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Diseñamos y entregamos kits educativos completos según edad y nivel escolar, que incluyen todo 
            lo necesario para que ningún estudiante vea limitado su desarrollo académico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <IconCard
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            title="Cuadernos y Útiles"
            description="Cuadernos, lápices, colores, reglas, borradores y mochilas de calidad"
          />
          <IconCard
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            title="Libros Escolares"
            description="Textos escolares actualizados y libros de lectura apropiados por edad"
          />
          <IconCard
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            title="Tecnología Educativa"
            description="Tablets, mini-laptops y calculadoras según disponibilidad"
          />
          <IconCard
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            title="Material Digital"
            description="Contenido educativo digital precargado y listo para usar"
          />
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-white section-container">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
            Cómo Funciona Regala Futuro
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Nuestro modelo de trabajo estructurado asegura que cada donación llegue a quien más lo necesita 
            y genere un impacto medible y sostenible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: 'Identificación',
              description: 'Trabajamos con UGEL, municipalidades y organizaciones locales para identificar comunidades prioritarias',
            },
            {
              step: 2,
              title: 'Diagnóstico',
              description: 'Evaluamos las necesidades específicas de cada comunidad y escuela',
            },
            {
              step: 3,
              title: 'Campañas',
              description: 'Organizamos campañas de donación y establecemos alianzas estratégicas',
            },
            {
              step: 4,
              title: 'Armado de Kits',
              description: 'Preparamos kits personalizados según edad y nivel de los estudiantes',
            },
            {
              step: 5,
              title: 'Entrega Documentada',
              description: 'Distribuimos los kits con registro fotográfico y firma de conformidad',
            },
            {
              step: 6,
              title: 'Seguimiento',
              description: 'Monitoreamos el impacto educativo y reportamos resultados',
            },
          ].map((item) => (
            <Card key={item.step} hover>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/como-funciona" className="btn-outline">
            Ver el Proceso Completo
          </Link>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="bg-gradient-to-br from-secondary-50 to-warm-50 section-container">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
            Historias de Impacto Real
          </h2>
          <p className="text-lg text-gray-700">
            Cada kit entregado transforma vidas y abre nuevas oportunidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card hover>
            <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Imagen: Escuela rural</span>
            </div>
            <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">
              Historia 1: Escuela en Cusco
            </h3>
            <p className="text-gray-600 mb-4">
              En una comunidad rural de Cusco, 45 estudiantes recibieron sus primeros cuadernos y libros del año. 
              La asistencia escolar aumentó un 35% en el primer mes tras la entrega.
            </p>
            <div className="text-sm text-secondary-600 font-medium">
              📍 Cusco • 45 estudiantes beneficiados
            </div>
          </Card>

          <Card hover>
            <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Imagen: Niña estudiando</span>
            </div>
            <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">
              Historia 2: Asentamiento Humano en Lima
            </h3>
            <p className="text-gray-600 mb-4">
              Familias de un asentamiento humano en Villa El Salvador recibieron kits completos incluyendo tablets. 
              Los padres reportan mayor motivación y compromiso de sus hijos con el estudio.
            </p>
            <div className="text-sm text-secondary-600 font-medium">
              📍 Lima • 80 estudiantes beneficiados
            </div>
          </Card>

          <Card hover>
            <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Imagen: Grupo de estudiantes</span>
            </div>
            <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">
              Historia 3: Escuela Multigrado en Ayacucho
            </h3>
            <p className="text-gray-600 mb-4">
              Una escuela multigrado con 32 estudiantes de diferentes edades recibió kits personalizados por nivel. 
              Los docentes destacan la mejora en la participación y el rendimiento académico.
            </p>
            <div className="text-sm text-secondary-600 font-medium">
              📍 Ayacucho • 32 estudiantes beneficiados
            </div>
          </Card>
        </div>
      </section>

      {/* How to Help */}
      <section className="bg-white section-container">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
            Cómo Puedes Ayudar
          </h2>
          <p className="text-lg text-gray-700">
            Hay múltiples formas de sumarte a nuestra misión de equidad educativa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card hover className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-2xl text-gray-900 mb-4">
              Donar
            </h3>
            <p className="text-gray-600 mb-6">
              Contribuye económicamente o dona útiles escolares, libros o tecnología. 
              Cada aporte cuenta para transformar vidas.
            </p>
            <Link href="/donar" className="btn-primary w-full text-center inline-block">
              Donar Ahora
            </Link>
          </Card>

          <Card hover className="text-center">
            <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-2xl text-gray-900 mb-4">
              Aliarte
            </h3>
            <p className="text-gray-600 mb-6">
              Si representas una empresa, ONG, escuela o municipalidad, podemos trabajar juntos 
              para amplificar el impacto.
            </p>
            <Link href="/contacto" className="btn-secondary w-full text-center inline-block">
              Crear Alianza
            </Link>
          </Card>

          <Card hover className="text-center">
            <div className="w-20 h-20 bg-warm-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-2xl text-gray-900 mb-4">
              Voluntariado
            </h3>
            <p className="text-gray-600 mb-6">
              Únete a nuestros eventos de entrega, chocolatadas, rosadarios y otras actividades 
              comunitarias.
            </p>
            <Link href="/eventos-voluntariado" className="btn-outline w-full text-center inline-block">
              Ser Voluntario
            </Link>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Un cuaderno hoy, un futuro mañana"
        description="Únete a nosotros para garantizar que ningún niño vea limitado su desarrollo académico por falta de materiales esenciales."
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

