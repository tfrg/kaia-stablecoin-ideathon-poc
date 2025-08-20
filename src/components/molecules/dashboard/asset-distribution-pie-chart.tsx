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
          <li key={`item-${index}`} className='flex items-center mb-2'>
            <div
              className='w-3 h-3 mr-2'
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
        <Pie data={chartData} dataKey='allocation' nameKey='asset' />
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
