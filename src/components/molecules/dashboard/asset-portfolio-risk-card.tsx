import { PortfolioRiskInfo } from '@/types/dashboard'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface AssetPortfolioRiskCardProps {
  data: PortfolioRiskInfo
}

export function AssetPortfolioRiskCard({ data }: AssetPortfolioRiskCardProps) {
  const calculateRiskLevel = (score: number, max: number): string => {
    const percentage = (score / max) * 100

    if (percentage < 30) return '저위험'
    if (percentage < 70) return '중위험'
    return '고위험'
  }

  const riskLevel = calculateRiskLevel(data.riskScore, data.maxScore)

  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>포트폴리오 리스크</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>
          {riskLevel} ({data.riskScore}/{data.maxScore})
        </div>
        <p className='text-gray-400'>{data.status}</p>
      </CardContent>
    </Card>
  )
}
