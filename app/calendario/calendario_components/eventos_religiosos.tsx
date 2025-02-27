/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

interface ReligiousHoliday {
    date: Date;
    title: string;
    emoji: string;
}

// Fechas religiosas
const religiousHolidays: ReligiousHoliday[] = [
    { date: new Date(2025, 2, 25), title: "Anunciación del Ángel a María", emoji: "Rosario: Sábado 22 de marzo. Hora: 07:00 p.m." },
    { date: new Date(2025, 3, 12), title: "Vía Crucis", emoji: "Hora: 05:30 p.m." },
    { date: new Date(2025, 4, 31), title: "Visitación de María a Isabel", emoji: "Rosario: Sábado 31 de mayo. Hora: 07:00 p.m." },
    { date: new Date(2025, 7, 15), title: "Asunción de María a los cielos", emoji: "Rosario: Viernes 15 de agosto. Hora: 07:00 p.m." },
    { date: new Date(2025, 8, 8), title: "Natividad de la Virgen del Valle", emoji: "Rosario: Sábado 6 de septiembre. Hora: 07:00 p.m." },
    { date: new Date(2025, 11, 8), title: "Inmaculada Concepción", emoji: "Rosario: Sábado 6 de diciembre. Hora: 07:00" },
];

const ReligiousHolidays = () => {
    // Estado para controlar si las fechas religiosas están visibles
    const [showReligiousHolidays, setShowReligiousHolidays] = useState(false);

    // Función para alternar la visibilidad de las fechas religiosas
    const toggleReligiousHolidays = () => {
        setShowReligiousHolidays(!showReligiousHolidays);
    };

    return (
        <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto mt-4">
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Fechas Religiosas
            </h3>
            <p className="text-justify mb-4">
                Este apartado está dedicado a las fechas religiosas importantes. Durante estos días, te recordamos respetar y valorar los eventos religiosos de nuestra comunidad.
            </p>

            {/* Botón para mostrar/ocultar fechas religiosas */}
            <button
                onClick={toggleReligiousHolidays}
                className="px-4 py-2 bg-blue-500  text-white rounded-3xl hover:bg-blue-600 transition-colors"
            >
                {showReligiousHolidays ? "Ocultar fechas religiosas" : "Mostrar fechas religiosas"}
            </button>

            {/* Lista de fechas religiosas (condicional) */}
            {showReligiousHolidays && (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">

                        <img src="/fotos_religiosas/virgen maria.jpg" alt="Virgen María" className="mx-auto mt-2 border relative overflow-hidden block rounded-xl transition text-center " />
                   
                    <ul className="space-y-4 mt-2">
                        {religiousHolidays.map((holiday, idx) => (
                            <li
                                key={idx}
                                className="relative block overflow-hidden p-4 border border-gray-200 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600 hover:scale-105">
                                <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gray-200 via-yellow-300 to-white"></span>
                                
                                
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Fecha:{" "}
                                    {holiday.date.toLocaleDateString("es-ES", {
                                        day: "numeric",
                                        month: "long",
                                    })}
                                    
                                </p>

                                <p className="font-medium text-gray-800 dark:text-gray-200">
                                     {holiday.title} 
                                </p>
                                
                                <p>{holiday.emoji}</p>
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