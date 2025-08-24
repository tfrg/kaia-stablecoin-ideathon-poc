import { cn } from '@/lib/utils'

import { ChatText } from '@/components/ui/chat-text'

interface ChatInputFieldProps {
  label: string
  children: React.ReactNode
  className?: string
}

export function ChatInputField({
  label,
  children,
  className = '',
}: ChatInputFieldProps) {
  return (
    <div className={cn('', className)}>
      <ChatText>
        <b>{label}</b>
      </ChatText>
      {children}
    </div>
  )
}
