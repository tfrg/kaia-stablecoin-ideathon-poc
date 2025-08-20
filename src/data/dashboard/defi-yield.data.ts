import { DeFiPoolData } from '@/types/dashboard'

export const defiYieldData: DeFiPoolData[] = [
  {
    name: 'KaiaSwap',
    isActive: true,
    apy: '12.5%',
    expectedApy: '15%',
    pairInfo: 'KAIA-USDT 유동성 공급',
    tvl: '$2.8M',
    volume: '$850K (24h)',
  },
  {
    name: 'DragonSwap',
    isActive: true,
    apy: '8.3%',
    expectedApy: '10%',
    pairInfo: 'BTC-ETH 유동성 공급',
    tvl: '$1.2M',
    volume: '$320K (24h)',
  },
  {
    name: 'Capybara DEX',
    isActive: true,
    apy: '15.2%',
    expectedApy: '18%',
    pairInfo: 'KAIA-USDT 유동성 공급',
    tvl: '$650K',
    volume: '$180K (24h)',
  },
]
