"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

// Definir interfaces para el tipado
interface Imagen {
    url: string;
    tipo: string;
    alt: string;
}

interface Trabajo {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: string;
    imagenes: Imagen[];
}

const Informe2425 = () => {
    const trabajos: Trabajo[] = [
        {
            id: 1,
            titulo: "Áreas Verdes",
            descripcion: "Recuperación de las áreas verdes.",
            fecha: "2024",
            imagenes: [
                {
                    url: "/informes/jardineria/gruta_de_la_virgen_antes.jpg",
                    tipo: "Antes",
                    alt: "Grama antes de la renovación"
                },
                {
                    url: "/informes/jardineria/gruta_de_la_virgen_despues.jpg",
                    tipo: "Después",
                    alt: "Grama después de la renovación"
                }
            ]
        },
        {
            id: 2,
            titulo: "Piscina",
            descripcion: "Mantenimiento de la piscina y renovación de las duchas.",
            fecha: "2024",
            imagenes: [
                { url: "/informes/piscina/duchas_1.jpg", tipo: "Duchas", alt: "Renovación de duchas" },
                { url: "/informes/piscina/duchas_2.jpg", tipo: "Duchas", alt: "Renovación de duchas" },
                { url: "/informes/piscina/piscina_1.jpg", tipo: "Piscina", alt: "Mantenimiento de la Piscina" },
                { url: "/informes/piscina/piscina_2.jpg", tipo: "Piscina", alt: "Mantenimiento de la Piscina" },
            ]
        },
        {
            id: 3,
            titulo: "Pintura de Fachadas",
            descripcion: "Pintura de fachadas y áreas comunes.",
            fecha: "2024",
            imagenes: [
                { url: "/informes/pintura/fachada_virgen_1.jpg", tipo: "Pintura", alt: "Pintura" },
                { url: "/informes/pintura/fachada_entrada.jpg", tipo: "Pintura", alt: "Pintura" },
                { url: "/informes/pintura/fachada_entrada_2.jpg", tipo: "Pintura", alt: "Pintura" },
                { url: "/informes/pintura/fachada_entrada_3.jpg", tipo: "Pintura", alt: "Pintura" },
            ]
        }
    ];

    return (
        <section className="max-w-6xl px-4 py-8 mx-auto">
             <hr className="my-4 border-t border-gray-300 w-full" />
            <h2 className="text-3xl text-primary font-extrabold my-6 uppercase text-center">
                Trabajos Destacados
            </h2>

            {/* Carrusel móvil con mejoras visuales */}
            <div className="block md:hidden mb-8">
                <div className="relative">
                    <div className="absolute mb-4 -top-8 left-0 right-0 flex justify-center">
                    </div>
                    <div className="mt-4">
                        <Carousel className="border-2 border-blue-300 rounded-lg p-1 shadow-lg">
                            <CarouselContent>
                                {trabajos.map((trabajo) => (
                                    <CarouselItem key={trabajo.id}>
                                        <CardTrabajo trabajo={trabajo} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="flex justify-end my-2 mr-2">
                                <div className="flex items-center text-primary font-bold">
                                    Desliza a la derecha
                                    <span className="ml-2">→</span>
                                </div>
                            </div>
                        </Carousel>

                    </div>
                    <div></div>
                </div>
            </div>

            {/* Grid para desktop */}
            <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {trabajos.map((trabajo) => (
                    <CardTrabajo key={trabajo.id} trabajo={trabajo} />
                ))}
            </div>
        </section>
    );
};

// Componente con tipado adecuado
const CardTrabajo = ({ trabajo }: { trabajo: Trabajo }) => (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-600 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-64">
            <Carousel className="w-full h-full">
                <CarouselContent>
                    {trabajo.imagenes.map((imagen, index) => (
                        <CarouselItem key={index}>
                            <div className="relative h-64 w-full">
                                <Image
                                    src={imagen.url}
                                    alt={imagen.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                                    {imagen.tipo}
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-white/90 hover:bg-white text-blue-600 border border-blue-200" />
                <CarouselNext className="right-2 bg-white/90 hover:bg-white text-blue-600 border border-blue-200" />
            </Carousel>
        </div>

        <div className="p-6">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {trabajo.titulo}
                </h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {trabajo.fecha}
                </span>
            </div>
            <p className="text-gray-700 dark:text-gray-400">
                {trabajo.descripcion}
            </p>
        </div>
    </div>
);

export default Informe2425;