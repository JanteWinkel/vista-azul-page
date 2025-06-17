'use client'

import Footer from "@/components/footer";
import Informe2425 from "./components/informe_2024-2025";
import DiaTrabajador from "@/components/trabajador";
import BannerInformes from "./components/banner_informes";
import JornadaMascotas from "./components/jornada_mascotas";


const InformesPage = () => {

    return (
        <div>
            <BannerInformes />
            <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto pt-6">
                <p>En esta sección se presenta un registro de todas las acciones, jornadas y proyectos que se han llevado a cabo. Desde trabajos de mantenimiento hasta eventos comunitarios.</p>
                <Informe2425 />
                <DiaTrabajador />
                <JornadaMascotas />
            </div>
            <Footer />
        </div>
    )

}
export default InformesPage;