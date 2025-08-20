import { ChartConfig } from '@/components/ui/chart'

import { PortfolioPerformanceDataItem } from '@/types/dashboard'

export const portfolioPerformanceData: PortfolioPerformanceDataItem[] = [
  { month: '1월', value: 186 },
  { month: '2월', value: 105 },
  { month: '3월', value: 237 },
  { month: '4월', value: 223 },
  { month: '5월', value: 209 },
  { month: '6월', value: 323 },
  { month: '7월', value: 214 },
  { month: '8월', value: 214 },
  { month: '9월', value: 214 },
  { month: '10월', value: 314 },
  { month: '11월', value: 114 },
  { month: '12월', value: 324 },
]

export const portfolioPerformanceChartConfig: ChartConfig = {
  performance: {
    label: '포트폴리오 성과',
    color: 'var(--chart-3)',
  },
}
