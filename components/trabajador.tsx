import React from "react";
import Image from "next/image"; // Importa el componente Image de Next.js

const DiaTrabajador = () => {
    // Datos de las fotos (rutas desde la carpeta 'public')
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
            id: 3,
            src: "/dia-trabajador/trabajador4.jpg",
            alt: "Reconocimientos especiales",
            descripcion: "Entrega de distinciones"
        }
    ];

    return (
        <section id="dia-trabajador" className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto py-4">
            {/* Título */}
            <div className="p-4 text-center sm:p-12">
                <h2 className="text-3xl text-primary font-extrabold my-6 uppercase text-center">
                    Celebración del Día del Trabajador
                </h2>
                <p className="text-xl ">
                <strong>¡Gracias, propietarios!</strong> 
                 {' '}
                 Por hacer esta celebración posible con su apoyo.
                </p>
            </div>

            {/* Grid de fotos optimizadas con Image */}
            <div className="grid gap-6 sm:grid-cols-2 grid-cols-1">
                {fotosDiaTrabajador.map((foto) => (
                    <div
                        key={foto.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="relative h-64 w-full">
                            <Image
                                src={foto.src}
                                alt={foto.alt}
                                fill // Ocupa todo el espacio del contenedor padre
                                className="object-cover" // Evita deformaciones
                                sizes="(max-width: 768px) 100vw, 50vw" // Optimización para responsive
                                priority={foto.id === 1} // Prioriza carga de la primera imagen
                            />
                        </div>
                        <div className="p-4 bg-gray-50">
                            <p className="text-lg font-semibold text-gray-800 text-center">
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

export default DiaTrabajador