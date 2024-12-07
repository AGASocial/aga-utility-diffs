export type DiffMode = 'chars' | 'words' | 'lines' | 'patch';

export interface DiffChange {
  value: string;
  added?: boolean;
  removed?: boolean;
}