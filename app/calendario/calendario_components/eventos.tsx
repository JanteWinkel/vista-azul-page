"use client";



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
        time: "7:00 PM - 9:00 PM",
        emoji: "🚰",
    },
    {
        title: "Atención a propietarios en oficina",
        days: ["Viernes"],
        time: "3:00 PM - 5:00 PM",
        emoji: "📝",
    },
];

// Feriados
const holidayEvents: Holiday[] = [
    { date: new Date(2025, 2, 3), title: "Lunes de Carnaval", emoji: "🎉",},
    { date: new Date(2025, 2, 4), title: "Martes de Carnaval", emoji: "🎉",},
    { date: new Date(2025, 3, 13), title: "Domingo de Ramos", emoji: "🎉",},
    { date: new Date(2025, 3, 17), title: "Jueves Santo", emoji: "🎉",},
    { date: new Date(2025, 3, 18), title: "Viernes Santo", emoji: "🎉",},
    { date: new Date(2025, 3, 19), title: "Declaración de la Independencia", emoji: "🎉",},
    { date: new Date(2025, 3, 20), title: "Domingo de Pascua", emoji: "🎉",},
    { date: new Date(2025, 4, 1), title: "Día del Trabajo", emoji: "🎉",},
    { date: new Date(2025, 5, 24), title: "Batalla de Carabob", emoji: "🎉",},
    { date: new Date(2025, 0, 1), title: "Año Nuevo", emoji: "🎉" },
    { date: new Date(2025, 11, 25), title: "Navidad", emoji: "🎄" },
    // Agrega más feriados aquí si lo deseas
];

const EventSchedule = () => {
    return (
        <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto pt-8 mt-8">
            <h5 className="text-3xl text-primary font-extrabold uppercase text-center ">
                Cronograma de Eventos Importantes
            </h5>
            <p className="mt-4">Mantente al tanto de los eventos y actividades importantes del condominio.
                Aquí encontrarás los horarios de bombeo de agua, atención al cliente,
                y las fechas de feriados.</p>
            <div className="mt-4">
                <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                    Eventos recurrentes
                </h3>
                <ul className="space-y-4">
                    {recurringEvents.map((event, idx) => (
                        <li
                            key={idx}
                            className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600"
                        >
                            <p className="font-medium text-gray-800 dark:text-gray-200">
                                {event.emoji} {event.title}
                            </p>
                            <p className="text-sm ext-gray-600 dark:text-gray-400">
                                Días: {event.days.join(", ")}
                            </p>
                            <p className="text-sm ext-gray-600 dark:text-gray-400">
                                Horario: {event.time}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                    Feriados
                </h3>
                <ul className="space-y-4">
                    {holidayEvents.map((holiday, idx) => (
                        <li
                            key={idx}
                            className="p-4 border border-gray-200 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600"
                        >
                            <p className="font-medium text-gray-800 dark:text-gray-200">
                                {holiday.emoji} {holiday.title}
                            </p>
                            <p className="text-sm ext-gray-600 dark:text-gray-400">
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
            </div>
            <hr className="my-8 border-t border-gray-300 w-full" />
        </div>
    );
};

export default EventSchedule;