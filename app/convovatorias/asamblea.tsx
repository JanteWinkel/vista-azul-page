"use client";

import { 
    Lock, 
    Calendar, 
    FileText, 
    Download,
    Clock,
    Megaphone,
    ShieldAlert
} from 'lucide-react';

const InfoBloqueoControl = () => {

    const handleDownloadActa = () => {
        const pdfUrl = "/documents/Asamblea04022022.pdf";
        window.open(pdfUrl, "_blank");
    };

    return (
        <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto py-8">
            
            {/* Card principal */}
            <div className="relative border-2 border-red-500/40 dark:border-red-400/40 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 overflow-hidden">
                
                {/* Borde decorativo superior rojo */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-orange-500 to-red-600"></div>
                
                {/* Contenido interno */}
                <div className="p-6 md:p-8">
                    
                    {/* Banner de Alerta */}
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-red-600 via-orange-600 to-red-700 p-6 md:p-8 text-white shadow-lg mb-6">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <Megaphone className="w-6 h-6 text-yellow-300 animate-pulse" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-yellow-200">
                                    ⚠️ AVISO IMPORTANTE
                                </span>
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
                                CONTROL DE ACCESO
                            </h1>
                            <p className="text-red-100 mt-2 text-base md:text-lg font-medium">
                                Reactivación de medida de bloqueo de portón
                            </p>
                        </div>
                    </div>

                    {/* Alerta principal - Fecha de inicio */}
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-500 to-red-700 p-5 md:p-6 text-white shadow-lg mb-6">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400/10 rounded-full translate-y-1/2 -translate-x-1/4"></div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-white/20 p-3 rounded-full">
                                    <Lock className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-red-100 uppercase tracking-wider">
                                        Reactivación de la Medida
                                    </p>
                                    <p className="text-2xl md:text-3xl font-extrabold">
                                        1 de Septiembre
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white/20 rounded-lg px-4 py-2 text-center">
                                <p className="text-xs font-medium text-red-100">Aplica a propietarios con</p>
                                <p className="text-xl font-bold">2+ meses vencidos</p>
                            </div>
                        </div>
                    </div>

                    {/* Grid de información */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {/* Asamblea */}
                        <div className="rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-400 dark:border-amber-600 p-5">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-amber-500 rounded-full p-1.5">
                                    <Calendar className="w-4 h-4 text-white" />
                                </div>
                                <h4 className="text-sm font-bold text-amber-800 dark:text-amber-300">
                                    Decisión en Asamblea
                                </h4>
                            </div>
                            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                                Esta disposición fue aprobada en la <span className="font-semibold text-amber-800 dark:text-amber-300">Asamblea Ordinaria de Propietarios del 4 de febrero de 2022</span>.
                            </p>
                        </div>

                        {/* Propósito */}
                        <div className="rounded-xl bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border-2 border-red-400 dark:border-red-600 p-5">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-red-500 rounded-full p-1.5">
                                    <ShieldAlert className="w-4 h-4 text-white" />
                                </div>
                                <h4 className="text-sm font-bold text-red-800 dark:text-red-300">
                                    Propósito de la Medida
                                </h4>
                            </div>
                            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                                Garantizar la cobranza oportuna y mantener la operatividad de los servicios del condominio.
                            </p>
                        </div>
                    </div>

                    {/* Documento de soporte */}
                    <div className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/30 dark:to-gray-700/50 border-2 border-gray-300 dark:border-gray-600 p-5 md:p-6 shadow-lg mb-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-red-500 rounded-full p-2">
                                <FileText className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                                    Soporte Documental
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Acta de la Asamblea del 04/02/2022
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 mb-3">
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                Puede consultar la constancia formal de la decisión en el acta de la asamblea realizada el 4 de febrero de 2022.
                            </p>
                        </div>

                        <button
                            onClick={handleDownloadActa}
                            className="w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        >
                            <Download className="w-4 h-4" />
                            Ver / Descargar Acta del 04/02/2022 (PDF)
                        </button>
                    </div>

                    {/* Nota final */}
                    <div className="rounded-xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-400 dark:border-red-600 p-4">
                        <div className="flex items-start gap-3">
                            <div className="bg-red-500 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                                <Clock className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <p className="font-bold text-red-800 dark:text-red-300 text-sm">
                                    📌 A tener en cuenta
                                </p>
                                <p className="text-xs text-red-700 dark:text-red-400 leading-relaxed mt-1">
                                    La medida se aplicará de manera automática a todos los propietarios que al <span className="font-bold">1 de septiembre</span> mantengan <span className="font-bold">dos (2) o más meses de cuota vencida</span>.
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
                            <span className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></span>
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            <span className="w-8 h-0.5 bg-gradient-to-l from-red-500 to-orange-500 rounded-full"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InfoBloqueoControl;