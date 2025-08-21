import { Box } from '@/components/ui/box'

interface PortfolioStatBoxProps {
  label: string
  value: string
  highlightedValue?: string
  valueColor?: string
}

export function PortfolioStatBox({
  label,
  value,
  highlightedValue,
  valueColor = 'text-[var(--primary)]',
}: PortfolioStatBoxProps): React.JSX.Element {
  return (
    <Box className='items-center'>
      <span className='text-muted-foreground mb-1 text-xs'>{label}</span>
      <span className='text-sm font-medium'>
        {highlightedValue ? (
          <>
            <span className={valueColor}>{highlightedValue}</span> {value}
          </>
        ) : (
          <span className={valueColor}>{value}</span>
        )}
      </span>
    </Box>
  )
}
