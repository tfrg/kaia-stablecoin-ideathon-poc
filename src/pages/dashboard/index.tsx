import { AppSidebar } from '@/components/layout/app-sidebar'

import { AssetSummarySection } from '@/components/organism/dashboard/asset-summary-section'
import { PerformanceSummarySection } from '@/components/organism/dashboard/performance-summary-section'
import { PortfolioSummarySection } from '@/components/organism/dashboard/portfolio-summary-section'

export default function Dashboard() {
  return (
    <div className='border-t'>
      <div className='flex'>
        <AppSidebar />

        <div>
          <AssetSummarySection />
          <PortfolioSummarySection />
          <PerformanceSummarySection />
        </div>
      </div>
    </div>
  )
}
