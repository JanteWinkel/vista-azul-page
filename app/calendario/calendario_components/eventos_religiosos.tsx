/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import {
    Church,
    Calendar,
    ChevronDown,
    ChevronUp,
    Info,
} from "lucide-react";

interface ReligiousHoliday {
    date: Date;
    title: string;
    emoji: string;
}

// Fechas religiosas
const religiousHolidays: ReligiousHoliday[] = [
    { date: new Date(2026, 2, 25), title: "Solemnidad de la anunciación", emoji: "Rosario: Sábado 28 de febrero. Hora: 07:00 p.m." },
    { date: new Date(2026, 2, 21), title: "Vía Crucis", emoji: "Hora: 06:30 p.m." },
    { date: new Date(2026, 4, 31), title: "Visitación de la virgen María", emoji: "Rosario: Sábado 30 de mayo. Hora: 07:00 p.m." },
    { date: new Date(2026, 7, 15), title: "Asunción de María a los cielos", emoji: "Rosario: Sábado 30 de agosto. Hora: 07:00 p.m." },
    { date: new Date(2026, 8, 8), title: "Natividad de la Virgen del Valle", emoji: "Rosario: Sábado 5 de septiembre. Hora: 07:00 p.m." },
    { date: new Date(2026, 11, 8), title: "Inmaculada Concepción", emoji: "Rosario: Sábado 5 de diciembre. Hora: 07:00" },
];

const ReligiousHolidays = () => {
    const [showReligiousHolidays, setShowReligiousHolidays] = useState(false);

    const toggleReligiousHolidays = () => {
        setShowReligiousHolidays(!showReligiousHolidays);
    };

    return (
        <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto mt-4">
            
            {/* Encabezado */}
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                    <Church className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 uppercase">
                        Fechas Religiosas
                    </h3>
                </div>
            </div>

            {/* Nota informativa */}
            <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 p-4 mb-4">
                <div className="flex items-start gap-3">
                    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                        Este apartado está dedicado a las fechas religiosas importantes. Durante estos días, te recordamos respetar y valorar los eventos religiosos de nuestra comunidad.
                    </p>
                </div>
            </div>

            {/* Botón para mostrar/ocultar */}
            <button
                onClick={toggleReligiousHolidays}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold text-sm rounded-full shadow-sm hover:bg-blue-700 transition-colors duration-300"
            >
                {showReligiousHolidays ? (
                    <>
                        <ChevronUp className="w-4 h-4" />
                        Ocultar fechas religiosas
                    </>
                ) : (
                    <>
                        <ChevronDown className="w-4 h-4" />
                        Mostrar fechas religiosas
                    </>
                )}
            </button>

            {/* Lista de fechas religiosas */}
            {showReligiousHolidays && (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-8 mt-4">

                    {/* Imagen */}
                    <div className="flex justify-center">
                        <div className="relative overflow-hidden rounded-lg border border-blue-200 dark:border-blue-700 shadow-sm">
                            <img
                                src="/fotos_religiosas/virgen maria.jpg"
                                alt="Virgen María"
                                className="w-full max-w-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Lista */}
                    <ul className="space-y-3">
                        {religiousHolidays.map((holiday, idx) => (
                            <li
                                key={idx}
                                className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                {/* Borde superior sutil */}
                                <div className="h-1 bg-blue-400"></div>

                                <div className="p-4">
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <Calendar className="w-3 h-3 text-blue-500 flex-shrink-0" />
                                        <p className="text-xs text-gray-600 dark:text-gray-400">
                                            {holiday.date.toLocaleDateString("es-ES", {
                                                day: "numeric",
                                                month: "long",
                                            })}
                                        </p>
                                    </div>

                                    <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                                        {holiday.title}
                                    </p>

                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 italic">
                                        {holiday.emoji}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <hr className="my-8 border-t border-gray-300 w-full" />
        </div>
    );
};

export default ReligiousHolidays;