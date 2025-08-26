import { cn } from '@/lib/utils'
import { WalletConnect } from '@/components/molecules/layout/wallet-connect'
import { LaunguageSetting } from '@/components/molecules/layout/language-setting'
import { ThemeSetting } from '@/components/molecules/layout/theme-setting'

import KaiaPortLogo from '@/components//ui/kaia-port-logo'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  alwaysViewLogo?: boolean
  fixed?: boolean
  ref?: React.Ref<HTMLLIElement>
}

export function Header({
  className,
  fixed,
  children,
  alwaysViewLogo = false,
  ...props
}: HeaderProps): React.JSX.Element {
  return (
    <header
      className={cn(
        'header flex w-full place-content-between items-center border-b-1 p-4',
        alwaysViewLogo ? '' : 'md:justify-end'
      )}
      {...props}
    >
      <div className={!alwaysViewLogo ? 'md:hidden' : ''}>
        <KaiaPortLogo />
      </div>
      <div className='flex items-center gap-2'>
        <WalletConnect />
        <LaunguageSetting />
        <ThemeSetting />
      </div>
    </header>
  )
}
