import React from 'react';
import { Volume2 } from 'lucide-react';

export const NoticeBoard: React.FC = () => {
  const notices = "হলান টাওয়ার সার্ভিসসমূহ — ভবনের সকল গুরুত্বপূর্ণ তথ্য ও দৈনন্দিন সেবাগুলি দ্রুত পাওয়ার জন্য এই অ্যাপটি তৈরি করা হয়েছে। এখানে জরুরী নোটিশ, ইউটিলিটি ও সার্ভিস চার্জ, ডেসকো প্রিপেইড মিটার রিচার্জ সরাসরি, যোগাযোগ ও জরুরী হেল্পলাইন, ম্যাপ ও রুট নির্দেশনা, প্রিপেইড মিটার নাম্বার, লিফট ব্যবহারের নিয়ম, গ্যালারি এবং বাসাভাড়ার তথ্য একসাথে সহজে খুঁজে পাবেন। এটি হলান টাওয়ারের বাসিন্দাদের জন্য একটি দ্রুত, সহজ ও নির্ভরযোগ্য ডিজিটাল সার্ভিস কেন্দ্র।";

  return (
    <div className="bg-primary-50 border-b border-primary-100 py-2 relative overflow-hidden flex items-center">
      <div className="flex-shrink-0 px-3 z-10 bg-primary-50 text-primary-700 flex items-center gap-1 border-r border-primary-200">
        <Volume2 size={16} className="animate-pulse" />
        <span className="text-sm font-bold">নোটিশ</span>
      </div>
      <div className="flex-1 overflow-hidden relative h-6">
        <div className="animate-marquee whitespace-nowrap absolute top-0 text-sm text-slate-700 font-medium leading-6">
          {notices}
        </div>
      </div>
    </div>
  );
};