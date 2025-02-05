const BannerContactos = () => {
    return (
        <div>
            <section
                className="bg-[url(/fotos-carousel/redoma_entrada.jpg)] bg-cover bg-center bg-no-repeat"
                style={{ height: 'calc(50vh - 100px)' }}
            >
                <div className="max-w-xl text-center mx-auto">
                    <h1 className="text-5xl font-extrabold text-white sm:text-5xl pt-14">
                        CONTACTOS
                    </h1>
                </div>
            </section>

            {/* Ajuste de altura para dispositivos pequeños y medianos */}
            <style>
                {`
                    @media (max-width: 1024px) { /* Tablets y pantallas medianas */
                        section {
                            height: 300px !important;
                        }
                    }

                    @media (max-width: 640px) { /* Teléfonos */
                        section {
                            height: 200px !important;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default BannerContactos;
