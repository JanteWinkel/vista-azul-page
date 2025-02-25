"use client";

import { useState } from "react";

interface ReligiousHoliday {
    date: Date;
    title: string;
    emoji: string;
}

// Fechas religiosas
const religiousHolidays: ReligiousHoliday[] = [
    { date: new Date(2025, 2, 3), title: "Lunes de Carnaval", emoji: "🎉" },
    { date: new Date(2025, 2, 4), title: "Martes de Carnaval", emoji: "🎉" },
    { date: new Date(2025, 3, 13), title: "Domingo de Ramos", emoji: "🎉" },
    { date: new Date(2025, 3, 17), title: "Jueves Santo", emoji: "🎉" },
    { date: new Date(2025, 3, 18), title: "Viernes Santo", emoji: "🎉" },
    { date: new Date(2025, 3, 20), title: "Domingo de Pascua", emoji: "🎉" },
    { date: new Date(2025, 8, 8), title: "Día de la Virgen del Valle", emoji: "🎉" },
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
                <ul className="space-y-4 mt-4">
                    {religiousHolidays.map((holiday, idx) => (
                        <li
                            key={idx}
                            className="relative block overflow-hidden p-4 border border-gray-200 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600 hover:scale-105"
                        >
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gray-200 via-yellow-300 to-white
"></span>
                            <p className="font-medium text-gray-800 dark:text-gray-200">
                                {holiday.emoji} {holiday.title}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Fecha:{" "}
                                {holiday.date.toLocaleDateString("es-ES", {
                                    weekday: "long",
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </p>
                        </li>
                    ))}
                </ul>
            )}

            <hr className="my-8 border-t border-gray-300 w-full" />
        </div>
    );
};

export default ReligiousHolidays;