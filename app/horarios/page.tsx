"use client";

import Footer from "@/components/footer";

interface ScheduleItem {
  area: string;
  description?: string;
  schedules: { day: string; hours: string }[];
  closedDays?: string[]; // Días en los que no está disponible
}

const schedules: ScheduleItem[] = [
  {
    area: "Piscina",
    description: "Uso exclusivo para residentes y sus invitados. Recordatorio: Hay un máximo de 4 usuarios por TH.",
    schedules: [
      { day: "Martes a Domingos", hours: "9:00 AM - 7:00 PM" },
    ],
    closedDays: ["Lunes"], // Días de cierre o mantenimiento
  },
  {
    area: "Cancha",
    schedules: [
      { day: "Lunes a Domingo", hours: "9:00 AM - 10:00 PM" },
    ],
  },
  {
    area: "Caney de Eventos",
    description: "Reservación previa requerida para fiestas.",
    schedules: [
      { day: "Lunes a Domingo", hours: "9:00 AM - 10:00 PM" },
    ],
  },
  {
    area: "Parque Infantil",
    schedules: [
      { day: "Lunes a Domingo", hours: "8:00 AM - 10:00 PM" },
    ],
  },
  {
    area: "Horario Laboral",
    description: "Remodelaciones y trabajos pesados.",
    schedules: [
      { day: "Lunes a Viernes", hours: "8:00 AM - 12:00 PM, 1:00 PM - 5:00 PM" },
    ],
  },
  {
    area: "Ingreso de Materiales",
    schedules: [
      { day: "Lunes a Viernes", hours: "8:00 AM - 12:00 PM, 1:00 PM - 5:00 PM" },
    ],
  },
  {
    area: "Ingreso de Materiales (Descarga)",
    schedules: [
      { day: "Lunes a Viernes", hours: "8:00 AM - 12:00 PM" },
    ],
  },
  {
    area: "Música",
    description: "Volumen moderado y respetando las normas.",
    schedules: [
      { day: "Lunes a Domingo", hours: "10:00 AM - 12:00 PM" },
    ],
  },
];

const ScheduleComponent = () => {
  return (
    <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto pt-20 mt-8">
      <h1 className="text-5xl text-primary font-extrabold uppercase text-center mb-8">Horarios de Uso</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {schedules.map((schedule, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600"
          >
            <h2 className="text-xl font-semibold text-primary mb-2">{schedule.area}</h2>
            {schedule.description && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {schedule.description}
              </p>
            )}
            <ul className="space-y-2">
              {schedule.schedules.map((time, idx) => (
                <li key={idx} className="text-sm">
                  <span className="font-medium">{time.day}: </span>
                  <span>{time.hours}</span>
                </li>
              ))}
            </ul>
            {schedule.closedDays && schedule.closedDays.length > 0 && (
              <p className="mt-4 text-sm text-red-500">
                <strong>Días de cierre:</strong> {schedule.closedDays.join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ScheduleComponent;