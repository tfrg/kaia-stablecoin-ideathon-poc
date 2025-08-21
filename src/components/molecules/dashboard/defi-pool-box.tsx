import { DeFiPoolData } from '@/types/dashboard'

interface DeFiPoolCardProps {
  poolData: DeFiPoolData
}

export function DeFiPoolBox({ poolData }: DeFiPoolCardProps) {
  return (
    <div className='flex flex-col rounded-md bg-gray-800/50 p-4'>
      <div className='mb-2 flex items-center justify-between'>
        <h3 className='text-base font-medium'>{poolData.name}</h3>
        <div className='flex items-center'>
          <div
            className={`mr-1 h-2 w-2 rounded-full ${poolData.isActive ? 'bg-[var(--primary)]' : 'bg-gray-400'}`}
          ></div>
          <span className='text-muted-foreground text-xs'>
            {poolData.isActive ? '활성화' : '비활성화'}
          </span>
        </div>
      </div>

      <div className='mb-2 text-2xl font-bold'>{poolData.apy}</div>

      <div className='space-y-1 text-sm'>
        <div className='text-muted-foreground'>
          APY (기대: {poolData.expectedApy})
        </div>
        <div className='text-muted-foreground'>{poolData.pairInfo}</div>
        <div className='text-muted-foreground'>TVL: {poolData.tvl}</div>
        <div className='text-muted-foreground'>거래량: {poolData.volume}</div>
      </div>
    </div>
  )
}
