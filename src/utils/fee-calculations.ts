import { FEES } from '../constants/fees';
import { CalculatorInputs, FeeBreakdown } from '../types/calculator';

// Calculate BullX main fee
export const calculateBullXFee = (amount: number): number => {
  return (amount * FEES.BULLX_FEE_PERCENTAGE) / 100;
};

// Calculate BullX hidden tip
export const calculateBullXHiddenTip = (amount: number): number => {
  return (amount * FEES.BULLX_HIDDEN_TIP_PERCENTAGE) / 100;
};

// Calculate Pump fee
export const calculatePumpFee = (amount: number): number => {
  return (amount * FEES.PUMP_FEE_PERCENTAGE) / 100;
};

// Calculate total buy fees
export const calculateTotalBuyFees = (
  amount: number,
  priorityFee: number,
  bribeFee: number
): number => {
  // Platform fees
  const bullxFee = calculateBullXFee(amount);
  const bullxTip = calculateBullXHiddenTip(amount);
  const pumpFee = calculatePumpFee(amount);
  
  // Network fees
  const networkFee = FEES.SOLANA_TRANSACTION_FEE;
  const priorityFeeFinal = Math.max(priorityFee, FEES.MIN_PRIORITY_FEE);
  const ataFee = FEES.ATA_CREATION_FEE;
  
  return bullxFee + bullxTip + pumpFee + networkFee + priorityFeeFinal + bribeFee + ataFee;
};

// Calculate total sell fees
export const calculateTotalSellFees = (
  sellAmount: number,
  priorityFee: number,
  bribeFee: number
): number => {
  // Platform fees (same as buy)
  const bullxFee = calculateBullXFee(sellAmount);
  const bullxTip = calculateBullXHiddenTip(sellAmount);
  const pumpFee = calculatePumpFee(sellAmount);
  
  // Network fees (no ATA fee for sell)
  const networkFee = FEES.SOLANA_TRANSACTION_FEE;
  const priorityFeeFinal = Math.max(priorityFee, FEES.MIN_PRIORITY_FEE);
  
  return bullxFee + bullxTip + pumpFee + networkFee + priorityFeeFinal + bribeFee;
};

// Generate detailed fee breakdown
export const generateFeeBreakdown = (
  amount: number,
  priorityFee: number,
  bribeFee: number,
  includingAta: boolean = false
): FeeBreakdown => {
  const platformFee = calculateBullXFee(amount) + 
                     calculateBullXHiddenTip(amount) + 
                     calculatePumpFee(amount);
  
  return {
    platformFee,
    transactionFee: FEES.SOLANA_TRANSACTION_FEE,
    priorityFee: Math.max(priorityFee, FEES.MIN_PRIORITY_FEE),
    bribeFee,
    ...(includingAta ? { ataCreationFee: FEES.ATA_CREATION_FEE } : {})
  };
};