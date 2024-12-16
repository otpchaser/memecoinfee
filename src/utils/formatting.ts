export const formatSol = (value: number): string => {
  return `${value.toFixed(6)} SOL`;
};

export const formatProfitLoss = (value: number): string => {
  const sign = value > 0 ? '+' : '';
  return `${sign}${formatSol(value)}`;
};