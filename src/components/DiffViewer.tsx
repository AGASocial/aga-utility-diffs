import React from 'react';
import { CopyButton } from './CopyButton';
import type { DiffChange } from '../types/diff';

interface DiffViewerProps {
  changes: DiffChange[];
  mode: 'chars' | 'words' | 'lines' | 'patch';
  fontSize: number;
}

export function DiffViewer({ changes, mode, fontSize }: DiffViewerProps) {
  const content = changes.map(change => change.value).join('');

  if (mode === 'patch') {
    return (
      <div className="flex flex-col gap-2 h-full">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Diffs</label>
          <div className="flex gap-1">
            <CopyButton text={content} />
          </div>
        </div>
        <pre 
          className="flex-1 w-full p-3 border border-gray-300 rounded-lg font-mono overflow-auto"
          style={{ fontSize: `${fontSize}px` }}
        >
          {changes.map((change, i) => (
            <span
              key={i}
              className={`${
                change.added
                  ? 'bg-green-100 text-green-800'
                  : change.removed
                  ? 'bg-red-100 text-red-800'
                  : ''
              }`}
            >
              {change.value}
            </span>
          ))}
        </pre>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">Diffs</label>
        <div className="flex gap-1">
          <CopyButton text={content} />
        </div>
      </div>
      <pre 
        className="flex-1 w-full p-3 border border-gray-300 rounded-lg font-mono overflow-auto whitespace-pre-wrap"
        style={{ fontSize: `${fontSize}px` }}
      >
        {changes.map((change, i) => (
          <span
            key={i}
            className={`${
              change.added
                ? 'bg-green-100 text-green-800'
                : change.removed
                ? 'bg-red-100 text-red-800'
                : ''
            }`}
          >
            {change.value}
          </span>
        ))}
      </pre>
    </div>
  );
}