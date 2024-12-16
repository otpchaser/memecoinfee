import { Info } from 'lucide-react';

interface ResultCardProps {
  label: string;
  value: string;
  tooltip: string;
  highlight?: boolean;
  colorCode?: 'profit' | 'loss';
}

export default function ResultCard({ 
  label, 
  value, 
  tooltip, 
  highlight = false,
  colorCode
}: ResultCardProps) {
  const getTextColor = () => {
    if (colorCode === 'profit') return 'text-green-400';
    if (colorCode === 'loss') return 'text-red-400';
    return highlight ? 'text-blue-300' : 'text-white';
  };

  return (
    <div className={`p-4 rounded-lg ${
      highlight ? 'bg-blue-500/20 border border-blue-400/30' : 'bg-white/5'
    }`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-blue-200">{label}</span>
          <div className="group relative ml-2">
            <Info className="w-4 h-4 text-blue-300" />
            <div className="hidden group-hover:block absolute z-10 w-64 p-2 bg-gray-900 text-white text-xs rounded shadow-lg -top-2 left-6">
              {tooltip}
            </div>
          </div>
        </div>
        <span className={`font-semibold ${getTextColor()} ${
          highlight ? 'text-lg' : ''
        }`}>{value}</span>
      </div>
    </div>
  );
}