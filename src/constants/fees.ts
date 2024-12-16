export const FEES = {
  // Platform fees - adjusted based on new transaction
  BULLX_FEE_PERCENTAGE: 1.0,     // Base trading fee
  BULLX_HIDDEN_TIP_PERCENTAGE: 0.8, // Reduced hidden fee
  PUMP_FEE_PERCENTAGE: 0.2,      // Reduced pump fee
  
  // Network fees - exact from transactions
  SOLANA_TRANSACTION_FEE: 0.000105,  // Base network fee
  ATA_CREATION_FEE: 0.002039,    // ATA creation fee
  
  // Priority fees - from transactions
  MIN_PRIORITY_FEE: 0.000105,    // Matches transaction
  DEFAULT_PRIORITY_FEE: 0.000105  // Matches transaction
} as const;