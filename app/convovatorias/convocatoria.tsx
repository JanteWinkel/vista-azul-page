"use client";

const InfoCartaConsulta = () => {
    const handleDownloadCarta = () => {
        const pdfUrl = "/documents/Carta_Consulta_Tercer_Pozo_2026.pdf";
        window.open(pdfUrl, "_blank");
    };

    return (
        <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto py-8">
            {/* Banner superior */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
                <h2 className="text-2xl font-bold text-center uppercase">
                     PRIMERA CARTA CONSULTA: PROYECTO POZO PROFUNDO
                </h2>
            </div>

            {/* Contenedor principal */}
            <div className="border border-gray-200 dark:border-gray-900 rounded-b-lg shadow-lg bg-white dark:bg-gray-800 p-6">

                <div className="relative block overflow-hidden p-6 border-2 border-blue-500 rounded-lg shadow-lg bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400">
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600"></span>
                    
                    <div className="flex items-start gap-3">
                        <div className="flex-1">
                            
                            {/* Plazo de respuesta */}
                            <div className="p-3 bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 rounded-lg">
                                <p className="text-sm font-semibold text-amber-900 dark:text-amber-300">
                                    Plazo Importante para Responder
                                </p>
                                <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
                                    <span className="font-bold">Periodo:</span> Ocho (8) días hábiles.
                                </p>
                                <p className="text-xs text-gray-700 dark:text-gray-300">
                                    <span className="font-bold">Fecha límite de entrega:</span> Jueves 6 de Agosto de 2026.
                                </p>
                                <p className="text-xs text-amber-800 dark:text-amber-400 mt-1 italic">
                                    *Tomando en cuenta que el pasado viernes fue feriado, el lapso inició formalmente el lunes 27 de julio.
                                </p>
                            </div>

                            {/* Medios de Entrega */}
                            <div className="mt-3 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                    Medios de Recepción
                                </p>
                                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Una vez seleccionada su opción y firmado el formato, puede consignarlo en físico en la <span className="font-semibold">garita de vigilancia</span> o con la <span className="font-semibold">Junta de Condominio</span>, o digitalmente enviando un escaneo/foto legible a los <span className="font-semibold">correos oficiales del condominio</span>.
                                </p>
                            </div>

                            {/* Nota Aclaratoria sobre Agua y Caudal */}
                            <div className="mt-3 p-3 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-700 rounded-lg">
                                <p className="text-xs font-bold text-cyan-900 dark:text-cyan-300 uppercase mb-1">
                                    Nota Aclaratoria Importante
                                </p>
                                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                                    La calidad final del agua, la presión y el caudal definitivo del pozo profundo solo podrán ser evaluados y verificados una vez finalizada la obra, ejecutada la fase de purga y limpieza, y realizados los análisis técnicos y bacteriológicos correspondientes.
                                </p>
                            </div>

                            {/* Botón para ver/descargar PDF */}
                            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg">
                                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                    Documento para Descarga / Impresión
                                </p>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <button
                                        onClick={handleDownloadCarta}
                                        className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium flex items-center justify-center gap-2 shadow-sm"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Ver / Descargar Carta Consulta (PDF)
                                    </button>
                                </div>
                            </div>

                            {/* Fondo de Contingencia ($900) - Ubicado después del botón de descarga */}
                            <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 rounded-lg">
                                <p className="text-xs font-bold text-emerald-900 dark:text-emerald-300 uppercase mb-1">
                                    Consideración sobre la Previsión para Imprevistos
                                </p>
                                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                                    Se ha estipulado un margen preventivo de hasta <span className="font-bold">$900</span> para respaldar la ejecución de la obra ante eventuales variaciones técnicas durante la perforación, evitando así recargos imprevistos al presupuesto ordinario del condominio. Este fondo solo se utilizaría si se presentan situaciones como:
                                </p>
                                <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside pl-1">
                                    <li><span className="font-semibold">Posible ajuste de equipamiento:</span> En caso de que el comportamiento real del pozo requiera un equipo de mayor capacidad (por ejemplo, evaluar un cambio de 2 HP a 3 HP si fuere técnicamente necesario).</li>
                                    <li><span className="font-semibold">Eventual metraje adicional:</span> Si la profundidad efectiva excede los 40 metros estipulados y fuese indispensable adquirir metros adicionales de cable submarino.</li>
                                    <li><span className="font-semibold">Gastos logísticos menores:</span> Eventuales apoyos de transporte, hidratación o refrigerios para el personal técnico en sitio durante las maniobras.</li>
                                </ul>
                                <p className="text-xs text-emerald-800 dark:text-emerald-400 mt-2 font-medium italic">
                                    *Importante: Este fondo es únicamente de carácter precautorio. En caso de no ser requerido o si existiera algún remanente al finalizar los trabajos, dicho dinero será devuelto o abonado según corresponda.
                                </p>
                            </div>

                            {/* Pie de Firma */}
                            <div className="mt-4 pt-3 border-t-2 border-blue-200 dark:border-blue-700 text-center">
                                <p className="text-sm font-bold text-blue-800 dark:text-blue-300 uppercase">
                                    Junta de Condominio
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InfoCartaConsulta;