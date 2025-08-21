import { DashboardGridLayout } from '@/components/layout/dashboard-grid-layout'
import { AssetAnalysisSection } from '@/components/organism/assets/asset-analysis-section'
import { AssetTotalSummarySection } from '@/components/organism/assets/asset-total-summary-section'

export default function Assets() {
  return (
    <DashboardGridLayout>
      <AssetTotalSummarySection />
      <AssetAnalysisSection />
    </DashboardGridLayout>
  )
}
