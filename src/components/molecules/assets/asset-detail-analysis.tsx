import { AssetDetailAnalysisData } from '@/types/assets'

import { Card, CardContent } from '@/components/ui/card'
import { Box } from '@/components/ui/box'

interface AssetDetailAnalysisProps {
  data: AssetDetailAnalysisData[]
}

export function AssetDetailAnalysis({ data }: AssetDetailAnalysisProps) {
  return (
    <div className={'grid grid-cols-1 gap-4 lg:grid-cols-3'}>
      {data.map((item) => (
        <Card key={item.id} className='border-none bg-[var(--box-primary-bg)]'>
          <CardContent className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              {item.icon}
              <span className='font-bold'>
                {item.name} {item.symbol && `(${item.symbol})`}
              </span>
            </div>
            <div className='text-sm'>
              <p>{item.trend}</p>
              <p>{item.additionalInfo}</p>
              {item.insight && (
                <p className='text-[var(--primary)]'>{item.insight}</p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
