import React from 'react';

; // Deuda General
const deudaPrimeraEtapa = 36510.04; // Deuda de la Primera Etapa
const deudaSegundaEtapa = 14045.00; // Deuda de la Segunda Etapa

const Deudas = () => {
    return (
        <div className="mt-12">
            <h2 className="text-2xl font-semibold text-primary mb-1">DEUDA GENERAL</h2>
            <h4 className="font-semibold  mb-4">Fecha (09/05/2025)</h4>
            <div className="flex flex-wrap gap-6 justify-center">
                <div className="w-full sm:w-1/4 lg:w-1/5 p-3 border border-red-400 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-red-400 text-center hover:scale-110">
                    <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">DEUDA GENERAL</h3>
                    <p className="text-3xl font-extrabold text-gray-800 dark:text-gray-200">${(deudaPrimeraEtapa + deudaSegundaEtapa).toLocaleString()}</p>
                </div>
                <div className="w-full sm:w-1/4 lg:w-1/5 p-3 border border-red-400 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-red-400 text-center hover:scale-110">
                    <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">Deuda Primera Etapa</h3>
                    <p className="text-3xl font-extrabold text-gray-800 dark:text-gray-200">${deudaPrimeraEtapa.toLocaleString()}</p>
                </div>
                <div className="w-full sm:w-1/4 lg:w-1/5 p-3 border border-red-400 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-red-400 text-center hover:scale-110">
                    <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">Deuda Segunda Etapa</h3>
                    <p className="text-3xl font-extrabold text-gray-800 dark:text-gray-200">${deudaSegundaEtapa.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default Deudas;
