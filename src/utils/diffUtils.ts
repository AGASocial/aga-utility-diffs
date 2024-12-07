import { diffChars, diffWords, diffLines, createPatch } from 'diff';
import type { DiffMode } from '../types/diff';

export function computeDiff(text1: string, text2: string, mode: DiffMode) {
  switch (mode) {
    case 'chars':
      return diffChars(text1, text2);
    case 'words':
      return diffWords(text1, text2);
    case 'lines':
      return diffLines(text1, text2);
    case 'patch':
      return createPatch('text', text1, text2, '', '', { context: 3 })
        .split('\n')
        .slice(4) // Remove patch header
        .map(line => ({
          value: line + '\n',
          added: line.startsWith('+'),
          removed: line.startsWith('-'),
        }));
    default:
      return diffLines(text1, text2);
  }
}