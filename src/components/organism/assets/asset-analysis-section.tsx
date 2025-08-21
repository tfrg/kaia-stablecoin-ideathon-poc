import { assetListData, detailAnalysisData } from '@/data/assets'

import { Tabs, TabsContent } from '@/components/ui/tabs'
import { AssetListCard } from '@/components/molecules/assets/asset-list-card'

export function AssetAnalysisSection(): React.JSX.Element {
  return (
    <div className='flex-1'>
      <Tabs
        orientation='vertical'
        defaultValue='overview'
        className='space-y-4'
      >
        <TabsContent value='overview' className='space-y-4'>
          <div className='grid grid-cols-1 gap-4'>
            <AssetListCard
              tableData={assetListData}
              detailAnalysisData={detailAnalysisData}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
