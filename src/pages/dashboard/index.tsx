import { DashboardGridLayout } from '@/components/layout/dashboard-grid-layout'
import { AssetSummarySection } from '@/components/organism/dashboard/asset-summary-section'
import { PerformanceSummarySection } from '@/components/organism/dashboard/performance-summary-section'
import { PortfolioSummarySection } from '@/components/organism/dashboard/portfolio-summary-section'

export default function Dashboard() {
  return (
    <DashboardGridLayout>
      <AssetSummarySection />
      <PortfolioSummarySection />
      <PerformanceSummarySection />
    </DashboardGridLayout>
  )
}
