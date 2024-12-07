import React from 'react';
import { CopyButton } from './CopyButton';
import { Eraser, ArrowLeft } from 'lucide-react';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
  fontSize: number;
  onCopyToOriginal?: () => void;
  isModified?: boolean;
}

export function TextArea({ 
  value, 
  onChange, 
  label, 
  placeholder, 
  fontSize,
  onCopyToOriginal,
  isModified 
}: TextAreaProps) {
  const handleClear = () => {
    onChange('');
  };

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <div className="flex gap-1">
          {isModified && onCopyToOriginal && (
            <button
              onClick={onCopyToOriginal}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              title="Copy to Original Text"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleClear}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            title="Clear text"
          >
            <Eraser className="w-4 h-4" />
          </button>
          <CopyButton text={value} />
        </div>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ fontSize: `${fontSize}px` }}
        className="flex-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none font-mono"
      />
    </div>
  );
}