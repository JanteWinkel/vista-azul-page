import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Definición de las propiedades del gráfico
interface ChartDataProps {
    labels: string[];
    datasets: {
        data: number[];
        backgroundColor: string[];
        hoverBackgroundColor: string[];
    }[];
}

// Total de TH en la urbanización
const totalTH: number = 333;

// Datos para los indicadores
const deudores: number = 49;
const morosidadSimple: number = 41;
const morosidadLegal: number = 58;
const thConDeuda: number = 148;

// Función para generar datos de los gráficos de dona
const generateChartData = (label: string, value: number): ChartDataProps => ({
    labels: [label, "Sin Deuda"],
    datasets: [
        {
            data: [value, totalTH - value],
            backgroundColor: ["#D9534F", "#5BC0DE"], // Rojo y azul profesional
            hoverBackgroundColor: ["#D43F00", "#31B0D5"],
        },
    ],
});

const IndicadoresFinancieros: React.FC = () => {
    return (
        <div className="mt-12">
            <h2 className="text-2xl font-semibold text-primary mb-4">INDICADORES FINANCIEROS</h2>
            <div className="flex flex-wrap gap-6 justify-center">
                
                {/* THs con Deuda */}
                <div className="w-full sm:w-1/2 lg:w-1/3 p-4 border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-600 text-center">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">TH con Deuda.</h3>
                    <div className="w-full h-64 flex justify-center items-center">
                        <Doughnut data={generateChartData("Deudores", deudores)} />
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Este indicador refleja los TH que tienen exactamente 1 mes de deuda.
                    </p>
                </div>

                {/* THs con Morosidad Simple */}
                <div className="w-full sm:w-1/2 lg:w-1/3 p-4 border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-600 text-center">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">TH con Morosidad Simple.</h3>
                    <div className="w-full h-64 flex justify-center items-center">
                        <Doughnut data={generateChartData("Morosidad Simple", morosidadSimple)} />
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Este indicador representa los TH con una deuda acumulada entre 2 y 3 meses.
                    </p>
                </div>

                {/* THs con Morosidad Legal */}
                <div className="w-full sm:w-1/2 lg:w-1/3 p-4 border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-600 text-center">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">TH con Morosidad Legal.</h3>
                    <div className="w-full h-64 flex justify-center items-center">
                        <Doughnut data={generateChartData("Morosidad Legal", morosidadLegal)} />
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Este indicador muestra los TH que tienen una deuda de 4 meses o más, considerada morosidad legal.
                    </p>
                </div>

                {/* THs que deben al menos un mes */}
                <div className="w-full sm:w-1/2 lg:w-1/3 p-4 border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-600 text-center">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">TH con al menos 1 mes de deuda.</h3>
                    <div className="w-full h-64 flex justify-center items-center">
                        <Doughnut data={generateChartData("Deben 1 mes+", thConDeuda)} />
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Este indicador refleja todos los TH que tienen al menos 1 mes de deuda, incluyendo morosidad simple y legal.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default IndicadoresFinancieros;
