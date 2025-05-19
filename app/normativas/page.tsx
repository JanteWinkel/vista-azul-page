"use client";

import Footer from "@/components/footer";
import BannerNormativas from "./components/banner_normativas";
import MascotasComponent from "./components/mascotas";
import PiscinaComponent from "./components/piscina";

const ReglamentoComponent = () => {
    const handleDownload = () => {
        // Reemplaza con la URL correcta del PDF
        const pdfUrl = "/documents/REGLAMENTO_VISTA_AZUL.pdf";
        window.open(pdfUrl, "_blank");
    };

    return (
        <div>
            <BannerNormativas />
            <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto pt-6">
                <p className="text-justify">
                    Aquí puedes consultar el reglamento completo del condominio.
                </p>
                {/* Botón para descargar reglamento completo */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleDownload}
                        className="px-6 py-3 text-white bg-blue-600 rounded-3xl shadow-lg hover:bg-blue-700 transition"
                    >
                        Descargar Reglamento Completo
                    </button>
                </div>

                <PiscinaComponent />
                <MascotasComponent />
                <hr className="my-8 border-t border-gray-300 w-full" />
            </div>
            <Footer />
        </div>
    );
};

export default ReglamentoComponent;
