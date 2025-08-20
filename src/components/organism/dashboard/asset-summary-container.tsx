import { Tabs, TabsContent } from '@/components/ui/tabs'
import { AssetSummaryCard } from '@/components/molecules/dashboard/asset-summary-card'

export function AssetSummaryContainer(): React.JSX.Element {
  return (
    <div className='flex-1'>
      <Tabs
        orientation='vertical'
        defaultValue='overview'
        className='space-y-4'
      >
        <TabsContent value='overview' className='space-y-4'>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            <AssetSummaryCard
              title='총 자산 가치'
              value='$45,231.89'
              change='+20.1% from last month'
            />

            <AssetSummaryCard
              title='현가 기준 총 납입금 vs 필요금'
              value='$45,231.89'
              change='+20.1% from last month'
            />

            <AssetSummaryCard
              title='포트폴리오 리스크'
              value='$45,231.89'
              change='+20.1% from last month'
            />

            <AssetSummaryCard
              title='월별 납입액'
              value='$45,231.89'
              change='+20.1% from last month'
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
