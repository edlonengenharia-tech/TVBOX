import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import FeaturedBanner from './components/FeaturedBanner';
import AppGrid from './components/AppGrid';
import Sidebar from './components/Sidebar';
import AppModal from './components/AppModal';
import { AppItem, Category } from './types';
import { apps, categories } from './data/apps';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  const filteredApps = selectedCategory === 'all' 
    ? apps 
    : apps.filter(app => app.category === selectedCategory);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedApp) {
      if (e.key === 'Escape') setSelectedApp(null);
      return;
    }

    switch(e.key) {
      case 'ArrowRight':
        setFocusedIndex(prev => Math.min(prev + 1, filteredApps.length - 1));
        break;
      case 'ArrowLeft':
        setFocusedIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'ArrowDown':
        setFocusedIndex(prev => Math.min(prev + 4, filteredApps.length - 1));
        break;
      case 'ArrowUp':
        setFocusedIndex(prev => Math.max(prev - 4, 0));
        break;
      case 'Enter':
        if (filteredApps[focusedIndex]) {
          setSelectedApp(filteredApps[focusedIndex]);
        }
        break;
      case 'Escape':
        setShowSidebar(false);
        break;
    }
  }, [focusedIndex, filteredApps, selectedApp]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden relative">
      {/* Background animated gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-[150px] animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-600 rounded-full filter blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col h-screen">
        <Header onMenuClick={() => setShowSidebar(!showSidebar)} />
        
        <main className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-thin">
          <FeaturedBanner />
          
          {/* Categories */}
          <div className="flex items-center gap-3 mb-6 mt-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Todas
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <i className={cat.icon}></i>
                {cat.name}
              </button>
            ))}
          </div>

          {/* App Grid */}
          <AppGrid
            apps={filteredApps}
            focusedIndex={focusedIndex}
            onFocusChange={setFocusedIndex}
            onAppClick={setSelectedApp}
          />
        </main>
      </div>

      {/* Sidebar */}
      {showSidebar && <Sidebar onClose={() => setShowSidebar(false)} />}

      {/* App Modal */}
      {selectedApp && (
        <AppModal app={selectedApp} onClose={() => setSelectedApp(null)} />
      )}
    </div>
  );
}

export default App;
