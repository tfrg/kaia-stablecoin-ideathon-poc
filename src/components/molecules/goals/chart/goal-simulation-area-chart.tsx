'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { month: 'January', desktop: 186, mobile: 80, other: 45 },
  { month: 'February', desktop: 305, mobile: 200, other: 100 },
  { month: 'March', desktop: 237, mobile: 120, other: 150 },
  { month: 'April', desktop: 73, mobile: 190, other: 50 },
  { month: 'May', desktop: 209, mobile: 130, other: 100 },
  { month: 'June', desktop: 214, mobile: 140, other: 160 },
]

const chartConfig = {
  desktop: {
    label: '예상 성장 경로',
    color: 'var(--chart-1)',
  },
  mobile: {
    label: '낙관적 시나리오(상위5%)',
    color: 'var(--chart-2)',
  },
  other: {
    label: '비관적 시나리오(하위5%)',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig

export function GoalSimulationAreaChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className='mx-auto aspect-square max-h-[240px] w-full'
    >
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
          top: 12,
        }}
        stackOffset='expand'
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey='month'
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator='line' />}
        />
        <Area
          dataKey='other'
          type='natural'
          fill='var(--color-other)'
          fillOpacity={0.1}
          stroke='var(--color-other)'
          stackId='a'
        />
        <Area
          dataKey='mobile'
          type='natural'
          fill='var(--color-mobile)'
          fillOpacity={0.4}
          stroke='var(--color-mobile)'
          stackId='a'
        />
        <Area
          dataKey='desktop'
          type='natural'
          fill='var(--color-desktop)'
          fillOpacity={0.4}
          stroke='var(--color-desktop)'
          stackId='a'
        />
      </AreaChart>
    </ChartContainer>
  )
}
