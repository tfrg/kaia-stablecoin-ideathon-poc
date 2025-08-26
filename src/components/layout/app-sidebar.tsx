import { useLocation } from 'react-router-dom'

import { sidebarData } from '@/data/common'

import { NavGroup } from '@/components/layout/nav-group'

import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar'
import KaiaPortLogo from '@/components/ui/kaia-port-logo'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <Sidebar className='w-64' {...props}>
      <SidebarHeader className='p-5'>
        <KaiaPortLogo />
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} currentPath={currentPath} />
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
