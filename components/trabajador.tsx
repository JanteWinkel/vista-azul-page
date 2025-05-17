import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  return (
    <section id="dia-trabajador" className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto py-4">
        <hr className="mt-8 border-t border-gray-300 w-full" />
      {/* Título */}
      <div className="p-4 text-center sm:p-12">
        <h2 className="text-3xl text-primary font-extrabold my-6 uppercase text-center">
          Celebración del Día del Trabajador
        </h2>
        <p className="text-xl">
          <strong>¡Gracias, propietarios!</strong> 
          {' '}
          Por hacer esta celebración posible con su apoyo.
        </p>
      </div>

      {/* Versión móvil: Carousel (ShadCN) */}
      <div className="sm:hidden">
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {fotosDiaTrabajador.map((foto) => (
              <CarouselItem key={foto.id}>
                <div className="bg-blue-200 dark:bg-blue-900 rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src={foto.src}
                      alt={foto.alt}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority={foto.id === 1}
                    />
                  </div>
                  <div className="p-4 bg-blue-200 dark:bg-blue-900">
                    <p className="text-lg font-semibold text-blue-900 dark:text-white text-center">
                      {foto.descripcion}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      {/* Versión desktop: Grid */}
      <div className="hidden sm:grid gap-6 sm:grid-cols-2">
        {fotosDiaTrabajador.map((foto) => (
          <div
            key={foto.id}
            className="bg-blue-200 dark:bg-blue-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-64 w-full">
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-4 bg-blue-200 dark:bg-blue-900">
              <p className="text-lg font-semibold text-blue-900 dark:text-white text-center">
                {foto.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-8 border-t border-gray-300 w-full" />
    </section>
  );
};

export default DiaTrabajador;