import React, { useState } from 'react';

export const CodeEditor = ({ initialCode }: { initialCode: string }) => {
  const [code, setCode] = useState(initialCode);

  return (
    <div className="flex flex-col h-full w-full bg-[#15171a] border-l border-[#2e3238] text-gray-300">
      {/* Header: Thanh Tab giống Replit */}
      <div className="flex items-center bg-[#1c1e24] px-4 py-2 space-x-4 text-sm border-b border-[#2e3238]">
        <div className="flex items-center space-x-2 border-b-2 border-blue-500 pb-1">
          <span className="text-blue-400">index.tsx</span>
        </div>
        <div className="text-gray-500 hover:text-white cursor-pointer">App.css</div>
        <div className="text-gray-500 hover:text-white cursor-pointer">package.json</div>
      </div>

      {/* Main: Vùng soạn thảo code */}
      <div className="flex-1 overflow-auto p-4 font-mono text-sm leading-relaxed">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-full bg-transparent outline-none resize-none spellcheck-false"
          style={{ caretColor: '#3b82f6' }}
        />
      </div>

      {/* Footer: Console/Terminal giả lập */}
      <div className="h-32 bg-[#0c0d0f] border-t border-[#2e3238] p-3">
        <div className="flex items-center space-x-2 text-xs text-green-500 mb-2">
          <span>➜</span>
          <span>Success: Web integrated successfully.</span>
        </div>
        <div className="text-xs text-gray-500">$ npm run dev</div>
      </div>
    </div>
  );
};
