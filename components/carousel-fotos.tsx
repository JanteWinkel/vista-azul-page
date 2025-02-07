/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";

const CarouselFotos = () => {
  const images = [
    { id: 1, src: "/fotos-carousel/entrada.jpg", alt: "Vista Azul" },
    { id: 2, src: "/fotos-carousel/redoma_entrada.jpg", alt: "Vista Azul" },
    { id: 3, src: "/fotos-carousel/piscina_2.jpg", alt: "Vista Azul" },
    { id: 4, src: "/fotos-carousel/vista_piscina_2.jpg", alt: "Vista Azul" },
    { id: 5, src: "/fotos-carousel/gruta_virgen.jpg", alt: "Vista Azul" },
    { id: 6, src: "/fotos-carousel/calle_1.jpg", alt: "Vista Azul" },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative overflow-hidden mt-4 w-full max-w-4xl mx-auto h-64 sm:h-80 lg:h-96">
      {/* Contenedor de imágenes */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="flex-shrink-0 w-full h-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full hover:bg-gray-500"
        onClick={handlePrevious}
      >
        &#10094;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full hover:bg-gray-500"
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default CarouselFotos;
