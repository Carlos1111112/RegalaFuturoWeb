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
  const bgClass = variant === 'primary' 
    ? 'bg-gradient-to-r from-primary-500 to-primary-600' 
    : 'bg-gradient-to-r from-secondary-500 to-secondary-600'

  return (
    <section className={`${bgClass} text-white py-16`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg sm:text-xl mb-8 opacity-90">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButton.href}
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {primaryButton.text}
          </Link>
          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

