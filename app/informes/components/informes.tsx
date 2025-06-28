import Link from 'next/link';
import { FaFileAlt, FaArrowRight } from 'react-icons/fa';

const InformesAsamblea = () => {
    return (
        <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto py-4">
            <hr className="mt-8 border-t border-gray-300 w-full" />
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md max-w-4xl mx-auto my-8">

                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Icono */}
                    <div className="bg-blue-100 p-4 rounded-full">
                        <FaFileAlt className="text-blue-600 text-3xl" />
                    </div>

                    {/* Contenido */}
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            Documentos oficiales de la Asamblea Ordinaria
                        </h3>

                        {/* Primer informe */}
                        <div className="mb-6">
                            <h4 className="font-semibold text-gray-700 mb-1">
                                INFORME DE GESTIÓN ASAMBLEA ORDINARIA
                            </h4>
                            <p className="text-gray-600 mb-2">
                                FECHA: 31-05-2025
                            </p>
                            <Link
                                href="https://drive.google.com/file/d/1--O4q5bcFIIQgFSADQBvwSBRLr5ok13e/view?usp=drivesdk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                            >
                                Ver documento
                                <FaArrowRight className="ml-2" />
                            </Link>
                        </div>

                        {/* Segundo informe */}
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-700 mb-1">
                                INFORME DE RESULTADO DE LA ASAMBLEA ORDINARIA DE PROPIETARIOS
                            </h4>
                            <p className="text-gray-600 mb-2">
                                FECHA: 31-05-2025
                            </p>
                            <Link
                                href="https://drive.google.com/file/d/1-CU53MpUuHVQE8Q37hoDfuSpJv63WMuQ/view?usp=drivesdk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                            >
                                Ver documento
                                <FaArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Nota adicional */}
                <p className="text-sm text-gray-500 mt-4 text-center">
                    Documentos oficiales aprobados en la Asamblea Ordinaria de Propietarios.
                </p>
            </div>
        </div>
    );
};

export default InformesAsamblea;