/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import {
    ChevronDown,
    ChevronUp,
    Info,
} from "lucide-react";
import { SectionHeader, btnOutline, sectionWrap } from "@/components/va-ui";
import HojaCalendario from "./hoja_calendario";

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
        <section className={sectionWrap}>
            <SectionHeader title="Fechas religiosas" />

            {/* Nota informativa */}
            <p className="mt-6 flex items-start gap-3 rounded-[22px] bg-va-bruma dark:bg-white/5 p-5 text-slate-700 dark:text-slate-300 leading-relaxed">
                <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-va-azul dark:text-sky-300" />
                Este apartado está dedicado a las fechas religiosas importantes. Durante estos días, te recordamos respetar y valorar los eventos religiosos de nuestra comunidad.
            </p>

            {/* Botón para mostrar/ocultar */}
            <button onClick={toggleReligiousHolidays} aria-expanded={showReligiousHolidays} className={`${btnOutline} mt-5`}>
                {showReligiousHolidays ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                {showReligiousHolidays ? "Ocultar fechas religiosas" : "Mostrar fechas religiosas"}
            </button>

            {/* Lista de fechas religiosas */}
            {showReligiousHolidays && (
                <div className="mt-5 grid gap-6 md:grid-cols-[2fr_3fr] md:items-start">
                    <img
                        src="/fotos_religiosas/virgen maria.jpg"
                        alt="Virgen María"
                        className="w-full rounded-[28px] object-cover"
                    />

                    <ul className="border-t border-va-linea dark:border-white/10">
                        {religiousHolidays.map((holiday, idx) => (
                            <li key={idx} className="flex items-start gap-4 py-3 border-b border-va-linea dark:border-white/10">
                                <HojaCalendario date={holiday.date} tono="girasol" />
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        {holiday.date.toLocaleDateString("es-ES", {
                                            day: "numeric",
                                            month: "long",
                                        })}
                                    </p>
                                    <p className="font-bold text-slate-900 dark:text-white">{holiday.title}</p>
                                    <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">{holiday.emoji}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
};

export default ReligiousHolidays;
