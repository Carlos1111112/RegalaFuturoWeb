'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { InputField, TextareaField, SelectField, CheckboxField } from '@/components/ui/FormField'

export default function RequestSupportPage() {
  const [formData, setFormData] = useState({
    organizationName: '',
    organizationType: '',
    region: '',
    district: '',
    contactPerson: '',
    position: '',
    phone: '',
    email: '',
    numStudents: '',
    description: '',
    consent: false,
  })

  const [urgentNeeds, setUrgentNeeds] = useState({
    cuadernos: false,
    libros: false,
    calculadoras: false,
    laptops: false,
    mochilas: false,
    utiles: false,
    otros: false,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consent) {
      alert('Debes aceptar los términos y condiciones')
      return
    }
    
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

  const handleNeedChange = (item: string) => {
    setUrgentNeeds({
      ...urgentNeeds,
      [item]: !urgentNeeds[item as keyof typeof urgentNeeds],
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-warm-50 flex items-center justify-center px-4">
        <Card className="max-w-2xl text-center">
          <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">
            Solicitud Recibida con Éxito
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Hemos recibido tu solicitud de apoyo. Nuestro equipo la revisará y se pondrá en contacto contigo 
            en los próximos días para coordinar una visita y diagnóstico de necesidades.
          </p>
          <div className="bg-primary-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">Próximos Pasos:</h3>
            <ul className="text-left text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-secondary-600 mr-2">1.</span>
                Nuestro equipo revisará tu solicitud en un plazo de 3-5 días hábiles
              </li>
              <li className="flex items-start">
                <span className="text-secondary-600 mr-2">2.</span>
                Te contactaremos para agendar una visita de diagnóstico
              </li>
              <li className="flex items-start">
                <span className="text-secondary-600 mr-2">3.</span>
                Evaluaremos las necesidades específicas de tu comunidad
              </li>
              <li className="flex items-start">
                <span className="text-secondary-600 mr-2">4.</span>
                Te informaremos sobre la viabilidad del apoyo y los siguientes pasos
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => setIsSubmitted(false)}>
              Enviar Otra Solicitud
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              Volver al Inicio
            </Button>
          </div>
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
            Solicitar Apoyo Educativo
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Si representas una escuela, comunidad u organización que necesita apoyo educativo, 
            completa este formulario. Evaluaremos tu solicitud y nos pondremos en contacto contigo.
          </p>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="font-display font-bold text-2xl text-gray-900 mb-6 text-center">
            ¿Quiénes Pueden Solicitar Apoyo?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card hover className="border-l-4 border-secondary-500">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Escuelas Públicas</h3>
                  <p className="text-sm text-gray-600">
                    Instituciones educativas con recursos limitados y población estudiantil vulnerable
                  </p>
                </div>
              </div>
            </Card>

            <Card hover className="border-l-4 border-secondary-500">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Organizaciones Comunitarias</h3>
                  <p className="text-sm text-gray-600">
                    Ollas comunes, comedores populares, centros comunitarios que apoyan a estudiantes
                  </p>
                </div>
              </div>
            </Card>

            <Card hover className="border-l-4 border-secondary-500">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Municipalidades</h3>
                  <p className="text-sm text-gray-600">
                    Gobiernos locales que identifican comunidades prioritarias en su jurisdicción
                  </p>
                </div>
              </div>
            </Card>

            <Card hover className="border-l-4 border-secondary-500">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">ONGs y Asociaciones</h3>
                  <p className="text-sm text-gray-600">
                    Organizaciones que trabajan directamente con comunidades educativas vulnerables
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="bg-gradient-to-br from-warm-50 to-primary-50 section-container">
        <div className="max-w-4xl mx-auto">
          <Card>
            <h2 className="font-display font-bold text-2xl text-gray-900 mb-8">
              Formulario de Solicitud
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Organization Information */}
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-4 pb-2 border-b">
                  1. Información de la Organización
                </h3>
                
                <div className="space-y-6">
                  <InputField
                    label="Nombre de la Institución/Organización"
                    id="organizationName"
                    type="text"
                    required
                    value={formData.organizationName}
                    onChange={handleChange}
                    placeholder="Ej: I.E. José Carlos Mariátegui"
                  />

                  <SelectField
                    label="Tipo de Organización"
                    id="organizationType"
                    required
                    options={[
                      { value: 'escuela', label: 'Escuela Pública' },
                      { value: 'olla-comun', label: 'Olla Común / Comedor Popular' },
                      { value: 'municipalidad', label: 'Municipalidad' },
                      { value: 'ong', label: 'ONG / Asociación' },
                      { value: 'ugel', label: 'UGEL' },
                      { value: 'otra', label: 'Otra' },
                    ]}
                    value={formData.organizationType}
                    onChange={handleChange}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField
                      label="Región"
                      id="region"
                      type="text"
                      required
                      value={formData.region}
                      onChange={handleChange}
                      placeholder="Ej: Lima, Cusco, Arequipa"
                    />
                    
                    <InputField
                      label="Distrito"
                      id="district"
                      type="text"
                      required
                      value={formData.district}
                      onChange={handleChange}
                      placeholder="Ej: Villa El Salvador, Wanchaq"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Person */}
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-4 pb-2 border-b">
                  2. Persona de Contacto
                </h3>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField
                      label="Nombre Completo"
                      id="contactPerson"
                      type="text"
                      required
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder="Nombres y apellidos"
                    />
                    
                    <InputField
                      label="Cargo"
                      id="position"
                      type="text"
                      required
                      value={formData.position}
                      onChange={handleChange}
                      placeholder="Ej: Director, Presidente, Coordinador"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField
                      label="Teléfono"
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+51 999 999 999"
                    />
                    
                    <InputField
                      label="Email"
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                </div>
              </div>

              {/* Needs Assessment */}
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-4 pb-2 border-b">
                  3. Necesidades Educativas
                </h3>
                
                <div className="space-y-6">
                  <InputField
                    label="Número de Estudiantes Beneficiarios"
                    id="numStudents"
                    type="number"
                    required
                    value={formData.numStudents}
                    onChange={handleChange}
                    placeholder="Cantidad aproximada de estudiantes"
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Necesidades Urgentes <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-3">
                      <CheckboxField
                        id="cuadernos"
                        label="Cuadernos"
                        checked={urgentNeeds.cuadernos}
                        onChange={() => handleNeedChange('cuadernos')}
                      />
                      <CheckboxField
                        id="libros"
                        label="Libros escolares y de lectura"
                        checked={urgentNeeds.libros}
                        onChange={() => handleNeedChange('libros')}
                      />
                      <CheckboxField
                        id="calculadoras"
                        label="Calculadoras"
                        checked={urgentNeeds.calculadoras}
                        onChange={() => handleNeedChange('calculadoras')}
                      />
                      <CheckboxField
                        id="laptops"
                        label="Laptops / Tablets"
                        checked={urgentNeeds.laptops}
                        onChange={() => handleNeedChange('laptops')}
                      />
                      <CheckboxField
                        id="mochilas"
                        label="Mochilas"
                        checked={urgentNeeds.mochilas}
                        onChange={() => handleNeedChange('mochilas')}
                      />
                      <CheckboxField
                        id="utiles"
                        label="Útiles escolares (lápices, colores, etc.)"
                        checked={urgentNeeds.utiles}
                        onChange={() => handleNeedChange('utiles')}
                      />
                      <CheckboxField
                        id="otros"
                        label="Otros (especificar en descripción)"
                        checked={urgentNeeds.otros}
                        onChange={() => handleNeedChange('otros')}
                      />
                    </div>
                  </div>

                  <TextareaField
                    label="Descripción de la Situación y Necesidades"
                    id="description"
                    required
                    rows={6}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre la situación actual de tu comunidad o institución, por qué necesitan apoyo, y cualquier información adicional que consideres relevante..."
                  />
                </div>
              </div>

              {/* Document Upload Placeholder */}
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-4 pb-2 border-b">
                  4. Documentación de Respaldo (Opcional)
                </h3>
                
                <Card className="bg-gray-50">
                  <div className="text-center py-8">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-gray-600 mb-2">
                      Zona de carga de archivos (placeholder)
                    </p>
                    <p className="text-sm text-gray-500">
                      Puedes adjuntar documentos como resoluciones, padrones de estudiantes, fotos de la situación actual, etc.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Consent */}
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-4 pb-2 border-b">
                  5. Consentimiento y Compromiso
                </h3>
                
                <CheckboxField
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  label={
                    <span>
                      Declaro que la información proporcionada es verídica y me comprometo a facilitar 
                      la visita de diagnóstico y el proceso de entrega de materiales educativos. 
                      Autorizo el uso de fotografías y testimonios con fines de transparencia e informes de impacto.
                    </span>
                  }
                />
              </div>

              {/* Submit Button */}
              <div className="border-t pt-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-sm text-gray-600">
                    Los campos marcados con <span className="text-red-500">*</span> son obligatorios
                  </p>
                  <Button type="submit" size="lg" variant="secondary" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando Solicitud...' : 'Enviar Solicitud de Apoyo'}
                  </Button>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-gray-900 mb-8 text-center">
            Qué Puedes Esperar Después de Enviar tu Solicitud
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Revisión</h3>
              <p className="text-sm text-gray-600">
                3-5 días hábiles para evaluar tu solicitud
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Contacto</h3>
              <p className="text-sm text-gray-600">
                Te llamaremos para coordinar una visita
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Diagnóstico</h3>
              <p className="text-sm text-gray-600">
                Visita para evaluar necesidades específicas
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Apoyo</h3>
              <p className="text-sm text-gray-600">
                Coordinación de entrega de kits educativos
              </p>
            </Card>
          </div>

          <Card className="mt-12 bg-primary-50 border-l-4 border-primary-500">
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Importante</h3>
                <p className="text-gray-700">
                  Priorizamos comunidades con mayor vulnerabilidad y necesidad. No todas las solicitudes 
                  pueden ser atendidas inmediatamente, pero las mantenemos en nuestra base de datos para 
                  futuras campañas y cuando tengamos más recursos disponibles.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}

