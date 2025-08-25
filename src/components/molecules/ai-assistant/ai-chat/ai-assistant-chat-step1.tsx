import { InvestmentGoalCard } from '@/components/molecules/ai-assistant/investment-goal-card'

import { ChatText, ChatEmphasisText } from '@/components/ui/chat-text'

export function AiAssistantChatStep1(): React.JSX.Element {
  return (
    <article>
      <ChatText>
        안녕하세요, 저는 <ChatEmphasisText>KaiaPort</ChatEmphasisText>의 AI 자산
        관리사 <b>'칼리'</b>입니다.
      </ChatText>
      <br />
      <br />
      <ChatText>
        암호화폐 투자 목표를 달성하는 데 도음을 드릴게요. <br />
        간단한 대화를 통해 맞춤형 포트폴리오를 구성해 드리겠습니다. <br />
        어떤 재정 목표를 위해 암호화폐에 투자하고 싶으신가요? <br />
      </ChatText>
      <br />
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <InvestmentGoalCard
          title='은퇴 자금'
          imageSrc='/ai-assistant/ai-assistant-goal1.png'
          description='장기 목표 자금 마련'
          selected={true}
        />
        <InvestmentGoalCard
          title='교육 자금'
          imageSrc='/ai-assistant/ai-assistant-goal2.png'
          description='중기 목표 자금 마련'
        />
        <InvestmentGoalCard
          title='주택 구매'
          imageSrc='/ai-assistant/ai-assistant-goal3.png'
          description='중장기 목표 자금 마련'
        />
        <InvestmentGoalCard
          title='여행'
          imageSrc='/ai-assistant/ai-assistant-goal4.png'
          description='단기 목표 자금 마련'
        />
        <InvestmentGoalCard
          title='가족 지원'
          imageSrc='/ai-assistant/ai-assistant-goal5.png'
          description='장기적인 가족 재정 지원'
        />
        <InvestmentGoalCard
          title='일반 투자'
          imageSrc='/ai-assistant/ai-assistant-goal6.png'
          description='중장기 자산 증식'
        />
      </div>
    </article>
  )
}
