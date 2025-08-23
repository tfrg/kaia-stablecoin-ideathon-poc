import { ChatText, ChatEmphasisText } from '@/components/ui/chat-text'

export function AiAssistantChatStep7(): React.JSX.Element {
  return (
    <article>
      <ChatText>포트폴리오 계획이 확정되었습니다!</ChatText>
      <br />
      <br />
      <ChatText>
        이제 실제로 이 전략을 구현할 차례입니다. <br />
        <ChatEmphasisText>카이아 지갑</ChatEmphasisText>을 연결하면 자동으로
        포트폴리오를 설정하고 관리할 수 있습니다.
      </ChatText>
      <br />
      <br />
      <ChatText>
        지갑 연결 후에는 자동화 수준을 선택하실 수 있으며, 귀하의 설정에 따라{' '}
        <br />
        초기 투자 배분, 정기 납입, 리밸런싱 등이 자동 또는 수동으로 진행됩니다.
      </ChatText>
    </article>
  )
}
