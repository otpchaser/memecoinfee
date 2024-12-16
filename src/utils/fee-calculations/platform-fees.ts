import { FEES } from '../constants';

export const calculateBullXFee = (amount: number): number => {
  return (amount * FEES.BULLX_FEE_PERCENTAGE) / 100;
};

export const calculateBullXHiddenTip = (amount: number): number => {
  return (amount * FEES.BULLX_HIDDEN_TIP_PERCENTAGE) / 100;
};

export const calculatePumpFee = (amount: number): number => {
  return (amount * FEES.PUMP_FEE_PERCENTAGE) / 100;
};