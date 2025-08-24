import { cn } from '@/lib/utils'

interface ChatOptionButton {
  text: string
  isActive?: boolean
}

interface ChatOptionButtonsProps {
  options: ChatOptionButton[]
  className?: string
}

export function ChatOptionButtons({
  options,
  className,
}: ChatOptionButtonsProps) {
  return (
    <div
      className={cn('flex w-full overflow-hidden rounded-md border', className)}
    >
      {options.map((option, index) => (
        <button
          key={index}
          className={cn(
            'flex-1 py-3 text-sm text-white',
            option.isActive
              ? 'bg-[var(--primary-badge)]'
              : 'bg-[var(--surface-03)] hover:bg-gray-700'
          )}
        >
          {option.text}
        </button>
      ))}
    </div>
  )
}
