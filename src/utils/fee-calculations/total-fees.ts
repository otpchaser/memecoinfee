import { calculateBullXFee, calculatePumpFee } from './platform-fees';
import { calculateNetworkFees } from './network-fees';

export const calculateTotalBuyFees = (amount: number, priorityFee: number, bribeFee: number): number => {
  const bullxFee = calculateBullXFee(amount);
  const pumpFee = calculatePumpFee(amount);
  const networkFees = calculateNetworkFees(priorityFee, bribeFee);

  return bullxFee + pumpFee + networkFees;
};

export const calculateTotalSellFees = (amount: number, priorityFee: number, bribeFee: number): number => {
  const bullxFee = calculateBullXFee(amount);
  const pumpFee = calculatePumpFee(amount);
  const networkFees = calculateNetworkFees(priorityFee, bribeFee);

  return bullxFee + pumpFee + networkFees;
};