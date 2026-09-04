/* eslint-disable @next/next/no-img-element */
"use client";

import { 
    Sparkles,
    Waves,
    Trees,
    PartyPopper,
    Flower2,
    Sun
} from 'lucide-react';
import SeccionClima from "./secction_clima";

const Eventos = () => {
    const images = [
        { 
            id: 1, 
            src: "/fotos-accesos-directos/foto_piscina_1.jpg", 
            alt: "Piscina", 
            evento: "Piscina",
            icon: Waves,
            color: "from-blue-500 to-cyan-500"
        },
        { 
            id: 2, 
            src: "/fotos-accesos-directos/foto_cancha_1.jpg", 
            alt: "Cancha", 
            evento: "Cancha",
            icon: Trees,
            color: "from-green-500 to-emerald-500"
        },
        { 
            id: 3, 
            src: "/fotos-accesos-directos/foto_caney_1.jpg", 
            alt: "Caney de Eventos", 
            evento: "Caney de Eventos",
            icon: PartyPopper,
            color: "from-orange-500 to-amber-500"
        },
        { 
            id: 4, 
            src: "/fotos-accesos-directos/foto_parque_1.jpg", 
            alt: "Parque Infantil", 
            evento: "Parque Infantil",
            icon: Flower2,
            color: "from-pink-500 to-rose-500"
        },
    ];

    return (
        <div id="eventos" className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto py-8">
            
            {/* Card principal */}
            <div className="relative border-2 border-emerald-500/40 dark:border-emerald-400/40 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 overflow-hidden">
                
                {/* Borde decorativo superior verde */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500"></div>
                
                {/* Contenido interno */}
                <div className="p-6 md:p-8">
                    
                    {/* Banner Principal */}
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 p-6 md:p-8 text-white shadow-lg mb-6">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <Sparkles className="w-6 h-6 text-emerald-300 animate-pulse" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                                    Conoce Nuestras Instalaciones
                                </span>
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
                                Áreas Sociales
                            </h1>
                            <p className="text-emerald-100 mt-2 text-base md:text-lg font-medium">
                                🌿 Disfruta de nuestros espacios diseñados para tu bienestar
                            </p>
                        </div>
                    </div>

                    {/* Grid de imágenes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {images.map((image) => {
                            const Icon = image.icon;
                            return (
                                <div 
                                    key={image.id} 
                                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Imagen */}
                                    <div className="relative overflow-hidden aspect-[4/3]">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
                                        />
                                        
                                        {/* Overlay gradiente */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                        
                                        {/* Badge con icono y nombre */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <div className="flex items-center gap-2">
                                                <div className={`bg-gradient-to-r ${image.color} p-2 rounded-full shadow-lg`}>
                                                    <Icon className="w-4 h-4 text-white" />
                                                </div>
                                                <p className="text-sm md:text-base font-bold text-white drop-shadow-lg">
                                                    {image.evento}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Separador decorativo */}
                    <div className="flex items-center justify-center gap-4 my-4">
                        <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-emerald-500 rounded-full"></span>
                        <Sun className="w-5 h-5 text-emerald-500" />
                        <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-emerald-500 rounded-full"></span>
                    </div>

                    {/* Sección Clima */}
                    <div className="rounded-xl overflow-hidden">
                        <SeccionClima />
                    </div>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                             Disfruta de tus áreas sociales
                        </p>
                        <div className="flex items-center justify-center gap-2 mt-1">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></span>
                            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                            <span className="w-8 h-0.5 bg-gradient-to-l from-emerald-500 to-green-500 rounded-full"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Eventos;