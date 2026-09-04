"use client";

import Image from "next/image";
import { 
    PawPrint, 
    ShieldCheck, 
    AlertTriangle, 
    FileText,
    Sparkles
} from 'lucide-react';

const MascotasComponent = () => {

    return (
        <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto py-8">
            
            {/* Card principal */}
            <div className="relative border-2 border-orange-500/40 dark:border-orange-400/40 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 overflow-hidden">
                
                {/* Borde decorativo superior naranja */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500"></div>
                
                {/* Contenido interno */}
                <div className="p-6 md:p-8">
                    
                    {/* Banner Principal */}
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 p-6 md:p-8 text-white shadow-lg mb-6">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                                    <Image
                                        src={'/logo vista azul original.png'}
                                        alt='Icono de mascotas'
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 md:w-24 md:h-24 object-contain"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                                    <div className="bg-white/20 p-1.5 rounded-full">
                                        <PawPrint className="w-5 h-5 text-amber-300" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-amber-200">
                                        Normativas del Condominio
                                    </span>
                                </div>
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
                                    NORMATIVAS PARA MASCOTAS
                                </h1>
                                <p className="text-orange-100 mt-2 text-sm md:text-base font-medium">
                                    🐾 Conoce las reglas para la convivencia con tus mascotas
                                </p>
                            </div>
                        </div>
                    </div>

                      {/* Nota importante - Texto original */}
                    <div className="rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-400 dark:border-amber-600 p-4 space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                            <div className="bg-amber-500 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                                <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <p className="font-bold text-amber-800 dark:text-amber-300 text-sm">
                                    📌 Importante
                                </p>
                                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed mt-1">
                                    Prohibida la tenencia de animales de gran porte y/o feroces dentro del conjunto. Solo se permiten mascotas domésticas: perros, gatos o pájaros.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Artículos del reglamento - Texto original */}
                    <div className="space-y-4 mb-6">
                        {/* Artículo 16 */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-300 dark:border-blue-600 p-5 transition-all duration-300 hover:shadow-lg">
                            <div className="flex items-start gap-3">
                                <div className="bg-blue-500 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                                    <FileText className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-blue-800 dark:text-blue-300">
                                        ARTÍCULO 16:
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-1">
                                        Las mascotas pueden estar en lugares de uso común siempre y cuando se encuentren acompañados por sus dueños, estén sujetos con collar y vacunados contra la rabia y otras enfermedades. Los animales de carácter agresivo (mayores de 25 kilos) deben portar bozal.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Artículo 17 */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-300 dark:border-green-600 p-5 transition-all duration-300 hover:shadow-lg">
                            <div className="flex items-start gap-3">
                                <div className="bg-green-500 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                                    <ShieldCheck className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-green-800 dark:text-green-300">
                                        ARTÍCULO 17:
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-1">
                                        El dueño responderá por las defecaciones de su mascota, por lo cual estará obligado a recoger sus desechos, colocarlos en bolsas plásticas y botarlos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Artículo 18 */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border-2 border-red-300 dark:border-red-600 p-5 transition-all duration-300 hover:shadow-lg">
                            <div className="flex items-start gap-3">
                                <div className="bg-red-500 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                                    <AlertTriangle className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-red-800 dark:text-red-300">
                                        ARTÍCULO 18:
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-1">
                                        Aquellas personas que saquen sus mascotas a pasear, responderán ante la comunidad por los daños que estos puedan ocasionar a la grama, los jardines o cualquiera de las instalaciones del conjunto, y estarán obligados a reparar los daños y cubrir los gastos que ocasione su negligencia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                  

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                            JUNTA DE CONDOMINIO
                        </p>
                        <div className="flex items-center justify-center gap-2 mt-1">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></span>
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            <span className="w-8 h-0.5 bg-gradient-to-l from-orange-500 to-amber-500 rounded-full"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MascotasComponent;