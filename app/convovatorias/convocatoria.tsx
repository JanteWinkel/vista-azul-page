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
        <div className="max-w-4xl px-4 py-4 mx-auto">
            <div className="bg-white border-2 border-blue-600 rounded-lg shadow-lg">
                <div className="p-6 md:p-8">
                    {/* Encabezado con borde azul */}
                    <div className="border-b-2 border-blue-600 pb-4 mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 uppercase tracking-wide">
                            CONDOMINIO CONJUNTO TERRAZAS DE VISTA AZUL
                        </h2>
                        <p className="text-center text-gray-700 font-medium mt-1">
                            Rif. J-29850527-3
                        </p>
                        <p className="text-center text-gray-600 text-sm">
                            Villa Juana, Isla de Margarita. Edo. Nueva Esparta.
                        </p>
                    </div>

                    {/* Título de la convocatoria */}
                    <div className="text-center mb-6">
                        <h3 className="text-xl md:text-2xl font-bold text-blue-800 uppercase">
                            ASAMBLEA GENERAL ORDINARIA DE PROPIETARIOS
                        </h3>
                    </div>

                    {/* Primera Convocatoria */}
                    <div className="mb-4">
                        <h4 className="text-lg font-bold text-blue-800 uppercase">PRIMERA CONVOCATORIA:</h4>
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r">
                            <p className="text-base md:text-lg font-semibold text-gray-800">
                                JUEVES 16 DE JULIO DE 2026
                            </p>
                            <p className="text-base font-medium text-gray-700">
                                HORA: 4:00 PM
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                                📍 Oficina de Administración del conjunto
                            </p>
                        </div>
                    </div>

                    {/* Segunda Convocatoria */}
                    <div className="mb-6">
                        <h4 className="text-lg font-bold text-blue-800 uppercase">SEGUNDA CONVOCATORIA:</h4>
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r">
                            <p className="text-base md:text-lg font-semibold text-gray-800">
                                SÁBADO 25 DE JULIO DE 2026
                            </p>
                            <p className="text-base font-medium text-gray-700">
                                HORA: 5:00 PM
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                                📍 Área del caney de la Piscina
                            </p>
                            <p className="text-xs text-red-600 mt-1 italic">
                                *En el caso de no haber quórum reglamentario en la primera convocatoria
                            </p>
                        </div>
                    </div>

                    {/* Puntos a tratar */}
                    <div className="mb-6">
                        <h4 className="text-lg font-bold text-blue-800 uppercase mb-3">PUNTOS A TRATAR:</h4>
                        <div className="space-y-3">
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <p className="font-semibold text-gray-800">
                                    <span className="text-blue-700 font-bold">PRIMER PUNTO:</span>
                                </p>
                                <p className="text-gray-700 ml-6">
                                    Presentación de Informe de Gestión a la fecha actual
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <p className="font-semibold text-gray-800">
                                    <span className="text-blue-700 font-bold">SEGUNDO PUNTO:</span>
                                </p>
                                <p className="text-gray-700 ml-6">
                                    Elección de Junta de Condominio y Administración año 2026-2027
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Nota importante */}
                    <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 mb-6">
                        <p className="text-sm text-gray-700 leading-relaxed">
                            <span className="font-bold">📌 Nota:</span> Se solicita puntual asistencia. 
                            En caso de no poder asistir personalmente, podrá hacerse representar mediante 
                            autorización por escrito, solo serán recibidas en hoja impresa debidamente firmada, 
                            con copia de cédula del propietario y autorizado.
                        </p>
                    </div>

                    {/* SECCIÓN DE DOCUMENTOS */}
                    <div className="border-t-2 border-blue-600 pt-6">
                        <h4 className="text-lg font-bold text-blue-800 uppercase mb-4 text-center">
                             DOCUMENTOS DE LA ASAMBLEA
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Botón 1 - Convocatoria */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:shadow-md transition">
                                <div className="flex items-start gap-3">
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-gray-800 text-sm md:text-base">
                                            Convocatoria Asamblea
                                        </p>
                                        <p className="text-xs text-gray-500 mt-0.5">
                                            PDF • 16 de Julio 2026
                                        </p>
                                        <button
                                            onClick={handleDownload}
                                            className="mt-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium flex items-center justify-center gap-2"
                                        >
                                             Ver Documento
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Botón 2 - Constancia El Caribazo */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:shadow-md transition">
                                <div className="flex items-start gap-3">
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-gray-800 text-sm md:text-base">
                                            Constancia El Caribazo
                                        </p>
                                        <p className="text-xs text-gray-500 mt-0.5">
                                            PDF • Documento adjunto
                                        </p>
                                        <button
                                            onClick={handleDownloadCaribazo}
                                            className="mt-2 w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm font-medium flex items-center justify-center gap-2"
                                        >
                                             Ver Documento
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Firma */}
                    <div className="text-center pt-4 border-t-2 border-blue-600 mt-6">
                        <p className="font-bold text-blue-800 uppercase">
                            Junta de Condominio y Administración
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoAsamblea;