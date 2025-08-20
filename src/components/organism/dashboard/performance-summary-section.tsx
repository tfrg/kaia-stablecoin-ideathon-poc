import {
  portfolioPerformanceData,
  portfolioPerformanceStatData,
  defiYieldData,
} from '@/data/dashboard'

import { PortfolioPerformanceCard } from '@/components/molecules/dashboard/portfolio-performance-card'
import { DeFiYieldCard } from '@/components/molecules/dashboard/defi-yield-card'

import { Tabs, TabsContent } from '@/components/ui/tabs'

export function PerformanceSummarySection(): React.JSX.Element {
  return (
    <div className='flex-1'>
      <Tabs
        orientation='vertical'
        defaultValue='overview'
        className='space-y-4'
      >
        <TabsContent value='overview' className='space-y-4'>
          <div className='grid gap-4 grid-cols1 lg:grid-cols-12'>
            <div className='col-span-1 lg:col-span-6'>
              <PortfolioPerformanceCard
                chartData={portfolioPerformanceData}
                statData={portfolioPerformanceStatData}
              />
            </div>
            <div className='col-span-1 lg:col-span-6'>
              <DeFiYieldCard data={defiYieldData} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
