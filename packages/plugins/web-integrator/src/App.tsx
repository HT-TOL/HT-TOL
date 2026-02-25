import React, { useState } from 'react';
import { Generator } from './generator';
import { CodeEditor } from './CodeEditor';

export const App = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [urls, setUrls] = useState(['', '', '']);
  const [isCombining, setIsCombining] = useState(false);
  const [result, setResult] = useState(null);

  const handleCombine = async () => {
    setIsCombining(true);
    const gen = new Generator();
    const data = await gen.combineAndDeploy(urls.filter(u => u !== ''));
    setResult(data);
    setIsCombining(false);
    setActiveTab('code');
  };

  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col overflow-hidden font-sans">
      <div className="p-4 bg-gray-900/50 backdrop-blur-md border-b border-gray-800 flex justify-between items-center">
        <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">HTTOL Mobile</h1>
        {isCombining && <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>}
      </div>

      <div className="flex-1 relative overflow-hidden">
        {activeTab === 'chat' && (
          <div className="h-full p-4 space-y-4 overflow-y-auto">
            <div className="bg-gray-800/30 p-5 rounded-3xl border border-gray-700/50 shadow-2xl">
              <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest font-bold">Cấu hình tích hợp</p>
              {urls.map((url, i) => (
                <input key={i} value={url} onChange={(e) => { const n = [...urls]; n[i] = e.target.value; setUrls(n); }} placeholder={`Link AI ${i+1}...`} className="w-full mb-3 bg-black/50 border border-gray-700 p-4 rounded-2xl text-sm outline-none focus:border-blue-500 transition-all" />
              ))}
              <button onClick={handleCombine} disabled={isCombining} className="w-full bg-blue-600 active:bg-blue-700 py-4 rounded-2xl font-black shadow-lg shadow-blue-600/20">
                {isCombining ? 'AI ĐANG XỬ LÝ...' : 'KẾT HỢP TRANG WEB'}
              </button>
            </div>
          </div>
        )}
        {activeTab === 'code' && <div className="h-full"><CodeEditor initialCode={result ? JSON.stringify(result, null, 2) : "// Chờ AI trộn dữ liệu..."} /></div>}
        {activeTab === 'preview' && <div className="h-full"><iframe src={result?.generatedUrl || 'about:blank'} className="w-full h-full border-none" /></div>}
      </div>

      <div className="h-20 bg-gray-900/90 backdrop-blur-2xl border-t border-gray-800 flex justify-around items-center pb-4">
        <button onClick={() => setActiveTab('chat')} className={`p-2 ${activeTab === 'chat' ? 'text-blue-400' : 'text-gray-500'}`}>
          <div className="text-[10px] font-bold uppercase">Trình trộn</div>
        </button>
        <button onClick={() => setActiveTab('code')} className={`p-2 ${activeTab === 'code' ? 'text-blue-400' : 'text-gray-500'}`}>
          <div className="text-[10px] font-bold uppercase">Mã nguồn</div>
        </button>
        <button onClick={() => setActiveTab('preview')} className={`p-2 ${activeTab === 'preview' ? 'text-blue-400' : 'text-gray-500'}`}>
          <div className="text-[10px] font-bold uppercase">Kết quả</div>
        </button>
      </div>
    </div>
  );
};
