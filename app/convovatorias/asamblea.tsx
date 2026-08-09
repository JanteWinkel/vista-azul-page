"use client";

const InfoBloqueoControl = () => {
    const handleDownloadActa = () => {
        const pdfUrl = "/documents/Asamblea04022022.pdf";
        window.open(pdfUrl, "_blank");
    };

    return (
        <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto py-8">
            {/* Banner superior */}
            <div className="bg-red-600 text-white p-4 rounded-t-lg">
                <h2 className="text-2xl font-bold text-center uppercase">
                    AVISO IMPORTANTE: CONTROL DE ACCESO
                </h2>
            </div>

            {/* Contenedor principal */}
            <div className="border border-gray-200 dark:border-gray-900 rounded-b-lg shadow-lg bg-white dark:bg-gray-800 p-6">

                <div className="relative block overflow-hidden p-6 border-2 border-red-500 rounded-lg shadow-lg bg-red-50 dark:bg-red-900/20 dark:border-red-400">
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-600"></span>
                    
                    <div className="flex items-start gap-3">
                        <div className="flex-1 space-y-4">

                            {/* Comunicado principal */}
                            <div className="p-4 bg-white dark:bg-gray-800 border-2 border-red-500 rounded-lg text-center space-y-2">
                                <h3 className="text-lg font-bold text-red-700 dark:text-red-400 uppercase">
                                    Reactivación de Medida: Bloqueo de Controles del Portón
                                </h3>
                                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-relaxed">
                                    A partir del <span className="text-red-600 dark:text-red-400 font-bold">1 de Septiembre</span> se retomará la medida de bloqueo del control de acceso al portón para aquellos propietarios que mantengan <span className="text-red-600 dark:text-red-400 font-bold">dos (2) o más meses vencidos</span> en el pago del condominio.
                                </p>
                            </div>

                            {/* Explicación simplificada con la fecha exacta */}
                            <div className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Esta disposición corresponde a la decisión válidamente tomada y aprobada en la <span className="font-semibold text-gray-900 dark:text-gray-100">Asamblea Ordinaria de Propietarios efectuada el 4 de febrero de 2022</span>. Se reactiva con el propósito de garantizar la cobranza oportuna y mantener la operatividad de los servicios del condominio.
                                </p>
                            </div>

                            {/* Documento de soporte */}
                            <div className="p-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg">
                                <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                    Soporte Documental
                                </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                                    Puede consultar la constancia en el acta formal de la asamblea del 4 de febrero de 2022:
                                </p>
                                <button
                                    onClick={handleDownloadActa}
                                    className="w-full sm:w-auto px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm font-medium flex items-center justify-center gap-2 shadow-sm"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Ver / Descargar Acta del 04/02/2022 (PDF)
                                </button>
                            </div>

                            {/* Pie de Firma */}
                            <div className="pt-3 border-t-2 border-red-200 dark:border-red-700 text-center">
                                <p className="text-sm font-bold text-red-800 dark:text-red-300 uppercase">
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

export default InfoBloqueoControl;