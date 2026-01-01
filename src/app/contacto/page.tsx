'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import { InputField, TextareaField, SelectField } from '@/components/ui/FormField'
import Button from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-warm-50 flex items-center justify-center px-4">
        <Card className="max-w-2xl text-center">
          <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">
            ¡Mensaje Enviado!
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Gracias por contactarnos. Nuestro equipo revisará tu mensaje y te responderá a la brevedad.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>
            Enviar Otro Mensaje
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-50 to-warm-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            ¿Tienes preguntas, quieres crear una alianza o necesitas más información? 
            Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-container bg-white">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
                Información de Contacto
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:contacto@regalafuturo.org" className="text-primary-600 hover:text-primary-700">
                        contacto@regalafuturo.org
                      </a>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                      <a href="tel:+51999999999" className="text-secondary-600 hover:text-secondary-700">
                        +51 999 999 999
                      </a>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-warm-200 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Ubicación</h3>
                      <p className="text-gray-600">
                        Lima, Perú
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Horario de Atención</h3>
              <Card className="bg-primary-50">
                <p className="text-gray-700">
                  <strong>Lunes a Viernes:</strong><br />
                  9:00 AM - 6:00 PM<br /><br />
                  <strong>Sábados:</strong><br />
                  9:00 AM - 1:00 PM
                </p>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
                Envíanos un Mensaje
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Nombre Completo"
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                  />
                  
                  <InputField
                    label="Email"
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Teléfono"
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+51 999 999 999"
                  />
                  
                  <SelectField
                    label="Asunto"
                    id="subject"
                    required
                    options={[
                      { value: 'donacion', label: 'Consulta sobre Donación' },
                      { value: 'alianza', label: 'Propuesta de Alianza' },
                      { value: 'voluntariado', label: 'Quiero ser Voluntario' },
                      { value: 'apoyo', label: 'Solicitar Apoyo' },
                      { value: 'otros', label: 'Otros' },
                    ]}
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <TextareaField
                  label="Mensaje"
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    Los campos marcados con <span className="text-red-500">*</span> son obligatorios
                  </p>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-gray-200 h-96 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <p className="text-gray-600">Mapa de ubicación</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-12 text-center">
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-6">
            <Card hover>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                ¿Cómo puedo hacer una donación?
              </h3>
              <p className="text-gray-600">
                Puedes donar a través de nuestra <a href="/donar" className="text-primary-600 hover:text-primary-700 font-medium">página de donaciones</a>. 
                Aceptamos donaciones monetarias y en especie (útiles escolares, libros, tecnología).
              </p>
            </Card>

            <Card hover>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                ¿Mi donación es deducible de impuestos?
              </h3>
              <p className="text-gray-600">
                Sí, somos una organización sin fines de lucro registrada en el Perú. 
                Las donaciones pueden ser deducibles de impuestos según la legislación peruana vigente. 
                Te proporcionaremos un certificado de donación.
              </p>
            </Card>

            <Card hover>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                ¿Cómo puedo solicitar apoyo para mi comunidad o escuela?
              </h3>
              <p className="text-gray-600">
                Puedes completar nuestro <a href="/solicitar-apoyo" className="text-primary-600 hover:text-primary-700 font-medium">formulario de solicitud de apoyo</a>. 
                Evaluaremos tu solicitud y te contactaremos para coordinar una visita y diagnóstico de necesidades.
              </p>
            </Card>

            <Card hover>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                ¿Puedo ser voluntario?
              </h3>
              <p className="text-gray-600">
                ¡Por supuesto! Visita nuestra página de <a href="/eventos-voluntariado" className="text-primary-600 hover:text-primary-700 font-medium">eventos y voluntariado</a> para 
                conocer las próximas actividades y registrarte como voluntario.
              </p>
            </Card>

            <Card hover>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                ¿Cómo garantizan la transparencia?
              </h3>
              <p className="text-gray-600">
                Documentamos cada entrega con fotografías, actas firmadas y seguimiento del impacto educativo. 
                Todos nuestros reportes están disponibles en nuestra <a href="/impacto" className="text-primary-600 hover:text-primary-700 font-medium">página de impacto</a>.
              </p>
            </Card>

            <Card hover>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                ¿Mi empresa puede crear una alianza con Regala Futuro?
              </h3>
              <p className="text-gray-600">
                Sí, trabajamos con empresas, ONGs y otras instituciones para amplificar el impacto. 
                Contáctanos para explorar opciones de colaboración y responsabilidad social empresarial.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 mb-4">
              ¿No encuentras la respuesta que buscas?
            </p>
            <a href="/preguntas" className="text-primary-600 hover:text-primary-700 font-semibold">
              Ver todas las preguntas frecuentes →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

