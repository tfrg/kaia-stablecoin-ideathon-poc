import { NavItem } from '@/components/layout/types'

interface NavGroupData {
  title: string
  items: NavItem[]
}

export interface SidebarData {
  navGroups: NavGroupData[]
}

/**
 * Sidebar data configuration objects
 *.
 * Defines the sidebar navigation structure for the application.
 * Each item can contain a title, URL, icon (optional), and badge (optional).
 *
 * @example
 * {
 *    title: ‘Dashboard’,
 *    url: ‘/’,
 *    icon: IconLayoutDashboard,
 *    badge: '3',
 * }
 */
export const sidebarData: SidebarData = {
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: '목표 설정',
          url: '/',
        },
        {
          title: '대시보드',
          url: '/dashboard',
        },
        {
          title: '목표 관리',
          url: '/goals',
        },
        {
          title: '자산 분석',
          url: '/assets',
        },
        {
          title: '자동화 설정',
          url: '/setting',
        },
        {
          title: '알림 센터',
          url: '/notification',
        },
      ],
    },
  ],
}
