import { assetTotalSummaryData } from '@/data/assets'

import { AssetTotalSummaryCard } from '@/components/molecules/assets/asset-total-summary-card'

import { Tabs, TabsContent } from '@/components/ui/tabs'

export function AssetTotalSummarySection(): React.JSX.Element {
  const { totalAsset, totalReturn, averageAPY } = assetTotalSummaryData

  const cardData = [
    {
      title: '총 자산 가치',
      value: totalAsset.value,
      subValue: `${totalAsset.change} (${totalAsset.period})`,
    },
    {
      title: '총 수익률',
      value: totalReturn.value,
      subValue: `${totalReturn.change} (${totalReturn.period})`,
    },
    {
      title: '평균 APY',
      value: averageAPY.value,
      subValue: averageAPY.comparison,
    },
  ]

  return (
    <div className='flex-1'>
      <Tabs
        orientation='vertical'
        defaultValue='overview'
        className='space-y-4'
      >
        <TabsContent value='overview' className='space-y-4'>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {cardData.map((card, index) => (
              <AssetTotalSummaryCard
                key={index}
                title={card.title}
                value={card.value}
                subValue={card.subValue}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
