import { RetirementGoalsSummaryCard } from '@/components/molecules/goals/retirement-goals-summary-card'
import { Tabs, TabsContent } from '@/components/ui/tabs'

export function RetirementGoalsSection(): React.JSX.Element {
  return (
    <div className='flex-1'>
      <Tabs
        orientation='vertical'
        defaultValue='overview'
        className='space-y-4'
      >
        <TabsContent value='overview' className='space-y-4'>
          <div className='grid grid-cols-1 gap-4'>
            <RetirementGoalsSummaryCard />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
