/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CarouselFotos = () => {
  const images = [
    { id: 1, src: "/fotos-carousel/Vista-azul-Vinsoca.jpg", alt: "Vista Azul" },
    { id: 2, src: "/fotos-carousel/Vista-azul-Vinsoca.jpg", alt: "Vista Azul" },
    { id: 3, src: "/fotos-carousel/Vista-azul-Vinsoca.jpg", alt: "Vista Azul" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Configurar el intervalo de reproducción automática
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Ciclo infinito
    }, 7000);

    // Limpiar el intervalo al desmontar
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length]);

  useEffect(() => {
    // Sincronizar la posición del carrusel con el índice actual
    const carousel = document.querySelector("#carousel .carousel-content") as HTMLElement;
    if (carousel) {
      const items = carousel.querySelectorAll(".carousel-item") as NodeListOf<HTMLElement>;
      items[currentIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [currentIndex]);

  return (
    <div id="carousel" className="sm:px-16 pt-8 m-2">
      <Carousel className="text-primary">
        <CarouselContent className="carousel-content -ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem
              key={image.id}
              className={`md:basis-1/2 lg:basis-1/2 group carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img src={image.src} alt={image.alt} className="rounded-lg" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="text-primary hidden sm:flex carousel-previous"
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
          }
        />
        <CarouselNext
          className="text-primary hidden sm:flex carousel-next"
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
        />
      </Carousel>
    </div>
  );
};

export default CarouselFotos;
