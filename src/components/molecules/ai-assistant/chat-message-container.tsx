import { Box } from '@/components/ui/box'

interface ChatMessageContainerProps {
  avatar: React.ReactNode
  children: React.ReactNode
}

export function ChatMessageContainer({
  avatar,
  children,
}: ChatMessageContainerProps): React.JSX.Element {
  return (
    <div className='flex gap-5'>
      {/* Avatar */}
      <div>{avatar}</div>

      {/* Message Card */}
      <Box className='max-w-full overflow-hidden px-3 py-4'>
        <div className='overflow-wrap-anywhere max-w-full break-words break-all'>
          {children}
        </div>
      </Box>
    </div>
  )
}
