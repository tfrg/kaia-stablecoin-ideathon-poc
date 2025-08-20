import { CurrencyFormat } from '@/types/common'
import { RetirementProgressInfo } from '@/types/dashboard'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface AssetRetirementProgressCardProps {
  data: RetirementProgressInfo
  currencyFormat?: CurrencyFormat
}

export function AssetRetirementProgressCard({
  data,
  currencyFormat = '$',
}: AssetRetirementProgressCardProps) {
  const formatCurrency = (value: number): string => {
    return `${currencyFormat}${value.toLocaleString()}`
  }

  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>
          현가 기준 총 납입금 vs 필요금
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='h-4 w-full bg-gray-200 rounded-full mb-3'>
          <div
            className='h-4 bg-green-500 rounded-full'
            style={{ width: `${Math.min(data.fundingRatio, 100)}%` }}
          ></div>
        </div>
        <div className='flex justify-between text-sm mb-2'>
          <span>현재: {formatCurrency(data.currentValue)}</span>
          <span>목표: {formatCurrency(data.targetValue)}</span>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex space-x-2'>
            <div className='w-3 h-3 bg-green-500 rounded-full mt-1'></div>
            <span className='text-sm'>현재 달성률</span>
          </div>
          <div className='flex space-x-2'>
            <div className='w-3 h-3 bg-gray-300 rounded-full mt-1'></div>
            <span className='text-sm'>목표 기준</span>
          </div>
        </div>
        <div className='mt-3 text-center'>
          <p className='text-lg font-bold text-green-600'>
            은퇴 목표 충당률: {data.fundingRatio}%
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
