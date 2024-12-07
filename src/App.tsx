import React from 'react';
import { Split } from 'lucide-react';
import { TextArea } from './components/TextArea';
import { DiffViewer } from './components/DiffViewer';
import { DiffModeSelector } from './components/DiffModeSelector';
import { TextSizeControl } from './components/TextSizeControl';
import { computeDiff } from './utils/diffUtils';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { DiffMode } from './types/diff';

function App() {
  const [text1, setText1] = useLocalStorage('diffViewer.text1', '');
  const [text2, setText2] = useLocalStorage('diffViewer.text2', '');
  const [mode, setMode] = useLocalStorage<DiffMode>('diffViewer.mode', 'lines');
  const [fontSize, setFontSize] = useLocalStorage('diffViewer.fontSize', 14);

  const handleCopyToOriginal = () => {
    setText1(text2);
    setText2('');
  };

  const changes = computeDiff(text1, text2, mode);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-full mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Split className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Text Diff Viewer</h1>
          </div>
          <p className="text-gray-600">Compare two texts and see the differences at various levels</p>
        </header>

        <div className="mb-6 flex justify-between items-center flex-wrap gap-4">
          <DiffModeSelector mode={mode} onChange={setMode} />
          <TextSizeControl size={fontSize} onChange={setFontSize} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-16rem)]">
          <TextArea
            value={text1}
            onChange={setText1}
            label="Original Text"
            placeholder="Enter the original text here..."
            fontSize={fontSize}
          />
          <TextArea
            value={text2}
            onChange={setText2}
            label="Modified Text"
            placeholder="Enter the modified text here..."
            fontSize={fontSize}
            onCopyToOriginal={handleCopyToOriginal}
            isModified={true}
          />
          <DiffViewer 
            changes={changes} 
            mode={mode} 
            fontSize={fontSize}
          />
        </div>
      </div>
    </div>
  );
}

export default App;