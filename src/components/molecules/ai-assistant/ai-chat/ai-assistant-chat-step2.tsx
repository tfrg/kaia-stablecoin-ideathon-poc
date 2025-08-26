import { ChatMessageBox } from '@/components/molecules/ai-assistant/chat-message-box'
import {
  ChatValueDisplay,
  AiAssistantMessage,
  ChatInputField,
} from '@/components/molecules/ai-assistant/ai-chat'
import { ChatOptionButtons } from '@/components/molecules/ai-assistant/chat-option-buttons'

import {
  ChatText,
  ChatEmphasisText,
  ChatMutedText,
  ChatContentBox,
  ChatContentBoxHeader,
  ChatContentWrapper,
} from '@/components/ui/chat-text'

export function AiAssistantChatStep2(): React.JSX.Element {
  const retirementOptions = [
    { text: '5년 미만' },
    { text: '5-15년', isActive: true },
    { text: '15-25년' },
    { text: '25년 이상' },
    { text: '직접 입력' },
  ]

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
      <br />

      <ChatContentBox>
        <ChatContentBoxHeader
          title='은퇴 목표 세부 정보'
          description='은퇴 계획에 대한 세부 정보를 입력해 주세요'
        />
        <ChatContentWrapper>
          <ChatInputField label='현재 나이 대비 은퇴 예상 나이'>
            <ChatOptionButtons options={retirementOptions} />
          </ChatInputField>

          <ChatInputField label='목표 금액'>
            <ChatMessageBox>
              <ChatText>
                <ChatMutedText>
                  KAIA 직접 입력하거나 아래 계산기를 통해 추정할 수 있습니다
                </ChatMutedText>
              </ChatText>
            </ChatMessageBox>
          </ChatInputField>

          <div className='flex flex-col gap-2'>
            <ChatMessageBox>
              <ChatText>
                <b>목표 금액 계산기</b>
              </ChatText>

              <div className='flex flex-col gap-4 lg:flex-row'>
                <div className='flex flex-1 flex-col xl:min-w-[200px]'>
                  <ChatText>
                    <ChatMutedText>은퇴 후 월 지출 예상</ChatMutedText>
                  </ChatText>
                  <ChatValueDisplay value={'300'} unit='KAIA' />
                </div>
                <div className='flex flex-1 flex-col xl:min-w-[200px]'>
                  <ChatText>
                    <ChatMutedText>은퇴 후 예상 기간</ChatMutedText>
                  </ChatText>
                  <ChatValueDisplay value='30' unit='년' />
                </div>
                <div className='flex flex-1 flex-col xl:min-w-[200px]'>
                  <ChatText>
                    <ChatMutedText>예상 필요 금액</ChatMutedText>
                  </ChatText>
                  <ChatValueDisplay value='108,000' unit='KAIA' />
                </div>
              </div>
            </ChatMessageBox>

            <AiAssistantMessage>
              월 300 KAIA 기준으로 15년 후 은퇴 시 필요한 목표 금액은 약 108,000
              KAIA이 될 것 같습니다. <br />
              (월 300 KAIA × 12개월 × 30년 예상 은퇴 기간 × 인플레이션 고려)
            </AiAssistantMessage>
          </div>
        </ChatContentWrapper>
      </ChatContentBox>
    </article>
  )
}
