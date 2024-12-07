import React from 'react';
import { Type } from 'lucide-react';

interface TextSizeControlProps {
  size: number;
  onChange: (size: number) => void;
}

export function TextSizeControl({ size, onChange }: TextSizeControlProps) {
  return (
    <div className="flex items-center gap-2">
      <Type className="w-4 h-4 text-gray-600" />
      <input
        type="range"
        min="8"
        max="24"
        value={size}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <span className="text-sm text-gray-600 min-w-[2.5rem]">{size}px</span>
    </div>
  );
}