import {
  PortfolioPerformanceDataItem,
  PortfolioPerformanceStat,
} from '@/types/dashboard'

import { PortfolioPerformanceLineChart } from '@/components/molecules/dashboard/chart'
import { PortfolioPerformanceStats } from '@/components/molecules/dashboard/portfolio-performance-stats'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface PortfolioPerformanceCardProps {
  chartData: PortfolioPerformanceDataItem[]
  statData: PortfolioPerformanceStat
}

export function PortfolioPerformanceCard({
  chartData,
  statData,
}: PortfolioPerformanceCardProps): React.JSX.Element {
  return (
    <Card className='gap-0'>
      <CardHeader>
        <CardTitle>포트폴리오 성과</CardTitle>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <PortfolioPerformanceLineChart chartData={chartData} />
        <PortfolioPerformanceStats data={statData} />
      </CardContent>
    </Card>
  )
}
