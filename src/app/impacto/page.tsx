import Card from '@/components/ui/Card'
import KPIGrid from '@/components/ui/KPIGrid'
import CTASection from '@/components/ui/CTASection'

export const metadata = {
  title: 'Impacto y Transparencia',
  description: 'Conoce el impacto real de Regala Futuro: estudiantes beneficiados, comunidades atendidas y el seguimiento transparente de cada donación.',
}

export default function ImpactPage() {
  const kpis = [
    {
      value: '5,247',
      label: 'Kits Entregados',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      trend: '↑ +1,230 este año',
    },
    {
      value: '4,892',
      label: 'Estudiantes Beneficiados',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      trend: '↑ +1,150 este año',
    },
    {
      value: '127',
      label: 'Comunidades Atendidas',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      trend: '↑ +38 este año',
    },
    {
      value: '2,850',
      label: 'Horas de Voluntariado',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      trend: '↑ +720 este año',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl mb-6">
            Impacto y Transparencia
          </h1>
          <p className="text-xl leading-relaxed opacity-95">
            Cada donación cuenta. Cada kit transforma una vida. Aquí puedes ver el impacto real y medible 
            de nuestra labor, con total transparencia y rendición de cuentas.
          </p>
        </div>
      </section>

      {/* KPIs */}
      <section className="section-container bg-white">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
            Nuestro Impacto en Números
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Datos actualizados al {new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long' })}
          </p>
        </div>

        <KPIGrid kpis={kpis} />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="bg-primary-50 text-center">
            <div className="text-3xl font-display font-bold text-primary-600 mb-2">18</div>
            <p className="text-gray-700">Regiones del Perú alcanzadas</p>
          </Card>
          <Card className="bg-secondary-50 text-center">
            <div className="text-3xl font-display font-bold text-secondary-600 mb-2">S/ 287,450</div>
            <p className="text-gray-700">Donaciones recibidas este año</p>
          </Card>
          <Card className="bg-warm-100 text-center">
            <div className="text-3xl font-display font-bold text-primary-700 mb-2">42</div>
            <p className="text-gray-700">Alianzas estratégicas activas</p>
          </Card>
        </div>
      </section>

      {/* Impact Chart */}
      <section className="bg-gradient-to-br from-warm-50 to-primary-50 section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-8 text-center">
            Crecimiento de Nuestro Impacto
          </h2>
          
          <Card>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="text-gray-600 mb-2">Gráfico de Estudiantes Beneficiados (2020-2024)</p>
                <div className="text-left max-w-md mx-auto space-y-2 mt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">2020:</span>
                    <span className="font-semibold">520 estudiantes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">2021:</span>
                    <span className="font-semibold">980 estudiantes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">2022:</span>
                    <span className="font-semibold">1,540 estudiantes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">2023:</span>
                    <span className="font-semibold">2,702 estudiantes</span>
                  </div>
                  <div className="flex items-center justify-between border-t pt-2">
                    <span className="text-gray-900 font-semibold">2024:</span>
                    <span className="font-bold text-secondary-600">4,892 estudiantes</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Regional Distribution */}
      <section className="section-container bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-12 text-center">
            Distribución Regional de Nuestro Impacto
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { region: 'Lima', students: 1420, communities: 38 },
              { region: 'Cusco', students: 645, communities: 22 },
              { region: 'Arequipa', students: 512, communities: 15 },
              { region: 'Ayacucho', students: 423, communities: 18 },
              { region: 'Puno', students: 389, communities: 12 },
              { region: 'Junín', students: 367, communities: 10 },
              { region: 'Huancavelica', students: 298, communities: 8 },
              { region: 'Apurímac', students: 276, communities: 7 },
              { region: 'Otras regiones', students: 562, communities: 17 },
            ].map((item, index) => (
              <Card key={index} hover>
                <h3 className="font-display font-semibold text-lg text-gray-900 mb-3">
                  {item.region}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estudiantes:</span>
                    <span className="font-semibold text-secondary-600">{item.students.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Comunidades:</span>
                    <span className="font-semibold text-primary-600">{item.communities}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="bg-gradient-to-br from-secondary-50 to-warm-50 section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-12 text-center">
            Compromiso con la Transparencia
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card hover className="border-t-4 border-secondary-500">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">
                    Entrega Documentada
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Cada entrega de kits educativos es fotografiada y documentada con actas firmadas por 
                    directores de escuela, profesores y autoridades locales.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-secondary-600 mr-2">✓</span>
                      Registro fotográfico de cada entrega
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-600 mr-2">✓</span>
                      Actas con firmas y sellos oficiales
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-600 mr-2">✓</span>
                      Lista de beneficiarios nominales
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card hover className="border-t-4 border-primary-500">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">
                    Seguimiento del Impacto
                  </h3>
                  <p className="text-gray-600 mb-4">
                    No solo entregamos materiales. Hacemos seguimiento a indicadores educativos clave 
                    para medir el impacto real de nuestras intervenciones.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Tasa de asistencia escolar
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Rendimiento académico
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Permanencia y reducción de deserción
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Financial Transparency */}
          <Card className="bg-white">
            <h3 className="font-display font-semibold text-2xl text-gray-900 mb-6 text-center">
              Transparencia Financiera
            </h3>
            <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              Cada sol donado es utilizado de manera responsable y eficiente. 
              Aquí puedes ver cómo distribuimos los recursos:
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-5xl font-display font-bold text-secondary-600 mb-2">82%</div>
                <div className="text-sm font-medium text-gray-700 mb-1">Programas Educativos</div>
                <p className="text-xs text-gray-600">Kits, materiales, entregas</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-display font-bold text-primary-600 mb-2">10%</div>
                <div className="text-sm font-medium text-gray-700 mb-1">Operaciones</div>
                <p className="text-xs text-gray-600">Logística, transporte, almacenamiento</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-display font-bold text-warm-300 mb-2">5%</div>
                <div className="text-sm font-medium text-gray-700 mb-1">Comunicación</div>
                <p className="text-xs text-gray-600">Campañas, reportes, transparencia</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-display font-bold text-gray-600 mb-2">3%</div>
                <div className="text-sm font-medium text-gray-700 mb-1">Administración</div>
                <p className="text-xs text-gray-600">Gastos administrativos mínimos</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a href="#" className="text-secondary-600 hover:text-secondary-700 font-semibold inline-flex items-center">
                Descargar Informe Financiero Anual 2024
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Principles Recap */}
      <section className="section-container bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-12 text-center">
            Nuestros Principios Rectores
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
                title: 'Equidad Educativa',
                description: 'Todos los estudiantes merecen las mismas oportunidades.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Transparencia',
                description: 'Cada donación es documentada y rastreada públicamente.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Impacto Medible',
                description: 'Medimos resultados concretos, no solo entregas.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Enfoque Comunitario',
                description: 'Trabajamos con las comunidades, no para ellas.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                title: 'Sostenibilidad',
                description: 'Buscamos transformaciones duraderas, no solo entregas.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Compromiso',
                description: 'Pasión genuina por la educación y la equidad.',
              },
            ].map((principle, index) => (
              <Card key={index} hover>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                    {principle.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {principle.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Impact */}
      <section className="bg-gradient-to-br from-primary-50 to-warm-50 section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-12 text-center">
            Impacto Educativo Medido
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-l-4 border-secondary-500">
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Asistencia Escolar</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Promedio después de recibir kits</span>
                  <span className="font-bold text-secondary-600">+32%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-secondary-500 h-3 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                87% de asistencia regular en escuelas que recibieron nuestros kits, 
                comparado con 55% antes de la intervención.
              </p>
            </Card>

            <Card className="bg-white border-l-4 border-primary-500">
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Rendimiento Académico</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Mejora en calificaciones</span>
                  <span className="font-bold text-primary-600">+28%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-primary-500 h-3 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                78% de estudiantes mejoraron sus calificaciones en el primer semestre 
                tras recibir materiales educativos adecuados.
              </p>
            </Card>

            <Card className="bg-white border-l-4 border-warm-300">
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Reducción de Deserción</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Disminución de abandono escolar</span>
                  <span className="font-bold text-primary-700">-41%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-primary-600 h-3 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                La deserción escolar por falta de materiales se redujo en 41% en las comunidades atendidas.
              </p>
            </Card>

            <Card className="bg-white border-l-4 border-secondary-300">
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Satisfacción de Familias</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Familias satisfechas con el apoyo</span>
                  <span className="font-bold text-secondary-600">94%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-secondary-500 h-3 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                94% de familias reportan estar muy satisfechas con los kits recibidos 
                y el impacto en la educación de sus hijos.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Sé Parte de Este Impacto"
        description="Cada donación genera resultados medibles y transforma vidas. Únete a nuestra comunidad de donantes comprometidos con la transparencia y el impacto real."
        primaryButton={{
          text: 'Donar Ahora',
          href: '/donar',
        }}
        secondaryButton={{
          text: 'Contactar',
          href: '/contacto',
        }}
        variant="secondary"
      />
    </>
  )
}

