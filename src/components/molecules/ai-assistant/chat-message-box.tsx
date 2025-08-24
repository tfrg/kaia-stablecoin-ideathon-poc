import { cn } from '@/lib/utils'

import { Card, CardContent } from '@/components/ui/card'

interface ChatMessageBoxProps {
  className?: string
  children: React.ReactNode
}

export function ChatMessageBox({ className, children }: ChatMessageBoxProps) {
  return (
    <Card className='rounded-md border p-4'>
      <CardContent className={cn('p-0', className)}>{children}</CardContent>
    </Card>
  )
}
