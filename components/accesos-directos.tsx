/* eslint-disable @next/next/no-img-element */
import SeccionClima from "./secction_clima";

const Eventos = () => {
    const images = [
        { id: 1, src: "/fotos-accesos-directos/foto_piscina_1.jpg", alt: "Piscina", evento: "Piscina" },
        { id: 2, src: "/fotos-accesos-directos/foto_cancha_1.jpg", alt: "Cancha", evento: "Cancha" },
        { id: 3, src: "/fotos-accesos-directos/foto_caney_1.jpg", alt: "Caney de Eventos", evento: "Caney de Eventos " },
        { id: 4, src: "/fotos-accesos-directos/foto_parque_1.jpg", alt: "Parque Infantil", evento: "Parque Infantil" },
    ];

    return (
        <div id="eventos" className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto ">
            <h2 className=" text-3xl text-primary font-extrabold mt-8 uppercase text-center">
                Áreas Sociales
            </h2>
            <div className='grid gap-4 mt-8 sm:grid-cols-4 grid-cols-1'>
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
            <div>
                <SeccionClima />
            </div>
        </div>
    );
}

export default Eventos;
