import { useState, useEffect } from 'react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black/30 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
        >
          <i className="fas fa-bars text-lg"></i>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <i className="fas fa-tv text-xs"></i>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            TV Box
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Network status */}
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
          <i className="fas fa-wifi text-green-400"></i>
          <span>Conectado</span>
        </div>

        {/* Date */}
        <div className="hidden sm:block text-right">
          <p className="text-xs text-gray-400 capitalize">{formatDate(time)}</p>
        </div>

        {/* Time */}
        <div className="text-right">
          <p className="text-2xl font-light tracking-wider">{formatTime(time)}</p>
        </div>

        {/* Battery */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center">
            <div className="w-6 h-3 border border-gray-400 rounded-sm relative">
              <div className="absolute inset-0.5 bg-green-400 rounded-sm" style={{width: '80%'}}></div>
            </div>
            <div className="w-0.5 h-1.5 bg-gray-400 rounded-r-sm ml-0.5"></div>
          </div>
          <span className="text-xs text-gray-400">85%</span>
        </div>
      </div>
    </header>
  );
}
