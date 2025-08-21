import { DeFiPoolData } from '@/types/dashboard'

import { DeFiPoolBox } from '@/components/molecules/dashboard/defi-pool-box'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface DeFiYieldCardProps {
  data: DeFiPoolData[]
}

export function DeFiYieldCard({ data }: DeFiYieldCardProps): React.JSX.Element {
  return (
    <Card className='h-full gap-0'>
      <CardHeader>
        <CardTitle>DeFi 수익</CardTitle>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <div className='grid grid-cols-1 gap-4 xl:grid-cols-3'>
          {data.map((pool, index) => (
            <DeFiPoolBox key={index} poolData={pool} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
