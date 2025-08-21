import { AssetData, AssetDetailAnalysisData } from '@/types/assets'

import { AssetListTable } from '@/components/molecules/assets/asset-list-table'
import { AssetDetailAnalysis } from '@/components/molecules/assets/asset-detail-analysis'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface AssetListCardProps {
  tableData: AssetData[]
  detailAnalysisData: AssetDetailAnalysisData[]
}

export function AssetListCard({
  tableData,
  detailAnalysisData,
}: AssetListCardProps) {
  return (
    <Card className='gap-2'>
      <CardHeader>
        <CardTitle>자산 분석</CardTitle>
      </CardHeader>
      <CardContent>
        <AssetListTable data={tableData} />
      </CardContent>

      <CardHeader>
        <CardTitle>자산 상세 분석</CardTitle>
      </CardHeader>
      <CardContent>
        <AssetDetailAnalysis data={detailAnalysisData} />
      </CardContent>
    </Card>
  )
}
