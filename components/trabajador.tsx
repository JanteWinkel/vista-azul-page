import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeader, carouselArrow, sectionWrap } from "@/components/va-ui";

const DiaTrabajador = () => {
  const fotosDiaTrabajador = [
    {
      id: 1,
      src: "/dia-trabajador/trabajador1.jpg",
      alt: "Celebración Día del Trabajador",
      descripcion: "Celebración con el equipo"
    },
    {
      id: 2,
      src: "/dia-trabajador/trabajador2.jpg",
      alt: "Celebración Día del Trabajador",
      descripcion: "Celebración con el equipo"
    },
    {
      id: 3,
      src: "/dia-trabajador/trabajador3.jpg",
      alt: "Reconocimientos especiales",
      descripcion: "Entrega de distinciones"
    },
    {
      id: 4, // ID corregido (debe ser único)
      src: "/dia-trabajador/trabajador4.jpg",
      alt: "Reconocimientos especiales",
      descripcion: "Entrega de distinciones"
    }
  ];

  const Foto = ({ foto, sizes }: { foto: (typeof fotosDiaTrabajador)[number]; sizes: string }) => (
    <figure className="relative h-72 w-full overflow-hidden rounded-[22px] bg-va-bruma dark:bg-va-marea">
      <Image src={foto.src} alt={foto.alt} fill className="object-cover" sizes={sizes} />
      <div className="absolute inset-0 bg-gradient-to-t from-va-abismo/80 via-transparent to-transparent"></div>
      <figcaption className="absolute bottom-0 left-0 p-4 font-display font-bold text-lg text-white">
        {foto.descripcion}
      </figcaption>
    </figure>
  );

  return (
    <section id="dia-trabajador" className={sectionWrap}>
      <SectionHeader
        title="Celebración del Día del Trabajador"
        description={<><strong className="text-slate-900 dark:text-white">¡Gracias, propietarios!</strong>{' '}Por hacer esta celebración posible con su apoyo.</>}
      />

      {/* Versión móvil: Carousel */}
      <div className="sm:hidden mt-6">
        <Carousel className="w-full">
          <CarouselContent>
            {fotosDiaTrabajador.map((foto) => (
              <CarouselItem key={foto.id}>
                <Foto foto={foto} sizes="100vw" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={`left-2 ${carouselArrow}`} />
          <CarouselNext className={`right-2 ${carouselArrow}`} />
        </Carousel>
      </div>

      {/* Versión desktop: Grid */}
      <div className="hidden sm:grid mt-6 gap-3 sm:grid-cols-2">
        {fotosDiaTrabajador.map((foto) => (
          <Foto key={foto.id} foto={foto} sizes="(max-width: 768px) 100vw, 50vw" />
        ))}
      </div>
    </section>
  );
};

export default DiaTrabajador;
