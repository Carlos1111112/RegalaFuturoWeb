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
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-500 text-white font-bold">
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 h-full min-h-[60px] bg-primary-200 mt-2"></div>
              )}
            </div>
            <div className="pb-8">
              <h3 className="font-semibold text-lg text-gray-900 mb-1">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
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
              <div className="hidden md:block flex-1 h-0.5 bg-primary-200"></div>
            )}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white font-bold text-lg flex-shrink-0">
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block flex-1 h-0.5 bg-primary-200"></div>
            )}
          </div>
          <h3 className="font-semibold text-lg text-gray-900 mb-2">{step.title}</h3>
          <p className="text-sm text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  )
}

