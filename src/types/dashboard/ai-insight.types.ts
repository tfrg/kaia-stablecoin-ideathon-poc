export interface InsightModel {
  id: number
  category: string
  content: string
}

export interface AiInsightCardProps {
  insights?: InsightModel[]
  highlightedInsightId?: number
}
