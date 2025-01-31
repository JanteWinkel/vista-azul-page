import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerInfo = () => {
    return (
        <>
            <div className="mt-8 text-center">

                <p className="my-2 text-lg">No olvides revisar las actividades programadas en el calendario mensual.</p>

                <h4 className="mt-2 text-3xl text-primary font-extrabold upperce">Mantente al Día</h4>

                <p className="my-2 text-lg">¿Necesitas información urgente? Visita nuestra sección de contactos.</p>

                <div className='mt-4 flex justify-center space-x-4'>
                <Link href="calendario" className={buttonVariants({ variant: "outline" })}><strong className="text-primary">Calendario</strong></Link>
                <Link href="/contactos" className={buttonVariants({ variant: "outline" })}><strong className="text-primary">Contactos</strong></Link>
                </div>

            </div>
            {/* <div className="h-[350px] md:h-[600px] bg-[url('')] bg-center mt-5"/> */}
        </>
    );
}

export default BannerInfo;