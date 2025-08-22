import {
  ChatText,
  ChatEmphasisText,
  ChatMutedText,
} from '@/components/ui/chat-text'

export function AiAssistantChatStep2(): React.JSX.Element {
  return (
    <article>
      <ChatText>
        <ChatEmphasisText>은퇴 자금 마련</ChatEmphasisText>을 목표로 하셨군요!
        좋은 선택입니다.
      </ChatText>
      <br />
      <br />
      <ChatText>
        이제 은퇴 계획에 대한 세부 정보를 입력해 주세요. <br />
        <ChatMutedText>
          목표 달성 시점과 필요한 자금을 설정하면 최적의 투자 계획을 수립할 수
          있습니다. <br />
          목표 금액을 직접 입력하거나, 계산기를 통해 은퇴 후 필요 자금을 추정할
          수 있습니다.
        </ChatMutedText>
      </ChatText>
      <br />
    </article>
  )
}
