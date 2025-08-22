import { DashboardGridLayout } from '@/components/layout/dashboard-grid-layout'
import { ChatMessageContainer } from '@/components/molecules/ai-assistant/chat-message-container'
import { AiAssistantChatStep1 } from '@/components/molecules/ai-assistant/ai-chat/ai-assistant-chat-step1'
import { AiAssistantChatStep2 } from '@/components/molecules/ai-assistant/ai-chat/ai-assistant-chat-step2'
import { AiAssistantChatStep3 } from '@/components/molecules/ai-assistant/ai-chat/ai-assistant-chat-step3'
import { AiAssistantChatStep4 } from '@/components/molecules/ai-assistant/ai-chat/ai-assistant-chat-step4'
import { AiAssistantChatStep5 } from '@/components/molecules/ai-assistant/ai-chat/ai-assistant-chat-step5'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function AiAssistant() {
  const KaiaPortAiBotAvatar = (
    <Avatar className='h-[36px] w-[36px]'>
      <AvatarImage
        src={'/kaia-port-ai-bot.svg'}
        alt={'KaiaPort AI Bot image'}
      />
      <AvatarFallback>AI</AvatarFallback>
    </Avatar>
  )
  return (
    <DashboardGridLayout>
      <ChatMessageContainer avatar={KaiaPortAiBotAvatar}>
        <AiAssistantChatStep1 />
      </ChatMessageContainer>

      <ChatMessageContainer avatar={KaiaPortAiBotAvatar}>
        <AiAssistantChatStep2 />
      </ChatMessageContainer>

      <ChatMessageContainer avatar={KaiaPortAiBotAvatar}>
        <AiAssistantChatStep3 />
      </ChatMessageContainer>

      <ChatMessageContainer avatar={KaiaPortAiBotAvatar}>
        <AiAssistantChatStep4 />
      </ChatMessageContainer>

      <ChatMessageContainer avatar={KaiaPortAiBotAvatar}>
        <AiAssistantChatStep5 />
      </ChatMessageContainer>
    </DashboardGridLayout>
  )
}
