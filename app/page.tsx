'use client'
import BannerPerfil from "@/components/banner-perfil";
import CarouselFotos from "@/components/carousel-fotos";
import Eventos from "@/components/accesos-directos";
import Footer from "@/components/footer";
import BannerInfo from "@/components/banner-informacion";
import AnuncioFinanzas from "@/components/anuncio_finanzas";
import DiaTrabajador from "@/components/trabajador";
import ConvocatoriaAsamblea from "./calendario/calendario_components/banner_convocatoria";
import Informe2425 from "./informes/components/informe_2024-2025";

export default function Home() {
  return (
    <main >
      <div>
        <AnuncioFinanzas />
        <BannerPerfil />
        <CarouselFotos />
        <BannerInfo />
        <ConvocatoriaAsamblea />
        <Informe2425 />
        <DiaTrabajador />
        <Eventos />
      </div>
      <Footer />
    </main>
  );
};