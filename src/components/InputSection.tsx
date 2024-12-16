import { CalculatorInputs } from '../types/calculator';
import InputField from './InputField';

interface InputSectionProps {
  inputs: CalculatorInputs;
  onInputChange: (name: keyof CalculatorInputs, value: number) => void;
}

export default function InputSection({ inputs, onInputChange }: InputSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white mb-4">Investment Details</h2>
      
      <InputField
        label="Investment Amount (SOL)"
        value={inputs.amount}
        onChange={(value) => onInputChange('amount', value)}
        tooltip="Amount you want to invest in SOL"
        step="0.000001"
        min={0.01}
      />

      <InputField
        label="Priority Fee (SOL)"
        value={inputs.gasPrice}
        onChange={(value) => onInputChange('gasPrice', value)}
        tooltip="Solana network priority fee in SOL. Default: 0.001005 SOL"
        step="0.000001"
        min={0.001005}
      />

      <InputField
        label="Bribe Fee (SOL)"
        value={inputs.bribeFee}
        onChange={(value) => onInputChange('bribeFee', value)}
        tooltip="Optional MEV protection fee (applies to both buy and sell transactions)"
        step="0.000001"
        min={0}
      />

      <InputField
        label="Target Price Movement (%)"
        value={inputs.expectedGainLoss}
        onChange={(value) => onInputChange('expectedGainLoss', value)}
        tooltip="Your target exit price movement: -5 for 5% loss, 200 for 200% gain"
        step="1"
      />
    </div>
  );
}