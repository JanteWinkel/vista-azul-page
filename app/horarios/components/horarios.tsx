/* eslint-disable @next/next/no-img-element */
interface ScheduleItem {
    image?: React.ReactNode;
    area: string;
    description?: string;
    schedules: { day: string; hours: string }[];
    closedDays?: string[]; // Días en los que no está disponible
}

const schedules: ScheduleItem[] = [
    {
        area: "Piscina",
        image: "/fotos-accesos-directos/foto_piscina_1.jpg",
        description: "Uso exclusivo para residentes y sus invitados. Recordatorio: Hay un máximo de 4 usuarios por TH.",
        schedules: [
            { day: "Martes a Domingos", hours: "9:00 AM - 7:00 PM" },
        ],
        closedDays: ["Lunes"], // Días de cierre o mantenimiento
    },
    {
        area: "Cancha",
        image: "/fotos-accesos-directos/foto_cancha_1.jpg",
        description: "Uso exclusivo para residentes y sus invitados. Recordatorio: Hay un máximo de 4 usuarios por TH.",
        schedules: [
            { day: "Lunes a Domingo", hours: "9:00 AM - 10:00 PM" },
        ],
    },
    {
        area: "Caney de Eventos",
        image: "/fotos-accesos-directos/foto_caney_1.jpg",
        description: "Reservación previa requerida para fiestas.",
        schedules: [
            { day: "Lunes a Domingo", hours: "9:00 AM - 10:00 PM" },
        ],
    },
    {
        area: "Parque Infantil",
        image: "/fotos-accesos-directos/foto_parque_1.jpg",
        description: "Uso exclusivo para niños pequeños, siempre bajo la supervisión de sus padres o responsables.",
        schedules: [
            { day: "Lunes a Domingo", hours: "8:00 AM - 10:00 PM" },
        ],
    },
    {
        area: "Horario Laboral",
        description: "Remodelaciones y trabajos pesados en los TH.",
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
        description: "Volumen moderado y respetando las normas. Aplica también a la música escuchada en cada TH.",
        schedules: [
            { day: "Lunes a Domingo", hours: "10:00 AM - 12:00 PM" },
        ],
    },
];

const Horarios = () => {
    return (

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-6 ">

            {schedules.map((schedule, index) => (
                <div
                    key={index}
                    className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600 relative overflow-hidden block hover:scale-105"
                >
                    <span
                        className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600"
                    ></span>
                    <div className="-mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                        {schedule.image && (
                            <img
                                src={String(schedule.image)}
                                alt={schedule.area}
                                className="w-full h-48 object-cover" // Ajusta h-48 a la altura deseada
                            />
                        )}
                    </div>

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

    );
};

export default Horarios;