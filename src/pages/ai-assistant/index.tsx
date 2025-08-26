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
import { ChatStepper } from '@/components/molecules/ai-assistant/chat-stepper'

export default function AiAssistant() {
  return (
    <DashboardGridLayout>
      <div className='mb-4 flex w-full justify-center'>
        <ChatStepper
          steps={['목표 설정', '위험 성향', '포트폴리오', '자동화']}
          currentStep={4}
        />
      </div>

      <div className='mb-4 flex w-full justify-end'>
        <button className='flex items-center gap-4 rounded-full border border-[var(--primary)] bg-[var(--surface-03)] p-3 text-sm'>
          <div className='flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[var(--primary)]'>
            <KaiaPortAiBotAvatar size='sm' />
          </div>
          <div className='flex items-center gap-3'>
            <b>AI 에이전트에게 연결하기</b>
            <div className='flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[var(--primary)]'>
              <img src='/plus.svg' alt='plus icon' />
            </div>
          </div>
        </button>
      </div>

      <ChatMessageContainer avatar={<KaiaPortAiBotAvatar />}>
        <AiAssistantChatStep1 />
      </ChatMessageContainer>

      <ChatMessageContainer avatar={<KaiaPortAiBotAvatar />}>
        <AiAssistantChatStep2 />
      </ChatMessageContainer>

      <ChatMessageContainer avatar={<KaiaPortAiBotAvatar />}>
        <AiAssistantChatStep3 />
      </ChatMessageContainer>

      <ChatMessageContainer avatar={<KaiaPortAiBotAvatar />}>
        <AiAssistantChatStep4 />
      </ChatMessageContainer>

      <ChatMessageContainer avatar={<KaiaPortAiBotAvatar />}>
        <AiAssistantChatStep5 />
      </ChatMessageContainer>

      <ChatMessageContainer avatar={<KaiaPortAiBotAvatar />}>
        <AiAssistantChatStep6 />
      </ChatMessageContainer>

      <ChatMessageContainer avatar={<KaiaPortAiBotAvatar />}>
        <AiAssistantChatStep7 />
      </ChatMessageContainer>

      <ChatMessageContainer avatar={<KaiaPortAiBotAvatar />}>
        <AiAssistantChatStep8 />
      </ChatMessageContainer>
    </DashboardGridLayout>
  )
}
