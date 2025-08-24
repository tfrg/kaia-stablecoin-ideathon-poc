import React from 'react'

import { cn } from '@/lib/utils'

import { assetDistributionChartData } from '@/data/dashboard'

import { AssetDistributionPieChart } from '@/components/molecules/dashboard/chart/asset-distribution-pie-chart'

import {
  ChatText,
  ChatContentBox,
  ChatContentBoxHeader,
  ChatContentWrapper,
} from '@/components/ui/chat-text'

const performanceMetrics = [
  { key: '예상 연간 수익률', value: '8.2%' },
  { key: '예상 연간 변동성', value: '12.5%' },
  { key: '자산 충당률 (Funded Ratio)', value: '92%' },
  { key: '목표 달성 확률', value: '78%' },
]

const improvementOptions = [
  {
    id: 'increase-payment',
    title: '월 납입액 150 KAIA로 증가',
    details: '자산 충당률: 108% / 달성 확률: 92%',
  },
  {
    id: 'extend-period',
    title: '투자 기간 2년 연장 (17년)',
    details: '자산 충당률: 112% / 달성 확률: 95%',
  },
]

export function AiAssistantChatStep6(): React.JSX.Element {
  const [selectedOption] = React.useState<string | null>(
    improvementOptions[0].id
  )

  return (
    <article className='space-y-3'>
      <ChatContentBox>
        <ChatContentBoxHeader
          title='포트폴리오 분석 결과'
          description='10,000회 시뮬레이션 기반 최적 포트폴리오 달성 확률 분석'
        />

        <div className='grid gap-2'>
          <div className='grid gap-2 lg:grid-cols-2'>
            <ChatContentWrapper className='items-center gap-2 rounded-md border bg-[var(--surface-03)] px-3 py-2'>
              <div>
                <ChatText>
                  <b>추천 포트폴리오 구성</b>
                </ChatText>
              </div>
              <div className='w-full flex-1'>
                <AssetDistributionPieChart
                  chartData={assetDistributionChartData}
                />
              </div>
            </ChatContentWrapper>

            <ChatContentWrapper className='gap-2 rounded-md border bg-[var(--surface-03)] px-3 py-2'>
              <div>
                <ChatText>
                  <b>성과 지표</b>
                </ChatText>
              </div>
              <div className='mb-2 flex flex-col gap-2'>
                {performanceMetrics.map((metric, index) => (
                  <DataField
                    key={index}
                    keyText={metric.key}
                    valueText={metric.value}
                    keyClassName='text-sm text-[var(--secondary-text)]'
                    valueClassName='font-medium'
                  />
                ))}
              </div>
              <ChatContentWrapper className='rounded-md bg-[var(--surface-01)] p-3'>
                <ChatText>
                  현재 계획으로는 목표 금액의 약 92%를 달성할 수 <br />
                  있으며, 목표 달성 확률은 78%입니다. 목표 달성
                  <br />
                  확률을 높이기 위한 개선안을 확인해보세요.
                </ChatText>
              </ChatContentWrapper>
            </ChatContentWrapper>
          </div>
          <div>
            <ChatContentWrapper className='gap-2 rounded-md border bg-[var(--surface-03)] px-3 py-2'>
              <div>
                <ChatText>
                  <b>개선안</b>
                </ChatText>
              </div>
              <div className='mt-2 grid gap-3 sm:grid-cols-2'>
                {improvementOptions.map((option) => (
                  <ImprovementOption
                    key={option.id}
                    title={option.title}
                    details={option.details}
                    isSelected={selectedOption === option.id}
                  />
                ))}
              </div>
            </ChatContentWrapper>
          </div>
        </div>
      </ChatContentBox>
    </article>
  )
}

interface DataFieldProps {
  keyText: string
  valueText: string | number
  keyClassName?: string
  valueClassName?: string
  className?: string
}

const DataField = ({
  keyText,
  valueText,
  keyClassName = '',
  valueClassName = '',
  className = '',
}: DataFieldProps): React.JSX.Element => {
  return (
    <div className={cn('flex w-full place-content-between', className)}>
      <div className={keyClassName}>{keyText}</div>
      <div className={valueClassName}>{valueText}</div>
    </div>
  )
}

interface ImprovementOptionProps {
  title: string
  details: string
  isSelected: boolean
}

const ImprovementOption = ({
  title,
  details,
  isSelected,
}: ImprovementOptionProps): React.JSX.Element => {
  return (
    <div
      className={cn(
        'flex cursor-pointer flex-col rounded-md border px-4 py-3 transition-all',
        isSelected
          ? 'border-[var(--primary)] bg-[var(--primary-light)]'
          : 'hover:border-[var(--primary-light)] hover:bg-[var(--surface-02)]'
      )}
    >
      <div className='flex items-center justify-between'>
        <span className='font-medium'>{title}</span>
        <div
          className={cn(
            'flex h-6 w-6 items-center justify-center rounded-full border',
            isSelected
              ? 'border-[var(--primary)] bg-[var(--primary)]'
              : 'border-[var(--border)]'
          )}
        >
          {isSelected && <div className='h-2 w-2 rounded-full bg-white'></div>}
        </div>
      </div>
      <div className='mt-2 text-sm text-[var(--secondary-text)]'>{details}</div>
    </div>
  )
}
