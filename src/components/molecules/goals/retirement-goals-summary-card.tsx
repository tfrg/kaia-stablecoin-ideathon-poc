import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function RetirementGoalsSummaryCard(): React.JSX.Element {
  return (
    <Card className='gap-2'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='font-bold'>은퇴 자금 목표</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='mb-3 h-4 max-w-[500px] rounded-full bg-gray-200'>
          <div
            className='h-4 rounded-full bg-green-500'
            style={{ width: `${Math.min(102, 100)}%` }}
          ></div>
        </div>

        <div className='mb-4 max-w-[500px] text-right text-sm text-lime-400'>
          102%
        </div>

        <div className='mb-4 grid grid-cols-4 gap-4'>
          <div className='flex items-center gap-1'>
            <p className='text-sm text-zinc-400'>현재 자산:</p>
            <p className='font-medium'>$3,060,000</p>
          </div>
          <div>
            <p className='text-sm text-zinc-400'>목표 자산:</p>
            <p className='font-medium'>$3,000,000</p>
          </div>
          <div>
            <p className='text-sm text-zinc-400'>목표 기간:</p>
            <p className='font-medium'>15년 (2040년)</p>
          </div>
          <div>
            <p className='text-sm text-zinc-400'>월 납입액:</p>
            <p className='font-medium'>150 KAIA</p>
          </div>
        </div>

        <div className='mb-4 grid grid-cols-4 gap-4'>
          <div>
            <p className='text-sm text-zinc-400'>목표 달성 확률:</p>
            <p className='font-medium'>100%</p>
          </div>
          <div>
            <p className='text-sm text-zinc-400'>자산 충당률:</p>
            <p className='font-medium'>102%</p>
          </div>
          <div>
            <p className='text-sm text-zinc-400'>위험 성향:</p>
            <p className='font-medium'>중위험 (5.8/10)</p>
          </div>
        </div>

        <div className='flex justify-end gap-2'>
          <Button variant='outline' className='text-gray-700'>
            목표 수정
          </Button>
          <Button className='bg-yellow-400 text-black hover:bg-yellow-500'>
            목표 추가
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
