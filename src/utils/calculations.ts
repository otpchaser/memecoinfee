import { CalculatorInputs, CalculationResults } from '../types/calculator';
import { 
  calculateTotalBuyFees,
  calculateTotalSellFees,
  generateFeeBreakdown
} from './fee-calculations';

export const calculateResults = (inputs: CalculatorInputs): CalculationResults => {
  // Validate minimum investment
  if (inputs.amount < 0.01) {
    throw new Error('Minimum investment amount is 0.01 SOL');
  }

  // Calculate buy fees
  const totalBuyFees = calculateTotalBuyFees(
    inputs.amount,
    inputs.gasPrice,
    inputs.bribeFee
  );
  
  // Calculate amount after buy fees
  const amountAfterBuyFees = inputs.amount - totalBuyFees;

  // Calculate value after price movement (handle both positive and negative)
  const valueAtTargetPrice = amountAfterBuyFees * (1 + (inputs.expectedGainLoss / 100));

  // Calculate sell fees based on the new value
  const totalSellFees = calculateTotalSellFees(
    Math.max(0, valueAtTargetPrice), // Prevent negative value for fee calculation
    inputs.gasPrice,
    inputs.bribeFee
  );

  // Calculate final amounts
  const finalAmount = Math.max(0, valueAtTargetPrice - totalSellFees);
  const profitLoss = finalAmount - inputs.amount;

  return {
    totalCost: inputs.amount,
    amountAfterBuyFees,
    buyFees: generateFeeBreakdown(inputs.amount, inputs.gasPrice, inputs.bribeFee, true), // Include ATA for buy
    sellFees: generateFeeBreakdown(Math.max(0, valueAtTargetPrice), inputs.gasPrice, inputs.bribeFee, false), // No ATA for sell
    valueAtTargetPrice,
    totalFees: totalBuyFees + totalSellFees,
    finalAmount,
    profitLoss
  };
};