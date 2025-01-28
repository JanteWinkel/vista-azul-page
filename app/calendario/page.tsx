"use client";

import EventSchedule from "./calendario_components/eventos";
import Footer from "@/components/footer";
import { useState } from "react";
import "react-calendar/dist/Calendar.css"; // Estilos predeterminados de react-calendar
import "./calendar.css"; // Tus estilos personalizados
import dynamic from "next/dynamic";

const Calendar = dynamic(() => import("react-calendar"), { ssr: false });

// Definir los eventos recurrentes
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
        days: ["Monday", "Wednesday", "Friday"],
        time: "7:00 PM - 9:00 PM",
        emoji: "🚰",
    },
    {
        title: "Atención a propietarios en oficina",
        days: ["Friday"],
        time: "3:00 PM - 5:00 PM",
        emoji: "📝",
    },
];

// Eventos de feriados
const holidayEvents: Holiday[] = [
    {
        date: new Date(2025, 0, 1),
        title: "Año Nuevo",
        emoji: "🎉",
    },
    {
        date: new Date(2025, 11, 25),
        title: "Navidad",
        emoji: "🎉",
    },
    // Agrega más feriados aquí si lo deseas
];

const EventCalendar = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    // Función para obtener el contenido del día (si tiene evento)
    const getTileContent = ({ date }: { date: Date }) => {
        const eventsForDate: string[] = [];

        // Buscar eventos recurrentes
        recurringEvents.forEach((event) => {
            const dayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
            if (event.days.includes(dayName)) {
                eventsForDate.push(event.emoji);
            }
        });

        // Buscar feriados
        holidayEvents.forEach((event) => {
            if (date.toDateString() === event.date.toDateString()) {
                eventsForDate.push(event.emoji);
            }
        });

        return eventsForDate.length > 0 ? (
            <div className="text-lg">{eventsForDate.join(" ")}</div>
        ) : null;
    };

    return (
        <div className="">
            <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
                <div>
                    <EventSchedule />
                </div>
                <div className="flex flex-col md:flex-row p-4 md:py-4 max-w-6xl px-4 py-4 mx-auto sm:px-6 ">
                    <div className="flex-1 ">
                        <h1 className="text-3xl text-primary font-extrabold uppercase text-center ">
                            ¡Calendario de eventos!
                        </h1>
                        <p className="my-2 ">
                            En este calendario: <br />
                            Los días marcados con el símbolo 🚰 indican el bombeo de agua. <br />
                            Los días marcados con el símbolo 📝 indican la atención a propietarios.<br />
                            Los días marcados con el símbolo 🎉 indican un feriado. <br />
                        </p>
                        <p className="my-2 font-bold text-primary">Para más detalles:</p>
                        <p className="my-2 ">Selecciona un día con eventos en el calendario.</p>

                        {selectedDate && (
                            <div className="event-info">
                                <h2 className="my-2 font-bold mb-2 text-primary">
                                    Eventos para {selectedDate.toLocaleDateString()}:
                                </h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    {recurringEvents
                                        .filter((event) =>
                                            event.days.includes(
                                                new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(selectedDate!)
                                            )
                                        )
                                        .map((event, idx) => (
                                            <li key={idx} className="text-black dark:text-white">
                                                <span className="font-medium">{event.title}:</span> {event.emoji}{" "}
                                                {event.time}
                                            </li>
                                        ))}
                                    {holidayEvents
                                        .filter((event) => event.date.toDateString() === selectedDate?.toDateString())
                                        .map((event, idx) => (
                                            <li key={idx} className=" text-black dark:text-white">
                                                <span className="font-medium">{event.title}:</span> {event.emoji}
                                            </li>
                                        ))}
                                </ul>
                                {recurringEvents.length === 0 && holidayEvents.length === 0 && (
                                    <p className="text-sm text-black dark:text-white">No hay eventos para este día.</p>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex-1 md:scale-100 scale-90 transition-all mt-8">
                        <Calendar
                            locale="es"
                            onChange={(date) => setSelectedDate(date instanceof Date ? date : null)}
                            value={selectedDate}
                            tileContent={getTileContent}
                            showNeighboringMonth={false}
                        />
                    </div>
                </div>
                <hr className="my-8 border-t border-gray-300 w-full" />
            </div>
            <Footer />
        </div>
    );
};

export default EventCalendar;
