import { AppItem } from '../types';

interface AppModalProps {
  app: AppItem;
  onClose: () => void;
}

export default function AppModal({ app, onClose }: AppModalProps) {
  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className="bg-gray-900/95 border border-white/10 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Header with gradient */}
          <div className={`relative h-32 bg-gradient-to-br ${app.color} flex items-center justify-center`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <i className={`${app.icon} text-6xl text-white/90 relative z-10`}></i>
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-colors z-20"
            >
              <i className="fas fa-times text-white text-sm"></i>
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-1">{app.name}</h2>
            <p className="text-gray-400 text-sm mb-4">{app.description}</p>

            {/* Stats */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <i className="fas fa-star text-yellow-400 text-sm"></i>
                <span className="text-sm font-medium">{app.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <i className="fas fa-info-circle"></i>
                <span>v{app.version}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <i className="fas fa-hdd"></i>
                <span>{app.size}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className={`flex-1 py-3 rounded-xl bg-gradient-to-r ${app.color} text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg`}>
                <i className="fas fa-play"></i>
                <span>Abrir</span>
              </button>
              <button className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
                <i className="fas fa-cog text-gray-300"></i>
              </button>
              <button className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
                <i className="fas fa-trash text-gray-300"></i>
              </button>
            </div>

            {/* Additional info */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Categoría</p>
                  <p className="text-gray-200 capitalize">{app.category}</p>
                </div>
                <div>
                  <p className="text-gray-500">Estado</p>
                  <p className="text-green-400 flex items-center gap-1">
                    <i className="fas fa-circle text-xs"></i> Instalada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
