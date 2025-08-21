import { GoalSimulationAreaChart } from '@/components/molecules/goals/chart'
import { GoalAlignmentSimulator } from '@/components/molecules/goals/goal-alignment-simulator'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function GoalSimulationCard(): React.JSX.Element {
  return (
    <Card className='gap-2'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='font-bold'>목표 달성 시뮬레이션</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-2'>
        <div className='rounded-md bg-gray-800/50 p-4'>
          <GoalSimulationAreaChart />
        </div>
        <div className='rounded-md bg-gray-800/50 p-4'>
          <GoalAlignmentSimulator />
        </div>
      </CardContent>
    </Card>
  )
}
