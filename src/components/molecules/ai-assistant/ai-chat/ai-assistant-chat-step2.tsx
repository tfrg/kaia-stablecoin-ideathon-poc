import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChatText,
  ChatEmphasisText,
  ChatMutedText,
  ChatContentBox,
} from '@/components/ui/chat-text'
import KaiaPortLogo from '@/components/ui/kaia-port-logo'
import { KaiaPortAiBotAvatar } from '../kaia-port-ai-avatar'

export function AiAssistantChatStep2(): React.JSX.Element {
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

      <Card className='rounded-md border bg-[var(--background)] px-6 py-4'>
        <CardHeader className='p-0'>
          <CardTitle>은퇴 목표 세부 정보</CardTitle>
          <CardDescription>
            은퇴 계획에 대한 세부 정보를 입력해 주세요
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-5 p-0'>
          <div>
            <ChatText>
              <b>현재 나이 대비 은퇴 예상 나이</b>
            </ChatText>
            <div className='flex w-full overflow-hidden rounded-md border'>
              <button className='flex-1 bg-[var(--surface-03)] py-3 text-sm text-white hover:bg-gray-700'>
                5년 미만
              </button>
              <button className='flex-1 bg-[var(--primary-badge)] py-3 text-sm text-white'>
                5-15년
              </button>
              <button className='flex-1 bg-[var(--surface-03)] py-3 text-sm text-white hover:bg-gray-700'>
                15-25년
              </button>
              <button className='flex-1 bg-[var(--surface-03)] py-3 text-sm text-white hover:bg-gray-700'>
                25년 이상
              </button>
              <button className='flex-1 bg-[var(--surface-03)] py-3 text-sm text-white hover:bg-gray-700'>
                직접 입력
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <ChatText>
              <b>목표 금액</b>
            </ChatText>
            <Card className='rounded-md border p-4'>
              <CardContent className='p-0'>
                <ChatText>
                  <ChatMutedText>
                    KAIA 직접 입력하거나 아래 계산기를 통해 추정할 수 있습니다
                  </ChatMutedText>
                </ChatText>
              </CardContent>
            </Card>

            <Card className='rounded-md border p-4'>
              <CardContent className='p-0'>
                <ChatText>
                  <b>목표 금액 계산기</b>
                </ChatText>

                <div className='flex gap-4'>
                  <div className='flex flex-1 flex-col xl:min-w-[200px]'>
                    <ChatText>
                      <ChatMutedText>은퇴 후 월 지출 예상</ChatMutedText>
                    </ChatText>
                    <div className='rounded-md border bg-[var(--surface-01)] p-2'>
                      <ChatText>
                        <b>300</b>
                        <ChatMutedText>&nbsp;KAIA</ChatMutedText>
                      </ChatText>
                    </div>
                  </div>
                  <div className='flex flex-1 flex-col xl:min-w-[200px]'>
                    <ChatText>
                      <ChatMutedText>은퇴 후 예상 기간</ChatMutedText>
                    </ChatText>
                    <div className='rounded-md border bg-[var(--surface-01)] p-2'>
                      <ChatText>
                        <b>30</b>
                        <ChatMutedText>&nbsp;년</ChatMutedText>
                      </ChatText>
                    </div>
                  </div>
                  <div className='flex flex-1 flex-col xl:min-w-[200px]'>
                    <ChatText>
                      <ChatMutedText>예상 필요 금액</ChatMutedText>
                    </ChatText>
                    <div className='rounded-md border bg-[var(--surface-01)] p-2'>
                      <ChatText>
                        <b>108,000</b>
                        <ChatMutedText>&nbsp;KAIA</ChatMutedText>
                      </ChatText>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className='rounded-md border p-4'>
              <CardContent className='flex items-center gap-2 p-0'>
                <div>{KaiaPortAiBotAvatar}</div>
                <div className='rounded-md border bg-[var(--surface-01)] p-2'>
                  <ChatText className='text-sm/4'>
                    월 300 KAIA 기준으로 15년 후 은퇴 시 필요한 목표 금액은 약
                    108,000 KAIA이 될 것 같습니다. <br />
                    (월 300 KAIA × 12개월 × 30년 예상 은퇴 기간 × 인플레이션
                    고려)
                  </ChatText>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </article>
  )
}
