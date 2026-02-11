import Link from 'next/link'

interface CTASectionProps {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  variant?: 'primary' | 'secondary'
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = 'primary',
}: CTASectionProps) {
  // Warm gradient backgrounds create emotional pull without aggression
  const bgClass = variant === 'primary' 
    ? 'bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500' 
    : 'bg-gradient-to-br from-secondary-400 via-secondary-500 to-primary-500'

  return (
    <section className={`${bgClass} text-white py-20 relative overflow-hidden`}>
      {/* Subtle decorative element adds warmth without images */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Mission-statement style headline with breathing space */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-lg sm:text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary button: Clear invitation without pressure */}
          <Link
            href={primaryButton.href}
            className="bg-white text-primary-600 hover:bg-warm-50 font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-soft-lg hover:shadow-soft-xl hover:-translate-y-0.5"
          >
            {primaryButton.text}
          </Link>
          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-xl transition-all duration-200"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

