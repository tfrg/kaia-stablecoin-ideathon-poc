import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface AssetTotalSummaryCardProps {
  title: string
  value: string
  subValue: string
}

export function AssetTotalSummaryCard({
  title,
  value,
  subValue,
}: AssetTotalSummaryCardProps) {
  return (
    <Card className='gap-0'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col'>
          <span className='text-2xl font-bold'>{value}</span>
          <div className='flex items-center text-sm text-[var(--primary)]'>
            <span>{subValue}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
