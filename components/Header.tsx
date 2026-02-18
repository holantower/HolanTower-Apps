import React from 'react';
import { Bell } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 z-20 px-4 py-3 shadow-sm flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-slate-800">হলান টাওয়ার</h1>
        <p className="text-xs text-slate-500">ফ্ল্যাট: A-5 | স্বাগতম, রহমান সাহেব</p>
      </div>
      <div className="flex gap-3">
        <button className="p-2 bg-slate-50 rounded-full text-slate-600 hover:bg-slate-100 transition-colors relative">
          <Bell size={22} />
          <span className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
      </div>
    </header>
  );
};