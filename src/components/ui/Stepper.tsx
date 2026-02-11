interface Step {
  title: string
  description: string
}

interface StepperProps {
  steps: Step[]
  orientation?: 'horizontal' | 'vertical'
}

export default function Stepper({ steps, orientation = 'horizontal' }: StepperProps) {
  if (orientation === 'vertical') {
    return (
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex">
            <div className="flex flex-col items-center mr-4">
              {/* Warm gradient step circles create visual interest */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white font-bold shadow-soft">
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="w-1 h-full min-h-[60px] bg-gradient-to-b from-primary-300 to-secondary-300 mt-2 rounded-full"></div>
              )}
            </div>
            <div className="pb-8">
              <h3 className="font-display font-semibold text-lg text-text-primary mb-2">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-4">
      {steps.map((step, index) => (
        <div key={index} className="flex-1 flex flex-col items-center text-center">
          <div className="flex items-center w-full mb-4">
            {index > 0 && (
              <div className="hidden md:block flex-1 h-1 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full"></div>
            )}
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white font-bold text-lg flex-shrink-0 shadow-soft">
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block flex-1 h-1 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full"></div>
            )}
          </div>
          <h3 className="font-display font-semibold text-lg text-text-primary mb-2">{step.title}</h3>
          <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  )
}

