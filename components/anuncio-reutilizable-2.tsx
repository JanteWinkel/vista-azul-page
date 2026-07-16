"use client";

const PagosSinIdentificar = () => {
    const pagos = [
        { monto: "Bs. 16.032,45", fecha: "05/02" },
        { monto: "Bs. 30.212,80", fecha: "10/02" },
        { monto: "Bs. 16.968,32", fecha: "18/02" },
        { monto: "Bs. 17.073,04", fecha: "28/02" },
        { monto: "Bs. 19.255,91", fecha: "04/04" },
        { monto: "Bs. 20.010,06", fecha: "10/04" },
        { monto: "Bs. 11.646,00", fecha: "19/04" },
        { monto: "Bs. 19.586,92", fecha: "24/04" },
        { monto: "Bs. 19.976,00", fecha: "26/04" },
        { monto: "Bs. 10.239,31", fecha: "30/04" },
        { monto: "Bs. 12.000,00", fecha: "04/05" },
        { monto: "Bs. 21.489,27", fecha: "06/05" },
        { monto: "Bs. 24.734,41", fecha: "26/05" },
        { monto: "Bs. 25.412,14", fecha: "11/06" },
    ];

    return (
        <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto py-8">
            {/* Banner superior */}
            <div className="bg-yellow-500 text-white p-4 rounded-t-lg">
                <h2 className="text-2xl font-bold text-center uppercase">
                    Pagos Sin Identificar
                </h2>
            </div>

            {/* Contenedor principal */}
            <div className="border border-gray-200 dark:border-gray-900 rounded-b-lg shadow-lg bg-white dark:bg-gray-800 p-6">

                {/* Evento - estilo igual a EventSchedule */}
                <div className="relative block overflow-hidden p-6 border-2 border-yellow-500 rounded-lg shadow-lg bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-400">
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-600"></span>
                    <div className="flex items-start gap-3">
                        <div className="flex-1">
                            <p className="font-bold text-lg text-yellow-800 dark:text-yellow-300">
                                ESTIMADOS VECINOS
                            </p>
                            <div className="mt-2">
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    A continuación se detallan los pagos recibidos que no han podido ser identificados:
                                </p>
                            </div>

                            {/* Tabla de pagos */}
                            <div className="mt-4 overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                N°
                                            </th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Monto
                                            </th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Fecha
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                        {pagos.map((pago, index) => (
                                            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                                                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                                                    {index + 1}
                                                </td>
                                                <td className="px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                    {pago.monto}
                                                </td>
                                                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                                                    {pago.fecha}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Total de pagos */}
                            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-right">
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Total de pagos sin identificar: <span className="font-bold text-gray-800 dark:text-gray-200">{pagos.length}</span>
                                </p>
                            </div>

                            {/* Mensaje final */}
                            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
                                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <span className="font-bold">Agradecemos</span> verificar sus capturas, pagos y estados 
                                    de cuenta para lograr identificar estos pagos. Por favor, en caso de tener algunos de estos 
                                    pagos, comunicarlo por privado.
                                </p>
                            </div>

                            {/* Agradecimiento */}
                            <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg text-center">
                                <p className="text-sm font-bold text-green-800 dark:text-green-300">
                                    ¡MUCHAS GRACIAS!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PagosSinIdentificar;