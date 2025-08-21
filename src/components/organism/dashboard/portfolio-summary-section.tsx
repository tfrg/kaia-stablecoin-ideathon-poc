import { assetDistributionChartData } from '@/data/dashboard'
import { aiInsightData } from '@/data/dashboard'
import { automationSettingsData } from '@/data/dashboard'

import { AiInsightCard } from '@/components/molecules/dashboard/ai-insight-card'
import { AssetDistributionCard } from '@/components/molecules/dashboard/asset-distribution-card'
import { AutomationSettingsCard } from '@/components/molecules/dashboard/automation-settings-card'

import { Tabs, TabsContent } from '@/components/ui/tabs'

export function PortfolioSummarySection(): React.JSX.Element {
  return (
    <div className='flex-1'>
      <Tabs
        orientation='vertical'
        defaultValue='overview'
        className='space-y-4'
      >
        <TabsContent value='overview' className='space-y-4'>
          <div className='grid grid-cols-1 gap-4 xl:grid-cols-12'>
            <div className='col-span-1 xl:col-span-4'>
              <AssetDistributionCard chartData={assetDistributionChartData} />
            </div>
            <div className='col-span-1 xl:col-span-4'>
              <AiInsightCard data={aiInsightData} />
            </div>
            <div className='col-span-1 xl:col-span-4'>
              <AutomationSettingsCard data={automationSettingsData} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
