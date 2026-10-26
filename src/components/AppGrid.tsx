import { AppItem } from '../types';

interface AppGridProps {
  apps: AppItem[];
  focusedIndex: number;
  onFocusChange: (index: number) => void;
  onAppClick: (app: AppItem) => void;
}

export default function AppGrid({ apps, focusedIndex, onFocusChange, onAppClick }: AppGridProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
      {apps.map((app, index) => (
        <button
          key={app.id}
          onClick={() => onAppClick(app)}
          onMouseEnter={() => onFocusChange(index)}
          className={`group relative flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 ${
            index === focusedIndex
              ? 'bg-white/15 scale-105 shadow-xl shadow-blue-500/10 ring-2 ring-blue-400/50'
              : 'bg-white/5 hover:bg-white/10 hover:scale-102'
          }`}
        >
          {/* App Icon */}
          <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
            <i className={`${app.icon} text-xl md:text-2xl text-white`}></i>
          </div>
          
          {/* App Name */}
          <span className="text-xs md:text-sm text-center text-gray-200 font-medium truncate w-full">
            {app.name}
          </span>

          {/* Focus indicator */}
          {index === focusedIndex && (
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-400 rounded-full"></div>
          )}
        </button>
      ))}
    </div>
  );
}
