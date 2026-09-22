"use client";

import { useState } from "react";
import BannerCalendario from "./banner_calendario";
import {
    Droplets,
    ClipboardList,
    PartyPopper,
    Calendar,
    ChevronDown,
    ChevronUp,
    Info,
} from "lucide-react";

interface Event {
    title: string;
    days: string[];
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
        time: "04:00 PM - 07:00 PM",
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
    const [showHolidays, setShowHolidays] = useState(false);

    const toggleHolidays = () => {
        setShowHolidays(!showHolidays);
    };

    return (
        <div>
            <BannerCalendario />
            <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto pt-6">

                {/* Introducción */}
                <div className="rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-600 p-4 mb-6">
                <p className=" text-justify">
                        Mantente al tanto de los eventos y actividades importantes del condominio.
                        Aquí encontrarás los horarios de bombeo de agua, atención al cliente,
                        y las fechas feriadas y religiosas.
                    </p>
                </div>

                <hr className="my-8 border-t border-gray-300 w-full" />

                {/* Eventos fijos */}
                <div className="mt-4">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 uppercase">
                                Eventos Fijos
                            </h3>
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {recurringEvents.map((event, idx) => {
                            const Icon = event.title.includes("Bombeo") ? Droplets : ClipboardList;

                            return (
                                <div
                                    key={idx}
                                    className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    {/* Borde superior sutil */}
                                    <div className="h-1 bg-blue-500"></div>

                                    <div className="p-4">
                                        {/* Título */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                                            <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                                                {event.title}
                                            </p>
                                        </div>

                                        {/* Detalles */}
                                        <div className="space-y-1.5 pl-1">
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                <span className="font-semibold text-blue-700 dark:text-blue-300">Días:</span> {event.days.join(", ")}
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                <span className="font-semibold text-blue-700 dark:text-blue-300">Horario:</span> {event.time}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <hr className="my-8 border-t border-gray-300 w-full" />

                {/* Feriados */}
                <div className="mt-4">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <PartyPopper className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 uppercase">
                                Feriados
                            </h3>
                           
                        </div>
                    </div>

                    {/* Nota informativa */}
                    <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 p-4 mb-4">
                        <div className="flex items-start gap-3">
                            <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                                Mantente al tanto de los días feriados celebrados en el condominio. Durante estos días, no está permitido realizar trabajos de remodelación de casas para garantizar la tranquilidad y el descanso de todos.
                            </p>
                        </div>
                    </div>

                    {/* Botón */}
                    <button
                        onClick={toggleHolidays}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold text-sm rounded-full shadow-sm hover:bg-blue-700 transition-colors duration-300"
                    >
                        {showHolidays ? (
                            <>
                                <ChevronUp className="w-4 h-4" />
                                Ocultar fechas de feriados
                            </>
                        ) : (
                            <>
                                <ChevronDown className="w-4 h-4" />
                                Mostrar fechas de feriados
                            </>
                        )}
                    </button>

                    {/* Lista de feriados */}
                    {showHolidays && (
                        <div className="grid gap-3 md:grid-cols-2 mt-4">
                            {holidayEvents.map((holiday, idx) => (
                                <div
                                    key={idx}
                                    className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    {/* Borde superior sutil */}
                                    <div className="h-1 bg-blue-400"></div>

                                    <div className="p-4 flex items-start gap-3">
                                        <span className="text-xl flex-shrink-0">{holiday.emoji}</span>
                                        <div className="flex-1">
                                            <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                                                {holiday.title}
                                            </p>
                                            <div className="flex items-center gap-1.5 mt-1">
                                                <Calendar className="w-3 h-3 text-blue-500 flex-shrink-0" />
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    {holiday.date.toLocaleDateString("es-ES", {
                                                        weekday: "long",
                                                        day: "numeric",
                                                        month: "long",
                                                        year: "numeric",
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <hr className="my-8 border-t border-gray-300 w-full" />
            </div>
        </div>
    );
};

export default EventSchedule;