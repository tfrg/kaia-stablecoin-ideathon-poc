import { AssetChartDataItem } from '@/types/dashboard'

import { AssetDistributionPieChart } from '@/components/molecules/dashboard/chart'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface AssetDistributionCardProps {
  chartData: AssetChartDataItem[]
}

export function AssetDistributionCard({
  chartData,
}: AssetDistributionCardProps): React.JSX.Element {
  return (
    <Card className='gap-0'>
      <CardHeader>
        <CardTitle>자산 분포</CardTitle>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <AssetDistributionPieChart chartData={chartData} />
      </CardContent>
    </Card>
  )
}
