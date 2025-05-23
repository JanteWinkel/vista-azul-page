import Link from 'next/link';

const AnuncioCenso = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3 text-white bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600">
      <p className="text-sm font-medium mt-2">
        🐾 ¡CENSO DE MASCOTAS! Registra a tu compañero peludo en el conjunto.
      </p>

      {/* Usa Link con hash/anclaje */}
      <Link 
        href="#seccion-censo"
        className="shrink-0 rounded-3xl bg-white px-5 py-2 mt-1 text-sm font-medium text-blue-600 transition hover:bg-white/90"
        scroll={true} // Habilita scroll suave
      >
        Ver más...
      </Link>
    </div>
  );
};

export default AnuncioCenso;