import React from 'react';

const deudaGeneral = 120000; // Deuda General
const deudaPrimeraEtapa = 50000; // Deuda de la Primera Etapa
const deudaSegundaEtapa = 70000; // Deuda de la Segunda Etapa

const Deudas = () => {
    return (
        <div className="mt-12">
            <h2 className="text-2xl font-semibold text-primary mb-4">DEUDA GENERAL</h2>
            <div className="flex flex-wrap gap-6 justify-center">
                <div className="w-full sm:w-1/4 lg:w-1/5 p-3 border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-600 text-center">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Deuda General</h3>
                    <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">${deudaGeneral.toLocaleString()}</p>
                </div>
                <div className="w-full sm:w-1/4 lg:w-1/5 p-3 border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-600 text-center">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Deuda Primera Etapa</h3>
                    <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">${deudaPrimeraEtapa.toLocaleString()}</p>
                </div>
                <div className="w-full sm:w-1/4 lg:w-1/5 p-3 border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-600 text-center">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Deuda Segunda Etapa</h3>
                    <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">${deudaSegundaEtapa.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default Deudas;
