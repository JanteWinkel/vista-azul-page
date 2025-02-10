import Link from "next/link";
import ClimaWidget from "./clima";
import { buttonVariants } from "./ui/button";

const SeccionClima = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-4 lg:px-8 my-2">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div className="max-w-lg md:max-w-none">
                            <h2 className="text-xl font-semibold  sm:text-2xl">
                                Disfruta las áreas sociales respetando las normas y cumpliendo con los horarios establecidos.
                                <p className="text-xl"><strong>¡Gracias por su colaboración!</strong></p>
                            </h2>
                            <div className='mt-4 text-center'>
                                <Link href="/horarios" className={buttonVariants({ variant: "outline" })}><strong className="text-primary">Horarios</strong></Link>
                            </div>
                            <p className="mt-4 text-gray-800 dark:text-gray-200 text-xl">
                            ¿Planeas un día en la piscina o una tarde en la cancha? Antes de salir, echa un vistazo al estado del clima y prepárate mejor. Evita sorpresas y asegúrate de llevar lo necesario para un día perfecto en nuestras áreas sociales. ¡Consulta el pronóstico ahora!
                            </p>

                        </div>
                    </div>

                    <div>
                        <ClimaWidget />
                    </div>
                </div>
                <hr className="my-4 border-t border-gray-300 w-full" />
            </div>
        </section>
    )
}

export default SeccionClima;