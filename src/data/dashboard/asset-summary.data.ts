import { TimeFrame } from '@/types/common'
import {
  AssetTotalInfo,
  RetirementProgressInfo,
  PortfolioRiskInfo,
  MonthlyContributionInfo,
} from '@/types/dashboard'

export const assetTotalInfoData: AssetTotalInfo = {
  totalValue: 45231.89,
  changePercentage: 20.1,
  changeTimeframe: '24h' as TimeFrame,
}

export const retirementProgressInfoData: RetirementProgressInfo = {
  currentValue: 3060000,
  targetValue: 3000000,
  fundingRatio: 102,
}

export const portfolioRiskInfo: PortfolioRiskInfo = {
  riskScore: 5.8,
  maxScore: 10,
  status: '목표 범위 내',
}

export const monthlyContributionInfo: MonthlyContributionInfo = {
  amount: 150,
  currency: 'KAIA',
  nextPaymentDate: '6월 5일',
}
