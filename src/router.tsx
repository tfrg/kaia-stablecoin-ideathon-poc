import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import AppDashboardLayout from '@/components/layout/app-dashboard-layout'
import Loader from '@/components/loader'

const Dashboard = lazy(() => import('@/pages/dashboard'))
const Goals = lazy(() => import('@/pages/goals'))
const Assets = lazy(() => import('@/pages/assets'))
const Setting = lazy(() => import('@/pages/setting'))
const Notification = lazy(() => import('@/pages/notification'))
const AiAssistant = lazy(() => import('@/pages/ai-assistant'))

export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<AppDashboardLayout />}>
          <Route path='/' element={<AiAssistant />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/goals' element={<Goals />} />
          <Route path='/assets' element={<Assets />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/notification' element={<Notification />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
