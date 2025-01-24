/* eslint-disable @next/next/no-img-element */
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CarouselFotos = () => {
    const images = [
       
        { id: 1, src: "/fotos-carousel/Vista-azul-Vinsoca.jpg", alt: "Vista Azul" },
        { id: 2, src: "/fotos-carousel/Vista-azul-Vinsoca.jpg", alt: "Vista Azul" },
        { id: 3, src: "/fotos-carousel/Vista-azul-Vinsoca.jpg", alt: "Vista Azul" },
        
      ];
    return ( 
            <div id="carousel" className="sm:px-16 pt-8 m-2">
              <Carousel className="text-primary">
                <CarouselContent className="-ml-2 md:-ml-4 ">
                  {images.map((image) => (
                    <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/2 group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="text-primary hidden sm:flex" />
                <CarouselNext className="text-primary  sm:flex" />
              </Carousel>
            </div>
          );
}
 
export default CarouselFotos;