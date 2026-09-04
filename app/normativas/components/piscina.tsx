"use client";

import Image from "next/image";
import { 
    Clock, 
    Sparkles, 
    Users, 
    ShieldCheck, 
    Droplets,
    Baby,
    Waves
} from 'lucide-react';

const PiscinaComponent = () => {

    return (
        <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto py-8">
            
            {/* Card principal */}
            <div className="relative border-2 border-blue-500/40 dark:border-blue-400/40 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 overflow-hidden">
                
                {/* Borde decorativo superior azul */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
                
                {/* Contenido interno */}
                <div className="p-6 md:p-8">
                    
                    {/* Banner Principal */}
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 p-6 md:p-8 text-white shadow-lg mb-6">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                                    <Image
                                        src={'/logo vista azul original.png'}
                                        alt='logo'
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 md:w-24 md:h-24 object-contain"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                                    <div className="bg-white/20 p-1.5 rounded-full">
                                        <Waves className="w-5 h-5 text-cyan-300" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                                        Normativas del Condominio
                                    </span>
                                </div>
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
                                    NORMATIVAS DE LA PISCINA
                                </h1>
                                <p className="text-cyan-100 mt-2 text-sm md:text-base font-medium">
                                    🏊‍♂️ Disfruta responsablemente de nuestras instalaciones
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Grid de normas destacadas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-600 p-3 text-center transition-all duration-300 hover:shadow-lg">
                            <div className="flex justify-center mb-1">
                                <div className="bg-blue-500/20 p-2 rounded-full">
                                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                            </div>
                            <p className="text-xs font-bold text-blue-800 dark:text-blue-300">Horario</p>
                            <p className="text-[10px] text-gray-600 dark:text-gray-400">9:00 AM - 7:00 PM</p>
                        </div>

                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-600 p-3 text-center transition-all duration-300 hover:shadow-lg">
                            <div className="flex justify-center mb-1">
                                <div className="bg-blue-500/20 p-2 rounded-full">
                                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                            </div>
                            <p className="text-xs font-bold text-blue-800 dark:text-blue-300">Máx. Personas</p>
                            <p className="text-[10px] text-gray-600 dark:text-gray-400">4 por Town House</p>
                        </div>

                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-600 p-3 text-center transition-all duration-300 hover:shadow-lg">
                            <div className="flex justify-center mb-1">
                                <div className="bg-blue-500/20 p-2 rounded-full">
                                    <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                            </div>
                            <p className="text-xs font-bold text-blue-800 dark:text-blue-300">Requisito</p>
                            <p className="text-[10px] text-gray-600 dark:text-gray-400">Estar al día con condominio</p>
                        </div>

                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-600 p-3 text-center transition-all duration-300 hover:shadow-lg">
                            <div className="flex justify-center mb-1">
                                <div className="bg-blue-500/20 p-2 rounded-full">
                                    <Baby className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                            </div>
                            <p className="text-xs font-bold text-blue-800 dark:text-blue-300">Menores</p>
                            <p className="text-[10px] text-gray-600 dark:text-gray-400">-13 años con representante</p>
                        </div>
                    </div>

                    {/* Lista de normas - Texto original */}
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-300 dark:border-blue-600 p-5 mb-6">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-blue-500 rounded-full p-1.5">
                                <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="text-sm font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wider">
                                Reglamento de Uso
                            </h3>
                        </div>
                        
                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                            <li className="flex items-start gap-2 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">1.</span>
                                <span><span className="font-semibold">Horario para el uso de la piscina:</span> de martes a domingo entre 9:00 AM y 7:00 PM.</span>
                            </li>
                            <li className="flex items-start gap-2 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">2.</span>
                                <span><span className="font-semibold">Día lunes:</span> mantenimiento y limpieza de la piscina.</span>
                            </li>
                            <li className="flex items-start gap-2 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">3.</span>
                                <span><span className="font-semibold">Todos debemos respetar</span> las normas de la moral y las buenas costumbres.</span>
                            </li>
                            <li className="flex items-start gap-2 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">4.</span>
                                <span>Para el uso de la piscina es obligatorio <span className="font-semibold">estar al día con el condominio.</span></span>
                            </li>
                            <li className="flex items-start gap-2 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">5.</span>
                                <span>Solo se permiten <span className="font-semibold">cuatro (4) personas por Town House.</span></span>
                            </li>
                            <li className="flex items-start gap-2 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">6.</span>
                                <span>Antes de ingresar a la piscina <span className="font-semibold">debe ducharse.</span></span>
                            </li>
                            <li className="flex items-start gap-2 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">7.</span>
                                <span>Ingresar a la piscina solo con la vestimenta adecuada, <span className="font-semibold">sin fibras que puedan dañar los filtros como jeans, metales u otros.</span></span>
                            </li>
                            <li className="flex items-start gap-2 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">8.</span>
                                <span>Mantener <span className="font-semibold">limpias las instalaciones,</span> utilice las papeleras.</span>
                            </li>
                            <li className="flex items-start gap-2 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">9.</span>
                                <span><span className="font-semibold">Todo niño menor de trece (13) años</span> debe estar obligatoriamente acompañado de su representante.</span>
                            </li>
                            <li className="flex items-start gap-2 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">10.</span>
                                <span>El uso de equipos de sonido no podrá ser con exceso de volumen que perturbe la tranquilidad.</span>
                            </li>
                            <li className="flex items-start gap-2 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">11.</span>
                                <span>Prohibido el consumo de alimentos o bebidas dentro y alrededor de la piscina. Por favor, utilice los caneyes.</span>
                            </li>
                            <li className="flex items-start gap-2 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">12.</span>
                                <span>Prohibidos juegos, clavados, carreras y prácticas peligrosas dentro y fuera de la piscina.</span>
                            </li>
                            <li className="flex items-start gap-2 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">13.</span>
                                <span>No se permiten flotadores, colchonetas e inflables similares dentro de la piscina.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Nota importante */}
                    <div className="rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-400 dark:border-blue-600 p-4">
                        <div className="flex items-start gap-3">
                            <div className="bg-blue-500 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                                <Droplets className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <p className="font-bold text-blue-800 dark:text-blue-300 text-sm">
                                    📌 Recuerda
                                </p>
                                <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed mt-1">
                                    El día lunes la piscina permanece cerrada por mantenimiento y limpieza. 
                                    ¡Disfruta responsablemente y respeta las normas para el bienestar de todos!
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

export default PiscinaComponent;