import { AssetDetailAnalysisData } from '@/types/assets'

import { Card, CardContent } from '@/components/ui/card'

interface AssetDetailAnalysisProps {
  data: AssetDetailAnalysisData[]
}

export function AssetDetailAnalysis({ data }: AssetDetailAnalysisProps) {
  return (
    <div className={'grid grid-cols-1 gap-4 lg:grid-cols-3'}>
      {data.map((item) => (
        <Card key={item.id} className='border-none bg-gray-800'>
          <CardContent className='pt-4'>
            <div className='mb-2 flex items-center gap-2'>
              {item.icon}
              <span className='font-bold'>
                {item.name} {item.symbol && `(${item.symbol})`}
              </span>
            </div>
            <div className='space-y-1 text-sm'>
              <p>{item.trend}</p>
              <p>{item.additionalInfo}</p>
              {item.insight && <p className='text-green-500'>{item.insight}</p>}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
