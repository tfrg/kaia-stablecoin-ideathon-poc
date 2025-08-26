import { AssetData } from '@/types/assets'

import { Bitcoin } from 'lucide-react'

export const assetListData: AssetData[] = [
  {
    id: '1',
    icon: <Bitcoin className='h-6 w-6 text-orange-500' />,
    iconSrc: '/img/token/btc-logo.svg',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$57,320.45',
    change24h: '+2.8%',
    change7d: '+5.3%',
    holdings: '5.02 BTC',
    value: '$288,000',
    weight: '30%',
    performance: '+46.2% (YTD)',
  },
  {
    id: '2',
    icon: <Bitcoin className='h-6 w-6 text-purple-500' />,
    iconSrc: '/img/token/eth-logo.svg',
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$2,785.30',
    change24h: '+1.7%',
    change7d: '+3.2%',
    holdings: '86.12 ETH',
    value: '$240,000',
    weight: '25%',
    performance: '+32.5% (YTD)',
  },
  {
    id: '3',
    icon: (
      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white'>
        K
      </div>
    ),
    iconSrc: '/img/token/kaia-logo.svg',
    name: 'KAIA',
    symbol: 'KAIA',
    price: '$175.48',
    change24h: '+4.5%',
    change7d: '+8.7%',
    holdings: '1,095 KAIA',
    value: '$192,000',
    weight: '20%',
    performance: '+120.3% (YTD)',
  },
  {
    id: '4',
    icon: (
      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-white'>
        T
      </div>
    ),
    iconSrc: '/img/token/usdt-logo.svg',
    name: 'Tether',
    symbol: 'USDT',
    price: '$1.00',
    change24h: '0.0%',
    change7d: '+0.01%',
    holdings: '144,000 USDT',
    value: '$144,000',
    weight: '15%',
    performance: '+4.2% (Lending)',
  },
  {
    id: '5',
    icon: (
      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 text-white'>
        W
      </div>
    ),
    iconSrc: '/img/token/kaiaw-logo.svg',
    name: 'KAIAWON',
    symbol: 'KAIAW',
    price: '$178.25',
    change24h: '+4.7%',
    change7d: '+9.1%',
    holdings: '538.5 KAIAW',
    value: '$96,000',
    weight: '10%',
    performance: '9.8% APY',
  },
]
