import { AppSidebar } from '@/components/layout/app-sidebar'

import { GoalSimulationSection } from '@/components/organism/goals/goal-simulation-section'
import { RetirementGoalsSection } from '@/components/organism/goals/retirement-goals-section'

export default function Goals() {
  return (
    <div className='w-screen border-t'>
      <div className='flex'>
        <AppSidebar />

        <div className='grid w-full grid-cols-1 gap-4'>
          <RetirementGoalsSection />
          <GoalSimulationSection />
        </div>
      </div>
    </div>
  )
}
