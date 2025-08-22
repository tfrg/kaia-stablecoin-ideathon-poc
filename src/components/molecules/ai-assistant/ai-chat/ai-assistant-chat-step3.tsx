import { ChatText, ChatEmphasisText } from '@/components/ui/chat-text'

export function AiAssistantChatStep3(): React.JSX.Element {
  return (
    <article>
      <ChatText>목표 설정이 완료 되었습니다.</ChatText>
      <br />
      <br />
      <ChatText>
        다음으로, 목표 달성을 위한{' '}
        <ChatEmphasisText>투자 계획을 설정</ChatEmphasisText>하겠습니다. <br />
        초기 투자 금액과 정기적인 추가 투자 계획을 알려주세요.
      </ChatText>
      <br />
      <br />
      <ChatText>
        또한, 앞으로 예정된 큰 지출(교육비, 주택 구매 등)이 있다면 인출 계획에
        반영할 수 있습니다.
      </ChatText>
    </article>
  )
}
