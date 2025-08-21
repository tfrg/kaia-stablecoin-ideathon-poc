import { InsightModel } from '@/types/dashboard'

import { AiInsightItem } from '@/components/molecules/dashboard/ai-insight-item'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface AiInsightCardProps {
  data: InsightModel[]
  highlightedInsightId?: number
}

export function AiInsightCard({
  data,
  highlightedInsightId,
}: AiInsightCardProps): React.JSX.Element {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>AI 인사이트</CardTitle>
      </CardHeader>
      <CardContent className='flex-1 space-y-3'>
        {data.map((item) => (
          <AiInsightItem
            key={item.id}
            category={item.category}
            content={item.content}
            isHighlighted={item.id === highlightedInsightId}
          />
        ))}
      </CardContent>
    </Card>
  )
}
