'use client'
import Eventos from "@/components/accesos-directos";
import Footer from "@/components/footer";
//import DiaTrabajador from "@/components/trabajador";
//import AnuncioCenso from "@/components/anuncio_censo_mascotas";
//import InformesAsamblea from "./informes/components/informes";
import InfoUbicacion from "@/components/direccion";
import InfoAsamblea from "./convovatorias/convocatoria";
import PagosSinIdentificar from "@/components/anuncio-reutilizable-2";

export default function Home() {
  return (
    <main >
      <div>
        <InfoAsamblea />
        <PagosSinIdentificar />
        <InfoUbicacion />
        {/*<DiaTrabajador />*/}
        <Eventos />
      </div>
      <Footer />
    </main>
  );
};