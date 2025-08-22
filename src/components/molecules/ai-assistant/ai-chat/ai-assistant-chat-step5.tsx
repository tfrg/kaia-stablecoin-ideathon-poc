import { ChatText } from '@/components/ui/chat-text'

export function AiAssistantChatStep5(): React.JSX.Element {
  return (
    <article>
      <ChatText>위험 성향 평가가 완료되었습니다!</ChatText>
      <br />
      <br />
      <ChatText>
        지금까지 제공해주신 정보를 바탕으로 포트폴리오 모델을 계산하겠습니다.{' '}
        <br />
        카이아 블록체인의 시가총액 상위 20개 코인과 디파이 토큰을 고려하여{' '}
        <br />
        10,000회의 몬테카를로 시뮬레이션을 실행할 것입니다.
      </ChatText>
      <br />
      <br />
      <ChatText>
        이를 통해 귀하의 목표 달성 확률과 자산 충당률을 계산하여 최적의
        포트폴리오를 제안해드리겠습니다. <br /> 잠시만 기다려주세요...
      </ChatText>
    </article>
  )
}
