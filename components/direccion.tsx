const InfoUbicacion = () => {
    return (
        <div className="max-w-6xl px-4 py-4 mx-auto">
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                        📍 Información de Ubicación
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">

                        <div className="bg-white p-3 md:p-4 rounded-lg flex flex-col justify-between">
                            <p className="text-sm md:text-base font-medium text-gray-700">Estado</p>
                            <p className="text-lg md:text-xl font-bold text-blue-800">Nueva Esparta</p>
                        </div>

                        <div className="bg-white p-3 md:p-4 rounded-lg flex flex-col justify-between">
                            <p className="text-sm md:text-base font-medium text-gray-700">Municipio</p>
                            <p className="text-lg md:text-xl font-bold text-blue-800">García</p>
                        </div>

                        <div className="bg-white p-3 md:p-4 rounded-lg flex flex-col justify-between">
                            <p className="text-sm md:text-base font-medium text-gray-700">Parroquia</p>
                            <p className="text-lg md:text-xl font-bold text-blue-800">Francisco Fajardo</p>
                        </div>

                        <div className="bg-white p-3 md:p-4 rounded-lg flex flex-col justify-between">
                            <p className="text-sm md:text-base font-medium text-gray-700">Código Postal</p>
                            <p className="text-lg md:text-xl font-bold text-blue-800">6301</p>
                        </div>

                        <div className="bg-white p-3 md:p-4 rounded-lg md:col-span-2 flex flex-col justify-between">
                            <p className="text-sm md:text-base font-medium text-gray-700">Sector/Urbanización</p>
                            <p className="text-lg md:text-xl font-bold text-blue-800">Villa Juana - Terrazas de Vista Azul</p>
                        </div>

                        <div className="bg-white p-3 md:p-4 rounded-lg md:col-span-2 flex flex-col justify-between">
                            <p className="text-sm md:text-base font-medium text-gray-700">Dirección completa para documentos</p>
                            <p className="text-lg md:text-xl font-bold text-blue-800">Urbanización Terrazas de Vista Azul, Sector Villa Juana, Parroquia Francisco Fajardo, Municipio García, Estado Nueva Esparta</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoUbicacion;