import { useLocation } from 'react-router-dom'

import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar'
import { sidebarData } from '../../data/common/sidebar-data'
import { NavGroup } from './nav-group'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <Sidebar className='w-64'>
      <SidebarHeader>KaiaPort</SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} currentPath={currentPath} />
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
