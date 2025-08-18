import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

export default function Dashboard() {
  return (
    <>
      <SidebarProvider>
        <Sidebar />
        <SidebarTrigger></SidebarTrigger>
        <span>Dashboard</span>
      </SidebarProvider>
    </>
  )
}
