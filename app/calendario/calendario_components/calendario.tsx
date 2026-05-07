import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import dynamic from "next/dynamic";

const Calendar = dynamic(() => import("react-calendar"), { ssr: false });

interface Event {
  title: string;
  days: string[];
  time: string;
  color: string;
}

interface Holiday {
  date: Date;
  title: string;
  color: string;
}

// Definir eventos recurrentes con colores
const recurringEvents: Event[] = [
  {
    title: "Bombeo de agua a los TH",
    days: ["Monday", "Wednesday", "Friday"],
    time: "6:00 PM - 9:00 PM",
    color: "#3b82f6", // Azul
  },
  {
    title: "Atención a propietarios en oficina",
    days: ["Thursday"],
    time: "9:00 AM - 11:00 AM",
    color: "#22c55e", // Verde
  },
];

// Definir feriados con color morado
const holidayEvents: Holiday[] = [
  {
    date: new Date(2026, 1, 16),
    title: "Lunes de Carnaval",
    color: "#a855f7",
  },
  {
    date: new Date(2026, 1, 17),
    title: "Martes de Carnaval",
    color: "#a855f7",
  },
  {
    date: new Date(2026, 2, 29),
    title: "Domingo de Ramos",
    color: "#a855f7",
  },
  {
    date: new Date(2026, 3, 2),
    title: "Jueves Santo",
    color: "#a855f7",
  },
  {
    date: new Date(2026, 3, 3),
    title: "Viernes Santo",
    color: "#a855f7",
  },
  {
    date: new Date(2026, 3, 19),
    title: "Declaración de la Independencia",
    color: "#a855f7",
  },
  {
    date: new Date(2026, 3, 5),
    title: "Domingo de Pascua",
    color: "#a855f7",
  },
  {
    date: new Date(2026, 4, 1),
    title: "Día del Trabajo",
    color: "#a855f7",
  },
  {
    date: new Date(2026, 4, 4),
    title: "Movimiento Independentista de Margarita",
    color: "#a855f7",
  },
  {
    date: new Date(2026, 5, 24),
    title: "Batalla de Carabobo",
    color: "#a855f7",
  },
  {
    date: new Date(2026, 6, 5),
    title: "Día de la Independencia",
    color: "#a855f7",
  },
  {
    date: new Date(2026, 6, 24),
    title: "Natalicio de Simón Bolívar",
    color: "#a855f7",
  },
  {
    date: new Date(2026, 6, 31),
    title: "Conmemoración de la Batalla de Matasiete",
    color: "#a855f7",
  },
  {
    date: new Date(2026, 8, 8),
    title: "Día de la Virgen del Valle",
    color: "#a855f7",
  },
  {
    date: new Date(2026, 0, 1),
    title: "Año Nuevo",
    color: "#a855f7",
  },
  {
    date: new Date(2026, 11, 25),
    title: "Navidad",
    color: "#a855f7",
  },
  {
    date: new Date(2026, 2, 25),
    title: "Anunciación del Ángel a María",
    color: "#facc15",
  },
  {
    date: new Date(2026, 2, 21),
    title: "Vía Crucis",
    color: "#facc15",
  },
  {
    date: new Date(2026, 4, 30),
    title: "Visitación de María a Isabel",
    color: "#facc15",
  },
  {
    date: new Date(2026, 7, 15),
    title: "Asunción de María a los cielos",
    color: "#facc15",
  },
  {
    date: new Date(2026, 8, 8),
    title: "Natividad de la Virgen del Valle",
    color: "#facc15",
  },
  {
    date: new Date(2026, 11, 8),
    title: "Inmaculada Concepción",
    color: "#facc15",
  },
];

const Calendario = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    // Función para obtener el contenido del día con colores divididos en partes
    const getTileContent = ({ date }: { date: Date }) => {
        const colors: string[] = [];

        // Buscar eventos recurrentes
        recurringEvents.forEach((event) => {
            const dayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);

            // Check if the day is a holiday
            const isHoliday = holidayEvents.some(
                (holiday) => date.toDateString() === holiday.date.toDateString()
            );

            // If it's not a holiday, include the event
            if (event.days.includes(dayName) && !(event.title === "Atención a propietarios en oficina" && isHoliday)) {
                colors.push(event.color);
            }
        });

        // Buscar feriados
        holidayEvents.forEach((event) => {
            if (date.toDateString() === event.date.toDateString()) {
                colors.push(event.color);
            }
        });

        if (colors.length === 0) {
            // Si no hay eventos, agregar un circulo sin color
            return (
                <div
                    className="w-8 h-8 flex items-center justify-center rounded-full text-white font-bold"
                    style={{
                        background: `linear-gradient(to bottom, transparent, transparent)`,
                    }}
                >
                    {colors.length > 1 ? '' : null} {/* Corregido para no mostrar el número del día cuando hay varios eventos */}
                </div>
            );
        }

        // Si hay varios eventos, dividir el fondo en partes iguales
        const backgroundImage = colors
            .map((color, index) => {
                const size = 100 / colors.length;
                return `${color} ${size * index}% ${size * (index + 1)}%`;
            })
            .join(", ");

        return (
            <div
                className="w-8 h-8 flex items-center justify-center rounded-full text-white font-bold"
                style={{
                    background: `linear-gradient(to bottom, ${backgroundImage})`,
                }}
            >
                {colors.length > 1 ? '' : null} {/* Corregido para no mostrar el número del día cuando hay varios eventos */}
            </div>
        );
    };

    return (
        <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto ">
            <div className="flex flex-col md:flex-row p-4  md:py-4 max-w-6xl px-4 py-4 mx-auto sm:px-6 relative overflow-hidden  border border-gray-200 rounded-lg shadow-lg ">
                <span
                    className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600"
                ></span>
                <div className="flex-1">
                    <h1 className="text-3xl text-primary font-extrabold uppercase text-center">
                        ¡Calendario de eventos!
                    </h1>
                    <div>
                        <p className="my-2 ">
                            En este calendario:
                            <br /> 🔵 Días con bombeo de agua. <br /> 🟢 Atención a propietarios. <br /> 🟣 Feriados. <br /> 🟡 Eventos religiosos. <br /> 🔴 Convocatorias.
                        </p>
                        <p className="my-2 font-bold text-primary">Para más detalles:</p>
                        <p className="my-2">Selecciona un día con eventos en el calendario.</p>

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
                                            ) && !(event.title === "Atención a propietarios en oficina" && holidayEvents.some(
                                                (holiday) => selectedDate.toDateString() === holiday.date.toDateString()
                                            ))
                                        )
                                        .map((event, idx) => (
                                            <li key={idx} className="text-black dark:text-white">
                                                <span className="font-medium">{event.title}:</span> {event.time}
                                            </li>
                                        ))}
                                    {holidayEvents
                                        .filter((event) => event.date.toDateString() === selectedDate?.toDateString())
                                        .map((event, idx) => (
                                            <li key={idx} className="text-black dark:text-white">
                                                <span className="font-medium">{event.title}</span>
                                            </li>
                                        ))}
                                </ul>
                                {recurringEvents.length === 0 && holidayEvents.length === 0 && (
                                    <p className="text-sm text-black dark:text-white">No hay eventos para este día.</p>
                                )}
                            </div>

                        )}
                    </div>
                </div>

                <div className="flex-1 md:scale-100 scale-90 transition-all mb-2">
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
    )
}
    export default Calendario;