const BannerNavidad = () => {
    return (
        <div className="rounded-3xl shadow-xl ">
            <div className="relative min-h-screen bg-gradient-to-b from-green-900 via-red-900 to-blue-900 overflow-hidden sm:p-12 rounded-b-3xl">
                {/* Fondos decorativos */}
                <div className="absolute inset-0">
                    {/* Estrellas */}
                    <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-300 rounded-full animate-twinkle"></div>
                    <div className="absolute top-20 right-20 w-3 h-3 bg-yellow-200 rounded-full animate-twinkle delay-300"></div>
                    <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-yellow-300 rounded-full animate-twinkle delay-700"></div>

                    {/* Copos de nieve */}
                    <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full animate-fall-slow"></div>
                    <div className="absolute top-0 left-1/3 w-1 h-1 bg-white rounded-full animate-fall-medium delay-500"></div>
                    <div className="absolute top-0 left-2/3 w-1 h-1 bg-white rounded-full animate-fall-fast delay-300"></div>
                </div>

                {/* Contenido principal */}
                <div className="relative z-10 container mx-auto px-4 py-12 text-center">

                    {/* Título principal */}
                    <div className="mb-8">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-pulse">
                            🎄 ¡FELIZ NAVIDAD 2025! 🎅
                        </h1>
                        <p className="text-xl md:text-2xl text-yellow-200 font-semibold">
                            Condominio <span className="text-white">Terrazas de Vista Azul</span>
                        </p>
                    </div>

                    {/* Sección del video */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <div className="bg-gradient-to-r from-red-800 to-green-800 p-1 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                            <div className="bg-gray-900 rounded-xl p-4">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                                    <span className="text-yellow-300">✨</span>
                                    ENCENDIDO NAVIDEÑO 2025
                                    <span className="text-yellow-300">✨</span>
                                </h2>

                                {/* Contenedor del video */}
                                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                    <video
                                        className="w-full h-auto max-h-[600px] object-cover"
                                        controls
                                        autoPlay
                                        muted
                                        loop
                                        poster="/poster-navidad.jpg" 
                                    >
                                        <source src="/navidad/video-encendido.mp4" type="video/mp4" />
                                        <p className="text-white p-8">
                                            Tu navegador no soporta el video.
                                            <a href="/encendido-navidad-2025.mp4" className="text-yellow-300 underline">
                                                Descárgalo aquí
                                            </a>
                                        </p>
                                    </video>

                                    {/* Decoración en las esquinas del video */}
                                    <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-yellow-400"></div>
                                    <div className="absolute top-0 right-0 w-12 h-12 border-r-4 border-t-4 border-yellow-400"></div>
                                    <div className="absolute bottom-0 left-0 w-12 h-12 border-l-4 border-b-4 border-yellow-400"></div>
                                    <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-yellow-400"></div>
                                </div>

                                {/* Descripción del video */}
                                <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                                    <p className="text-white text-lg">
                                        <span className="text-yellow-300 font-bold">🎬 Video especial: </span>
                                        Revive el mágico momento del encendido de luces navideñas en nuestro condominio.
                                        Un recuerdo que iluminará nuestros corazones durante esta temporada.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mensaje de bienvenida */}
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-3xl font-bold text-yellow-300 mb-4">¡LLEGÓ LA NAVIDAD!</h3>
                            <p className="text-white text-lg leading-relaxed">
                                Que esta temporada esté llena de alegría, paz y unión familiar.
                                Les deseamos una Navidad llena de bendiciones
                                y un Próspero Año Nuevo 2026.
                            </p>
                        </div>
                    </div>

                    {/* Elementos decorativos adicionales */}
                    <div className="flex flex-wrap justify-center gap-8 mt-12">
                        <div className="flex items-center gap-2 text-white">
                            <span className="text-3xl">🏠</span>
                            <span className="text-lg">Hogar Seguro</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <span className="text-3xl">❤️</span>
                            <span className="text-lg">Unión Familiar</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <span className="text-3xl">🌟</span>
                            <span className="text-lg">Iluminación Especial</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <span className="text-3xl">🎁</span>
                            <span className="text-lg">Espíritu Navideño</span>
                        </div>
                    </div>
                </div>

                {/* Animaciones CSS para añadir a tu archivo de estilos */}
                <style jsx>{`
    @keyframes twinkle {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
    @keyframes fall-slow {
      0% { transform: translateY(-100px) rotate(0deg); }
      100% { transform: translateY(100vh) rotate(360deg); }
    }
    @keyframes fall-medium {
      0% { transform: translateY(-100px) rotate(0deg); }
      100% { transform: translateY(100vh) rotate(180deg); }
    }
    @keyframes fall-fast {
      0% { transform: translateY(-100px) rotate(0deg); }
      100% { transform: translateY(100vh) rotate(90deg); }
    }
    .animate-twinkle {
      animation: twinkle 3s infinite;
    }
    .animate-fall-slow {
      animation: fall-slow 10s linear infinite;
    }
    .animate-fall-medium {
      animation: fall-medium 7s linear infinite;
    }
    .animate-fall-fast {
      animation: fall-fast 5s linear infinite;
    }
  `}</style>
            </div>

        </div>

    );
}

export default BannerNavidad;