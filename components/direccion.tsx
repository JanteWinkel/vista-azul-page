"use client";

import { 
    MapPin, 
    Building2, 
    Map, 
    Mail, 
    Home,
    Navigation,
    LocateFixed
} from 'lucide-react';

const InfoUbicacion = () => {
    return (
        <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto py-8">
            
            {/* Card principal */}
            <div className="relative border-2 border-blue-500/40 dark:border-blue-400/40 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 overflow-hidden">
                
                {/* Borde decorativo superior azul */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>
                
                {/* Contenido interno */}
                <div className="p-6 md:p-8">
                    
                    {/* Banner Principal */}
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 p-6 md:p-8 text-white shadow-lg mb-6">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <Navigation className="w-6 h-6 text-cyan-300 animate-pulse" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                                    Información de Ubicación
                                </span>
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
                                Residencias Terrazas de Vista Azul
                            </h1>
                            <p className="text-cyan-100 mt-2 text-base md:text-lg font-medium">
                                📍 Ubicación y datos de contacto
                            </p>
                        </div>
                    </div>

                    {/* Grid de información - 2 columnas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        
                        {/* Estado */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-600 p-5 transition-all duration-300 hover:shadow-lg group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-1">
                                    <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Estado</p>
                                </div>
                                <p className="text-xl md:text-2xl font-bold text-blue-800 dark:text-blue-300">Nueva Esparta</p>
                            </div>
                        </div>

                        {/* Municipio */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-600 p-5 transition-all duration-300 hover:shadow-lg group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-1">
                                    <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Municipio</p>
                                </div>
                                <p className="text-xl md:text-2xl font-bold text-blue-800 dark:text-blue-300">García</p>
                            </div>
                        </div>

                        {/* Parroquia */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-600 p-5 transition-all duration-300 hover:shadow-lg group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-1">
                                    <Map className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Parroquia</p>
                                </div>
                                <p className="text-xl md:text-2xl font-bold text-blue-800 dark:text-blue-300">Francisco Fajardo</p>
                            </div>
                        </div>

                        {/* Código Postal */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-600 p-5 transition-all duration-300 hover:shadow-lg group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-1">
                                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Código Postal</p>
                                </div>
                                <p className="text-xl md:text-2xl font-bold text-blue-800 dark:text-blue-300">6301</p>
                            </div>
                        </div>
                    </div>

                    {/* Información adicional - Ancho completo */}
                    <div className="grid grid-cols-1 gap-4 mb-6">
                        {/* Sector/Urbanización */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border-2 border-indigo-300 dark:border-indigo-600 p-5 transition-all duration-300 hover:shadow-lg">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-1">
                                    <Home className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                    <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Sector / Urbanización</p>
                                </div>
                                <p className="text-xl md:text-2xl font-bold text-indigo-800 dark:text-indigo-300">Villa Juana - Terrazas de Vista Azul</p>
                            </div>
                        </div>

                        {/* Dirección completa */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-300 dark:border-cyan-600 p-5 transition-all duration-300 hover:shadow-lg">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-1">
                                    <LocateFixed className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                                    <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">Dirección completa para documentos</p>
                                </div>
                                <p className="text-base md:text-lg font-bold text-cyan-800 dark:text-cyan-300 leading-relaxed">
                                    Urbanización Terrazas de Vista Azul, Sector Villa Juana, 
                                    Parroquia Francisco Fajardo, Municipio García, Estado Nueva Esparta
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                            JUNTA DE CONDOMINIO
                        </p>
                        <div className="flex items-center justify-center gap-2 mt-1">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span className="w-8 h-0.5 bg-gradient-to-l from-blue-500 to-cyan-500 rounded-full"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InfoUbicacion;