import React from 'react';
import type { DiffMode } from '../types/diff';

interface DiffModeSelectorProps {
  mode: DiffMode;
  onChange: (mode: DiffMode) => void;
}

export function DiffModeSelector({ mode, onChange }: DiffModeSelectorProps) {
  const modes: { value: DiffMode; label: string }[] = [
    { value: 'chars', label: 'Characters' },
    { value: 'words', label: 'Words' },
    { value: 'lines', label: 'Lines' },
    { value: 'patch', label: 'Patch' },
  ];

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-gray-700">Diff Mode</span>
      <div className="flex gap-2">
        {modes.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => onChange(value)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors
              ${mode === value
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}