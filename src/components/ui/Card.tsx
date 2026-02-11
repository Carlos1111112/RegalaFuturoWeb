import { ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export default function Card({ children, className, hover = false, onClick }: CardProps) {
  return (
    <div
      className={clsx(
        // Warm cream background instead of pure white - softer, more inviting
        // Generous padding creates breathing space, reduces visual density
        'bg-warm-50 rounded-2xl shadow-soft-md p-6 border border-warm-200',
        // Gentle lift on hover suggests interactivity without aggression
        hover && 'transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 hover:border-warm-300',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

