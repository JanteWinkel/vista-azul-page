const BannerCalendario = () => {
    return (
        <div>
            <section
                className="relative bg-[url(/fotos-carousel/vista_piscina_2.jpg)] bg-cover bg-center transition-transform sm:bg-scale-110"
                style={{ height: 'calc(50vh - 100px)' }}
            >
                {/* Capa semi-transparente sobre la imagen */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Contenido centrado */}
                <div className="relative max-w-xl text-center mx-auto">
                    <h1 className="text-3xl font-extrabold text-white sm:text-5xl pt-20">
                        CALENDARIO
                    </h1>
                </div>
            </section>

            {/* Ajuste de altura para dispositivos pequeños y medianos */}
            <style>
                {`
                    @media (max-width: 1024px) { /* Tablets y pantallas medianas */
                        section {
                            height: 280px !important; /* Un poco menos alta */
                        }
                    }

                    @media (max-width: 640px) { /* Teléfonos */
                        section {
                            height: 180px !important; /* Un poco menos alta */
                            background-size: 115% !important; /* Zoom ligero */
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default BannerCalendario;
