import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Box } from '@/components/ui/box'

export function OtherFinancialGoalsCard(): React.JSX.Element {
  return (
    <Card className='gap-2'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='font-bold'>다른 재정 목표</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-2'>
        <Box className='items-start gap-4 p-4' direction={'row'}>
          <div className='bg-olive-700 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white'>
            1
          </div>
          <div className='flex-1'>
            <h3 className='mb-2 text-xl font-semibold'>자녀 대학 교육 자금</h3>
            <p className='text-gray-300'>
              자산 충당률 65% / 목표 달성 확률 58%
            </p>
          </div>
        </Box>

        <Box className='items-start gap-4 p-4' direction={'row'}>
          <div className='bg-olive-700 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white'>
            2
          </div>
          <div className='flex-1'>
            <h3 className='mb-2 text-xl font-semibold'>주택 구매 자금</h3>
            <p className='text-gray-300'>
              자산 충당률 42% / 목표 달성 확률 35%
            </p>
          </div>
        </Box>
      </CardContent>
    </Card>
  )
}
