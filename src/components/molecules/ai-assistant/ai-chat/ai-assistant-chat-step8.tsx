import React from 'react'
import { Check, Circle } from 'lucide-react'

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
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

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
                  src='img/wallet/kaia-wallet-logo.svg'
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

        <ChatContentBox className='grid w-full items-center gap-6'>
          <div className='flex justify-center'>
            <div className='flex h-[140px] w-[140px] items-center justify-center rounded-full bg-[var(--surface-03)]'>
              <div className='flex h-[120px] w-[120px] items-center justify-center rounded-full border border-[color:var(--primary)] bg-[var(--primary-badge)]'>
                <Check strokeWidth={1} size={60} color={'var(--primary)'} />
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            <div className='flex w-full max-w-[500px] flex-col gap-4'>
              <div className='flex flex-col items-center'>
                <ChatText className='text-xl font-bold'>
                  <b>포트폴리오 설정 완료!</b>
                </ChatText>
                <ChatMutedText>
                  초기 포트폴리오 설정이 성공적으로 완료되었습니다
                </ChatMutedText>
              </div>

              <ChatMessageBox className='flex place-content-between'>
                <div className='flex items-center gap-2'>
                  <img
                    className='h-[20px] w-[20px]'
                    src='img/wallet/kaia-wallet-logo.svg'
                    alt='kaia-wallet logo'
                  />
                  <div>트랜잭션 해시: 4f2E...8a9B</div>
                </div>
                <div>
                  <ChatText>
                    <ChatEmphasisText>
                      <button>카이아 스캔에서 보기</button>
                    </ChatEmphasisText>
                  </ChatText>
                </div>
              </ChatMessageBox>
            </div>
          </div>

          <div className='flex justify-center'>
            <div className='flex w-full max-w-[500px] flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <ChatText className='text-lg'>
                  <b>KaiaPort 대시보드의 주요 기능</b>
                </ChatText>
                <ChatMessageBox className='flex flex-col gap-3'>
                  <div className='flex flex-col items-start'>
                    <ChatText className='text-md'>
                      <b>포트폴리오</b>
                    </ChatText>
                    <ChatText className='text-sm'>
                      <ChatMutedText>
                        현재 자산 배분 및 총 가치 / 실시간 변동률
                      </ChatMutedText>
                    </ChatText>
                  </div>
                  <div className='flex flex-col items-start'>
                    <ChatText className='text-md'>
                      <b>목표 진행 상황</b>
                    </ChatText>
                    <ChatText className='text-sm'>
                      <ChatMutedText>
                        자산 충당률: 108% / 목표 달성 확률: 92% / 남은 기간:
                        15년
                      </ChatMutedText>
                    </ChatText>
                  </div>
                  <div className='flex flex-col items-start'>
                    <ChatText className='text-md'>
                      <b>자동화 설정</b>
                    </ChatText>
                    <ChatText className='text-sm'>
                      <ChatMutedText>
                        월별 자동 투자: 매월 5일 150 KAIA / 다음 투자일: 2025년
                        6월 5일
                      </ChatMutedText>
                    </ChatText>
                  </div>
                  <div className='flex flex-col items-start'>
                    <ChatText className='text-md'>
                      <b>실시간 모니터링</b>
                    </ChatText>
                    <ChatText className='text-sm'>
                      <ChatMutedText>
                        수익 그래프 / 자산별 성과 비교 / 시뮬레이션 대비 실제
                        성과
                      </ChatMutedText>
                    </ChatText>
                  </div>
                </ChatMessageBox>
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            <Link to='/dashboard'>
              <Button
                size={'lg'}
                className='hover:bg-[var(--button-secondary-bg)] hover:text-[var(--secondary-text)]'
              >
                <b>대시보드로 이동</b>
              </Button>
            </Link>
          </div>

          <div className='flex justify-center'>
            <ChatText>
              <ChatMutedText>
                이제 KAIAPort와 함께 더 스마트한 투자 여정을 시작해보세요!
              </ChatMutedText>
            </ChatText>
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
