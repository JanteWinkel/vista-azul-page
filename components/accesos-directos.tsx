/* eslint-disable @next/next/no-img-element */
"use client";

import SeccionClima from "./secction_clima";

const Eventos = () => {
    const images = [
        {
            id: 1,
            src: "/fotos-accesos-directos/foto_piscina_1.jpg",
            alt: "Piscina",
            evento: "Piscina",
            layout: "col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto",
        },
        {
            id: 2,
            src: "/fotos-accesos-directos/foto_cancha_1.jpg",
            alt: "Cancha",
            evento: "Cancha",
            layout: "col-span-2 aspect-[2/1]",
        },
        {
            id: 3,
            src: "/fotos-accesos-directos/foto_caney_1.jpg",
            alt: "Caney de Eventos",
            evento: "Caney de Eventos",
            layout: "aspect-square",
        },
        {
            id: 4,
            src: "/fotos-accesos-directos/foto_parque_1.jpg",
            alt: "Parque Infantil",
            evento: "Parque Infantil",
            layout: "aspect-square",
        },
    ];

    return (
        <section id="eventos" className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto py-10 font-legible">

            {/* Encabezado */}
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-sm text-va-azul dark:text-sky-300">Conoce nuestras instalaciones</p>
                    <h2 className="mt-2 font-display font-extrabold tracking-tight leading-[0.95] text-4xl md:text-5xl text-slate-900 dark:text-white [font-stretch:88%]">
                        Áreas sociales
                    </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-300 md:text-right max-w-[32ch]">
                    Disfruta de nuestros espacios diseñados para tu bienestar
                </p>
            </div>

            {/* Mosaico de fotos */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                {images.map((image) => (
                    <figure
                        key={image.id}
                        className={`group relative overflow-hidden rounded-2xl bg-va-bruma dark:bg-va-marea ${image.layout}`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-va-abismo/80 via-transparent to-transparent"></div>
                        <figcaption className="absolute bottom-0 left-0 p-4 font-display font-bold text-white text-lg md:text-xl leading-tight">
                            {image.evento}
                        </figcaption>
                    </figure>
                ))}
            </div>

            {/* Sección Clima */}
            <div className="mt-10">
                <SeccionClima />
            </div>

            <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                Disfruta de tus áreas sociales
            </p>
        </section>
    );
}

export default Eventos;
