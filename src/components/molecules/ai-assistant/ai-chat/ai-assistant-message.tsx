import { ChatMessageBox } from '@/components/molecules/ai-assistant/chat-message-box'
import { KaiaPortAiBotAvatar } from '@/components/molecules/ai-assistant/kaia-port-ai-avatar'

import { ChatText } from '@/components/ui/chat-text'

interface AiAssistantMessageProps {
  children: React.ReactNode
  className?: string
}

export function AiAssistantMessage({
  children,
  className,
}: AiAssistantMessageProps) {
  return (
    <ChatMessageBox className={`flex items-center gap-2 ${className}`}>
      <div>{KaiaPortAiBotAvatar}</div>
      <div className='rounded-md border bg-[var(--surface-01)] p-2'>
        <ChatText className='text-sm/4'>{children}</ChatText>
      </div>
    </ChatMessageBox>
  )
}
