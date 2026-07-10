"use client";

const ConvocatoriaAsamblea = () => {
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
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Primera Convocatoria:</span> Jueves 16 de Julio 2026 - 4:00 PM
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Segunda Convocatoria:</span> Sábado 25 de Julio 2026 - 5:00 PM
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Lugares:</span> Oficina de Administración / Caney de la Piscina
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Puntos a tratar:</span> 1. Informe de Gestión | 2. Elección Junta 2026-2027
                                </p>
                            </div>
                            
                            {/* Quórum y asistencia */}
                            <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded-lg">
                                <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
                                    <span className="font-bold text-red-600 dark:text-red-400">En caso de no alcanzar el quórum:</span> Se realizará la segunda convocatoria el sábado 25 de julio a las 5:00 PM, donde la asamblea se llevará a cabo con los propietarios presentes.
                                </p>
                            </div>

                            {/* Representación */}
                            <div className="mt-3 p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg">
                                <p className="text-sm font-semibold text-purple-800 dark:text-purple-300 mb-1">
                                    Representación
                                </p>
                                <p className="text-xs text-gray-700 dark:text-gray-300">
                                    En caso de no poder asistir personalmente, podrá hacerse representar mediante autorización por escrito. 
                                    <span className="font-bold"> Requisitos:</span>
                                </p>
                                <ul className="text-xs text-gray-700 dark:text-gray-300 mt-1 space-y-1 list-disc list-inside">
                                    <li>Autorización en hoja impresa debidamente firmada por el propietario</li>
                                    <li>Copia de la cédula de identidad del propietario</li>
                                    <li>Copia de la cédula de identidad del autorizado</li>
                                </ul>
                            </div>

                            {/* Recomendación */}
                            <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
                                <p className="text-xs text-gray-700 dark:text-gray-300">
                                    <span className="font-bold">Recomendación:</span> Se solicita puntual asistencia y traer su propia silla para mayor comodidad en el área del caney.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConvocatoriaAsamblea;