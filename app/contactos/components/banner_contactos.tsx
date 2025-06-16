const BannerInformes = () => {
    return (
        <div className="w-full overflow-hidden"> {/* Contenedor principal con overflow controlado */}
            <section
                className="relative bg-[url(/fotos-carousel/redoma_entrada.jpg)] bg-cover bg-center bg-no-repeat w-full"
                style={{ 
                    height: 'calc(50vh - 100px)',
                    minHeight: '180px' // Altura mínima para móviles
                }}
            >
                {/* Capa semi-transparente */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Contenido centrado con contenedor seguro */}
                <div className="relative h-full flex flex-col justify-center items-center max-w-6xl mx-auto px-4">
                    <h1 className="text-3xl font-extrabold text-white sm:text-5xl ">
                        CONTACTOS
                    </h1>
                </div>
            </section>

            {/* Media queries mejoradas */}
            <style jsx>{`
                @media (max-width: 1024px) {
                    section {
                        height: 280px !important;
                        background-position: center 25% !important;
                    }
                }
                @media (max-width: 640px) {
                    section {
                        height: 180px !important;
                        background-size: cover !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default BannerInformes;