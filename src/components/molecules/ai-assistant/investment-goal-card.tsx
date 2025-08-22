interface InvestmentGoalCardProps {
  imageSrc?: string
  title: string
  description: string
  selected?: boolean
}

export function InvestmentGoalCard({
  imageSrc,
  title,
  description,
  selected = false,
}: InvestmentGoalCardProps): React.JSX.Element {
  return (
    <button
      className={`flex flex-col items-center justify-center gap-2 transition-all`}
    >
      <div
        className={`h-[200px] w-[200px] overflow-hidden rounded-lg ${
          selected ? 'ring-primary ring-2' : ''
        }`}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className='h-full w-full object-cover'
          />
        ) : (
          <div className='h-full w-full bg-[var(--surface-01)]' />
        )}
      </div>
      <div className='text-base font-medium'>{title}</div>
      <div className='text-muted-foreground text-sm'>{description}</div>
    </button>
  )
}
