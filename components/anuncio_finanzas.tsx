const AnuncioFinanzas = () => {
    return (
      <div className="flex items-center justify-between gap-4 px-4 py-3 text-white  bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
        <p className="text-sm font-medium">
          📢  ¡Revisa Finanzas! Estados de cuenta, pagos y deudas.
        </p>
  
        <a
          className="shrink-0 rounded-3xl bg-white px-5 py-2 text-sm font-medium text-blue-600 transition hover:bg-white/90"
          href="/finanzas"
        >
          Ir a Finanzas
        </a>
      </div>
    );
  };
  
  export default AnuncioFinanzas;
  