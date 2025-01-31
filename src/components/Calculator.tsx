import { useState, useEffect } from 'react';
import { Coins } from 'lucide-react';
import { CalculatorInputs, CalculationResults } from '../types/calculator';
import { calculateResults } from '../utils/calculations';
import InputSection from './InputSection';
import ResultsSection from './ResultsSection';

export default function Calculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    amount: 0.01,
    gasPrice: 0.001005,
    expectedGainLoss: 0,
    bribeFee: 0
  });

  const [results, setResults] = useState<CalculationResults | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const results = calculateResults(inputs);
      setResults(results);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setResults(null);
    }
  }, [inputs]);

  const handleInputChange = (name: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Coins className="w-8 h-8 text-purple-300" />
              <h1 className="text-3xl font-bold text-white">Solana Memecoin Trading Fee Calculator</h1>
            </div>
            <p className="text-blue-200">Calculate fees to get true PnL at certain price points</p>
            <p className="text-blue-200 text-sm mt-2">
              Includes Pumpfun Fee, Minimum Validator Tip, and Platform fee (1% TX Fee) for{' '}
              <a href="https://t.me/BullxBetaBot?start=access_TWZO2VI1ULQ" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">BullX Neo</a>,{' '}
              <a href="https://photon-sol.tinyastro.io/@otpchaser" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Photon</a>,{' '}
              <a href="https://t.me/BloomSolana_bot?start=ref_otp" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Bloom</a>, and{' '}
              <a href="https://t.me/TradeonNovaBot?start=r-otpchaser" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Nova</a>
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-lg">
              <p className="text-red-200 text-sm">{error}</p>
            </div>
          )}

          <div className="space-y-8">
            <InputSection inputs={inputs} onInputChange={handleInputChange} />
            {results && <ResultsSection results={results} />}
          </div>
        </div>
      </div>
    </div>
  );
}
