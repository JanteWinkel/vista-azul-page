'use client'
import BannerPerfil from "@/components/banner-perfil";
import CarouselFotos from "@/components/carousel-fotos";
import Eventos from "@/components/accesos-directos";
import Footer from "@/components/footer";
import BannerInfo from "@/components/banner-informacion";
import AnuncioFinanzas from "@/components/anuncio_finanzas";
import DiaTrabajador from "@/components/trabajador";
import ConvocatoriaAsamblea from "./calendario/calendario_components/banner_convocatoria";

export default function Home() {
  return (
    <main >
      <div>
        <AnuncioFinanzas />
        <BannerPerfil />
        <CarouselFotos />
        <BannerInfo />
        <ConvocatoriaAsamblea />
        <DiaTrabajador />
        <Eventos />
      </div>
      <Footer />
    </main>
  );
};