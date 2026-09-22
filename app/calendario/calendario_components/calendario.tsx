import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import dynamic from "next/dynamic";
import { Calendar as CalendarIcon, Droplets, Users, PartyPopper, Church, Bell, CalendarX } from "lucide-react";

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

// 👈 Tipo manual para el tileContent de react-calendar
type TileContentArgs = {
  activeStartDate: Date;
  date: Date;
  view: "month" | "year" | "decade" | "century";
};

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

  // 👈 Tipo explícito para el parámetro
  const getTileContent = ({ date }: TileContentArgs) => {
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
      return (
        <div
          className="w-8 h-8 flex items-center justify-center rounded-full text-white font-bold"
          style={{
            background: `linear-gradient(to bottom, transparent, transparent)`,
          }}
        >
          {colors.length > 1 ? '' : null}
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
        {colors.length > 1 ? '' : null}
      </div>
    );
  };

  // 👈 Calcular eventos del día seleccionado
  const getSelectedDateEvents = () => {
    if (!selectedDate) return { recurring: [], holidays: [] };

    const selectedDayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(selectedDate);

    const recurring = recurringEvents.filter((event) =>
      event.days.includes(selectedDayName) &&
      !(event.title === "Atención a propietarios en oficina" && holidayEvents.some(
        (holiday) => selectedDate.toDateString() === holiday.date.toDateString()
      ))
    );

    const holidays = holidayEvents.filter(
      (event) => event.date.toDateString() === selectedDate.toDateString()
    );

    return { recurring, holidays };
  };

  const { recurring: selectedRecurring, holidays: selectedHolidays } = getSelectedDateEvents();
  const hasEvents = selectedRecurring.length > 0 || selectedHolidays.length > 0;

  return (
    <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="flex flex-col md:flex-row p-4 md:py-4 max-w-6xl px-4 py-4 mx-auto sm:px-6 relative overflow-hidden border-2 border-blue-300 dark:border-blue-600 rounded-xl shadow-lg bg-white dark:bg-gray-800">
        {/* Borde decorativo superior */}
        <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></span>

        <div className="flex-1">
          {/* Título con icono */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <CalendarIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h1 className="text-2xl md:text-3xl text-blue-700 dark:text-blue-300 font-extrabold uppercase text-center">
              ¡Calendario de eventos!
            </h1>
          </div>

          <div>
            {/* Leyenda con iconos */}
            <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 p-3 mb-3">
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">
                En este calendario:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="w-3 h-3 rounded-full bg-[#3b82f6] flex-shrink-0"></span>
                  <Droplets className="w-3 h-3 text-[#3b82f6]" />
                  <span>Bombeo de agua</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="w-3 h-3 rounded-full bg-[#22c55e] flex-shrink-0"></span>
                  <Users className="w-3 h-3 text-[#22c55e]" />
                  <span>Atención a propietarios</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="w-3 h-3 rounded-full bg-[#a855f7] flex-shrink-0"></span>
                  <PartyPopper className="w-3 h-3 text-[#a855f7]" />
                  <span>Feriados</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="w-3 h-3 rounded-full bg-[#facc15] flex-shrink-0"></span>
                  <Church className="w-3 h-3 text-[#facc15]" />
                  <span>Eventos religiosos</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"></span>
                  <Bell className="w-3 h-3 text-red-500" />
                  <span>Convocatorias</span>
                </div>
              </div>
            </div>

            <p className="my-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
              Para más detalles:
            </p>
            <p className="my-2 text-sm text-gray-600 dark:text-gray-400">
              Selecciona un día con eventos en el calendario.
            </p>

            {selectedDate && (
              <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 p-3 mt-3">
                <h2 className="flex items-center gap-2 my-1 font-bold mb-2 text-blue-700 dark:text-blue-300 text-sm">
                  <CalendarIcon className="w-4 h-4" />
                  Eventos para {selectedDate.toLocaleDateString()}:
                </h2>

                {/* 👈 Si NO hay eventos */}
                {!hasEvents ? (
                  <div className="flex items-center gap-2 py-2">
                    <CalendarX className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                    <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                      No hay eventos para este día
                    </p>
                  </div>
                ) : (
                  /* 👈 Si SÍ hay eventos */
                  <ul className="list-disc pl-5 space-y-1.5">
                    {selectedRecurring.map((event, idx) => (
                      <li key={idx} className="text-xs text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">{event.title}:</span> {event.time}
                      </li>
                    ))}
                    {selectedHolidays.map((event, idx) => (
                      <li key={idx} className="text-xs text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">{event.title}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 md:scale-100 scale-90 transition-all mb-2 md:pl-6">
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