"use client";

import Image from "next/image";

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
                {/* Imagen de la convocatoria */}
                <div className="mb-8 flex justify-center">
                    <div className="relative w-full max-w-2xl h-64 md:h-96">
                        <Image
                            src="/convocatorias/convocatoria_mayo.jpg" // Ruta a tu imagen
                            alt="Convocatoria a Asamblea General"
                            fill
                            className="object-contain rounded-lg"
                            priority
                        />
                    </div>
                </div>

                {/* Detalles importantes */}
                <div className="mb-8 p-4 bg-blue-50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-blue-800">
                        📅 Primera Convocatoria
                    </h3>
                    <ul className="space-y-3 dark:text-black">
                        <li className="flex items-start">
                            <span className="mr-2">📌</span>
                            <span>
                                <strong>Fecha:</strong> 23/05/2025.
                            </span>

                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">⏰</span>
                            <span>
                                <strong>Hora:</strong> 04:00 pm.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">📍</span>
                            <span>
                                <strong>Lugar:</strong> Oficina de Administración del Conjunto.
                            </span>
                        </li>
                    </ul>

                </div>
                <div className="mb-8 p-4 bg-purple-50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-purple-800 ">
                        📅 Segunda Convocatoria
                    </h3>
                    <ul className="space-y-3 dark:text-black">
                        <li className="flex items-start ">
                            <span className="mr-2">📌</span>
                            <span>
                                <strong>Fecha:</strong> 31/05/2025.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">⏰</span>
                            <span>
                                <strong>Hora:</strong> 05:00 pm.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">📍</span>
                            <span>
                                <strong>Lugar:</strong> Caney de la piscina.
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="mb-8 p-4 bg-green-50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-green-800 ">
                        📑 Puntos a Tratar
                    </h3>
                    <ul className="space-y-3 dark:text-black">
                        <li className="flex items-start ">
                            <span className="mr-2">📌</span>
                            <span>
                                <strong>Primer Punto:</strong> Presentación de informe de gestión a la fecha actual. 
                            </span>
                        </li>
                        <li className="flex items-start ">
                            <span className="mr-2">📌</span>
                            <span>
                                <strong>Segundo Punto:</strong> Elección de Junta de Condominio y Administración año 2025-2026.
                            </span>
                        </li>
                        
                    </ul>
                </div>

                {/* Requisitos de quórum */}
                <div className="mb-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <h3 className="text-xl font-semibold mb-4 text-yellow-800">
                        ⚠️ Requisitos de Participación
                    </h3>
                    <ul className="space-y-3 dark:text-black">
                        <li className="flex items-start">
                            <span className="mr-2">🔢</span>
                            <span>
                                <strong>Primera Convocatoria:</strong> Se requiere el 66.6% de asistencia o representación.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">📋</span>
                            <span>
                                <strong>Documentación Obligatoria.</strong>
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">✍️</span>
                            <span>
                                <strong>Representación:</strong> En caso de no asistir, puede delegar su voto mediante autorización por escrito,
                                solo serán recibidas en hoja impresa debidamente firmada, con copia de cédula del propietario y autorizado.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Recomendaciones */}
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <h3 className="text-xl font-semibold mb-4 text-green-800">
                        💡 Recomendaciones
                    </h3>
                    <ul className="space-y-3 dark:text-black">
                        <li className="flex items-start">
                            <span className="mr-2">🪑</span>
                            <span>Se recomienda traer su propia silla para mayor comodidad.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">⏱️</span>
                            <span>Llegue con 15 minutos de anticipación para el registro.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">🤝</span>
                            <span>Mantenga el respeto durante las intervenciones.</span>
                        </li>
                    </ul>
                </div>

                {/* Nota importante */}
                <div className="mt-8 p-4 bg-red-50 rounded-lg text-center border border-red-200">
                    <p className="font-medium text-red-600">
                        🚨 IMPORTANTE: Convocatoria Pública 
                    </p>
                    <a className="text-blue-700 hover:text-blue-800" href="https://diariocaribazo.com/portfolio/convocatoria-terrazas-de-vista-azul-15-05-25/">Ver más</a>
                </div>
            </div>
        </div>
    );
};

export default ConvocatoriaAsamblea;