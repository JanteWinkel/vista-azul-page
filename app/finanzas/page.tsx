"use client";

import Footer from "@/components/footer";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const FinanceOverview = () => {
    const systemLink = "https://www.condominiosifac.com"; // Cambia esto por el link real
    const bcvLink = "https://www.bcv.org.ve"; // Página oficial del BCV
    const accounts = [
        { bank: "Pago Movil", accountNumber: "Bancamiga", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Número: 0424-189-97-98" },
        { bank: "Banco Fonfo Común (CUENTA CORRIENTE PAGO EN BOLÍVARES BS)", accountNumber: "0151-0027-35-4270025320", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente" },
        { bank: "Bancamiga (CUENTA CORRIENTE PAGO EN BOLÍVARES BS)", accountNumber: "0172-0701-69-7018262191", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente" },
        { bank: "Bancamiga (CUENTA CASH USD $)", accountNumber: "0172-0701-68-7018259171", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "NOTA IMPORTANTE: La cuenta en divisas puede ser utilizada para depósitos en USD $ en bancos Bancamiga en el Territorio Nacional y en transferencias en divisas del mismo banco." },
        { bank: "Bancamiga (CUENTA CORRIENTE MONEDA EXTRANJERA USD $)", accountNumber: "0172-0701-617018283676", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente" },
        { bank: "Bancamiga (CUENTA CORRIENTE MONEDA EXTRANJERA EUROS €)", accountNumber: "0172-0701-667018272083", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente" },
    ];
    const accounts_pozo = [
        { bank: "Bancamiga (CUENTA CORRIENTE PAGO EN BOLÍVARES BS)", accountNumber: "0172-0701-62-7018331913", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente" },
        { bank: "Bancamiga (CUENTA CASH USD $)", accountNumber: "0172-0701-68-7018327887", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente" },
    ];

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
                backgroundColor: ["#f87171", "#34d399"],
                hoverBackgroundColor: ["#f87171", "#34d399"],
            },
        ],
    };

    const debtRelationData = {
        labels: ["Deuda General", "Pagado"],
        datasets: [
            {
                data: [totalDebt, totalTH * 1000 - totalDebt], // Ejemplo con TH promedio pagando $1000
                backgroundColor: ["#facc15", "#60a5fa"],
                hoverBackgroundColor: ["#facc15", "#60a5fa"],
            },
        ],
    };

    return (
        <div>
            <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto pt-8 mt-8">
                <h1 className="text-3xl text-primary font-extrabold uppercase text-center">Resumen Financiero</h1>
                <p className="mt-4 text-center">Consulta aquí el estado de cuentas, las cuentas bancarias del condominio y los indicadores financieros clave.</p>

                {/* Botón al sistema administrativo */}
                <div className="mt-8 text-center">
                    <a
                        href={systemLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-primary text-white font-bold uppercase rounded-lg shadow hover:bg-primary-dark transition"
                    >
                        Consultar Estado de Cuenta
                    </a>
                </div>

                {/* Cuentas bancarias */}
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-primary mb-4">DATOS BANCARIOS</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {accounts.map((account, index) => (
                            <div
                                key={index}
                                className="p-4 border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-600"
                            >
                                <p className="font-medium text-gray-800 dark:text-gray-200">{account.bank}</p>
                                <p className="text-gray-600 dark:text-gray-400">Titular: {account.accountHolder}</p>
                                <p className="text-gray-600 dark:text-gray-400">Cuenta: {account.accountNumber}</p>
                                <p className="text-gray-600 dark:text-gray-400">Rif: {account.rif}</p>
                                <p className="text-gray-600 dark:text-gray-400">{account.notes}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-primary mb-4">DATOS BANCARIOS PARA EL PAGO DE LA CUOTA ESPECIAL 2DO POZO </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                        {accounts_pozo.map((account, index) => (
                            <div
                                key={index}
                                className="p-4 border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-600"
                            >
                                <p className="font-medium text-gray-800 dark:text-gray-200">{account.bank}</p>
                                <p className="text-gray-600 dark:text-gray-400">Titular: {account.accountHolder}</p>
                                <p className="text-gray-600 dark:text-gray-400">Cuenta: {account.accountNumber}</p>
                                <p className="text-gray-600 dark:text-gray-400">Rif: {account.rif}</p>
                                <p className="text-gray-600 dark:text-gray-400">{account.notes}</p>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>

                {/* Nota sobre pagos en Bs */}
                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow text-center">
                    <p className="text-sm text-yellow-800 font-medium">
                        Nota: Si realiza el pago de la mensualidad en <strong>bolívares (Bs)</strong>, debe cancelar al cambio oficial del día.
                    </p>
                    <div className="mt-4">
                        <a
                            href={bcvLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
                        >
                            Consultar cambio oficial (BCV)
                        </a>
                    </div>
                </div>

                {/* Indicadores financieros */}
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-primary mb-4">INDICADORES FINANCIEROS</h2>
                    <div className="flex flex-wrap gap-6 justify-center">
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4 border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-600 text-center">
                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">TH Morosos</h3>
                            <Doughnut data={delinquentData} />
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4 border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-600 text-center">
                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Relación Deuda/TH</h3>
                            <Doughnut data={debtRelationData} />
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-t border-gray-300 w-full" />
            </div>
            <Footer />
        </div>
    );
};

export default FinanceOverview;
