import { GoalSimulationSection } from '@/components/organism/goals/goal-simulation-section'
import { RetirementGoalsSection } from '@/components/organism/goals/retirement-goals-section'

export default function Goals() {
  return (
    <>
      <RetirementGoalsSection />
      <GoalSimulationSection />
    </>
  )
}
