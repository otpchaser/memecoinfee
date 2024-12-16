import { CalculationResults } from '../types/calculator';
import ResultCard from './ResultCard';
import CollapsibleSection from './CollapsibleSection';
import FeeBreakdown from './FeeBreakdown';
import { formatSol, formatProfitLoss } from '../utils/formatting';

interface ResultsSectionProps {
  results: CalculationResults;
}

export default function ResultsSection({ results }: ResultsSectionProps) {
  return (
    <div className="space-y-4">
      <ResultCard
        label="Total Investment"
        value={formatSol(results.totalCost)}
        tooltip="Total amount you're investing including all fees"
      />

      <ResultCard
        label="Amount After Buy Fees"
        value={formatSol(results.amountAfterBuyFees)}
        tooltip="Amount remaining after deducting buy fees"
      />

      <CollapsibleSection title="Buy Fees">
        <FeeBreakdown fees={results.buyFees} />
      </CollapsibleSection>

      <CollapsibleSection title="Sell Fees">
        <FeeBreakdown fees={results.sellFees} />
      </CollapsibleSection>

      <ResultCard
        label="Total Fees"
        value={formatSol(results.totalFees)}
        tooltip="Total fees for both buy and sell transactions"
      />

      <ResultCard
        label="Profit/Loss"
        value={formatProfitLoss(results.profitLoss)}
        tooltip="Expected profit or loss including all fees"
        colorCode={results.profitLoss > 0 ? 'profit' : 'loss'}
      />

      <ResultCard
        label="Final Amount"
        value={formatSol(results.finalAmount)}
        tooltip="Final amount you'll receive after all fees"
        highlight
      />
    </div>
  );
}