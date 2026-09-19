"use client";

import { 
    TrendingDown, 
    Building2, 
    Home, 
    AlertTriangle,
    Calendar,
    DollarSign,
    PieChart,
} from 'lucide-react';

// Deuda General
const deudaPrimeraEtapa = 42406.61;
const deudaSegundaEtapa = 16445.95;
const deudaGeneral = deudaPrimeraEtapa + deudaSegundaEtapa;

const Deudas = () => {
    // Calcular porcentajes
    const porcentajePrimera = (deudaPrimeraEtapa / deudaGeneral) * 100;
    const porcentajeSegunda = (deudaSegundaEtapa / deudaGeneral) * 100;

    return (
        <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto py-8">
            
            {/* Card principal */}
            <div className="relative border-2 border-red-500/30 dark:border-red-400/30 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 overflow-hidden">
                
                {/* Borde decorativo superior rojo */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>
                
                {/* Contenido interno */}
                <div className="p-6 md:p-8">
                    
                    {/* Encabezado */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-red-500/10 p-3 rounded-xl">
                                <TrendingDown className="w-6 h-6 text-red-500" />
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 uppercase">
                                    Deuda General
                                </h2>
                                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                    <Calendar className="w-3 h-3" />
                                    <span>Fecha: 10/07/2026</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-full px-4 py-1.5">
                            <span className="text-xs font-semibold text-red-600 dark:text-red-400">
                                ⚠️ Saldo Pendiente
                            </span>
                        </div>
                    </div>

                    {/* Deuda General - Destacada */}
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-600 to-red-800 p-6 md:p-8 text-white shadow-lg mb-6">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-center md:text-left">
                                <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                                    <DollarSign className="w-5 h-5 text-yellow-300" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-red-200">
                                        Deuda Total del Condominio
                                    </span>
                                </div>
                                <p className="text-4xl md:text-5xl font-extrabold">
                                    ${deudaGeneral.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                                <p className="text-red-200 text-sm mt-2">
                                    Suma de ambas etapas
                                </p>
                            </div>

                            {/* Icono */}
                            <div className="flex-shrink-0">
                                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                                    <PieChart className="w-12 h-12 text-yellow-300" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Grid de Deudas por Etapa */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {/* Primera Etapa */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 to-red-600 p-5 md:p-6 text-white shadow-lg group hover:shadow-xl transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-white/20 p-2 rounded-xl">
                                        <Building2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-orange-100">
                                        Deuda Primera Etapa
                                    </span>
                                </div>
                                <p className="text-3xl md:text-4xl font-extrabold">
                                    ${deudaPrimeraEtapa.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                                <div className="mt-3 flex items-center gap-2">
                                    <div className="flex-1 bg-white/20 rounded-full h-2">
                                        <div 
                                            className="bg-yellow-300 h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${porcentajePrimera}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-xs font-bold text-yellow-300">
                                        {porcentajePrimera.toFixed(1)}%
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Segunda Etapa */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-rose-500 to-red-700 p-5 md:p-6 text-white shadow-lg group hover:shadow-xl transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-white/20 p-2 rounded-xl">
                                        <Home className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-rose-100">
                                        Deuda Segunda Etapa
                                    </span>
                                </div>
                                <p className="text-3xl md:text-4xl font-extrabold">
                                    ${deudaSegundaEtapa.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                                <div className="mt-3 flex items-center gap-2">
                                    <div className="flex-1 bg-white/20 rounded-full h-2">
                                        <div 
                                            className="bg-yellow-300 h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${porcentajeSegunda}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-xs font-bold text-yellow-300">
                                        {porcentajeSegunda.toFixed(1)}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nota informativa */}
                    <div className="rounded-xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-300 dark:border-red-600 p-4">
                        <div className="flex items-start gap-3">
                            <div className="bg-red-500 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                                <AlertTriangle className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <p className="font-bold text-red-800 dark:text-red-300 text-sm">
                                    📌 Información
                                </p>
                                <p className="text-xs text-red-700 dark:text-red-400 leading-relaxed mt-1">
                                    Los montos mostrados corresponden a la deuda pendiente por etapa. 
                                    Se recomienda a los propietarios mantenerse al día con sus cuotas para evitar recargos.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Deudas;