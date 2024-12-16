import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function CollapsibleSection({ title, children }: CollapsibleSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
      >
        <h3 className="text-sm font-semibold text-blue-200">{title}</h3>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-blue-300" />
        ) : (
          <ChevronDown className="w-4 h-4 text-blue-300" />
        )}
      </button>
      
      {isExpanded && (
        <div className="pl-2 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
}