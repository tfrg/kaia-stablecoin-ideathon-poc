import { AssetDetailAnalysisData } from '@/types/assets'

export const detailAnalysisData: AssetDetailAnalysisData[] = [
  {
    id: '1',
    icon: (
      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white'>
        K
      </div>
    ),
    name: 'KAIA',
    symbol: 'KAIA',
    trend: '상승세: +8.7% (7일) / +120.3% (YTD)',
    additionalInfo: '거래량: 43.5% 증가 (30일 대비)',
  },
  {
    id: '2',
    icon: (
      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 text-white'>
        W
      </div>
    ),
    name: 'KAIAW',
    symbol: 'KAIAW',
    trend: 'APY: 9.8% (기본 8.2% + MEV 1.6%)',
    additionalInfo: '위임 검증인: 25개 분산 풀',
  },
  {
    id: '3',
    icon: (
      <div className='flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-white'>
        AI
      </div>
    ),
    name: 'AI 인사이트',
    symbol: '',
    trend: 'KAIA DeFi TVL 8.2% 상승',
    additionalInfo: 'KAIAW 비중 5% 추가 고려 (APY 잠재력 상승)',
    insight: '다음 7일 간 KAIA 가격 상승 전망 (82% 확률)',
  },
]
