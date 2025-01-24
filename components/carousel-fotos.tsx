/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselFotos = () => {
  const images = [
    { id: 1, src: "/fotos-carousel/Vista-azul-Vinsoca.jpg", alt: "Vista Azul" },
    { id: 2, src: "/fotos-carousel/Vista-azul-Vinsoca.jpg", alt: "Vista Azul" },
    { id: 3, src: "/fotos-carousel/Vista-azul-Vinsoca.jpg", alt: "Vista Azul" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Mover las imágenes automáticamente cada 7 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Cambia cada 7 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [images.length]);

  return (
    <div id="carousel" className="sm:px-16 pt-8 m-2">
      <Carousel className="text-primary">
        <CarouselContent
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`, // Mueve el carrusel
          }}
        >
          {images.map((image) => (
            <CarouselItem
              key={image.id}
              className="flex-shrink-0 w-full md:basis-1/2 lg:basis-1/2 group"
            >
              <img src={image.src} alt={image.alt} className="rounded-lg" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="text-primary hidden sm:flex"
          onClick={() =>
            setActiveIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            )
          }
        />
        <CarouselNext
          className="text-primary hidden sm:flex"
          onClick={() =>
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
        />
      </Carousel>
    </div>
  );
};

export default CarouselFotos;
