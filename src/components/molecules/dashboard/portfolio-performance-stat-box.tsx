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
    <div className='bg-muted flex flex-col items-center rounded-md p-3'>
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
    </div>
  )
}
