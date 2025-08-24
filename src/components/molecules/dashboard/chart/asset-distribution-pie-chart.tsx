'use client'

import { Pie, PieChart, Legend, DefaultLegendContentProps } from 'recharts'

import { AssetChartDataItem } from '@/types/dashboard'
import { assetDistributionChartConfig } from '@/data/dashboard'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

interface AssetDistributionPieChartProps {
  chartData: AssetChartDataItem[]
}

export function AssetDistributionPieChart({
  chartData,
}: AssetDistributionPieChartProps) {
  const renderCustomLegend = (props: DefaultLegendContentProps) => {
    const { payload } = props

    if (!payload) return <></>

    return (
      <ul className='list-none pl-0'>
        {payload.map((entry, index) => (
          <li key={`item-${index}`} className='mb-2 flex items-center'>
            <div
              className='mr-2 h-3 w-3'
              style={{ backgroundColor: entry.color }}
            />
            <span className='text-sm'>
              {entry.value} ({chartData[index].allocation}%)
            </span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ChartContainer
      config={assetDistributionChartConfig}
      className='mx-auto aspect-square max-h-[210px] w-full'
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey='allocation'
          nameKey='asset'
          startAngle={90}
          endAngle={-270}
        />
        <Legend
          layout='vertical'
          verticalAlign='middle'
          align='right'
          content={renderCustomLegend}
        />
      </PieChart>
    </ChartContainer>
  )
}
