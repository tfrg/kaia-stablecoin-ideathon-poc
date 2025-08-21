export interface AssetTotalSummary {
  totalAsset: {
    value: string
    change: string
    period: string
  }
  totalReturn: {
    value: string
    change: string
    period: string
  }
  averageAPY: {
    value: string
    comparison: string
  }
}
