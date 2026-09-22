"use client";

import Footer from "@/components/footer";
import BannerNormativas from "./components/banner_normativas";
import MascotasComponent from "./components/mascotas";
import PiscinaComponent from "./components/piscina";
import InfoBloqueoControl from "../convovatorias/asamblea";

const ReglamentoComponent = () => {
    const handleDownload = () => {
        const pdfUrl = "/documents/REGLAMENTO_VISTA_AZUL.pdf";
        window.open(pdfUrl, "_blank");
    };

    return (
        <div>
            <BannerNormativas />
            <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto pt-6">
                
                {/* Introducción */}
                <div className="rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-600 p-4 mb-6">
                    <div className="flex items-start gap-3">
                    <p className=" text-justify">
                            Aquí puedes consultar el reglamento completo del condominio.
                        </p>
                    </div>
                </div>

                {/* Botón para descargar reglamento completo */}
                <div className="flex justify-center mb-8">
                    <button
                        onClick={handleDownload}
                        className="inline-flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-full shadow-sm hover:bg-blue-700 transition-colors duration-300 font-semibold text-lg"
                    >
                        Descargar Reglamento Completo
                    </button>
                </div>

                <InfoBloqueoControl />

                <PiscinaComponent />
                <MascotasComponent />
                <hr className="my-8 border-t border-gray-300 w-full" />
            </div>
            <Footer />
        </div>
    );
};

export default ReglamentoComponent;