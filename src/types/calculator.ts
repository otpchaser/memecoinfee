export interface CalculatorInputs {
  amount: number;
  gasPrice: number;
  expectedGainLoss: number;
  bribeFee: number;
}

export interface FeeBreakdown {
  platformFee: number;
  transactionFee: number;
  priorityFee: number;
  bribeFee: number;
  ataCreationFee?: number;
}

export interface CalculationResults {
  totalCost: number;
  amountAfterBuyFees: number;
  buyFees: FeeBreakdown;
  sellFees: FeeBreakdown;
  valueAtTargetPrice: number;
  totalFees: number;
  finalAmount: number;
  profitLoss: number;
}