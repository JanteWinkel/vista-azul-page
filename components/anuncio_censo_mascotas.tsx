const AnuncioCenso = () => {

  const handleDownload = () => {
    // Reemplaza con la URL correcta del PDF
    const pdfUrl = "/documents/CARTA_RECLAMO_COPOELEC.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className=" max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto pt-6">
      <div className="mt-2 p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow  hover:scale-110">
        <p className="text-sm text-yellow-800 font-medium text-justify">
          ESTIMADOS VECINOS, <br />
          <br />
          ANTE LAS SUBIDAS INJUSTIFICADAS DEL RECIBO Y EL PÉSIMO SERVICIO DE CORPOELEC, ORGANIZAMOS UN RECLAMO COLECTIVO.
          <br />
          <br />
          EL PRIMER PASO ES INDIVIDUAL Y URGENTE: CADA PROPIETARIO DEBE REPORTAR SU CASO EN LA APLICACIÓN <strong>VENAPP</strong>. ESTE REPORTE OFICIAL ES LA PRUEBA QUE DARÁ FUERZA A NUESTRA ACCIÓN CONJUNTA, AL DEMOSTRAR QUE EL PROBLEMA ES GENERALIZADO.
          <br />
          <br />
          EL SEGUNDO PASO ES LA ACCIÓN COLECTIVA: CON ESOS REPORTES COMO BASE, PRESENTAREMOS UNA CARTA DE RECLAMO UNIFICADA EXIGIENDO EXPLICACIONES Y UN PLAN DE MEJORA REAL. HEMOS PREPARADO UN BORRADOR DE LA CARTA. REVÍSALO Y HAZNOS LLEGAR TUS SUGERENCIAS PARA MEJORARLO A TRAVÉS DE NUESTROS CANALES DE COMUNICACIÓN. TU PARTICIPACIÓN ES ESENCIAL.
          <br />
          <br />
          <button
            onClick={handleDownload}
            className="px-4 py-2 text-yellow-200  bg-yellow-800 rounded-3xl shadow-lg hover:bg-yellow-400 transition"
          >
              DESCARGAR CARTA DE RECLAMO
          </button> 
          <br />
          <br />
          MUCHAS GRACIAS
        </p>
      </div>
    </div>
  );
};

export default AnuncioCenso;