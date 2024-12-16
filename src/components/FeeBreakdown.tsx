import { FeeBreakdown as FeeBreakdownType } from '../types/calculator';
import ResultCard from './ResultCard';
import { formatSol } from '../utils/formatting';

interface FeeBreakdownProps {
  fees: FeeBreakdownType;
}

export default function FeeBreakdown({ fees }: FeeBreakdownProps) {
  return (
    <div className="space-y-2">
      <ResultCard
        label="Platform Fee"
        value={formatSol(fees.platformFee)}
        tooltip="BullX platform fees including hidden tips"
      />
      
      <ResultCard
        label="Transaction Fee"
        value={formatSol(fees.transactionFee)}
        tooltip="Fixed Solana blockchain fee"
      />
      
      <ResultCard
        label="Priority Fee"
        value={formatSol(fees.priorityFee)}
        tooltip="Additional priority fee for faster transaction"
      />
      
      <ResultCard
        label="Bribe Fee"
        value={formatSol(fees.bribeFee)}
        tooltip="Optional MEV protection fee"
      />

      {fees.ataCreationFee && (
        <ResultCard
          label="ATA Creation Fee"
          value={formatSol(fees.ataCreationFee)}
          tooltip="One-time fee for creating Associated Token Account"
        />
      )}
    </div>
  );
} 