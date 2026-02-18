import React from 'react';
import { QuickActionGrid } from '../components/QuickActionGrid';
import { PageView } from '../types';
import { ArrowRight, Wallet, Activity } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: PageView) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="pb-24 animate-in fade-in duration-500">
      
      {/* Banner / Status Card */}
      <div className="px-4 pt-4">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-5 text-white shadow-lg shadow-primary-200">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-primary-100 text-sm mb-1">বকেয়া সার্ভিস চার্জ</p>
              <h2 className="text-3xl font-bold font-sans">৳ ২,৫০০</h2>
            </div>
            <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
              <Wallet size={24} className="text-white" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-primary-100">সর্বশেষ পেমেন্ট: ১২ জানুয়ারি</p>
            <button 
              onClick={() => onNavigate(PageView.SERVICE_CHARGE)}
              className="bg-white text-primary-700 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 active:scale-95 transition-transform"
            >
              পরিশোধ করুন <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-2">
        <div className="flex justify-between items-center px-5 pt-4">
          <h3 className="text-slate-800 font-bold text-lg">দ্রুত সেবা</h3>
          <button onClick={() => onNavigate(PageView.MENU)} className="text-primary-600 text-xs font-medium">সব দেখুন</button>
        </div>
        <QuickActionGrid onNavigate={onNavigate} />
      </div>

      {/* Usage Stats Teaser */}
      <div className="px-4 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <Activity size={20} className="text-yellow-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-700">বিদ্যুৎ ব্যবহার</h4>
              <p className="text-xs text-slate-500">এই মাসের হিসাব</p>
            </div>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5 mb-2">
            <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <span>ব্যবহৃত: ১৫০ ইউনিট</span>
            <span>অবশিষ্ট: ৫০ ইউনিট</span>
          </div>
        </div>
      </div>

      {/* Recent Notice Teaser */}
      <div className="px-4">
        <h3 className="text-slate-800 font-bold text-lg mb-3 px-1">সাম্প্রতিক নোটিশ</h3>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex gap-4">
            <div className="flex flex-col items-center justify-center bg-slate-50 rounded-xl px-3 py-1 min-w-[60px]">
                <span className="text-xl font-bold text-primary-600">১৫</span>
                <span className="text-[10px] text-slate-500 uppercase">Feb</span>
            </div>
            <div>
                <h4 className="font-semibold text-slate-700 text-sm line-clamp-1">বার্ষিক সাধারণ সভা (AGM)</h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">আগামী ১৫ই ফেব্রুয়ারি বিল্ডিং এর ছাদে বার্ষিক সাধারণ সভা অনুষ্ঠিত হবে।</p>
            </div>
        </div>
      </div>

    </div>
  );
};