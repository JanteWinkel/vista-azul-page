import BannerPerfil from "@/components/banner-perfil";
import CarouselFotos from "@/components/carousel-fotos";
import Eventos from "@/components/accesos-directos";
import Footer from "@/components/footer";
import BannerInfo from "@/components/banner-informacion";

export default function Home() {
  return (
   <main >
    <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
     <BannerPerfil />
     <CarouselFotos />
     <BannerInfo />
     <Eventos />
     </div>
     
     <Footer />
   </main>
   );
  } ;