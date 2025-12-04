'use client'
import BannerPerfil from "@/components/banner-perfil";
import CarouselFotos from "@/components/carousel-fotos";
import Eventos from "@/components/accesos-directos";
import Footer from "@/components/footer";
import BannerInfo from "@/components/banner-informacion";
import DiaTrabajador from "@/components/trabajador";
import Informe2425 from "./informes/components/informe_2024-2025";
import AnuncioCenso from "@/components/anuncio_censo_mascotas";
import InformesAsamblea from "./informes/components/informes";
import InfoUbicacion from "@/components/direccion";
import AnuncioReutilizable from "@/components/anuncio-reutilizable-1";

export default function Home() {
  return (
    <main >
      <div>

        <AnuncioCenso />
        <AnuncioReutilizable />
        <BannerPerfil />
        <CarouselFotos />
        <BannerInfo />
        <InfoUbicacion />
        <InformesAsamblea />
        <Informe2425 />
        <DiaTrabajador />
        <Eventos />
      </div>
      <Footer />
    </main>
  );
};