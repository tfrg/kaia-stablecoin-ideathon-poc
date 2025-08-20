import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MonthlyContributionInfo } from '@/types/dashboard'

interface AssetMonthlyContributionCardProps {
  data: MonthlyContributionInfo
  currency?: string
}

export function AssetMonthlyContributionCard({
  data,
  currency = 'KAIA',
}: AssetMonthlyContributionCardProps) {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>월별 납입액</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>
          {data.amount} {currency}
        </div>
        <p className='text-gray-400'>다음 납입일: {data.nextPaymentDate}</p>
      </CardContent>
    </Card>
  )
}
