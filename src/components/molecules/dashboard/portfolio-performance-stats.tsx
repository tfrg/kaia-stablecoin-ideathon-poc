import { PortfolioPerformanceStat } from '@/types/dashboard'

import { PortfolioStatBox } from '@/components/molecules/dashboard/portfolio-performance-stat-box'

interface PortfolioPerformanceStatsProps {
  data: PortfolioPerformanceStat
}

export function PortfolioPerformanceStats({
  data,
}: PortfolioPerformanceStatsProps) {
  return (
    <div className='grid grid-cols-3 gap-2 mt-2'>
      <PortfolioStatBox label={'총 수익률'} value={data.totalReturn} />
      <PortfolioStatBox label={'연간 수익률'} value={data.annualReturn} />
      <PortfolioStatBox
        label={'목표 대비 차이'}
        value={data.targetDifference}
      />
    </div>
  )
}
