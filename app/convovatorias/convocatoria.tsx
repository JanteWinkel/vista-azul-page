"use client";

const InfoAsamblea = () => {

    const handleDownload = () => {
        const pdfUrl = "/documents/CONVOCATORIA_JULIO_2026.pdf";
        window.open(pdfUrl, "_blank");
    };
    
    const handleDownloadCaribazo = () => {
        const pdfUrl = "/documents/CARIBAZO_JULIO_2026.pdf";
        window.open(pdfUrl, "_blank");
    };

    return (
        <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto py-8">
            {/* Banner superior */}
            <div className="bg-red-600 text-white p-4 rounded-t-lg">
                <h2 className="text-2xl font-bold text-center uppercase">
                    CONVOCATORIA A ASAMBLEA GENERAL ORDINARIA DE PROPIETARIOS
                </h2>
            </div>

            {/* Contenedor principal */}
            <div className="border border-gray-200 dark:border-gray-900 rounded-b-lg shadow-lg bg-white dark:bg-gray-800 p-6">

                {/* Evento - estilo igual a EventSchedule */}
                <div className="relative block overflow-hidden p-6 border-2 border-blue-500 rounded-lg shadow-lg bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400">
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600"></span>
                    <div className="flex items-start gap-3">
                        <div className="flex-1">
                            <p className="font-bold text-lg text-blue-800 dark:text-blue-300">
                                CONDOMINIO CONJUNTO TERRAZAS DE VISTA AZUL
                            </p>
                            <div className="mt-2 space-y-1">
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">RIF:</span> J-29850527-3
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Ubicación:</span> Villa Juana, Isla de Margarita. Edo. Nueva Esparta.
                                </p>
                            </div>

                            {/* Primera Convocatoria */}
                            <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded-lg">
                                <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">
                                    Primera Convocatoria
                                </p>
                                <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
                                    <span className="font-bold">Fecha:</span> Jueves 16 de Julio 2026 - 4:00 PM
                                </p>
                                <p className="text-xs text-gray-700 dark:text-gray-300">
                                    <span className="font-bold">Lugar:</span> Oficina de Administración del conjunto
                                </p>
                            </div>

                            {/* Segunda Convocatoria */}
                            <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                                <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">
                                    Segunda Convocatoria
                                </p>
                                <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
                                    <span className="font-bold">Fecha:</span> Sábado 25 de Julio 2026 - 5:00 PM
                                </p>
                                <p className="text-xs text-gray-700 dark:text-gray-300">
                                    <span className="font-bold">Lugar:</span> Área del caney de la Piscina
                                </p>
                                <p className="text-xs text-red-600 dark:text-red-400 mt-1 font-medium">
                                    *En el caso de no haber quórum reglamentario en la primera convocatoria
                                </p>
                            </div>

                            {/* Puntos a tratar */}
                            <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
                                <p className="text-sm font-semibold text-green-800 dark:text-green-300">
                                    Puntos a tratar
                                </p>
                                <ul className="text-xs text-gray-700 dark:text-gray-300 mt-1 space-y-1 list-disc list-inside">
                                    <li><span className="font-bold">Primer Punto:</span> Presentación de Informe de Gestión a la fecha actual</li>
                                    <li><span className="font-bold">Segundo Punto:</span> Elección de Junta de Condominio y Administración año 2026-2027</li>
                                </ul>
                            </div>

                            {/* Nota importante */}
                            <div className="mt-3 p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg">
                                <p className="text-xs text-gray-700 dark:text-gray-300">
                                    <span className="font-bold">Nota:</span> Se solicita puntual asistencia. 
                                    En caso de no poder asistir personalmente, podrá hacerse representar mediante 
                                    autorización por escrito, solo serán recibidas en hoja impresa debidamente firmada, 
                                    con copia de cédula del propietario y autorizado.
                                </p>
                            </div>

                            {/* Documentos */}
                            <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">
                                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                    Documentos de la Asamblea
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <button
                                        onClick={handleDownload}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                                    >
                                        Convocatoria PDF
                                    </button>
                                    <button
                                        onClick={handleDownloadCaribazo}
                                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm font-medium"
                                    >
                                        Constancia El Caribazo
                                    </button>
                                </div>
                            </div>

                            {/* Firma */}
                            <div className="mt-3 pt-3 border-t-2 border-blue-200 dark:border-blue-700 text-center">
                                <p className="text-sm font-bold text-blue-800 dark:text-blue-300 uppercase">
                                    Junta de Condominio y Administración
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoAsamblea;