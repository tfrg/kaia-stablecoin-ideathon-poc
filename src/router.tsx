import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import Loader from '@/components/loader'

const Dashboard = lazy(() => import('@/pages/dashboard'))
const Goals = lazy(() => import('@/pages/goals'))

export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/goals' element={<Goals />} />
      </Routes>
    </Suspense>
  )
}
