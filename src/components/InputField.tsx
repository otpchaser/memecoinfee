import React from 'react';
import { Info } from 'lucide-react';

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  tooltip: string;
  step?: string;
  min?: number;
  max?: number;
}

export default function InputField({ 
  label, 
  value, 
  onChange, 
  tooltip, 
  step = "0.01", 
  min,
  max 
}: InputFieldProps) {
  const [inputValue, setInputValue] = React.useState(value.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    if (newValue === '' || 
        newValue === '-' || 
        newValue === '.' || 
        newValue === '0.' ||
        newValue === '-.' ||
        /^-?\d*\.?\d*$/.test(newValue)) {
      
      setInputValue(newValue);
      
      const parsedValue = parseFloat(newValue);
      if (!isNaN(parsedValue)) {
        if (label.includes("Target Price Movement")) {
          onChange(parsedValue);
        } else {
          if ((min === undefined || parsedValue >= min) && 
              (max === undefined || parsedValue <= max)) {
            onChange(parsedValue);
          }
        }
      }
    }
  };

  return (
    <div className="relative">
      <label className="flex items-center text-blue-200 text-sm mb-1">
        {label}
        <div className="group relative ml-2">
          <Info className="w-4 h-4 text-blue-300" />
          <div className="hidden group-hover:block absolute z-10 w-64 p-2 bg-gray-900 text-white text-xs rounded shadow-lg -top-2 left-6">
            {tooltip}
          </div>
        </div>
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="w-full px-3 py-2 bg-white/5 border border-blue-300/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="0"
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
}