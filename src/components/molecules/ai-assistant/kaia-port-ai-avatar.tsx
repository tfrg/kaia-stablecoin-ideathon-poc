import { cn } from '@/lib/utils'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

interface KaiaPortAiBotAvatarProps {
  size?: 'sm' | 'md'
}

const sizeMap = {
  sm: 'w-[24px] h-[24px]',
  md: 'w-[36px] h-[36px]',
}

export const KaiaPortAiBotAvatar = ({
  size = 'md',
}: KaiaPortAiBotAvatarProps) => (
  <Avatar className={cn(sizeMap[size])}>
    <AvatarImage src={'/kaia-port-ai-bot.svg'} alt={'KaiaPort AI Bot image'} />
    <AvatarFallback>AI</AvatarFallback>
  </Avatar>
)
