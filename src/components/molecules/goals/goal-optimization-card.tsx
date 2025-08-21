import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function GoalOptimizationCard(): React.JSX.Element {
  return (
    <Card className='gap-2'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='font-bold'>AI 목표 최적화 추천</CardTitle>
        <Button className='bg-olive-700 hover:bg-olive-600 rounded-full px-6 py-2 text-white'>
          추천 적용
        </Button>
      </CardHeader>
      <CardContent className='grid gap-2'>
        <div className='flex items-start gap-4 rounded-md bg-gray-800 p-4'>
          <div className='bg-olive-100 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white'>
            1
          </div>
          <div className='flex-1'>
            <h3 className='mb-2 text-xl font-semibold'>
              월 납입액 170 KAIA로 증가
            </h3>
            <p className='text-gray-300'>
              자산 충당률 115% / 목표 달성 확률 97%
            </p>
          </div>
        </div>

        <div className='flex items-start gap-4 rounded-md bg-gray-800 p-4'>
          <div className='bg-olive-700 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white'>
            2
          </div>
          <div className='flex-1'>
            <h3 className='mb-2 text-xl font-semibold'>
              목표 기간 17년으로 연장
            </h3>
            <p className='text-gray-300'>
              자산 충당률 112% / 목표 달성 확률 95%
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
