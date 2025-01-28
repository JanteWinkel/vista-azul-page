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
    description: "Uso exclusivo para residentes y sus invitados. Recordatorio: Hay un máximo de 4 usuarios por TH.",
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
    description: "Uso exclusivo para niños pequeños, siempre bajo la supervisión de sus padres o responsables.",
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
    description: "Ingreso de camiones con carga liviana, como materiales de construcción menores o suministros generales.",
    schedules: [
      { day: "Lunes a Viernes", hours: "8:00 AM - 12:00 PM, 1:00 PM - 5:00 PM" },
    ],
  },
  {
    area: "Ingreso de Materiales (Descarga)",
    description: "Ingreso de camiones con carga pesada, como arena y materiales grandes, para mantenimiento o construcción.",
    schedules: [
      { day: "Lunes a Viernes", hours: "8:00 AM - 12:00 PM" },
    ],
  },
  {
    area: "Música",
    description: "Volumen moderado y respetando las normas. Aplica también a la música escuchada en cada townhouse.",
    schedules: [
      { day: "Lunes a Domingo", hours: "10:00 AM - 12:00 PM" },
    ],
  },
];

const ScheduleComponent = () => {
  return (
    <div>
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto pt-8 mt-2">
       
        <h1 className="text-3xl text-primary font-extrabold uppercase text-center">Horarios de Uso</h1>
        <p className="mt-4">Consulta aquí los horarios de uso para las áreas comunes y actividades del condominio. Recuerda respetar las normas y horarios establecidos para mantener la convivencia.</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
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
                  <strong>Día de mantenimiento:</strong> {schedule.closedDays.join(", ")}
                </p>
              )}
            </div>
          ))}
        </div>
        <hr className="my-8 border-t border-gray-300 w-full" />
      </div>
      <Footer />
    </div>
  );
};

export default ScheduleComponent;
