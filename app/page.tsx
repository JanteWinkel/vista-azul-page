'use client'
import BannerPerfil from "@/components/banner-perfil";
import CarouselFotos from "@/components/carousel-fotos";
import Eventos from "@/components/accesos-directos";
import Footer from "@/components/footer";
import BannerInfo from "@/components/banner-informacion";
import DiaTrabajador from "@/components/trabajador";
import Informe2425 from "./informes/components/informe_2024-2025";
import CensoMascotas from "@/components/censo_mascotas";
import AnuncioCenso from "@/components/anuncio_censo_mascotas";

export default function Home() {
  return (
    <main >
      <div>
       
        <AnuncioCenso />
        <BannerPerfil />
        <CarouselFotos />
        <BannerInfo />
        
        
        <section id="seccion-censo" className="scroll-mt-20"> 
          <CensoMascotas />
        </section>

        <Informe2425 />
        <DiaTrabajador />
        <Eventos />
      </div>
      <Footer />
    </main>
  );
};