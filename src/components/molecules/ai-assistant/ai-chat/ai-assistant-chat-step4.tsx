import React from 'react'

import { cn } from '@/lib/utils'

import { ChatInputField } from '@/components/molecules/ai-assistant/ai-chat'

import { CardContent } from '@/components/ui/card'
import {
  ChatText,
  ChatEmphasisText,
  ChatContentBox,
  ChatContentBoxHeader,
  ChatContentWrapper,
  ChatMutedText,
} from '@/components/ui/chat-text'
import { Slider } from '@/components/ui/slider'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export function AiAssistantChatStep4(): React.JSX.Element {
  const [selectedOption, setSelectedOption] = React.useState('option3')

  const radioOptions = [
    {
      value: 'option1',
      label: '즉시 자산을 매도하고 손실을 확정합니다.',
    },
    {
      value: 'option2',
      label: '일부만 매도하고 나머지는 유지합니다.',
    },
    {
      value: 'option3',
      label: '보유를 유지하고 장기적 관점에서 기다립니다.',
    },
    {
      value: 'option4',
      label: '추가 자금을 투자하여 평균 구매 가격을 낮춥니다.',
    },
  ]

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
      <br />
      <br />

      <ChatContentBox>
        <ChatContentBoxHeader
          title='위험 성향 평가'
          description='귀하의 투자 위험 성향을 파악하여 최적의 포트폴리오를 구성합니다'
        />
        <CardContent className='flex flex-col gap-5 p-0'>
          <ChatInputField
            className='flex flex-col gap-3'
            label='위험 감수 성향 (매우 보수적 - 매우 공격적)'
          >
            <div className='flex w-full flex-col'>
              <Slider value={[50]} min={0} max={100} step={10} />
            </div>
            <div className='mt-1 flex justify-between text-sm text-[var(--secondary-text)]'>
              <span>매우 보수적</span>
              <span>균형적</span>
              <span>매우 공격적</span>
            </div>
          </ChatInputField>

          <ChatContentWrapper className='mb-3 gap-2 rounded-md border bg-[var(--surface-03)] px-3 py-2'>
            <div>
              <ChatText>
                <b>균형 잡힌 위험 성향</b>
              </ChatText>
            </div>
            <div>
              <ChatMutedText>
                <ul className='flex flex-col gap-2 px-5 text-sm'>
                  <li className='list-disc'>
                    성장과 안정 사이의 균형을 중시합니다.
                  </li>
                  <li className='list-disc'>
                    중간 정도의 변동성을 수용할 수 있습니다.
                  </li>
                  <li className='list-disc'>
                    위험 자산과 안전 자산의 적절한 배분을 선호합니다.
                  </li>
                </ul>
              </ChatMutedText>
            </div>
          </ChatContentWrapper>

          <ChatContentWrapper className='gap-2'>
            <ChatText className='text-md font-[700]'>
              가상자산 포트폴리오가 30% 하락된다면, 어떻게 반응하실 것 같나요?
            </ChatText>

            <RadioGroup
              defaultValue='option3'
              className='gap-1'
              onValueChange={setSelectedOption}
              value={selectedOption}
            >
              {radioOptions.map((option) => (
                <div
                  key={option.value}
                  className='flex items-center space-x-3 rounded-full p-2'
                >
                  <RadioGroupItem
                    value={option.value}
                    id={option.value}
                    className={cn(
                      'h-5 w-5',
                      selectedOption === option.value &&
                        'border-[#CCFF00] bg-[#CCFF00] text-black'
                    )}
                  />
                  <Label htmlFor={option.value} className='text-sm'>
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </ChatContentWrapper>
        </CardContent>
      </ChatContentBox>
    </article>
  )
}
