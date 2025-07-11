import Link from 'next/link';

const AnuncioCenso = () => {
  return (
    <div className="flex flex-col gap-2 px-4 py-3 text-white bg-gradient-to-r from-red-600 via-red-500 to-red-600 sm:px-6 sm:py-4 md:flex-row md:items-center md:justify-between md:gap-4">
      <div className="order-1 md:order-none text-center md:text-left">
        <p className="text-lg font-bold mb-1">
          🔐 ¡RECORDATORIO! 
        </p>
        <p className="text-sm">
          <strong>Si aún no has cambiado tu contraseña del SIFAC, ¡hazlo ahora!</strong> Protege tus datos y evita riesgos. Todos los usuarios deben actualizar su clave.
        </p>
      </div>
      <div className="order-2 text-center my-2 md:my-0">
        <Link
          href="https://www.condominiosifac.com/"
          className="inline-block rounded-3xl bg-white px-5 py-2 text-sm font-medium text-red-600 transition hover:bg-white/90 hover:shadow-md"
          scroll={true}
        >
          Cambiar clave
        </Link>
      </div>
    </div>
  );
};

export default AnuncioCenso;