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
    const conFoto = schedules.filter((s) => s.image);
    const sinFoto = schedules.filter((s) => !s.image);

    return (
        <div className="mt-10">
            {/* Áreas sociales con foto */}
            <div className="grid gap-4 md:grid-cols-2">
                {conFoto.map((schedule, index) => (
                    <article
                        key={index}
                        className="overflow-hidden rounded-[28px] border border-va-linea dark:border-white/10 bg-white dark:bg-va-marea flex flex-col"
                    >
                        <img
                            src={String(schedule.image)}
                            alt={schedule.area}
                            className="w-full aspect-[16/9] object-cover"
                        />
                        <div className="p-6 flex flex-col flex-1">
                            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">{schedule.area}</h2>
                            {schedule.description && (
                                <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {schedule.description}
                                </p>
                            )}
                            <dl className="mt-auto pt-5 space-y-3">
                                {schedule.schedules.map((time, idx) => (
                                    <div key={idx}>
                                        <dt className="text-sm text-slate-500 dark:text-slate-400">{time.day}</dt>
                                        <dd className="font-display font-bold text-2xl md:text-3xl tracking-tight tabular-nums text-va-azul dark:text-sky-300">{time.hours}</dd>
                                    </div>
                                ))}
                            </dl>
                            {schedule.closedDays && schedule.closedDays.length > 0 && (
                                <p className="mt-4 self-start rounded-full bg-red-50 dark:bg-red-950/50 px-3.5 py-1.5 text-sm text-red-900 dark:text-red-100">
                                    <strong>Día de mantenimiento:</strong> {schedule.closedDays.join(", ")}
                                </p>
                            )}
                        </div>
                    </article>
                ))}
            </div>

            {/* Obras, materiales y música */}
            <ul className="mt-4 rounded-[28px] border border-va-linea dark:border-white/10 bg-white dark:bg-va-marea divide-y divide-va-linea dark:divide-white/10">
                {sinFoto.map((schedule, index) => (
                    <li key={index} className="p-6 grid gap-3 md:grid-cols-[1fr_auto] md:gap-10 md:items-center">
                        <div>
                            <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">{schedule.area}</h2>
                            {schedule.description && (
                                <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed max-w-[60ch]">{schedule.description}</p>
                            )}
                        </div>
                        <dl className="space-y-2 md:text-right">
                            {schedule.schedules.map((time, idx) => (
                                <div key={idx}>
                                    <dt className="text-sm text-slate-500 dark:text-slate-400">{time.day}</dt>
                                    <dd className="font-bold text-lg tabular-nums text-va-azul dark:text-sky-300">{time.hours}</dd>
                                </div>
                            ))}
                        </dl>
                        {schedule.closedDays && schedule.closedDays.length > 0 && (
                            <p className="text-sm text-red-700 dark:text-red-300">
                                <strong>Día de mantenimiento:</strong> {schedule.closedDays.join(", ")}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Horarios;
