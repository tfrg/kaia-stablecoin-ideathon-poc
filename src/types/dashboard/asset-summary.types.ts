export interface AssetTotalInfo {
  totalValue: number
  changePercentage: number
  changeTimeframe: string
}

export interface RetirementProgressInfo {
  currentValue: number
  targetValue: number
  fundingRatio: number
}

export interface PortfolioRiskInfo {
  riskScore: number
  maxScore: number
  status: string
}

export interface MonthlyContributionInfo {
  amount: number
  currency: string
  nextPaymentDate: string
}
