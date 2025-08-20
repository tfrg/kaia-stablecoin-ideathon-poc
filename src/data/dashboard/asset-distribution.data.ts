import { ChartConfig } from '@/components/ui/chart'

import { AssetChartDataItem } from '@/types/dashboard'

export const assetDistributionChartData: AssetChartDataItem[] = [
  { asset: 'BTC', allocation: 30, fill: 'var(--chart-1)' },
  { asset: 'ETH', allocation: 25, fill: 'var(--chart-2)' },
  { asset: 'KAIA', allocation: 20, fill: 'var(--chart-3)' },
  { asset: 'USDT', allocation: 15, fill: 'var(--chart-4)' },
  { asset: 'KAIAW', allocation: 10, fill: 'var(--chart-5)' },
]

export const assetDistributionChartConfig: ChartConfig = {
  BTC: {
    label: 'BTC',
    color: 'var(--chart-1)',
  },
  ETH: {
    label: 'ETH',
    color: 'var(--chart-2)',
  },
  KAIA: {
    label: 'KAIA',
    color: 'var(--chart-3)',
  },
  USDT: {
    label: 'USDT',
    color: 'var(--chart-4)',
  },
  KAIAW: {
    label: 'KAIAW',
    color: 'var(--chart-5)',
  },
} satisfies ChartConfig
