import { AppSidebar } from '@/components/layout/app-sidebar'
import { AssetSummaryContainer } from '@/components/organism/dashboard/asset-summary-container'

export default function Dashboard() {
  return (
    <div className='border-t'>
      <div className='flex'>
        <AppSidebar />
        <AssetSummaryContainer />
      </div>
    </div>
  )
}
