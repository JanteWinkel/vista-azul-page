import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

// Datos para los indicadores
const totalDebt = 120000;
const delinquentTH = 15; // TH morosos
const totalTH = 50; // Total de TH

// Datos para los gráficos de dona
const delinquentData = {
    labels: ["Morosos", "Al día"],
    datasets: [
        {
            data: [delinquentTH, totalTH - delinquentTH],
            backgroundColor: ["#D9534F", "#5BC0DE"], // Rojo y azul suave
            hoverBackgroundColor: ["#D43F00", "#31B0D5"],
        },
    ],
};

const debtRelationData = {
    labels: ["Deuda General", "Pagado"],
    datasets: [
        {
            data: [totalDebt, totalTH * 1000 - totalDebt], // Ejemplo con TH promedio pagando $1000
            backgroundColor: ["#5A6268", "#17A2B8"], // Gris oscuro y azul claro
            hoverBackgroundColor: ["#343A40", "#138496"],
        },
    ],
};

const IndicadoresFinancieros = () => {
    return (
        <div className="mt-12">
            <h2 className="text-2xl font-semibold text-primary mb-4">INDICADORES FINANCIEROS</h2>
            <div className="flex flex-wrap gap-6 justify-center">
                {/* Caja para el gráfico de Morosos */}
                <div className="w-full sm:w-1/2 lg:w-1/3 p-4 border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-600 text-center">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">TH Morosos</h3>
                    <div className="w-full h-64 flex justify-center items-center">
                        <Doughnut data={delinquentData} />
                    </div>
                </div>

                {/* Caja para el gráfico de Deuda/TH */}
                <div className="w-full sm:w-1/2 lg:w-1/3 p-4 border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-600 text-center">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Relación Deuda/TH</h3>
                    <div className="w-full h-64 flex justify-center items-center">
                        <Doughnut data={debtRelationData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndicadoresFinancieros;
