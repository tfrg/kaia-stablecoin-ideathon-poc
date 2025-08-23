import { cn } from '@/lib/utils'

import { Box } from '@/components/ui/box'

interface ChatTextProps {
  children: React.ReactNode
  className?: string
}

export function ChatText({
  children,
  className,
}: ChatTextProps): React.JSX.Element {
  return <span className={cn('text-sm/7', className)}>{children}</span>
}

export function ChatEmphasisText({ children }: { children: React.ReactNode }) {
  return (
    <span className='text-[var(--primary)]'>
      <b>{children}</b>
    </span>
  )
}

export function ChatMutedText({ children }: { children: React.ReactNode }) {
  return <span className='text-[var(--secondary-text)]'>{children}</span>
}

export function ChatContentBox({ children }: { children: React.ReactNode }) {
  return <Box className='bg-[var(--background)]'>{children}</Box>
}
