import { Box } from '@/components/ui/box'

interface InsightItemProps {
  category: string
  content: string
  isHighlighted?: boolean
}

export function AiInsightItem({
  category,
  content,
  isHighlighted = false,
}: InsightItemProps): React.JSX.Element {
  return (
    <Box>
      <h4 className='text-sm font-medium text-gray-300'>{category}:</h4>
      <p className='text-sm text-gray-400'>{content}</p>
    </Box>
  )
}
