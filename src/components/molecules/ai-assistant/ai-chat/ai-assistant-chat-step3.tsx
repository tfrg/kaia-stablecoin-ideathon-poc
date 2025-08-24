import {
  ChatValueDisplay,
  AiAssistantMessage,
  ChatInputField,
} from '@/components/molecules/ai-assistant/ai-chat'

import { CardContent } from '@/components/ui/card'
import {
  ChatText,
  ChatEmphasisText,
  ChatContentBox,
  ChatContentBoxHeader,
  ChatMutedText,
} from '@/components/ui/chat-text'

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
      <br />
      <br />
      <ChatContentBox>
        <ChatContentBoxHeader
          title='자금 계획 설정'
          description='목표 달성을 위한 투자 및 인출 계획을 설정해 주세요'
        />
        <CardContent className='flex flex-col gap-5 p-0'>
          <ChatInputField label='초기 투자 금액'>
            <ChatValueDisplay value='5,000' unit='KAIA' />
          </ChatInputField>

          <ChatInputField label='정기 납입 계획'>
            <div className='flex items-center gap-4'>
              <ChatValueDisplay value='100' unit='KAIA' className='w-full' />
              <ChatValueDisplay
                value='매월'
                unit='(12회/년)'
                className='w-full'
              />
            </div>
          </ChatInputField>

          <ChatInputField label='예정된 인출 계획 (선택사항)'>
            <div className='flex flex-col items-center gap-4'>
              <div className='w-full rounded-md border bg-[var(--surface-01)] p-2'>
                <ChatText>
                  <ChatMutedText>인출 계획 추가</ChatMutedText>
                </ChatText>
              </div>
              <div className='w-full rounded-md border bg-[var(--surface-01)] p-2'>
                <ChatText className='flex gap-6'>
                  <b>5년 후부터 3년간</b>
                  <b>매년 1,000 KAIA</b>
                  <ChatMutedText>자녀 대학 교육비</ChatMutedText>
                </ChatText>
              </div>
            </div>
          </ChatInputField>

          <AiAssistantMessage>
            목표 달성을 위해 초기 5,000 KAIA과 매월 100 KAIA 추가 투자를
            설정하셨습니다. <br />
            5년 후부터의 인출 계획도 반영하겠습니다.
          </AiAssistantMessage>
        </CardContent>
      </ChatContentBox>
    </article>
  )
}
