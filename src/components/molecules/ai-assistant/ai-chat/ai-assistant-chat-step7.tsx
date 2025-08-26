import React from 'react'

import { cn } from '@/lib/utils'

import {
  AiAssistantMessage,
  ChatInputField,
} from '@/components/molecules/ai-assistant/ai-chat'

import {
  ChatText,
  ChatEmphasisText,
  ChatContentBox,
  ChatContentBoxHeader,
  ChatContentWrapper,
  ChatMutedText,
} from '@/components/ui/chat-text'

const wallets = [
  {
    id: 'kaia',
    name: 'Kaia Wallet',
    icon: '/icons/kaia-wallet.svg',
    color: 'bg-[#CCFF00]',
    textColor: 'text-black',
  },
  {
    id: 'metamask',
    name: 'Metamask',
    icon: '/icons/metamask.svg',
    color: 'bg-[#E17726]',
    textColor: 'text-white',
  },
  {
    id: 'okx',
    name: 'OKX Wallet',
    icon: '/icons/okx-wallet.svg',
    color: 'bg-black',
    textColor: 'text-white',
  },
]

export function AiAssistantChatStep7(): React.JSX.Element {
  const [selectedWallet] = React.useState<string>(wallets[0].id)

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
      <br />
      <br />
      <ChatContentBox>
        <ChatContentBoxHeader
          title='지갑 연결'
          description='카이아 지갑을 연결하여 포트폴리오를 실행하세요'
        />
        <div className='grid gap-4'>
          <AiAssistantMessage>
            포트폴리오가 확정되었습니다! 이제 실제로 이 전략을 구현해
            보겠습니다. 카이아 지갑을 연결하면 자동으로 초기 투자금 5,000 KAIA을
            최적 포트폴리오 비율로 자동 배분하고, 매월 150 KAIA 자동 투자를
            설정할 수 있습니다. 아래에서 지갑을 연결해 주세요.
          </AiAssistantMessage>
          <ChatInputField label='지갑 선택'>
            <div className='grid gap-3 xl:grid-cols-3'>
              {wallets.map((wallet) => (
                <WalletOption
                  key={wallet.id}
                  wallet={wallet}
                  isSelected={selectedWallet === wallet.id}
                />
              ))}
            </div>
          </ChatInputField>

          <ChatContentWrapper className='gap-2 rounded-md border bg-[var(--surface-03)] px-3 py-2'>
            <div>
              <ChatText>
                <b>지갑 연결 시 가능한 기능</b>
              </ChatText>
            </div>
            <div>
              <ChatMutedText>
                <ul className='flex flex-col gap-2 text-sm'>
                  <li className='flex gap-3'>
                    <div className='mt-1 h-3 w-3 rounded-md bg-[var(--primary)]' />
                    초기 투자금 5,000 KAIA를 최적 포트폴리오 비율로 자동 배분
                  </li>
                  <li className='flex gap-3'>
                    <div className='mt-1 h-3 w-3 rounded-md bg-[var(--primary)]' />
                    매월 150 KAIA 자동 투자 설정 (지정된 날짜에 자동 집행)
                  </li>
                  <li className='flex gap-3'>
                    <div className='mt-1 h-3 w-3 rounded-md bg-[var(--primary)]' />
                    자산 성과 실시간 모니터링
                  </li>
                  <li className='flex gap-3'>
                    <div className='mt-1 h-3 w-3 rounded-md bg-[var(--primary)]' />
                    시장 조건에 따른 알림 설정
                  </li>
                </ul>
              </ChatMutedText>
            </div>
          </ChatContentWrapper>
        </div>
      </ChatContentBox>
    </article>
  )
}

interface WalletOptionProps {
  wallet: {
    id: string
    name: string
    icon: string
    color: string
    textColor: string
  }
  isSelected: boolean
}

const WalletOption = ({
  wallet,
  isSelected,
}: WalletOptionProps): React.JSX.Element => {
  return (
    <div
      className={cn(
        'flex cursor-pointer items-center gap-3 rounded-md border p-4 transition-all',
        isSelected
          ? 'border-[var(--primary)] bg-[var(--primary-light)]'
          : 'border-[var(--border)] hover:border-[var(--primary-light)] hover:bg-[var(--surface-02)]'
      )}
    >
      <div
        className={cn(
          'flex h-12 w-12 items-center justify-center rounded-full',
          wallet.color
        )}
      >
        {/* 실제 아이콘 이미지 대신 임시 아이콘 표시 */}
        {wallet.id === 'kaia' && (
          <div className='text-xl font-bold text-black'>K</div>
        )}
        {wallet.id === 'metamask' && (
          <div className='text-xl font-bold text-white'>M</div>
        )}
        {wallet.id === 'okx' && (
          <div className='text-xl font-bold text-white'>O</div>
        )}
      </div>
      <div className='font-medium'>{wallet.name}</div>
    </div>
  )
}
