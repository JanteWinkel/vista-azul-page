import Link from "next/link";
import { buttonVariants } from "./ui/button";

const AnuncioCenso = () => {
  return (
    <div className=" flex flex-col gap-2 px-4 py-3 text-white bg-gradient-to-r from-green-600 via-green-500 to-green-600 sm:px-6 sm:py-4 md:flex-row md:items-center md:justify-between md:gap-4">
      <div className="order-1 md:order-none text-center md:text-left items-center">
        <p className="text-lg font-bold mb-1">
          AVISO IMPORTANTE❗
        </p>
        <p className="text-sm">
          ESTIMADOS VECINOS. <br />
          EL BLOQUEO DEL ACCESO ONLINE DE LAS CUENTAS DEL CONDOMINIO YA FUE LEVANTADO. 
          DESDE ESTE MOMENTO TODAS LAS CUENTAS ESTÁN A SU DISPOSICIÓN PARA HACER LOS PAGOS.
        </p>
        <div className="mt-4">
          <Link href="/finanzas" className={buttonVariants({ variant: "outline" })}>
            <strong className="text-green-500">Finanzas</strong>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default AnuncioCenso;