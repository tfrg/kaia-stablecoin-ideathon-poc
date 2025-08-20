import { assetSummaryData } from '@/data/dashboard'

import { AssetSummaryCard } from '@/components/molecules/dashboard/asset-summary-card'

import { Tabs, TabsContent } from '@/components/ui/tabs'

export function AssetSummarySection(): React.JSX.Element {
  return (
    <div className='flex-1'>
      <Tabs
        orientation='vertical'
        defaultValue='overview'
        className='space-y-4'
      >
        <TabsContent value='overview' className='space-y-4'>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {assetSummaryData.map((item) => {
              return (
                <AssetSummaryCard
                  key={item.id}
                  title={item.title}
                  value={item.value}
                  change={item.change}
                />
              )
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
