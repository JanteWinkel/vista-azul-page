/* eslint-disable @next/next/no-img-element */
const Eventos = () => {
    const images = [
        { id: 1, src: "/fotos-carousel/Vista-azul-Vinsoca.jpg", alt: "Vista Azul", evento: "Piscina" },
        { id: 2, src: "/fotos-carousel/Vista-azul-Vinsoca.jpg", alt: "Vista Azul", evento: "Cancha" },
        { id: 3, src: "/fotos-carousel/Vista-azul-Vinsoca.jpg", alt: "Vista Azul", evento: "Caney de Eventos" },
        { id: 4, src: "/fotos-carousel/Vista-azul-Vinsoca.jpg", alt: "Vista Azul", evento: "Parque Infantil" },
    ];

    return (
        <div id="eventos" className='max-w-6xl  mt-16 mx-auto sm:py-6 sm:px-8'>
            <h2 className=" text-5xl text-primary font-extrabold uppercase text-center">
                    Áreas Sociales 
                </h2>
            <div className='grid gap-6 mt-8 sm:grid-cols-4 grid-cols-1'>
                {images.map((image) => (
                    <div key={image.id} className="relative mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full max-w-[300px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
                        />
                        <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">{image.evento}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Eventos;
