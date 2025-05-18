
import Image from "next/image";

const MascotasComponent = () => {

    return (
        <div className="mt-10 p-6 border border-gray-200 rounded-lg shadow-lg bg-orange-50 dark:bg-gray-800 dark:border-gray-600 relative block overflow-hidden hover:scale-105 transition-transform duration-200">
            <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600"></span>

            <div className="flex justify-center">
                <Image
                    src={'/logo vista azul original.png'} // Reemplaza con tu ruta de imagen
                    alt='Icono de mascotas'
                    width={120}
                    height={120}
                    className="pt-2"
                />
            </div>

            <h2 className="text-xl font-semibold text-orange-700 mb-4 ">NORMATIVAS PARA MASCOTAS</h2>
            <div className="mb-8 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li>🐶 <strong>Solo se permiten mascotas domésticas:</strong> perros, gatos o pájaros.</li>
                        <li>🚫 <strong>Prohibida la tenencia</strong> de animales de gran porte y/o feroces dentro del conjunto.</li>
                        <li>📜 <strong>ARTÍCULO 16: </strong> Las mascotas pueden estar en lugares de uso común siempre y cuando se {' '}
                            <strong>encuentren acompañados por sus dueños, estén sujetos con collar y vacunados contra la
                                rabia y otras enfermedades.</strong> Los animales de carácter agresivo (mayores de 25 kilos) deben
                            portar bozal.</li>
                        <li>📜 <strong>ARTÍCULO 17: El dueño responderá por las defecaciones de su mascota</strong>, por lo cual estará
                            obligado a recoger sus desechos, colocarlos en bolsas plásticas y botarlos.</li>
                        <li>📜 <strong>ARTÍCULO 18:</strong> Aquellas personas que saquen sus mascotas a pasear, <strong>responderán ante la
                            comunidad por los daños que estos puedan ocasionar</strong> a la grama, los jardines o cualquiera
                            de las instalaciones del conjunto, <strong>y estarán obligados a reparar los daños y cubrir los gastos
                                que ocasione su negligencia.</strong></li>
                    </ul>
                </ul>
            </div>
        </div>
    )

}

export default MascotasComponent;