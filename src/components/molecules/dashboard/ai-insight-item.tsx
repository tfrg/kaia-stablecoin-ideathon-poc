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
    <div
      className={`p-3 rounded-md ${
        isHighlighted ? 'bg-red-900/30 border border-red-500' : 'bg-gray-800/50'
      }`}
    >
      <h4 className='text-sm font-medium text-gray-300'>{category}:</h4>
      <p className='text-sm text-gray-400'>{content}</p>
    </div>
  )
}
