import {
  assetTotalInfoData,
  retirementProgressInfoData,
  portfolioRiskInfo,
  monthlyContributionInfo,
} from '@/data/dashboard'

import { AssetTotalInfoCard } from '@/components/molecules/dashboard/asset-total-info-card'
import { AssetRetirementProgressCard } from '@/components/molecules/dashboard/asset-retirement-progress-card'
import { AssetPortfolioRiskCard } from '@/components/molecules/dashboard/asset-portfolio-risk-card'
import { AssetMonthlyContributionCard } from '@/components/molecules/dashboard/asset-monthly-contribution-card'

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
            <AssetTotalInfoCard data={assetTotalInfoData} />
            <AssetRetirementProgressCard data={retirementProgressInfoData} />
            <AssetPortfolioRiskCard data={portfolioRiskInfo} />
            <AssetMonthlyContributionCard data={monthlyContributionInfo} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
