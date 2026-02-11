'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { InputField, TextareaField, CheckboxField } from '@/components/ui/FormField'
import Stepper from '@/components/ui/Stepper'

export default function DonatePage() {
  // Cargar script de MercadoPago al montar el componente
  useEffect(() => {
    // Verificar si el script ya existe
    const existingScript = document.querySelector('script[data-preference-id]')
    if (existingScript) {
      return
    }

    // Crear y agregar el script de MercadoPago
    const script = document.createElement('script')
    script.src = 'https://www.mercadopago.com.pe/integrations/v1/web-payment-checkout.js'
    script.setAttribute('data-preference-id', '1316613327-26cb5034-015d-4747-a8be-20f08d956c29')
    script.setAttribute('data-source', 'button')
    
    const container = document.getElementById('mercadopago-quick-donate')
    if (container) {
      container.appendChild(script)
      console.log('MercadoPago button script loaded')
    }

    // Cleanup
    return () => {
      if (container && script.parentNode === container) {
        container.removeChild(script)
      }
    }
  }, [])
  const [donationType, setDonationType] = useState<'money' | 'inkind'>('money')
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once')
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // In-kind donation items
  const [inKindItems, setInKindItems] = useState({
    cuadernos: false,
    libros: false,
    calculadoras: false,
    laptops: false,
    mochilas: false,
    utiles: false,
  })

  // Donor info
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const presetAmounts = [20, 50, 100, 200, 500, 1000]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleDonorInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDonorInfo({
      ...donorInfo,
      [e.target.id]: e.target.value,
    })
  }

  const handleInKindChange = (item: string) => {
    setInKindItems({
      ...inKindItems,
      [item]: !inKindItems[item as keyof typeof inKindItems],
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-warm-50 flex items-center justify-center px-4">
        <Card className="max-w-2xl text-center">
          <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">
            ¡Gracias por tu Generosidad!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Tu {donationType === 'money' ? 'donación' : 'contribución'} nos ayudará a llevar educación de calidad 
            a más estudiantes en comunidades vulnerables del Perú.
          </p>
          <div className="bg-primary-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">Qué Pasa Ahora:</h3>
            <ul className="text-left text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-secondary-600 mr-2">✓</span>
                Recibirás un email de confirmación con los detalles de tu donación
              </li>
              <li className="flex items-start">
                <span className="text-secondary-600 mr-2">✓</span>
                {donationType === 'money' 
                  ? 'Te enviaremos un certificado de donación para fines tributarios'
                  : 'Nos contactaremos contigo para coordinar la recepción de los materiales'
                }
              </li>
              <li className="flex items-start">
                <span className="text-secondary-600 mr-2">✓</span>
                Te mantendremos informado sobre el impacto de tu donación
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => setIsSubmitted(false)}>
              Hacer Otra Donación
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/impacto'}>
              Ver Nuestro Impacto
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
            Transforma Vidas a Través de la Educación
          </h1>
          <p className="text-xl leading-relaxed opacity-95 mb-8">
            Tu donación se convierte en kits educativos que abren puertas, generan oportunidades 
            y construyen futuros. Un cuaderno hoy, un futuro mañana.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">S/ 50</div>
              <div className="text-sm opacity-90">Kit básico completo</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">S/ 100</div>
              <div className="text-sm opacity-90">Kit + libros escolares</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">S/ 200</div>
              <div className="text-sm opacity-90">Kit + tecnología educativa</div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        DONACIÓN RÁPIDA S/ 5 - MERCADO PAGO
        Esta sección permite donaciones inmediatas y simples de S/ 5
        sin necesidad de llenar formularios extensos
      */}
      <section className="bg-warm-100 py-12 sm:py-16 border-b-4 border-primary-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-soft-xl p-8 sm:p-10 border-2 border-primary-200">
            {/* Título e ícono */}
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl flex items-center justify-center mb-4 shadow-soft">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              
              <h2 className="font-display font-bold text-3xl text-text-primary mb-3">
                Dona S/ 5 Ahora
              </h2>
              
              {/* Mensaje de impacto */}
              <div className="bg-primary-50 rounded-xl p-4 mb-6 max-w-lg">
                <p className="text-text-primary font-semibold mb-2">
                  ✨ Tu donación de S/ 5 ayuda a:
                </p>
                <ul className="text-sm text-text-secondary space-y-1 text-left">
                  <li>• Proveer útiles escolares esenciales a un estudiante</li>
                  <li>• Formar parte de un kit educativo completo</li>
                  <li>• Cambiar el futuro de un niño en comunidad vulnerable</li>
                </ul>
              </div>
            </div>

            {/* 
              BOTÓN DE MERCADO PAGO
              El script se carga dinámicamente con useEffect
              y renderiza el botón automáticamente en este contenedor
            */}
            <div className="flex flex-col items-center">
              <div 
                id="mercadopago-quick-donate" 
                className="mb-4 flex justify-center w-full"
                style={{ minHeight: '48px' }}
              >
                {/* El botón de MercadoPago se renderiza aquí automáticamente */}
              </div>
              
              {/* Mensaje de seguridad */}
              <div className="flex items-center justify-center gap-2 text-sm text-text-muted">
                <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Pago seguro procesado por Mercado Pago</span>
              </div>
            </div>

            {/* Nota adicional */}
            <div className="mt-6 pt-6 border-t border-warm-200 text-center">
              <p className="text-sm text-text-secondary">
                ¿Quieres donar otro monto o en especie?{' '}
                <button 
                  onClick={() => window.scrollTo({ top: document.getElementById('donation-options')?.offsetTop || 0, behavior: 'smooth' })}
                  className="text-primary-600 font-semibold hover:text-primary-700 underline"
                >
                  Ver más opciones abajo
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Type Selection */}
      <section id="donation-options" className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-8 text-center">
            Elige Cómo Quieres Ayudar
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card
              className={`cursor-pointer transition-all ${
                donationType === 'money'
                  ? 'border-2 border-primary-500 shadow-lg'
                  : 'border-2 border-transparent hover:border-primary-200'
              }`}
              onClick={() => setDonationType('money')}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                  Donación Monetaria
                </h3>
                <p className="text-gray-600">
                  Contribuye con dinero y nosotros nos encargamos de armar y entregar los kits educativos
                </p>
              </div>
            </Card>

            <Card
              className={`cursor-pointer transition-all ${
                donationType === 'inkind'
                  ? 'border-2 border-secondary-500 shadow-lg'
                  : 'border-2 border-transparent hover:border-secondary-200'
              }`}
              onClick={() => setDonationType('inkind')}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                  Donación en Especie
                </h3>
                <p className="text-gray-600">
                  Dona útiles escolares, libros, tecnología u otros materiales educativos directamente
                </p>
              </div>
            </Card>
          </div>

          {/* Money Donation Form */}
          {donationType === 'money' && (
            <Card className="bg-gradient-to-br from-warm-50 to-primary-50">
              <h3 className="font-display font-semibold text-2xl text-gray-900 mb-6">
                Donación Monetaria
              </h3>

              {/* Frequency Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Frecuencia de Donación
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFrequency('once')}
                    className={`py-4 px-6 rounded-lg font-semibold transition-all ${
                      frequency === 'once'
                        ? 'bg-primary-500 text-white shadow-lg'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    Una vez
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`py-4 px-6 rounded-lg font-semibold transition-all ${
                      frequency === 'monthly'
                        ? 'bg-primary-500 text-white shadow-lg'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    Mensual
                    <span className="block text-xs mt-1 opacity-90">
                      Impacto sostenido
                    </span>
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Monto de Donación (S/)
                </label>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amount)
                        setCustomAmount('')
                      }}
                      className={`py-4 px-6 rounded-lg font-semibold transition-all ${
                        selectedAmount === amount
                          ? 'bg-secondary-500 text-white shadow-lg'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-secondary-300'
                      }`}
                    >
                      S/ {amount}
                    </button>
                  ))}
                </div>
                <InputField
                  label="Otro monto (opcional)"
                  id="customAmount"
                  type="number"
                  placeholder="Ingresa monto personalizado"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                />
              </div>

              {/* Impact Message */}
              {(selectedAmount || customAmount) && (
                <div className="bg-secondary-50 border-l-4 border-secondary-500 p-4 mb-8">
                  <p className="text-secondary-900 font-medium">
                    Tu donación de S/ {selectedAmount || customAmount} {frequency === 'monthly' ? 'mensual ' : ''}
                    puede ayudar a {Math.floor((Number(selectedAmount || customAmount) / 50))} estudiante(s) 
                    a recibir un kit educativo completo.
                  </p>
                </div>
              )}

              {/* Donor Information */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <h4 className="font-semibold text-lg text-gray-900">Tus Datos</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Nombre Completo"
                    id="name"
                    type="text"
                    required
                    value={donorInfo.name}
                    onChange={handleDonorInfoChange}
                    placeholder="Tu nombre"
                  />
                  
                  <InputField
                    label="Email"
                    id="email"
                    type="email"
                    required
                    value={donorInfo.email}
                    onChange={handleDonorInfoChange}
                    placeholder="tu@email.com"
                  />
                </div>

                <InputField
                  label="Teléfono"
                  id="phone"
                  type="tel"
                  value={donorInfo.phone}
                  onChange={handleDonorInfoChange}
                  placeholder="+51 999 999 999"
                />

                <TextareaField
                  label="Mensaje (opcional)"
                  id="message"
                  rows={3}
                  value={donorInfo.message}
                  onChange={handleDonorInfoChange}
                  placeholder="¿Tienes algún mensaje o preferencia sobre el uso de tu donación?"
                />

                <div className="border-t pt-6">
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Procesando...' : `Enviar solicitud de donación`}
                  </Button>
                  <p className="text-sm text-text-muted text-center mt-4">
                    🔒 Tu información está segura y protegida
                  </p>
                </div>
              </form>
            </Card>
          )}

          {/* In-Kind Donation Form */}
          {donationType === 'inkind' && (
            <Card className="bg-gradient-to-br from-warm-50 to-secondary-50">
              <h3 className="font-display font-semibold text-2xl text-gray-900 mb-6">
                Donación en Especie
              </h3>

              <p className="text-gray-700 mb-6">
                Selecciona los materiales que deseas donar. Nos pondremos en contacto contigo 
                para coordinar la recepción y entrega.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    ¿Qué deseas donar?
                  </label>
                  <div className="space-y-3">
                    <CheckboxField
                      id="cuadernos"
                      label="Cuadernos (varios tipos y tamaños)"
                      checked={inKindItems.cuadernos}
                      onChange={() => handleInKindChange('cuadernos')}
                    />
                    <CheckboxField
                      id="libros"
                      label="Libros escolares y de lectura"
                      checked={inKindItems.libros}
                      onChange={() => handleInKindChange('libros')}
                    />
                    <CheckboxField
                      id="calculadoras"
                      label="Calculadoras (básicas o científicas)"
                      checked={inKindItems.calculadoras}
                      onChange={() => handleInKindChange('calculadoras')}
                    />
                    <CheckboxField
                      id="laptops"
                      label="Laptops, tablets o dispositivos tecnológicos"
                      checked={inKindItems.laptops}
                      onChange={() => handleInKindChange('laptops')}
                    />
                    <CheckboxField
                      id="mochilas"
                      label="Mochilas escolares"
                      checked={inKindItems.mochilas}
                      onChange={() => handleInKindChange('mochilas')}
                    />
                    <CheckboxField
                      id="utiles"
                      label="Útiles escolares (lápices, colores, reglas, etc.)"
                      checked={inKindItems.utiles}
                      onChange={() => handleInKindChange('utiles')}
                    />
                  </div>
                </div>

                <h4 className="font-semibold text-lg text-gray-900 pt-6">Tus Datos</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Nombre Completo"
                    id="name"
                    type="text"
                    required
                    value={donorInfo.name}
                    onChange={handleDonorInfoChange}
                    placeholder="Tu nombre"
                  />
                  
                  <InputField
                    label="Email"
                    id="email"
                    type="email"
                    required
                    value={donorInfo.email}
                    onChange={handleDonorInfoChange}
                    placeholder="tu@email.com"
                  />
                </div>

                <InputField
                  label="Teléfono"
                  id="phone"
                  type="tel"
                  required
                  value={donorInfo.phone}
                  onChange={handleDonorInfoChange}
                  placeholder="+51 999 999 999"
                />

                <TextareaField
                  label="Detalles de la Donación"
                  id="message"
                  rows={4}
                  required
                  value={donorInfo.message}
                  onChange={handleDonorInfoChange}
                  placeholder="Describe los materiales que deseas donar: cantidad aproximada, estado, marca/modelo (si aplica), etc."
                />

                <div className="border-t pt-6">
                  <Button type="submit" size="lg" variant="secondary" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar Propuesta de Donación'}
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-gradient-to-br from-primary-50 to-warm-50 section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-12 text-center">
            Qué Pasa Después de Tu Donación
          </h2>
          
          <Stepper
            steps={[
              {
                title: 'Recepción',
                description: 'Registramos tu donación y te enviamos confirmación por email con un certificado de donación.',
              },
              {
                title: 'Armado de Kits',
                description: 'Incorporamos tu donación en nuestros kits educativos personalizados por edad y nivel.',
              },
              {
                title: 'Entrega Documentada',
                description: 'Entregamos los kits directamente a estudiantes en comunidades vulnerables con registro fotográfico.',
              },
              {
                title: 'Seguimiento',
                description: 'Monitoreamos el impacto educativo y te compartimos reportes sobre cómo tu donación transformó vidas.',
              },
            ]}
          />
        </div>
      </section>

      {/* Transparency Note */}
      <section className="bg-white section-container">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display font-bold text-2xl mb-3">
                  100% Transparente y Medible
                </h3>
                <p className="text-lg opacity-95 mb-4">
                  Cada sol donado es documentado, rastreado y reportado. Sabemos exactamente dónde va tu aporte 
                  y qué impacto genera en la vida de los estudiantes.
                </p>
                <a
                  href="/impacto"
                  className="inline-flex items-center text-white font-semibold hover:underline"
                >
                  Ver nuestro impacto y transparencia
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Tax Deductibility Note */}
      <section className="bg-gray-50 section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="font-display font-semibold text-2xl text-gray-900 mb-4">
            Beneficios Tributarios
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Regala Futuro es una organización sin fines de lucro registrada en el Perú. 
            Tu donación puede ser deducible de impuestos según la legislación peruana vigente.
          </p>
          <p className="text-sm text-gray-600">
            Te enviaremos un certificado de donación válido para fines tributarios.
          </p>
        </div>
      </section>
    </>
  )
}

