import { ChatText, ChatEmphasisText } from '@/components/ui/chat-text'

export function AiAssistantChatStep8(): React.JSX.Element {
  return (
    <article>
      <ChatText>
        <ChatEmphasisText>지갑 연결과 자동화 설정이 완료</ChatEmphasisText>
        되었습니다!
      </ChatText>
      <br />
      <br />
      <ChatText>
        최종 포트폴리오 정보와 자동화 설정을 확인해주세요. <br />
        모든 내용이 정확한지 검토하신 후, '포트폴리오 실행 승인'버튼을
        클릭하시면 <br />
        스마트 컨트랙트를 통해 초기 자산 배분이 즉시 실행됩니다.
      </ChatText>
      <br />
      <br />
      <ChatText>
        승인 후에는 실시간으로 포트폴리오 성과를 확인하고 관리할 수 있는 <br />
        <b>KaiaPort 대시보드</b>로 안내해드리겠습니다.
      </ChatText>
    </article>
  )
}
