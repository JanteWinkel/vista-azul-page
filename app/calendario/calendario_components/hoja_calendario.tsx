// Hoja de calendario pequeña (mes arriba, día abajo) para listas de fechas.
const HojaCalendario = ({ date, tono = "sol" }: { date: Date; tono?: "sol" | "girasol" }) => (
    <span className="flex-shrink-0 w-14 rounded-xl overflow-hidden border border-va-linea dark:border-white/15 text-center bg-white dark:bg-va-noche" aria-hidden="true">
        <span className={`block text-[0.7rem] font-bold py-0.5 capitalize ${tono === "sol" ? "bg-va-sol text-white" : "bg-va-girasol text-va-abismo"}`}>
            {date.toLocaleDateString("es-ES", { month: "short" }).replace(".", "")}
        </span>
        <span className="block font-display font-extrabold text-2xl leading-none py-1.5 tabular-nums text-slate-900 dark:text-white">
            {date.getDate()}
        </span>
    </span>
);

export default HojaCalendario;
