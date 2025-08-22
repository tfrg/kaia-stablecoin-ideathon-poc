import { Link } from 'react-router-dom'

export default function KaiaPortLogo() {
  return (
    <Link className='w-[120px]' to={'/'}>
      <img
        className='justify-start'
        src='/kaia-port-logo.svg'
        alt='KaiaPort Logo'
      />
    </Link>
  )
}
