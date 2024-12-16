import { FEES } from '../constants';

export const calculateNetworkFees = (priorityFee: number, bribeFee: number): number => {
  return FEES.SOLANA_TRANSACTION_FEE + priorityFee + bribeFee;
};