import { cn } from '@/lib/utils'

import { Box } from '@/components/ui/box'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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

export function ChatContentBox({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <Box className={cn('bg-[var(--background)] px-6 py-4', className)}>
      {children}
    </Box>
  )
}

export function ChatContentBoxHeader({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children?: React.ReactNode
}) {
  return (
    <CardHeader className='mb-5 p-0'>
      <CardTitle>{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
      {children}
    </CardHeader>
  )
}
