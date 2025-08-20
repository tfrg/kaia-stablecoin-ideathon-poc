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
  valueColor = 'text-green-500',
}: PortfolioStatBoxProps): React.JSX.Element {
  return (
    <div className='bg-muted rounded-md p-3 flex flex-col items-center'>
      <span className='text-xs text-muted-foreground mb-1'>{label}</span>
      <span className='text-sm font-medium'>
        {highlightedValue ? (
          <>
            <span className={valueColor}>{highlightedValue}</span> {value}
          </>
        ) : (
          <span className={valueColor}>{value}</span>
        )}
      </span>
    </div>
  )
}
