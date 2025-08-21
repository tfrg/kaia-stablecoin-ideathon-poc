import { GoalOptimizationCard } from '@/components/molecules/goals/goal-optimization-card'
import { GoalSimulationCard } from '@/components/molecules/goals/goal-simulation-card'
import { OtherFinancialGoalsCard } from '@/components/molecules/goals/other-financial-goals-card'

import { Tabs, TabsContent } from '@/components/ui/tabs'

export function GoalSimulationSection(): React.JSX.Element {
  return (
    <div className='flex-1'>
      <Tabs
        orientation='vertical'
        defaultValue='overview'
        className='space-y-4'
      >
        <TabsContent value='overview' className='space-y-4'>
          <div className='grid grid-cols-1 gap-4 xl:grid-cols-12'>
            <div className='col-span-1 xl:col-span-7'>
              <GoalSimulationCard />
            </div>
            <div className='col-span-1 grid grid-cols-1 gap-4 xl:col-span-5'>
              <GoalOptimizationCard />
              <OtherFinancialGoalsCard />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
