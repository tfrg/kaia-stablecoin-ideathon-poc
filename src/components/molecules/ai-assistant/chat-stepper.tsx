import React from 'react'
import { Circle } from 'lucide-react'

import { cn } from '@/lib/utils'

interface ChatStepperProps {
  steps: string[]
  currentStep: number
  className?: string
}

export function ChatStepper({
  steps,
  currentStep,
  className,
}: ChatStepperProps): React.JSX.Element {
  return (
    <div className={cn('w-full max-w-[768px]', className)}>
      <div className='flex items-center'>
        {steps.map((stepTitle, index) => {
          const stepNumber = index + 1
          const isCompleted = stepNumber < currentStep
          const isCurrent = stepNumber === currentStep
          const isUpcoming = stepNumber > currentStep

          return (
            <React.Fragment key={index}>
              <div className='flex flex-col items-center'>
                <div
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-full transition-colors',
                    {
                      'bg-[var(--primary-stroke)]': isCurrent || isCompleted,
                      'bg-[var(--surface-01)]': isUpcoming,
                    }
                  )}
                >
                  {(isCurrent || isCompleted) && (
                    <Circle
                      size={32}
                      color={'var(--primary)'}
                      fill={'var(--primary)'}
                    />
                  )}
                </div>

                <div className='mt-1 text-center'>
                  <div
                    className={cn('text-sm font-medium', {
                      'text-[var(--primary)]': isCurrent || isCompleted,
                      'text-[var(--secondary-text)]': isUpcoming,
                    })}
                  >
                    {stepTitle}
                  </div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className='relative flex-1'>
                  <div
                    className={cn(
                      'absolute top-[-15px] h-0.5 w-full transition-colors',
                      {
                        'bg-[var(--primary)]': stepNumber < currentStep,
                        'bg-[var(--surface-01)]': stepNumber >= currentStep,
                      }
                    )}
                  />
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
