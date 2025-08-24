import { cn } from '@/lib/utils'

import { ChatText, ChatMutedText } from '@/components/ui/chat-text'

interface ValueDisplayProps {
  value: string | number
  unit?: string
  className?: string
  bg?: string
}

export function ChatValueDisplay({
  value,
  unit,
  className = '',
  bg = 'bg-[var(--surface-01)]',
}: ValueDisplayProps): React.JSX.Element {
  return (
    <div className={cn(`rounded-md border p-2`, bg, className)}>
      <ChatText>
        <b>{value}</b>
        {unit && <ChatMutedText>&nbsp;{unit}</ChatMutedText>}
      </ChatText>
    </div>
  )
}
