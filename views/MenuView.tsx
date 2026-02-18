import React from 'react';
import { PageView } from '../types';
import { CreditCard, Zap, Home as HomeIcon, Phone, User, Settings, HelpCircle, LogOut, FileText, Bell, Calculator } from 'lucide-react';

interface MenuViewProps {
    onNavigate: (view: PageView) => void;
}

export const MenuView: React.FC<MenuViewProps> = ({ onNavigate }) => {
  const menuItems = [
    { icon: Calculator, label: 'ইউটিলিটি সার্ভিস চার্জ হিসাব', desc: 'মাসিক হিসাব ও বকেয়া', view: PageView.SERVICE_CHARGE },
    { icon: CreditCard, label: 'পেমেন্ট হিস্ট্রি', desc: 'সকল লেনদেনের তালিকা', view: null },
    { icon: HomeIcon, label: 'বাসা ভাড়া / টুলেট', desc: 'ফ্ল্যাট ভাড়ার বিজ্ঞাপন', view: PageView.TO_LET },
    { icon: FileText, label: 'নিয়মাবলী', desc: 'বিল্ডিং এর আচরণবিধি', view: null },
    { icon: Bell, label: 'নোটিশ আর্কাইভ', desc: 'পূর্বের নোটিশগুলো দেখুন', view: PageView.NOTICE },
    { icon: Settings, label: 'সেটিংস', desc: 'অ্যাপ সেটিংস', view: null },
    { icon: HelpCircle, label: 'সাহায্য', desc: 'সচরাচর জিজ্ঞাসিত প্রশ্ন', view: null },
  ];

  return (
    <div className="px-4 py-6 pb-24 animate-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">মেনু</h2>

      <div className="grid grid-cols-1 gap-3">
        {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
                <button 
                    key={idx} 
                    onClick={() => item.view && onNavigate(item.view)}
                    className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm active:bg-slate-50 transition-colors text-left hover:shadow-md"
                >
                    <div className="p-3 bg-slate-50 rounded-lg text-slate-600">
                        <Icon size={24} />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-slate-800">{item.label}</h4>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                </button>
            )
        })}
        
        <button className="flex items-center gap-4 bg-red-50 p-4 rounded-xl border border-red-100 shadow-sm mt-4 active:bg-red-100 transition-colors text-left group">
            <div className="p-3 bg-white rounded-lg text-red-500 group-hover:text-red-600">
                <LogOut size={24} />
            </div>
            <div className="flex-1">
                <h4 className="font-bold text-red-600">লগ আউট</h4>
            </div>
        </button>
      </div>
    </div>
  );
};