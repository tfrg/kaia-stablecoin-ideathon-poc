import { DashboardGridLayout } from '@/components/layout/dashboard-grid-layout'
import { ChatMessageContainer } from '@/components/molecules/ai-assistant/chat-message-container'
import {
  AiAssistantChatStep1,
  AiAssistantChatStep2,
  AiAssistantChatStep3,
  AiAssistantChatStep4,
  AiAssistantChatStep5,
  AiAssistantChatStep6,
  AiAssistantChatStep7,
  AiAssistantChatStep8,
} from '@/components/molecules/ai-assistant/ai-chat'
import { KaiaPortAiBotAvatar } from '@/components/molecules/ai-assistant/kaia-port-ai-avatar'

export default function AiAssistant() {
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

      <ChatMessageContainer avatar={KaiaPortAiBotAvatar}>
        <AiAssistantChatStep6 />
      </ChatMessageContainer>

      <ChatMessageContainer avatar={KaiaPortAiBotAvatar}>
        <AiAssistantChatStep7 />
      </ChatMessageContainer>

      <ChatMessageContainer avatar={KaiaPortAiBotAvatar}>
        <AiAssistantChatStep8 />
      </ChatMessageContainer>
    </DashboardGridLayout>
  )
}
