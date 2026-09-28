"use client";

import { useState } from "react";
import BannerCalendario from "./banner_calendario";
import {
    Droplets,
    ClipboardList,
    ChevronDown,
    ChevronUp,
    Info,
} from "lucide-react";
import { PageIntro, SectionHeader, btnOutline, sectionWrap } from "@/components/va-ui";
import HojaCalendario from "./hoja_calendario";

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
            <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Introducción */}
                <PageIntro>
                    Mantente al tanto de los eventos y actividades importantes del condominio.
                    Aquí encontrarás los horarios de bombeo de agua, atención al cliente,
                    y las fechas feriadas y religiosas.
                </PageIntro>
            </div>

            {/* Eventos fijos */}
            <section className={sectionWrap}>
                <SectionHeader title="Eventos fijos" />

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {recurringEvents.map((event, idx) => {
                        const Icon = event.title.includes("Bombeo") ? Droplets : ClipboardList;

                        return (
                            <article
                                key={idx}
                                className="rounded-[28px] border border-va-linea dark:border-white/10 bg-white dark:bg-va-marea p-6"
                            >
                                <h3 className="flex items-center gap-3 font-display font-bold text-xl text-slate-900 dark:text-white">
                                    <span className="grid place-items-center w-11 h-11 rounded-2xl bg-va-bruma dark:bg-white/5 flex-shrink-0">
                                        <Icon className="w-5 h-5 text-va-azul dark:text-sky-300" />
                                    </span>
                                    {event.title}
                                </h3>

                                <dl className="mt-5 space-y-3">
                                    <div>
                                        <dt className="text-sm text-slate-500 dark:text-slate-400">Días:</dt>
                                        <dd className="mt-1 flex flex-wrap gap-2">
                                            {event.days.map((day) => (
                                                <span key={day} className="rounded-full bg-va-bruma dark:bg-white/5 px-3 py-1 text-sm font-bold text-slate-800 dark:text-slate-200">
                                                    {day}
                                                </span>
                                            ))}
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="text-sm text-slate-500 dark:text-slate-400">Horario:</dt>
                                        <dd className="font-display font-bold text-2xl md:text-3xl tracking-tight tabular-nums text-va-azul dark:text-sky-300">{event.time}</dd>
                                    </div>
                                </dl>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* Feriados */}
            <section className={sectionWrap}>
                <SectionHeader title="Feriados" />

                {/* Nota informativa */}
                <p className="mt-6 flex items-start gap-3 rounded-[22px] bg-va-bruma dark:bg-white/5 p-5 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-va-azul dark:text-sky-300" />
                    Mantente al tanto de los días feriados celebrados en el condominio. Durante estos días, no está permitido realizar trabajos de remodelación de casas para garantizar la tranquilidad y el descanso de todos.
                </p>

                {/* Botón */}
                <button onClick={toggleHolidays} aria-expanded={showHolidays} className={`${btnOutline} mt-5`}>
                    {showHolidays ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    {showHolidays ? "Ocultar fechas de feriados" : "Mostrar fechas de feriados"}
                </button>

                {/* Lista de feriados */}
                {showHolidays && (
                    <ul className="mt-5 grid gap-x-6 md:grid-cols-2 border-t border-va-linea dark:border-white/10">
                        {holidayEvents.map((holiday, idx) => (
                            <li key={idx} className="flex items-center gap-4 py-3 border-b border-va-linea dark:border-white/10">
                                <HojaCalendario date={holiday.date} />
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white">{holiday.title}</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 first-letter:uppercase">
                                        {holiday.date.toLocaleDateString("es-ES", {
                                            weekday: "long",
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default EventSchedule;
