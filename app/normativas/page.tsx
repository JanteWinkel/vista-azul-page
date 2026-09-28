"use client";

import { Download } from "lucide-react";
import Footer from "@/components/footer";
import BannerNormativas from "./components/banner_normativas";
import MascotasComponent from "./components/mascotas";
import PiscinaComponent from "./components/piscina";
import InfoBloqueoControl from "../convovatorias/asamblea";
import { PageIntro, btnPrimary } from "@/components/va-ui";

const ReglamentoComponent = () => {
    const handleDownload = () => {
        const pdfUrl = "/documents/REGLAMENTO_VISTA_AZUL.pdf";
        window.open(pdfUrl, "_blank");
    };

    return (
        <div>
            <BannerNormativas />
            <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Introducción y reglamento completo */}
                <div className="mt-6 md:flex md:items-center md:justify-between md:gap-8 [&>p]:mt-0">
                    <PageIntro>
                        Aquí puedes consultar el reglamento completo del condominio.
                    </PageIntro>
                    <button onClick={handleDownload} className={`${btnPrimary} mt-5 md:mt-0 flex-shrink-0 text-lg`}>
                        <Download className="w-5 h-5" />
                        Descargar Reglamento Completo
                    </button>
                </div>
            </div>

            <div className="mt-6">
                <InfoBloqueoControl />
            </div>
            <PiscinaComponent />
            <MascotasComponent />
            <Footer />
        </div>
    );
};

export default ReglamentoComponent;
