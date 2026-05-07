"use client";

import { useState } from "react";
import BannerCalendario from "./banner_calendario";


interface Event {
    title: string;
    days: string[]; // Días de la semana en los que ocurre el evento
    time: string;
    emoji: string;
}

interface Holiday {
    date: Date;
    title: string;
    emoji: string;
}

// Eventos recurrentes
const recurringEvents: Event[] = [
    {
        title: "Bombeo de agua a los TH",
        days: ["Lunes", "Miércoles", "Viernes"],
        time: "6:00 PM - 9:00 PM",
        emoji: "🚰",
    },
    {
        title: "Atención a propietarios en oficina",
        days: ["Jueves (Excluyendo feriados)"],
        time: "9:00 AM - 11:00 AM",
        emoji: "📝",
    },
];

// Feriados
const holidayEvents: Holiday[] = [
    { date: new Date(2026, 1, 16), title: "Lunes de Carnaval", emoji: "🎉" },
    { date: new Date(2026, 1, 17), title: "Martes de Carnaval", emoji: "🎉" },
    { date: new Date(2026, 2, 29), title: "Domingo de Ramos", emoji: "🎉" },
    { date: new Date(2026, 3, 2), title: "Jueves Santo", emoji: "🎉" },
    { date: new Date(2026, 3, 3), title: "Viernes Santo", emoji: "🎉" },
    { date: new Date(2026, 3, 19), title: "Declaración de la Independencia", emoji: "🎉" },
    { date: new Date(2026, 3, 5), title: "Domingo de Pascua", emoji: "🎉" },
    { date: new Date(2026, 4, 1), title: "Día del Trabajo", emoji: "🎉" },
    { date: new Date(2026, 4, 4), title: "Movimiento Independentista de Margarita", emoji: "🎉" },
    { date: new Date(2026, 5, 24), title: "Batalla de Carabobo", emoji: "🎉" },
    { date: new Date(2026, 6, 5), title: "Día de la Independencia", emoji: "🎉" },
    { date: new Date(2026, 6, 24), title: "Natalicio de Simón Bolívar", emoji: "🎉" },
    { date: new Date(2026, 6, 31), title: "Conmemoración de la Batalla de Matasiete", emoji: "🎉" },
    { date: new Date(2026, 8, 8), title: "Día de la Virgen del Valle", emoji: "🎉" },
    { date: new Date(2026, 11, 25), title: "Navidad", emoji: "🎄" },
];

const EventSchedule = () => {
    // Estado para controlar si las fechas de los feriados están visibles
    const [showHolidays, setShowHolidays] = useState(false);

    // Función para alternar la visibilidad de los feriados
    const toggleHolidays = () => {
        setShowHolidays(!showHolidays);
    };

    return (
        <div>
            <BannerCalendario />
            <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto pt-6">
                <p className="text-justify">
                    Mantente al tanto de los eventos y actividades importantes del condominio.
                    Aquí encontrarás los horarios de bombeo de agua, atención al cliente,
                    y las fechas feriadas y religiosas.
                </p>

                
                <hr className="my-8 border-t border-gray-300 w-full" />
               
                {/* Eventos fijos */}
                <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                        Eventos fijos
                    </h3>
                    <ul className="space-y-4">
                        {recurringEvents.map((event, idx) => (
                            <li
                                key={idx}
                                className="relative block overflow-hidden p-6 border border-gray-200 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600 hover:scale-105"
                            >
                                <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600"></span>
                                <p className="font-medium text-gray-800 dark:text-gray-200">
                                    {event.emoji} {event.title}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Días: {event.days.join(", ")}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Horario: {event.time}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <hr className="my-8 border-t border-gray-300 w-full" />
                {/* Feriados */}
                <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                        Feriados
                    </h3>
                    <p className="text-justify">
                    Mantente al tanto de los días feriados celebrados en el condominio. Durante estos días, no está permitido realizar trabajos de remodelación de casas para garantizar la tranquilidad y el descanso de todos.
                </p>
                    <button
                        onClick={toggleHolidays}
                        className="px-4 py-2 mt-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 transition-colors"
                    >
                        {showHolidays ? "Ocultar fechas de feriados" : "Mostrar fechas de feriados"}
                    </button>

                    {/* Lista de feriados (condicional) */}
                    {showHolidays && (
                        <ul className="space-y-4 mt-4">
                            {holidayEvents.map((holiday, idx) => (
                                <li
                                    key={idx}
                                    className="relative block overflow-hidden p-4 border border-gray-200 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600 hover:scale-105"
                                >
                                    <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-300 via-blue-400 to-purple-400"></span>
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
                </div>

                <hr className="my-8 border-t border-gray-300 w-full" />
            </div>
        </div>
    );
};

export default EventSchedule;