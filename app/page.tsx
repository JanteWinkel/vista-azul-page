'use client'
import BannerPerfil from "@/components/banner-perfil";
import CarouselFotos from "@/components/carousel-fotos";
import Eventos from "@/components/accesos-directos";
import Footer from "@/components/footer";
import BannerInfo from "@/components/banner-informacion";
import AnuncioFinanzas from "@/components/anuncio_finanzas";

export default function Home() {
  return (
    <main >
      <div>
        <AnuncioFinanzas />
        <BannerPerfil />
        <CarouselFotos />
        <BannerInfo />
        <Eventos />
      </div>
      <Footer />
    </main>
  );
};