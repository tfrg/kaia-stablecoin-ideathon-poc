import { Button } from '@/components/ui/button'

export function WalletConnect(): React.JSX.Element {
  return (
    <Button className='flex items-center gap-2 rounded-full bg-[var(--foreground)] px-3 py-4'>
      <div>
        <img
          className='h-[20px] w-[20px]'
          src='/kaia-wallet-logo.svg'
          alt='kaia-wallet logo'
        />
      </div>
      <div className='flex items-center gap-1'>
        <span>Kaia Wallet</span>
        <img src='/chevron.svg' alt='checvron image' />
      </div>
    </Button>
  )
}
