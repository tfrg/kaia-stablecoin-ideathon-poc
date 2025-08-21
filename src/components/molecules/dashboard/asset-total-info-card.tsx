import { CurrencyFormat } from '@/types/common'
import { AssetTotalInfo } from '@/types/dashboard'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface AssetTotalInfoCardProps {
  data: AssetTotalInfo
  currencyFormat?: CurrencyFormat
}

export function AssetTotalInfoCard({
  data,
  currencyFormat = '$',
}: AssetTotalInfoCardProps) {
  const formatCurrency = (value: number): string => {
    return `${currencyFormat}${value.toLocaleString()}`
  }

  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>총 자산 가치</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>
          {formatCurrency(data.totalValue)}
        </div>
        <p
          className={
            data.changePercentage >= 0
              ? 'text-[var(--primary)]'
              : 'text-red-500'
          }
        >
          {data.changePercentage >= 0 ? '+' : ''}
          {data.changePercentage}% ({data.changeTimeframe})
        </p>
      </CardContent>
    </Card>
  )
}
