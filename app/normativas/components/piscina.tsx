"use client";

import {
    Clock,
    Users,
    ShieldCheck,
    Droplets,
    Baby,
    Waves
} from 'lucide-react';
import { SectionHeader } from '@/components/va-ui';

const destacadas = [
    { icon: Clock, label: "Horario", value: "9:00 AM - 7:00 PM" },
    { icon: Users, label: "Máx. Personas", value: "4 por Town House" },
    { icon: ShieldCheck, label: "Requisito", value: "Estar al día con condominio" },
    { icon: Baby, label: "Menores", value: "-13 años con representante" },
];

const PiscinaComponent = () => {

    return (
        <section className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto py-10">
            <SectionHeader
                icon={Waves}
                kicker="Normativas del Condominio"
                title="Normativas de la piscina"
                description="Disfruta responsablemente de nuestras instalaciones"
            />

            {/* Normas destacadas */}
            <dl className="mt-8 grid grid-cols-2 lg:grid-cols-4 rounded-[28px] bg-va-abismo text-white overflow-hidden">
                {destacadas.map(({ icon: Icon, label, value }, i) => (
                    <div
                        key={label}
                        className={`p-5 md:p-6 border-white/10 ${i % 2 === 1 ? "border-l" : ""} ${i >= 2 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
                    >
                        <dt className="flex items-center gap-2 text-sm text-sky-200">
                            <Icon className="w-4 h-4 text-va-girasol" />
                            {label}
                        </dt>
                        <dd className="mt-2 font-display font-bold text-lg md:text-xl leading-tight">{value}</dd>
                    </div>
                ))}
            </dl>

            {/* Reglamento de uso */}
            <div className="mt-4 rounded-[28px] border border-va-linea dark:border-white/10 bg-white dark:bg-va-marea p-6 md:p-10">
                <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">Reglamento de uso</h3>

                <ol className="mt-5 md:columns-2 md:gap-10 text-slate-700 dark:text-slate-300 leading-relaxed">
                    {[
                        <><strong className="text-slate-900 dark:text-white">Horario para el uso de la piscina:</strong> de martes a domingo entre 9:00 AM y 7:00 PM.</>,
                        <><strong className="text-slate-900 dark:text-white">Día lunes:</strong> mantenimiento y limpieza de la piscina.</>,
                        <><strong className="text-slate-900 dark:text-white">Todos debemos respetar</strong> las normas de la moral y las buenas costumbres.</>,
                        <>Para el uso de la piscina es obligatorio <strong className="text-slate-900 dark:text-white">estar al día con el condominio.</strong></>,
                        <>Solo se permiten <strong className="text-slate-900 dark:text-white">cuatro (4) personas por Town House.</strong></>,
                        <>Antes de ingresar a la piscina <strong className="text-slate-900 dark:text-white">debe ducharse.</strong></>,
                        <>Ingresar a la piscina solo con la vestimenta adecuada, <strong className="text-slate-900 dark:text-white">sin fibras que puedan dañar los filtros como jeans, metales u otros.</strong></>,
                        <>Mantener <strong className="text-slate-900 dark:text-white">limpias las instalaciones,</strong> utilice las papeleras.</>,
                        <><strong className="text-slate-900 dark:text-white">Todo niño menor de trece (13) años</strong> debe estar obligatoriamente acompañado de su representante.</>,
                        <>El uso de equipos de sonido no podrá ser con exceso de volumen que perturbe la tranquilidad.</>,
                        <>Prohibido el consumo de alimentos o bebidas dentro y alrededor de la piscina. Por favor, utilice los caneyes.</>,
                        <>Prohibidos juegos, clavados, carreras y prácticas peligrosas dentro y fuera de la piscina.</>,
                        <>No se permiten flotadores, colchonetas e inflables similares dentro de la piscina.</>,
                    ].map((regla, i) => (
                        <li key={i} className="break-inside-avoid flex gap-3 py-2.5 border-b border-va-linea dark:border-white/10">
                            <span className="font-display font-bold text-va-azul dark:text-sky-300 tabular-nums min-w-[1.75rem]">{i + 1}.</span>
                            <span>{regla}</span>
                        </li>
                    ))}
                </ol>
            </div>

            {/* Nota importante */}
            <p className="mt-4 flex items-start gap-3 rounded-[22px] bg-va-bruma dark:bg-white/5 p-5 text-slate-700 dark:text-slate-300 leading-relaxed">
                <Droplets className="w-5 h-5 flex-shrink-0 mt-0.5 text-va-azul dark:text-sky-300" />
                <span>
                    <strong className="text-slate-900 dark:text-white">Recuerda:</strong> el día lunes la piscina permanece cerrada por mantenimiento y limpieza.
                    ¡Disfruta responsablemente y respeta las normas para el bienestar de todos!
                </span>
            </p>
        </section>
    );
};

export default PiscinaComponent;
