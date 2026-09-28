import Link from "next/link";
import { Clock } from "lucide-react";
import ClimaWidget from "./clima";

const SeccionClima = () => {
    return (
        <section className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:gap-10 md:items-center rounded-[28px] bg-va-bruma dark:bg-va-marea p-6 md:p-10">
            <div>
                <p className="font-display font-bold text-2xl md:text-3xl leading-tight text-slate-900 dark:text-white max-w-[24ch]">
                    Disfruta las áreas sociales respetando las normas y cumpliendo con los horarios establecidos.
                </p>
                <p className="mt-2 font-display font-bold text-xl text-va-azul dark:text-sky-300">¡Gracias por su colaboración!</p>

                <p className="mt-5 text-slate-700 dark:text-slate-300 leading-relaxed max-w-[60ch]">
                    ¿Planeas un día en la piscina o una tarde en la cancha? Antes de salir, echa un vistazo al estado del clima y prepárate mejor. Evita sorpresas y asegúrate de llevar lo necesario para un día perfecto en nuestras áreas sociales. ¡Consulta el pronóstico ahora!
                </p>

                <Link
                    href="/horarios"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-va-azul dark:border-sky-300 text-va-azul dark:text-sky-300 font-bold px-5 py-2.5 hover:bg-va-azul hover:text-white dark:hover:bg-sky-300 dark:hover:text-va-noche transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-va-azul"
                >
                    <Clock className="w-4 h-4" />
                    Horarios
                </Link>
            </div>

            <ClimaWidget />
        </section>
    )
}

export default SeccionClima;
