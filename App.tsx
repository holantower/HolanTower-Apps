import React, { useState } from 'react';
import { Header } from './components/Header';
import { NoticeBoard } from './components/NoticeBoard';
import { BottomNav } from './components/BottomNav';
import { HomeView } from './views/HomeView';
import { ServiceChargeView } from './views/ServiceChargeView';
import { DescoView } from './views/DescoView';
import { ContactView } from './views/ContactView';
import { MenuView } from './views/MenuView';
import { PageView } from './types';

function App() {
  const [currentView, setCurrentView] = useState<PageView>(PageView.HOME);

  const renderView = () => {
    switch (currentView) {
      case PageView.HOME:
        return <HomeView onNavigate={setCurrentView} />;
      case PageView.SERVICE_CHARGE:
        return <ServiceChargeView />;
      case PageView.DESCO:
        return <DescoView />;
      case PageView.CONTACT:
        return <ContactView />;
      case PageView.MENU:
        return <MenuView onNavigate={setCurrentView} />;
      case PageView.TO_LET:
        return (
             <div className="p-10 text-center text-slate-500 animate-in fade-in">
                <h2 className="text-xl font-bold mb-2">বাসা ভাড়া / টুলেট</h2>
                <p>শীঘ্রই আসছে...</p>
                <button onClick={() => setCurrentView(PageView.HOME)} className="mt-4 text-primary-600 font-medium">ফিরে যান</button>
             </div>
        );
      case PageView.NOTICE:
         return (
             <div className="p-10 text-center text-slate-500 animate-in fade-in">
                <h2 className="text-xl font-bold mb-2">নোটিশ বোর্ড</h2>
                 <p>সকল নোটিশের তালিকা শীঘ্রই আসছে...</p>
                 <button onClick={() => setCurrentView(PageView.HOME)} className="mt-4 text-primary-600 font-medium">ফিরে যান</button>
             </div>
         );
      default:
        return <HomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <NoticeBoard />
      
      <main className="max-w-md mx-auto w-full min-h-[calc(100vh-140px)]">
        {renderView()}
      </main>

      <BottomNav currentView={currentView} onNavigate={setCurrentView} />
    </div>
  );
}

export default App;