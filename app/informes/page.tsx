'use client'

import Footer from "@/components/footer";
import BannerInformes from "./components/banner_informes";
import CensoMascotas from "@/components/censo_mascotas";
import InformeGestion2526 from "./components/informe_gestion_2025-2026";
import { PageIntro } from "@/components/va-ui";


const InformesPage = () => {

    return (
        <div>
            <BannerInformes />
            <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
                <PageIntro>
                    En esta sección se presenta un registro de todas las acciones, jornadas y proyectos que se han llevado a cabo. Desde trabajos de mantenimiento hasta eventos comunitarios.
                </PageIntro>
            </div>
            <InformeGestion2526 />
            
            <CensoMascotas />
            <Footer />
        </div>
    )

}
export default InformesPage;
