'use client'
import BannerPerfil from "@/components/banner-perfil";
import CarouselFotos from "@/components/carousel-fotos";
import Eventos from "@/components/accesos-directos";
import Footer from "@/components/footer";
import BannerInfo from "@/components/banner-informacion";

export default function Home() {
  return (
   <main >
    <div>
     <BannerPerfil />
     <CarouselFotos />
     <BannerInfo />
     <Eventos />
     </div>
     <Footer />
   </main>
   );
  } ;