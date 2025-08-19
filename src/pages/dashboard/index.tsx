import { AppSidebar } from '@/components/ui/layout/app-sidebar'
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

export default function Dashboard() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger></SidebarTrigger>
        <span>Dashboard</span>
      </SidebarProvider>
    </>
  )
}
