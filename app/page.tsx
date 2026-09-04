'use client'
import Eventos from "@/components/accesos-directos";
import Footer from "@/components/footer";
//import DiaTrabajador from "@/components/trabajador";
//import AnuncioCenso from "@/components/anuncio_censo_mascotas";
//import InformesAsamblea from "./informes/components/informes";
import InfoUbicacion from "@/components/direccion";
// import PagosSinIdentificar from "@/components/anuncio-reutilizable-2";
import InfoBloqueoControl from "./convovatorias/asamblea";
import InfoRecaudacionPozo from "./convovatorias/InfoRecaudacionPozo";

export default function Home() {
  return (
    <main >
      <div>
        <InfoRecaudacionPozo />
        <InfoBloqueoControl />
        {/*<PagosSinIdentificar /> */}
        <InfoUbicacion />
        {/*<DiaTrabajador />*/}
        <Eventos />
      </div>
      <Footer />
    </main>
  );
};