'use client'
import Eventos from "@/components/accesos-directos";
import Footer from "@/components/footer";
//import DiaTrabajador from "@/components/trabajador";
import Informe2425 from "./informes/components/informe_2024-2025";
//import AnuncioCenso from "@/components/anuncio_censo_mascotas";
//import InformesAsamblea from "./informes/components/informes";
import InfoUbicacion from "@/components/direccion";
import AnuncioReutilizable from "@/components/anuncio-reutilizable-1";
import InfoAsamblea from "./convovatorias/convocatoria";

export default function Home() {
  return (
    <main >
      <div>
        <AnuncioReutilizable />
        <InfoAsamblea />
        <InfoUbicacion />
        <Informe2425 />
        {/*<DiaTrabajador />*/}
        <Eventos />
      </div>
      <Footer />
    </main>
  );
};