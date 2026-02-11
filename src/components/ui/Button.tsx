import { ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  // Rounded corners and gentle lift create friendly, approachable feel
  const baseClasses = 'font-semibold rounded-xl transition-all duration-200 inline-flex items-center justify-center'
  
  const variantClasses = {
    // Primary: Warm amber signals hope and action without aggression
    primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5',
    // Secondary: Terracotta warmth for secondary actions, maintains hierarchy
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5',
    // Outline: Exploratory, less pressure - good for secondary paths
    outline: 'border-2 border-primary-500 text-primary-700 hover:bg-primary-500 hover:text-white',
  }
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  }
  
  const disabledClasses = 'opacity-50 cursor-not-allowed hover:translate-y-0 hover:shadow-soft-md'

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled && disabledClasses,
        className
      )}
    >
      {children}
    </button>
  )
}

