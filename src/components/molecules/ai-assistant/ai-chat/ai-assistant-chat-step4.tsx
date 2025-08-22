import { ChatText, ChatEmphasisText } from '@/components/ui/chat-text'

export function AiAssistantChatStep4(): React.JSX.Element {
  return (
    <article>
      <ChatText>자금 계획이 설정되었습니다.</ChatText>
      <br />
      <br />
      <ChatText>
        이제 귀하의 <ChatEmphasisText>투자 위험 성향</ChatEmphasisText>을
        파악하겠습니다. <br />
        위험 성향에 따라 포트폴리오의 자산 배분과 투자 전략이 달라집니다.
        <br />
        매우 보수적부터 매우 공격적까지의 척도에서 귀하의 위험 감수 성향을
        선택해주세요.
        <br /> 또한, 몇 가지 추가 질문을 통해 더 정확한 성향을 파악하겠습니다.
      </ChatText>
    </article>
  )
}
