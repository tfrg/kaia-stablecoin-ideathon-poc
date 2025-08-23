import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export const KaiaPortAiBotAvatar: React.JSX.Element = (
  <Avatar className='h-[36px] w-[36px]'>
    <AvatarImage src={'/kaia-port-ai-bot.svg'} alt={'KaiaPort AI Bot image'} />
    <AvatarFallback>AI</AvatarFallback>
  </Avatar>
)
