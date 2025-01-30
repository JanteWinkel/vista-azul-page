import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Total de TH en la urbanización
const totalTH: number = 333;

// Datos para los indicadores
const deudores: number = 74;
const morosidadSimple: number = 65;
const morosidadLegal: number = 88;
const sinDeuda: number = totalTH - (deudores + morosidadSimple + morosidadLegal);

// Datos del gráfico de dona unificado
const unifiedChartData = {
    labels: ["Deudores (1 mes)", "Morosidad Simple (2-3 meses)", "Morosidad Legal (4+ meses)", "Sin Deuda"],
    datasets: [
        {
            data: [deudores, morosidadSimple, morosidadLegal, sinDeuda],
            backgroundColor: ["#F4A261", "#E76F51", "#D62828", "#2A9D8F"], // Colores profesionales
            hoverBackgroundColor: ["#F08A4B", "#D65F42", "#A61D1D", "#21867A"],
        },
    ],
};

const IndicadoresFinancieros: React.FC = () => {
    return (
        <div className="mt-12">
            <h2 className="text-2xl font-semibold text-primary mb-4">INDICADOR FINANCIERO</h2>
            <div className="flex flex-wrap justify-center">
                <div className="w-full sm:w-2/3 lg:w-1/2 p-6 border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-600 text-center">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Estado de Deudas en el Condominio</h3>
                    <div className="w-full h-80 flex justify-center items-center">
                        <Doughnut data={unifiedChartData} />
                    </div>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                        Este gráfico muestra la distribución de las deudas en el condominio, diferenciando entre deudores, morosidad simple, morosidad legal y los TH sin deuda.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IndicadoresFinancieros;
