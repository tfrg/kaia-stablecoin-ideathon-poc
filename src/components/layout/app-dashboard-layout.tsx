import { Outlet } from 'react-router-dom'

import { AppSidebar } from './app-sidebar'

export default function AppDashboardLayout() {
  return (
    <div className='w-screen border-t'>
      <div className='flex'>
        <AppSidebar />

        <div className='w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
