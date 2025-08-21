import { Link, useLocation } from 'react-router-dom'

import { sidebarData } from '@/data/common'

import { NavGroup } from '@/components/layout/nav-group'

import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <Sidebar className='w-64'>
      <SidebarHeader className='p-5'>
        <Link className='w-[120px]' to={'/'}>
          <img
            className='justify-start'
            src='/kaia-port-logo.svg'
            alt='KaiaPort Logo'
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} currentPath={currentPath} />
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
