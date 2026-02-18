import React from 'react';
import { Zap, Copy } from 'lucide-react';

export const DescoView: React.FC = () => {
  return (
    <div className="px-4 py-6 pb-24 animate-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">ডেসকো প্রিপেইড</h2>

      <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl p-6 text-white shadow-lg shadow-yellow-200 mb-6">
         <div className="flex items-center gap-2 mb-4">
            <Zap className="text-white fill-white" size={24} />
            <span className="font-bold text-lg">DESCO</span>
         </div>
         <div className="mb-6">
            <p className="text-yellow-100 text-sm mb-1">মিটার নম্বর</p>
            <div className="flex items-center justify-between">
                <p className="text-2xl font-mono tracking-wider">8765 4321 0987</p>
                <button className="bg-white/20 p-1.5 rounded-lg hover:bg-white/30 transition-colors">
                    <Copy size={16} />
                </button>
            </div>
         </div>
         <div>
            <p className="text-yellow-100 text-sm">বর্তমান ব্যালেন্স</p>
            <p className="text-3xl font-bold">৳ ৪৫০.০০</p>
         </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h3 className="font-bold text-slate-700 mb-4">দ্রুত রিচার্জ</h3>
        <div className="grid grid-cols-3 gap-3 mb-4">
            {[200, 500, 1000].map(amount => (
                <button key={amount} className="border border-slate-200 py-2 rounded-xl text-slate-600 font-bold hover:bg-slate-50 hover:border-yellow-500 hover:text-yellow-600 transition-colors">
                    ৳ {amount}
                </button>
            ))}
        </div>
        
        <div className="mb-4">
            <input 
                type="number" 
                placeholder="অন্যান্য পরিমাণ" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-yellow-500 transition-colors"
            />
        </div>

        <button className="w-full bg-slate-800 text-white font-bold py-3.5 rounded-xl active:scale-95 transition-all">
            রিচার্জ করুন
        </button>
      </div>
    </div>
  );
};