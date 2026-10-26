import { useState, useEffect } from 'react';

const banners = [
  {
    title: 'Netflix',
    subtitle: 'Nuevas series cada semana',
    description: 'Descubre los estrenos más esperados del mes',
    gradient: 'from-red-900/80 via-red-800/60 to-transparent',
    icon: 'fas fa-film',
    color: 'red',
  },
  {
    title: 'YouTube Premium',
    subtitle: 'Sin anuncios, con música',
    description: 'Disfruta de contenido sin interrupciones',
    gradient: 'from-red-700/80 via-red-600/60 to-transparent',
    icon: 'fab fa-youtube',
    color: 'red',
  },
  {
    title: 'Disney+',
    subtitle: 'La magia de Disney en tu TV',
    description: 'Todas las historias que amas en un solo lugar',
    gradient: 'from-indigo-900/80 via-indigo-800/60 to-transparent',
    icon: 'fas fa-star',
    color: 'indigo',
  },
  {
    title: 'Spotify',
    subtitle: 'Tu música, tu momento',
    description: 'Millones de canciones y podcasts gratis',
    gradient: 'from-green-900/80 via-green-800/60 to-transparent',
    icon: 'fab fa-spotify',
    color: 'green',
  },
];

export default function FeaturedBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const banner = banners[current];

  return (
    <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden mt-4 group cursor-pointer">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${banner.gradient} transition-all duration-700`}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 opacity-10">
        <i className={`${banner.icon} text-[120px] md:text-[180px]`}></i>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-white/20 rounded text-xs font-medium backdrop-blur-sm">
            DESTACADO
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold mb-1">{banner.title}</h2>
        <p className="text-lg md:text-xl text-gray-200 font-medium">{banner.subtitle}</p>
        <p className="text-sm text-gray-400 mt-1">{banner.description}</p>
        
        <button className="mt-4 px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-sm font-medium transition-all duration-300 w-fit">
          <i className="fas fa-play mr-2"></i>Abrir
        </button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
