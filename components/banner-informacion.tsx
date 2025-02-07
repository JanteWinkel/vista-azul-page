import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerInfo = () => {
    return (
        <section className="rounded-3xl shadow-xl ">
            <div className="p-8 text-center sm:p-12">
                <p className="text-xl ">
                    No olvides revisar las actividades programadas en el calendario mensual.
                </p>

                <h2 className="mt-4 text-3xl font-bold text-primary">Mantente al Día</h2>

                <p className="text-xl mt-4">
                    ¿Necesitas información urgente? Visita nuestra sección de contactos.
                </p>

                <div className="mt-8 flex justify-center space-x-4">
                    <Link href="/calendario" className={buttonVariants({ variant: "outline" })}>
                        <strong className="text-primary">Calendario</strong>
                    </Link>
                    <Link href="/contactos" className={buttonVariants({ variant: "outline" })}>
                        <strong className="text-primary">Contactos</strong>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default BannerInfo;