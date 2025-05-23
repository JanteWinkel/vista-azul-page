import Link from 'next/link';
import { FaPaw, FaArrowRight } from 'react-icons/fa';

const CensoMascotas = () => {
    return (
        <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto py-4">
            <hr className="mt-8 border-t border-gray-300 w-full" />
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md max-w-4xl mx-auto my-8">

                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Icono */}
                    <div className="bg-blue-100 p-4 rounded-full">
                        <FaPaw className="text-blue-600 text-3xl" />
                    </div>

                    {/* Contenido */}
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            ¡Registra a tu mascota en el censo del conjunto!
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Ayúdanos a mantener un registro actualizado de todas las mascotas en nuestra comunidad.
                            
                        </p>

                        {/* Botón con icono */}
                        <Link
                            href="https://forms.gle/8Jv2MeyXZvsj9QzG9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                        >
                            Registrar mi mascota
                            <FaArrowRight className="ml-2" />
                        </Link>

                        <p className="text-gray-600 mt-6 ">
                           
                            ¡Gracias por colaborar con el censo de mascotas de TVA! 🐕❤🐈
                        </p>
                    </div>
                </div>

                {/* Nota adicional */}
                <p className="text-sm text-gray-500 mt-4 text-center">
                    El formulario toma menos de 2 minutos en completarse. 
                </p>
            </div>
        </div>
    );
};

export default CensoMascotas;