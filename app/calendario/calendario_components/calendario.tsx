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
    color: "#2E9BD6", // Azul
  },
  {
    title: "Atención a propietarios en oficina",
    days: ["Thursday"],
    time: "9:00 AM - 11:00 AM",
    color: "#1F9D6B", // Verde
  },
];

// Definir feriados con color naranja (religiosos en amarillo)
const holidayEvents: Holiday[] = [
  {
    date: new Date(2026, 1, 16),
    title: "Lunes de Carnaval",
    color: "#EE6A12",
  },
  {
    date: new Date(2026, 1, 17),
    title: "Martes de Carnaval",
    color: "#EE6A12",
  },
  {
    date: new Date(2026, 2, 29),
    title: "Domingo de Ramos",
    color: "#EE6A12",
  },
  {
    date: new Date(2026, 3, 2),
    title: "Jueves Santo",
    color: "#EE6A12",
  },
  {
    date: new Date(2026, 3, 3),
    title: "Viernes Santo",
    color: "#EE6A12",
  },
  {
    date: new Date(2026, 3, 19),
    title: "Declaración de la Independencia",
    color: "#EE6A12",
  },
  {
    date: new Date(2026, 3, 5),
    title: "Domingo de Pascua",
    color: "#EE6A12",
  },
  {
    date: new Date(2026, 4, 1),
    title: "Día del Trabajo",
    color: "#EE6A12",
  },
  {
    date: new Date(2026, 4, 4),
    title: "Movimiento Independentista de Margarita",
    color: "#EE6A12",
  },
  {
    date: new Date(2026, 5, 24),
    title: "Batalla de Carabobo",
    color: "#EE6A12",
  },
  {
    date: new Date(2026, 6, 5),
    title: "Día de la Independencia",
    color: "#EE6A12",
  },
  {
    date: new Date(2026, 6, 24),
    title: "Natalicio de Simón Bolívar",
    color: "#EE6A12",
  },
  {
    date: new Date(2026, 6, 31),
    title: "Conmemoración de la Batalla de Matasiete",
    color: "#EE6A12",
  },
  {
    date: new Date(2026, 8, 8),
    title: "Día de la Virgen del Valle",
    color: "#EE6A12",
  },
  {
    date: new Date(2026, 0, 1),
    title: "Año Nuevo",
    color: "#EE6A12",
  },
  {
    date: new Date(2026, 11, 25),
    title: "Navidad",
    color: "#EE6A12",
  },
  {
    date: new Date(2026, 2, 25),
    title: "Anunciación del Ángel a María",
    color: "#E0A800",
  },
  {
    date: new Date(2026, 2, 21),
    title: "Vía Crucis",
    color: "#E0A800",
  },
  {
    date: new Date(2026, 4, 30),
    title: "Visitación de María a Isabel",
    color: "#E0A800",
  },
  {
    date: new Date(2026, 7, 15),
    title: "Asunción de María a los cielos",
    color: "#E0A800",
  },
  {
    date: new Date(2026, 8, 8),
    title: "Natividad de la Virgen del Valle",
    color: "#E0A800",
  },
  {
    date: new Date(2026, 11, 8),
    title: "Inmaculada Concepción",
    color: "#E0A800",
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

    return (
      <div className="flex justify-center gap-0.5 h-2 mt-1">
        {colors.map((color, index) => (
          <span key={index} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }}></span>
        ))}
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

  const leyenda = [
    { color: "#2E9BD6", icon: Droplets, label: "Bombeo de agua" },
    { color: "#1F9D6B", icon: Users, label: "Atención a propietarios" },
    { color: "#EE6A12", icon: PartyPopper, label: "Feriados" },
    { color: "#E0A800", icon: Church, label: "Eventos religiosos" },
    { color: "#B42318", icon: Bell, label: "Convocatorias" },
  ];

  return (
    <section className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto py-10">
      <div className="rounded-[28px] border border-va-linea dark:border-white/10 bg-white dark:bg-va-marea p-6 md:p-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="flex items-center gap-3 font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight text-slate-900 dark:text-white [font-stretch:88%]">
            <CalendarIcon className="w-7 h-7 text-va-azul dark:text-sky-300 flex-shrink-0" />
            ¡Calendario de eventos!
          </h2>

          {/* Leyenda */}
          <p className="mt-6 text-sm font-bold text-slate-700 dark:text-slate-300">En este calendario:</p>
          <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {leyenda.map(({ color, icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: color }}></span>
                <Icon className="w-4 h-4" style={{ color }} />
                {label}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm font-bold text-slate-700 dark:text-slate-300">Para más detalles:</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Selecciona un día con eventos en el calendario.</p>

          {selectedDate && (
            <div className="mt-4 rounded-[22px] bg-va-bruma dark:bg-white/5 p-5" aria-live="polite">
              <h3 className="flex items-center gap-2 font-display font-bold text-lg text-slate-900 dark:text-white">
                <CalendarIcon className="w-5 h-5 text-va-azul dark:text-sky-300" />
                Eventos para {selectedDate.toLocaleDateString()}:
              </h3>

              {!hasEvents ? (
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CalendarX className="w-4 h-4 flex-shrink-0" />
                  No hay eventos para este día
                </p>
              ) : (
                <ul className="mt-2 space-y-1.5">
                  {selectedRecurring.map((event, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: event.color }}></span>
                      <span><strong className="text-slate-900 dark:text-white">{event.title}:</strong> {event.time}</span>
                    </li>
                  ))}
                  {selectedHolidays.map((event, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: event.color }}></span>
                      <strong className="text-slate-900 dark:text-white">{event.title}</strong>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        <div>
          <Calendar
            locale="es"
            onChange={(date: unknown) => setSelectedDate(date instanceof Date ? date : null)}
            value={selectedDate}
            tileContent={getTileContent}
            showNeighboringMonth={false}
          />
        </div>
      </div>
    </section>
  )
}
export default Calendario;
