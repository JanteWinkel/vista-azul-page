"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { SectionHeader, carouselArrow, sectionWrap } from "@/components/va-ui";

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
        <section className={sectionWrap}>
            <SectionHeader title="Trabajos destacados" />

            {/* Carrusel móvil */}
            <div className="block md:hidden mt-6">
                <Carousel>
                    <CarouselContent>
                        {trabajos.map((trabajo) => (
                            <CarouselItem key={trabajo.id}>
                                <CardTrabajo trabajo={trabajo} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <p className="mt-3 text-right text-sm font-bold text-va-azul dark:text-sky-300">
                        Desliza a la derecha →
                    </p>
                </Carousel>
            </div>

            {/* Grid para desktop */}
            <div className="hidden md:grid mt-6 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {trabajos.map((trabajo) => (
                    <CardTrabajo key={trabajo.id} trabajo={trabajo} />
                ))}
            </div>
        </section>
    );
};

// Componente con tipado adecuado
const CardTrabajo = ({ trabajo }: { trabajo: Trabajo }) => (
    <article className="h-full rounded-[28px] border border-va-linea dark:border-white/10 bg-white dark:bg-va-marea overflow-hidden flex flex-col">
        <Carousel className="w-full">
            <CarouselContent>
                {trabajo.imagenes.map((imagen, index) => (
                    <CarouselItem key={index}>
                        <div className="relative h-64 w-full">
                            <Image
                                src={imagen.url}
                                alt={imagen.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <span className="absolute top-3 left-3 rounded-full bg-va-abismo/80 backdrop-blur-sm text-white text-sm font-bold px-3 py-1">
                                {imagen.tipo}
                            </span>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className={`left-2 ${carouselArrow}`} />
            <CarouselNext className={`right-2 ${carouselArrow}`} />
        </Carousel>

        <div className="p-6">
            <div className="flex justify-between items-start gap-3">
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                    {trabajo.titulo}
                </h3>
                <span className="rounded-full bg-va-bruma dark:bg-white/5 text-va-azul dark:text-sky-300 text-sm font-bold px-3 py-0.5 tabular-nums">
                    {trabajo.fecha}
                </span>
            </div>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
                {trabajo.descripcion}
            </p>
        </div>
    </article>
);

export default Informe2425;
