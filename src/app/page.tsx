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
      {/* Hero Section - Warm, inviting gradient instead of cold/sterile */}
      <section className="relative bg-gradient-to-br from-warm-100 via-primary-50 to-secondary-50 overflow-hidden">
        {/* Subtle decorative warmth without images */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              {/* Mission-driven headline with strong hierarchy */}
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-tight mb-6">
                Donar educación hoy, construir oportunidades para toda la vida
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
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
              {/* Trust indicators with warm colors */}
              <div className="mt-10 flex items-center space-x-8">
                <div>
                  <div className="text-4xl font-display font-bold text-primary-600">5,000+</div>
                  <div className="text-sm text-text-muted font-medium">Estudiantes beneficiados</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-secondary-600">120+</div>
                  <div className="text-sm text-text-muted font-medium">Comunidades atendidas</div>
                </div>
              </div>
            </div>
            <div className="relative slide-up">
              {/* Warm gradient frame instead of cold blue */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500 p-2 shadow-soft-xl">
                <div className="w-full h-full bg-warm-200 rounded-2xl flex items-center justify-center">
                  <span className="text-text-muted text-lg font-medium">Imagen: Niños con útiles escolares</span>
                </div>
              </div>
              {/* Trust badge with better contrast */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft-xl p-5 max-w-xs border-2 border-warm-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">100% Transparente</div>
                    <div className="text-sm text-text-secondary">Seguimiento documentado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement - Visual separation with warm background */}
      <section className="bg-warm-200 section-container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-6">
            El Desafío Educativo en el Perú
          </h2>
          {/* Section divider adds visual rhythm */}
          <div className="section-divider"></div>
          <p className="text-lg text-text-secondary leading-relaxed">
            Miles de estudiantes en comunidades vulnerables del Perú carecen de cuadernos, libros, materiales básicos 
            y herramientas tecnológicas. Esta falta de recursos afecta directamente su rendimiento académico, asistencia, 
            permanencia escolar e igualdad de oportunidades.
          </p>
        </div>
        
        {/* Impact statistics with warm accent color instead of aggressive red */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center bg-white">
            <div className="text-5xl font-display font-bold text-secondary-600 mb-3">40%</div>
            <p className="text-text-secondary leading-relaxed">de estudiantes sin materiales básicos</p>
          </Card>
          <Card className="text-center bg-white">
            <div className="text-5xl font-display font-bold text-secondary-600 mb-3">60%</div>
            <p className="text-text-secondary leading-relaxed">de escuelas rurales sin recursos tecnológicos</p>
          </Card>
          <Card className="text-center bg-white">
            <div className="text-5xl font-display font-bold text-secondary-600 mb-3">30%</div>
            <p className="text-text-secondary leading-relaxed">de deserción por falta de materiales</p>
          </Card>
        </div>
      </section>

      {/* Our Solution - Alternating section color for rhythm */}
      <section className="bg-warm-100 section-container">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-6">
            Nuestra Solución: Kits Educativos de Acceso
          </h2>
          <div className="section-divider"></div>
          
          {/* Pull quote creates emotional moment without images */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-text-secondary leading-relaxed">
              Diseñamos y entregamos kits educativos completos según edad y nivel escolar, que incluyen todo 
              lo necesario para que ningún estudiante vea limitado su desarrollo académico.
            </p>
          </div>
          
          {/* Highlight box with mission statement */}
          <div className="highlight-box max-w-2xl mx-auto">
            <p className="text-lg font-medium text-text-primary italic">
              "Un cuaderno hoy cambia un año entero."
            </p>
          </div>
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

      {/* How We Work - Back to warmer section */}
      <section className="bg-warm-200 section-container">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-6">
            Cómo Funciona Regala Futuro
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
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
            <Card key={item.step} hover className="bg-white">
              <div className="flex items-start space-x-4">
                {/* Warm gradient step numbers instead of flat color */}
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-soft">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-xl text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
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

      {/* Impact Stories - Warm background with personality */}
      <section className="bg-warm-100 section-container">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-6">
            Historias de Impacto Real
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-text-secondary">
            Cada kit entregado transforma vidas y abre nuevas oportunidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card hover className="bg-white">
            {/* Warm gradient placeholder instead of gray */}
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl mb-4 flex items-center justify-center border-2 border-warm-200">
              <span className="text-text-muted text-sm font-medium">Imagen: Escuela rural</span>
            </div>
            <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
              Historia 1: Escuela en Cusco
            </h3>
            <p className="text-text-secondary mb-4 leading-relaxed">
              En una comunidad rural de Cusco, 45 estudiantes recibieron sus primeros cuadernos y libros del año. 
              La asistencia escolar aumentó un 35% en el primer mes tras la entrega.
            </p>
            {/* Accent color for location/metadata */}
            <div className="text-sm text-accent-600 font-semibold flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Cusco • 45 estudiantes beneficiados
            </div>
          </Card>

          <Card hover className="bg-white">
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl mb-4 flex items-center justify-center border-2 border-warm-200">
              <span className="text-text-muted text-sm font-medium">Imagen: Niña estudiando</span>
            </div>
            <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
              Historia 2: Asentamiento Humano en Lima
            </h3>
            <p className="text-text-secondary mb-4 leading-relaxed">
              Familias de un asentamiento humano en Villa El Salvador recibieron kits completos incluyendo tablets. 
              Los padres reportan mayor motivación y compromiso de sus hijos con el estudio.
            </p>
            <div className="text-sm text-accent-600 font-semibold flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Lima • 80 estudiantes beneficiados
            </div>
          </Card>

          <Card hover className="bg-white">
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl mb-4 flex items-center justify-center border-2 border-warm-200">
              <span className="text-text-muted text-sm font-medium">Imagen: Grupo de estudiantes</span>
            </div>
            <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
              Historia 3: Escuela Multigrado en Ayacucho
            </h3>
            <p className="text-text-secondary mb-4 leading-relaxed">
              Una escuela multigrado con 32 estudiantes de diferentes edades recibió kits personalizados por nivel. 
              Los docentes destacan la mejora en la participación y el rendimiento académico.
            </p>
            <div className="text-sm text-accent-600 font-semibold flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Ayacucho • 32 estudiantes beneficiados
            </div>
          </Card>
        </div>
      </section>

      {/* How to Help - Alternating back to warm tone */}
      <section className="bg-warm-200 section-container">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-6">
            Cómo Puedes Ayudar
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-text-secondary">
            Hay múltiples formas de sumarte a nuestra misión de equidad educativa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Primary CTA card - most prominent */}
          <Card hover className="text-center bg-white border-2 border-primary-200">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-2xl text-text-primary mb-4">
              Donar
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Contribuye económicamente o dona útiles escolares, libros o tecnología. 
              Cada aporte cuenta para transformar vidas.
            </p>
            <Link href="/donar" className="btn-primary w-full text-center inline-block">
              Donar Ahora
            </Link>
          </Card>

          {/* Secondary card with terracotta accent */}
          <Card hover className="text-center bg-white">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-2xl text-text-primary mb-4">
              Aliarte
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Si representas una empresa, ONG, escuela o municipalidad, podemos trabajar juntos 
              para amplificar el impacto.
            </p>
            <Link href="/contacto" className="btn-secondary w-full text-center inline-block">
              Crear Alianza
            </Link>
          </Card>

          {/* Tertiary card with teal accent for community */}
          <Card hover className="text-center bg-white">
            <div className="w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-2xl text-text-primary mb-4">
              Voluntariado
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
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

