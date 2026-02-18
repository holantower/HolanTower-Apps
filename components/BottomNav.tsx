import React from 'react';
import { Home, Zap, CreditCard, Phone, Grid } from 'lucide-react';
import { PageView } from '../types';

interface BottomNavProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentView, onNavigate }) => {
  
  const navItems = [
    { view: PageView.SERVICE_CHARGE, label: 'সার্ভিস চার্জ', icon: CreditCard },
    { view: PageView.DESCO, label: 'ডেসকো', icon: Zap },
    { view: PageView.HOME, label: 'হোম', icon: Home, isMain: true },
    { view: PageView.CONTACT, label: 'যোগাযোগ', icon: Phone },
    { view: PageView.MENU, label: 'মেনু', icon: Grid },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] border-t border-slate-100 pb-safe z-50">
      <div className="flex justify-around items-end pb-2 pt-2 px-2">
        {navItems.map((item) => {
          const isActive = currentView === item.view;
          const Icon = item.icon;
          
          if (item.isMain) {
            return (
              <button
                key={item.view}
                onClick={() => onNavigate(item.view)}
                className="relative -top-5 group"
              >
                <div className={`
                  w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300
                  ${isActive 
                    ? 'bg-primary-600 text-white scale-110 shadow-primary-500/40' 
                    : 'bg-white text-primary-600 border border-slate-100'}
                `}>
                  <Icon size={28} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={`text-[10px] font-medium absolute -bottom-4 left-1/2 transform -translate-x-1/2 transition-colors ${isActive ? 'text-primary-700' : 'text-slate-500'}`}>
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={item.view}
              onClick={() => onNavigate(item.view)}
              className="flex flex-col items-center justify-center w-16 py-1 group active:scale-95 transition-transform"
            >
              <div className={`
                p-1.5 rounded-xl transition-all duration-300 mb-1
                ${isActive ? 'bg-primary-50 text-primary-600' : 'text-slate-400 hover:text-slate-600'}
              `}>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              </div>
              <span className={`text-[10px] font-medium transition-colors ${isActive ? 'text-primary-700' : 'text-slate-400'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      {/* Safe area spacer for mobile */}
      <div className="h-4 w-full"></div> 
    </div>
  );
};