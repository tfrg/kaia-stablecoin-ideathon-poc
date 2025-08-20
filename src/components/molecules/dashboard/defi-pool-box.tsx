import { DeFiPoolData } from '@/types/dashboard'

interface DeFiPoolCardProps {
  poolData: DeFiPoolData
}

export function DeFiPoolBox({ poolData }: DeFiPoolCardProps) {
  return (
    <div className='flex flex-col p-4 rounded-md bg-gray-800/50'>
      <div className='flex items-center justify-between mb-2'>
        <h3 className='text-base font-medium'>{poolData.name}</h3>
        <div className='flex items-center'>
          <div
            className={`w-2 h-2 rounded-full mr-1 ${poolData.isActive ? 'bg-green-500' : 'bg-gray-400'}`}
          ></div>
          <span className='text-xs text-muted-foreground'>
            {poolData.isActive ? '활성화' : '비활성화'}
          </span>
        </div>
      </div>

      <div className='text-2xl font-bold mb-2'>{poolData.apy}</div>

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
