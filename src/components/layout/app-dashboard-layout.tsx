import { Outlet } from 'react-router-dom'

import { AppSidebar } from '@/components/layout/app-sidebar'
import { Header } from '@/components/layout/header'

export default function AppDashboardLayout() {
  return (
    <div className='w-screen'>
      <div className='flex'>
        <AppSidebar />

        <div className='w-full'>
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  )
}
