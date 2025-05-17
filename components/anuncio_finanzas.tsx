const AnuncioFinanzas = () => {
    return (
      <div className="flex items-center justify-between gap-4 px-4 py-3 text-white  bg-gradient-to-r from-red-600 via-red-500 to-red-600">
        <p className="text-sm font-medium mt-2">
          📢  CONVOCATORIA A ASAMBLEA GENERAL ORDINARIA DE PROPIETARIOS.
        </p>
  
        <a
          className="shrink-0 rounded-3xl bg-white px-5 py-2 mt-1 text-sm font-medium text-red-600 transition hover:bg-white/90"
          href="/calendario"
        >
          INFORMACIÓN
        </a>
      </div>
    );
  };
  
  export default AnuncioFinanzas;
  