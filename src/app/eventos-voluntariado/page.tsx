'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { InputField, TextareaField, SelectField } from '@/components/ui/FormField'
import CTASection from '@/components/ui/CTASection'

export default function EventsVolunteeringPage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    availability: '',
    skills: '',
    experience: '',
    motivation: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const upcomingEvents = [
    {
      title: 'Chocolatada Solidaria - Ate Vitarte',
      date: '15 de Enero, 2025',
      time: '10:00 AM - 3:00 PM',
      location: 'Ate Vitarte, Lima',
      volunteers: 15,
      maxVolunteers: 30,
      description: 'Chocolatada y entrega de kits educativos a 120 niños de la comunidad. Necesitamos voluntarios para apoyo logístico, registro y entrega.',
      type: 'Evento Comunitario',
    },
    {
      title: 'Entrega de Kits - Cusco',
      date: '22 de Enero, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Comunidad rural, Cusco',
      volunteers: 8,
      maxVolunteers: 12,
      description: 'Viaje de entrega de kits educativos a escuelas rurales en Cusco. Incluye transporte y alimentación. Requiere disponibilidad de 2 días.',
      type: 'Entrega de Kits',
    },
    {
      title: 'Rosadario - Apoyo a Niñas',
      date: '28 de Enero, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'Villa María del Triunfo, Lima',
      volunteers: 12,
      maxVolunteers: 25,
      description: 'Rosadario con entrega de kits especiales para niñas en situación vulnerable. Incluye actividades recreativas y entrega de materiales.',
      type: 'Evento Comunitario',
    },
    {
      title: 'Armado de Kits - Almacén',
      date: '5 de Febrero, 2025',
      time: '3:00 PM - 7:00 PM',
      location: 'Almacén Regala Futuro, Lima',
      volunteers: 18,
      maxVolunteers: 40,
      description: 'Jornada de armado de kits educativos para próximas entregas. Actividad apta para todas las edades y capacidades.',
      type: 'Logística',
    },
    {
      title: 'Campaña de Recolección - Miraflores',
      date: '12 de Febrero, 2025',
      time: '10:00 AM - 6:00 PM',
      location: 'Parque Kennedy, Miraflores',
      volunteers: 6,
      maxVolunteers: 15,
      description: 'Stand informativo y recolección de donaciones en especie. Necesitamos voluntarios para atención al público y registro de donaciones.',
      type: 'Campaña',
    },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-warm-50 flex items-center justify-center px-4">
        <Card className="max-w-2xl text-center">
          <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">
            ¡Bienvenido a Regala Futuro!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Gracias por registrarte como voluntario. Tu compromiso es fundamental para transformar vidas 
            a través de la educación.
          </p>
          <div className="bg-secondary-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">Próximos Pasos:</h3>
            <ul className="text-left text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">1.</span>
                Recibirás un email de confirmación con más información
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">2.</span>
                Te invitaremos a nuestro grupo de WhatsApp de voluntarios
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">3.</span>
                Te notificaremos sobre eventos que coincidan con tu disponibilidad
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">4.</span>
                Te enviaremos una guía de bienvenida para nuevos voluntarios
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => setIsSubmitted(false)}>
              Volver a la Página
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              Ir al Inicio
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl mb-6">
            Eventos y Voluntariado
          </h1>
          <p className="text-xl leading-relaxed opacity-95 mb-8">
            Únete a nuestra comunidad de voluntarios comprometidos. Participa en chocolatadas, rosadarios, 
            entregas de kits y eventos que transforman vidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#volunteer-form" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg">
              Quiero ser Voluntario
            </a>
            <a href="#events" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Ver Próximos Eventos
            </a>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="section-container bg-white">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
            ¿Por Qué Ser Voluntario?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ser voluntario en Regala Futuro es una experiencia transformadora, tanto para ti como para las comunidades que servimos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card hover>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">
                Impacto Directo
              </h3>
              <p className="text-gray-600">
                Verás de primera mano cómo tu tiempo y esfuerzo transforman la vida de niños y familias
              </p>
            </div>
          </Card>

          <Card hover>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">
                Comunidad
              </h3>
              <p className="text-gray-600">
                Conoce personas con valores similares y forma parte de una red de cambio social
              </p>
            </div>
          </Card>

          <Card hover>
            <div className="text-center">
              <div className="w-16 h-16 bg-warm-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">
                Desarrollo Personal
              </h3>
              <p className="text-gray-600">
                Desarrolla habilidades de liderazgo, trabajo en equipo y gestión de proyectos sociales
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="bg-gradient-to-br from-warm-50 to-secondary-50 section-container">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
            Próximos Eventos
          </h2>
          <p className="text-lg text-gray-700">
            Revisa nuestro calendario de actividades y únete a los eventos que más te interesen
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} hover>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/4 flex-shrink-0">
                  <div className="bg-primary-500 text-white rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold mb-1">
                      {event.date.split(' de ')[0]}
                    </div>
                    <div className="text-sm opacity-90">
                      {event.date.split(' de ').slice(1).join(' de ')}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <div className="text-sm font-medium">{event.time}</div>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-700">
                          {event.type}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span>
                        <strong>{event.volunteers}</strong> de <strong>{event.maxVolunteers}</strong> voluntarios registrados
                      </span>
                    </div>
                    <a
                      href="#volunteer-form"
                      className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
                    >
                      Inscribirme
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Volunteer Form */}
      <section id="volunteer-form" className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
              Quiero Ser Voluntario
            </h2>
            <p className="text-lg text-gray-700">
              Completa este formulario y nos pondremos en contacto contigo para incluirte en nuestros próximos eventos
            </p>
          </div>

          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  label="Nombre Completo"
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombres y apellidos"
                />
                
                <InputField
                  label="Edad"
                  id="age"
                  type="number"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Tu edad"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  label="Email"
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                />
                
                <InputField
                  label="Teléfono"
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+51 999 999 999"
                />
              </div>

              <SelectField
                label="Disponibilidad"
                id="availability"
                required
                options={[
                  { value: 'weekdays', label: 'Entre semana (lunes a viernes)' },
                  { value: 'weekends', label: 'Fines de semana' },
                  { value: 'flexible', label: 'Flexible / Ambos' },
                  { value: 'monthly', label: 'Una vez al mes' },
                  { value: 'occasional', label: 'Ocasional / Según disponibilidad' },
                ]}
                value={formData.availability}
                onChange={handleChange}
              />

              <TextareaField
                label="Habilidades o Experiencia Relevante"
                id="skills"
                rows={3}
                value={formData.skills}
                onChange={handleChange}
                placeholder="Ej: experiencia en logística, trabajo con niños, fotografía, redes sociales, transporte, etc."
              />

              <SelectField
                label="¿Has sido voluntario antes?"
                id="experience"
                required
                options={[
                  { value: 'no', label: 'No, es mi primera vez' },
                  { value: 'yes-other', label: 'Sí, en otras organizaciones' },
                  { value: 'yes-rf', label: 'Sí, en Regala Futuro' },
                ]}
                value={formData.experience}
                onChange={handleChange}
              />

              <TextareaField
                label="¿Por qué quieres ser voluntario en Regala Futuro?"
                id="motivation"
                required
                rows={4}
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Cuéntanos qué te motiva a unirte a nuestro equipo..."
              />

              <div className="border-t pt-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-sm text-gray-600">
                    Al registrarte aceptas recibir notificaciones sobre eventos y actividades
                  </p>
                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Registrarme como Voluntario'}
                  </Button>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Volunteer Testimonials */}
      <section className="bg-gradient-to-br from-secondary-50 to-primary-50 section-container">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-6">
            Voces de Nuestros Voluntarios
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card hover>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center mr-3">
                <span className="text-primary-700 font-bold text-lg">MC</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">María C.</h4>
                <p className="text-sm text-gray-600">Voluntaria desde 2022</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Ser voluntaria en Regala Futuro me ha cambiado la vida. Ver la sonrisa de los niños 
              al recibir sus kits no tiene precio. Es mi forma de contribuir a un Perú más justo."
            </p>
          </Card>

          <Card hover>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-secondary-200 rounded-full flex items-center justify-center mr-3">
                <span className="text-secondary-700 font-bold text-lg">JR</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Jorge R.</h4>
                <p className="text-sm text-gray-600">Voluntario desde 2023</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Como profesional, puedo aportar con mi tiempo y habilidades. He participado en más de 
              15 entregas y cada una es igual de emotiva. ¡Totalmente recomendado!"
            </p>
          </Card>

          <Card hover>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-warm-300 rounded-full flex items-center justify-center mr-3">
                <span className="text-primary-800 font-bold text-lg">AS</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Ana S.</h4>
                <p className="text-sm text-gray-600">Voluntaria desde 2021</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "El equipo de Regala Futuro es increíble. Todo está organizado, transparente y con mucho amor. 
              He aprendido muchísimo y he hecho grandes amigos."
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Juntos Transformamos Vidas"
        description="No importa cuánto tiempo tengas disponible, toda ayuda suma. Únete a nuestra comunidad de voluntarios y sé parte del cambio que el Perú necesita."
        primaryButton={{
          text: 'Registrarme como Voluntario',
          href: '#volunteer-form',
        }}
        secondaryButton={{
          text: 'Donar',
          href: '/donar',
        }}
      />
    </>
  )
}

