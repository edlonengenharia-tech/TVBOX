import { categories } from '../data/apps';

interface SidebarProps {
  onClose: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-72 bg-gray-900/95 backdrop-blur-xl border-r border-white/10 z-50 shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <i className="fas fa-tv text-sm"></i>
                </div>
                <div>
                  <h2 className="font-bold text-lg">TV Box</h2>
                  <p className="text-xs text-gray-400">Launcher v2.0</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
              >
                <i className="fas fa-times text-gray-400"></i>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
              Categorías
            </p>
            <ul className="space-y-1">
              <li>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-blue-600/20 text-blue-400 transition-colors">
                  <i className="fas fa-th-large w-5"></i>
                  <span className="text-sm font-medium">Todas las apps</span>
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat.id}>
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-gray-300 transition-colors">
                    <i className={`${cat.icon} w-5 text-center text-gray-500`}></i>
                    <span className="text-sm">{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>

            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 mt-6 px-3">
              Sistema
            </p>
            <ul className="space-y-1">
              <li>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-gray-300 transition-colors">
                  <i className="fas fa-download w-5 text-center text-gray-500"></i>
                  <span className="text-sm">Actualizaciones</span>
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">3</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-gray-300 transition-colors">
                  <i className="fas fa-wifi w-5 text-center text-gray-500"></i>
                  <span className="text-sm">Red y Internet</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-gray-300 transition-colors">
                  <i className="fas fa-hdd w-5 text-center text-gray-500"></i>
                  <span className="text-sm">Almacenamiento</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-gray-300 transition-colors">
                  <i className="fas fa-bluetooth-b w-5 text-center text-gray-500"></i>
                  <span className="text-sm">Bluetooth</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-gray-300 transition-colors">
                  <i className="fas fa-display w-5 text-center text-gray-500"></i>
                  <span className="text-sm">Pantalla</span>
                </button>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-500/10 text-red-400 transition-colors">
              <i className="fas fa-power-off w-5 text-center"></i>
              <span className="text-sm font-medium">Apagar</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
