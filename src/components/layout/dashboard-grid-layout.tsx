interface DashboardGridLayoutProps {
  children: React.ReactNode
}

export function DashboardGridLayout({ children }: DashboardGridLayoutProps) {
  return <section className='grid gap-4 p-4'>{children}</section>
}
