"use client";

import Image from "next/image";
import Footer from "@/components/footer";

const ReglamentoComponent = () => {
  const handleDownload = () => {
    // Reemplaza con la URL correcta del PDF
    const pdfUrl = "/documents/REGLAMENTO_VISTA_AZUL.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <div>
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto pt-8 mt-8">
        <h1 className="text-3xl text-primary font-extrabold uppercase text-center">Normativas del Condominio</h1>
        <p className="mt-4 text-center">
          Aquí puedes consultar el reglamento completo del condominio y las normas específicas para el uso de la piscina.
        </p>

        {/* Botón para descargar reglamento completo */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleDownload}
            className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Descargar Reglamento Completo
          </button>
        </div>

        {/* Normativas de la Piscina */}
        <div className="mt-10 p-6 border border-gray-200 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600">
        <div className="flex justify-center">
                        <Image src={'/logo vista azul original.png'} alt='logo' width={120} height={120} className="pt-4"/>
                    </div>
          <h2 className="text-xl font-semibold text-primary mb-4">Normativas de la Piscina</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>1. <strong> Horario para el uso de la Piscina:</strong> de martes a domingo entre 9:00 AM y 7:00 PM.</li>
            <li>2. <strong>Día Lunes:</strong> mantenimiento y limpieza de la piscina.</li>
            <li>3. <strong>Todos Debemos respetar</strong> las normas de la moral y las buenas costumbres.</li>
            <li>4. Para el uso de la Piscina es Obligatorio <strong>estar al día con el Condominio.</strong></li>
            <li>5. Solo se permiten <strong>cuatro (4) personas por Town House.</strong></li>
            <li>6. Antes de ingresar a la Piscina <strong>debe ducharse.</strong></li>
            <li>7. Ingresar a la Piscina solo con la vestimenta adecuada, <strong>sin fibras que puedan dañar los filtros como jeans y metales.</strong></li>
            <li>8. Mantener <strong>limpias las Instalaciones,</strong> utilice las papeleras.</li>
            <li>9. Todo niño menor de trece (13) años debe estar obligatoriamente acompañado de su representante.</li>
            <li>10. El uso de equipos de sonido no podra ser con exceso de volumen que perturbe la tranquilidad.</li>
            <li>11. Prohibidos juegos, clavados, carreras y prácticas peligrosas dentro y fuera de la Piscina.</li>
            <li>12. No se permiten flotadores, colchonetas e inflables similares dentro la Piscina.</li>
          </ul>
        </div>
        <hr className="my-8 border-t border-gray-300 w-full" />
      </div>
      <Footer />
    </div>
  );
};

export default ReglamentoComponent;
