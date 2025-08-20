'use client'

import { Line, LineChart, XAxis } from 'recharts'

import { PortfolioPerformanceDataItem } from '@/types/dashboard'
import { portfolioPerformanceChartConfig } from '@/data/dashboard'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

interface PortfolioPerformanceLineChartProps {
  chartData: PortfolioPerformanceDataItem[]
}

export function PortfolioPerformanceLineChart({
  chartData,
}: PortfolioPerformanceLineChartProps) {
  return (
    <ChartContainer config={portfolioPerformanceChartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
          bottom: 0,
        }}
      >
        <XAxis
          dataKey='month'
          tickLine={false}
          axisLine={false}
          tickMargin={0}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey='value'
          type='linear'
          stroke='var(--color-performance)'
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  )
}
