import React from 'react'
import { Circle } from 'lucide-react'

import {
  ChatText,
  ChatEmphasisText,
  ChatContentBox,
  ChatContentBoxHeader,
  ChatMutedText,
} from '@/components/ui/chat-text'
import { ChatMessageBox } from '../chat-message-box'
import { ChatInputField } from './chat-input-field'
import { cn } from '@/lib/utils'

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
      <br />
      <br />
      <div className='grid gap-2'>
        <ChatContentBox>
          <ChatContentBoxHeader
            title='자동화 설정'
            description='포트폴리오 관리를 위한 자동화 수준을 선택하세요'
          />

          <div className='grid gap-6'>
            <ChatMessageBox className='flex place-content-between'>
              <div className='flex items-center gap-2'>
                <img
                  className='h-[20px] w-[20px]'
                  src='/kaia-wallet-logo.svg'
                  alt='kaia-wallet logo'
                />
                <ChatText>Kaia Wallet이 연결되었습니다</ChatText>
              </div>
              <ChatText>
                <ChatMutedText>잔액: 6,200 KAIA</ChatMutedText>
              </ChatText>
              <ChatText>
                <ChatMutedText>
                  D2tEir...VpwT <button>변경</button>
                </ChatMutedText>
              </ChatText>
            </ChatMessageBox>

            <ChatInputField label='자동화 수준 선택'>
              <AutomationSelection />
            </ChatInputField>

            <div className='grid grid-cols-2 gap-2'>
              <ChatInputField label='자동 투자 날짜 설정'>
                <ChatMessageBox>
                  <div className='flex flex-col items-start gap-4 text-sm'>
                    <ChatText>매월 5일</ChatText>
                    <ChatMutedText>
                      카이아 블록체인에 자동 거래 전송
                    </ChatMutedText>
                  </div>
                </ChatMessageBox>
              </ChatInputField>
              <ChatInputField label='실행 계획 요약'>
                <ChatMessageBox>
                  <div className='flex flex-col items-start gap-4 text-sm'>
                    <ChatText>초기 투자: 5,000 KAIA</ChatText>
                    <ChatMutedText>
                      매월 투자: 150 KAIA (매월 5일)
                    </ChatMutedText>
                  </div>
                </ChatMessageBox>
              </ChatInputField>
            </div>
          </div>
        </ChatContentBox>
      </div>
    </article>
  )
}

interface AutomationCardProps {
  title: string
  features: string[]
  isSelected: boolean
  isHighlighted: boolean
  onSelect: () => void
}

const AutomationCard: React.FC<AutomationCardProps> = ({
  title,
  features,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={cn(
        'flex cursor-pointer flex-col items-start gap-2 rounded-md border bg-[var(--surface-03)] p-4 transition-all',
        isSelected
          ? 'border-[var(--primary)]'
          : 'border-[var(--border)] hover:border-[var(--primary-light)] hover:bg-[var(--surface-02)]'
      )}
      onClick={onSelect}
    >
      <ChatText className='font-medium'>
        <b>{title}</b>
      </ChatText>
      <ul className='flex-grow space-y-2'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-start'>
            <ChatMutedText>
              <span className='mr-2 text-gray-400'>-</span>
              <span className='text-sm'>{feature}</span>
            </ChatMutedText>
          </li>
        ))}
      </ul>
      <div className='flex justify-center'>
        {isSelected ? (
          <div className='flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)]'>
            <Circle size={12} className='rounded-full bg-white text-white' />
          </div>
        ) : (
          <div className='h-6 w-6 rounded-full border'></div>
        )}
      </div>
    </div>
  )
}

interface AutomationOption {
  id: string
  title: string
  features: string[]
}

const AutomationSelection: React.FC = () => {
  const [selectedOption, setSelectedOption] = React.useState<string>('standard')

  const automationOptions: AutomationOption[] = [
    {
      id: 'basic',
      title: '기본 자동화',
      features: [
        '초기 투자 배분만 자동화',
        '이후 거래는 알림 후 수동 승인',
        '고객이 모든 거래 컨트롤',
      ],
    },
    {
      id: 'standard',
      title: '표준 자동화',
      features: [
        '초기 투자와 월별 투자 자동화',
        '리밸런싱은 제안 시 수동 승인',
        '부분적인 자율성과 통제권 유지',
      ],
    },
    {
      id: 'full',
      title: '완전 자동화',
      features: [
        '초기 투자, 월별 투자 모두 자동화',
        '리밸런싱까지 자동 실행',
        '완전한 자율 관리',
      ],
    },
  ]

  return (
    <div className='grid grid-cols-3 gap-4'>
      {automationOptions.map((option) => (
        <AutomationCard
          key={option.id}
          title={option.title}
          features={option.features}
          isSelected={selectedOption === option.id}
          isHighlighted={option.id === 'standard'}
          onSelect={() => setSelectedOption(option.id)}
        />
      ))}
    </div>
  )
}
