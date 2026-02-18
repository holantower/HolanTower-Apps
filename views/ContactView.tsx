import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactView: React.FC = () => {
  const contacts = [
    { name: 'ম্যানেজার (করিম সাহেব)', role: 'বিল্ডিং ম্যানেজার', phone: '01700000000' },
    { name: 'সিকিউরিটি গেট', role: '২৪/৭ সাপোর্ট', phone: '01800000000' },
    { name: 'লিফট মেইনটেনেন্স', role: 'টেকনিক্যাল', phone: '01900000000' },
    { name: 'ইলেকট্রিশিয়ান', role: 'অন-কল', phone: '01600000000' },
  ];

  return (
    <div className="px-4 py-6 pb-24 animate-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">যোগাযোগ</h2>

      <div className="space-y-4">
        {contacts.map((contact, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-800">{contact.name}</h3>
              <p className="text-xs text-slate-500">{contact.role}</p>
            </div>
            <a href={`tel:${contact.phone}`} className="p-3 bg-green-50 text-green-600 rounded-full hover:bg-green-100 transition-colors">
              <Phone size={20} />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-bold text-slate-800 mb-3">অফিস ঠিকানা</h3>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3">
            <div className="flex items-start gap-3">
                <MapPin size={20} className="text-slate-400 mt-0.5" />
                <p className="text-sm text-slate-600">প্লট-৫, রোড-১২, সেক্টর-১০<br/>উত্তরা, ঢাকা-১২৩০</p>
            </div>
            <div className="flex items-center gap-3">
                <Mail size={20} className="text-slate-400" />
                <p className="text-sm text-slate-600">admin@greenvilla.com</p>
            </div>
        </div>
      </div>
    </div>
  );
};