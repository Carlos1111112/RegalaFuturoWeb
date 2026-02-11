import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import clsx from 'clsx'

interface BaseFieldProps {
  label: string
  id: string
  error?: string
  required?: boolean
  className?: string
}

interface InputFieldProps extends BaseFieldProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'id'> {
  type?: 'text' | 'email' | 'tel' | 'number' | 'password'
}

interface TextareaFieldProps extends BaseFieldProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className' | 'id'> {
  rows?: number
}

interface SelectFieldProps extends BaseFieldProps {
  options: { value: string; label: string }[]
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export function InputField({ label, id, error, required, className, ...props }: InputFieldProps) {
  return (
    <div className={className}>
      {/* Warm text colors for labels - more inviting than gray */}
      <label htmlFor={id} className="block text-sm font-semibold text-text-secondary mb-2">
        {label}
        {required && <span className="text-secondary-600 ml-1">*</span>}
      </label>
      <input
        id={id}
        className={clsx(
          // Rounded corners and warm borders feel friendly, not bureaucratic
          'w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-500 transition-all duration-200 bg-white text-text-primary',
          error ? 'border-secondary-500' : 'border-warm-300 hover:border-warm-400'
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-secondary-600 font-medium">{error}</p>}
    </div>
  )
}

export function TextareaField({ label, id, error, required, rows = 4, className, ...props }: TextareaFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-semibold text-text-secondary mb-2">
        {label}
        {required && <span className="text-secondary-600 ml-1">*</span>}
      </label>
      <textarea
        id={id}
        rows={rows}
        className={clsx(
          'w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-500 transition-all duration-200 bg-white text-text-primary',
          error ? 'border-secondary-500' : 'border-warm-300 hover:border-warm-400'
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-secondary-600 font-medium">{error}</p>}
    </div>
  )
}

export function SelectField({ label, id, error, required, options, className, ...props }: SelectFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-semibold text-text-secondary mb-2">
        {label}
        {required && <span className="text-secondary-600 ml-1">*</span>}
      </label>
      <select
        id={id}
        className={clsx(
          'w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-500 transition-all duration-200 bg-white text-text-primary',
          error ? 'border-secondary-500' : 'border-warm-300 hover:border-warm-400'
        )}
        {...props}
      >
        <option value="">Selecciona una opción</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-secondary-600 font-medium">{error}</p>}
    </div>
  )
}

interface CheckboxFieldProps {
  label: string | React.ReactNode
  id: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export function CheckboxField({ label, id, checked, onChange, className }: CheckboxFieldProps) {
  return (
    <div className={clsx('flex items-start', className)}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="mt-1 h-5 w-5 text-primary-500 focus:ring-primary-400 border-warm-300 rounded-md transition-colors"
      />
      <label htmlFor={id} className="ml-3 text-sm text-text-secondary leading-relaxed">
        {label}
      </label>
    </div>
  )
}

