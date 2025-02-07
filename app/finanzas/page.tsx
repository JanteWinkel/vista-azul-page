"use client";

import IndicadoresFinancieros from "@/app/finanzas/components/indicadores";
import Footer from "@/components/footer";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import Deudas from "@/app/finanzas/components/deudas";
import Contact from "./components/contatc";
import BannerFinanzas from "./components/banner_finanzas";

ChartJS.register(ArcElement, Tooltip, Legend);

const FinanceOverview = () => {
    const systemLink = "https://www.condominiosifac.com"; // Cambia esto por el link real
    const bcvLink = "https://www.bcv.org.ve"; // Página oficial del BCV
    const accounts = [
        { bank: "Pago Movil", accountNumber: "Bancamiga", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Número: (0424) 189.97.98" },
        { bank: "Banco Fondo Común (CUENTA CORRIENTE PAGO EN BOLÍVARES BS)", accountNumber: "0151-0027-35-4270025320", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente" },
        { bank: "Bancamiga (CUENTA CORRIENTE PAGO EN BOLÍVARES BS)", accountNumber: "0172-0701-69-7018262191", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente" },
        { bank: "Bancamiga (CUENTA CASH USD $)", accountNumber: "0172-0701-68-7018259171", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "NOTA IMPORTANTE: La cuenta en divisas puede ser utilizada para depósitos en USD $ en bancos Bancamiga en el Territorio Nacional y en transferencias en divisas del mismo banco." },
        { bank: "Bancamiga (CUENTA CORRIENTE MONEDA EXTRANJERA USD $)", accountNumber: "0172-0701-617018283676", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente" },
        { bank: "Bancamiga (CUENTA CORRIENTE MONEDA EXTRANJERA EUROS €)", accountNumber: "0172-0701-667018272083", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente" },
        { bank: "Bancamiga (CUENTA CORRIENTE PAGO EN BOLÍVARES BS)", accountNumber: "0172-0701-62-7018331913", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente" },
        { bank: "Bancamiga (CUENTA CASH USD $)", accountNumber: "0172-0701-68-7018327887", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente" },
    ];

    return (
        <div>
            <BannerFinanzas />
            <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto pt-6">
                <p className="text-justify">Consulta aquí tu estado de cuenta, los contactos para reportar los pagos, las cuentas bancarias del condominio, la deuda general y el indicador financiero clave.</p>

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

                <Contact />

                {/* Cuentas bancarias */}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-primary mb-4">DATOS BANCARIOS</h2>
                    <div className="grid gap-6 md:grid-cols-2 ">

                        {accounts.map((account, index) => (
                            <div
                                key={index}
                                className="p-4 border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-600 relative block overflow-hidden"
                            >
                                <span
                                    className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600"
                                ></span>

                                <p className="font-medium text-gray-800 dark:text-gray-200">{account.bank}</p>
                                <p className="text-gray-600 dark:text-gray-400">Titular: {account.accountHolder}</p>
                                <p className="text-gray-600 dark:text-gray-400">Cuenta: {account.accountNumber}</p>
                                <p className="text-gray-600 dark:text-gray-400">Rif: {account.rif}</p>
                                <p className="text-gray-600 dark:text-gray-400">{account.notes}</p>
                            </div>
                        ))}
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
                <Deudas />
                <IndicadoresFinancieros />

                <hr className="my-8 border-t border-gray-300 w-full" />
            </div>
            <Footer />
        </div>
    );
};

export default FinanceOverview;
