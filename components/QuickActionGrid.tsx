import React from 'react';
import { PageView, MenuItem } from '../types';
import { CreditCard, Zap, Home as HomeIcon, Phone, ClipboardList, AlertTriangle } from 'lucide-react';

interface QuickActionGridProps {
  onNavigate: (view: PageView) => void;
}

export const QuickActionGrid: React.FC<QuickActionGridProps> = ({ onNavigate }) => {
  
  const actions: MenuItem[] = [
    { id: '1', title: 'সার্ভিস চার্জ', icon: CreditCard, view: PageView.SERVICE_CHARGE, color: 'bg-blue-500' },
    { id: '2', title: 'ডেসকো রিচার্জ', icon: Zap, view: PageView.DESCO, color: 'bg-yellow-500' },
    { id: '3', title: 'বাসা ভাড়া / টুলেট', icon: HomeIcon, view: PageView.TO_LET, color: 'bg-emerald-500' },
    { id: '4', title: 'জরুরী যোগাযোগ', icon: Phone, view: PageView.CONTACT, color: 'bg-rose-500' },
    { id: '5', title: 'অভিযোগ বক্স', icon: ClipboardList, view: PageView.CONTACT, color: 'bg-purple-500' },
    { id: '6', title: 'নোটিশ বোর্ড', icon: AlertTriangle, view: PageView.NOTICE, color: 'bg-orange-500' },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 px-4 py-6">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <button
            key={action.id}
            onClick={() => onNavigate(action.view)}
            className="flex flex-col items-center justify-center p-3 bg-white rounded-2xl shadow-sm border border-slate-100 active:scale-95 transition-all hover:shadow-md"
          >
            <div className={`w-12 h-12 rounded-full ${action.color} bg-opacity-10 flex items-center justify-center mb-2`}>
              <Icon size={24} className={action.color.replace('bg-', 'text-')} />
            </div>
            <span className="text-xs font-medium text-slate-700 text-center leading-tight">
              {action.title}
            </span>
          </button>
        );
      })}
    </div>
  );
};