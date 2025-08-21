import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'

export function GoalAlignmentSimulator() {
  const monthlyPayment = 5
  const period = 15

  return (
    <div>
      <h2 className='mb-6 text-xl font-bold text-white'>
        목표 조정 시뮬레이터
      </h2>

      <div className='max-w-[350px]'>
        <div className='space-y-6'>
          <div className='space-y-1'>
            <div className='flex items-center justify-between'>
              <label className='text-gray-300'>월 납입액 조정:</label>
              <span className='text-white'>{monthlyPayment} KAIA</span>
            </div>
            <Slider
              value={[monthlyPayment]}
              min={50}
              max={300}
              step={10}
              // onValueChange={(value) => setMonthlyPayment(value[0])}
              className='py-4'
              // thumbClassName='bg-lime-400 border-2 border-lime-400 w-6 h-6'
              // trackClassName='bg-lime-400 h-1'
            />
          </div>

          <div className='space-y-1'>
            <div className='flex items-center justify-between'>
              <label className='text-gray-300'>목표 기간 조정:</label>
              <span className='text-white'>{period}년</span>
            </div>
            <Slider
              value={[period]}
              min={5}
              max={30}
              step={1}
              // onValueChange={(value) => setPeriod(value[0])}
              className='py-4'
              // thumbClassName='bg-lime-400 border-2 border-lime-400 w-6 h-6'
              // trackClassName='bg-lime-400 h-1'
            />
          </div>
        </div>
      </div>

      <div className='flex justify-end'>
        <Button
          // onClick={handleSimulate}
          className='rounded-full bg-lime-400 px-6 font-medium text-black hover:bg-lime-500'
        >
          시뮬레이션 실행
        </Button>
      </div>
    </div>
  )
}
