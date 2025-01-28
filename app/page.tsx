import BannerPerfil from "@/components/banner-perfil";
import CarouselFotos from "@/components/carousel-fotos";
import Eventos from "@/components/accesos-directos";
import Footer from "@/components/footer";
import BannerInfo from "@/components/banner-informacion";

export default function Home() {
  return (
   <main >
     <BannerPerfil />
     <CarouselFotos />
     <BannerInfo />
     <Eventos />
     <Footer />
   </main>
   );
  } ;