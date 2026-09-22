"use client";

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
import AnuncioReutilizable from "@/components/anuncio-reutilizable-1";
import {
    Landmark,
    CreditCard,
    Mail,
    User,
    Hash,
    FileText,
    ExternalLink,
    Info,
} from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

const FinanceOverview = () => {
    const systemLink = "https://www.condominiosifac.com";
    const bcvLink = "https://www.bcv.org.ve";

    const accounts = [
        { bank: "Pago Movil", accountNumber: "Bancamiga", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Número: (0424) 189.97.98", mail: "recibotva@gmail.com" },
        { bank: "Banco Fondo Común (CUENTA CORRIENTE PAGO EN BOLÍVARES BS)", accountNumber: "0151-0027-35-4270025320", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente", mail: "recibotva@gmail.com" },
        { bank: "Bancamiga (CUENTA CORRIENTE PAGO EN BOLÍVARES BS)", accountNumber: "0172-0701-69-7018262191", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente", mail: "recibotva@gmail.com" },
        { bank: "Bancamiga (CUENTA CASH USD $)", accountNumber: "0172-0701-68-7018259171", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "NOTA IMPORTANTE: La cuenta en divisas puede ser utilizada para depósitos en USD $ en bancos Bancamiga en el Territorio Nacional y en transferencias en divisas del mismo banco.", mail: "recibotva@gmail.com" },
        { bank: "Bancamiga (CUENTA CORRIENTE MONEDA EXTRANJERA USD $)", accountNumber: "0172-0701-617018283676", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente", mail: "recibotva@gmail.com" },
        { bank: "Bancamiga (CUENTA CORRIENTE MONEDA EXTRANJERA EUROS €)", accountNumber: "0172-0701-667018272083", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente", mail: "recibotva@gmail.com" },
        { bank: "Bancamiga (CUENTA CORRIENTE PAGO EN BOLÍVARES BS)", accountNumber: "0172-0701-62-7018331913", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente", mail: "recibotva@gmail.com" },
        { bank: "Bancamiga (CUENTA CASH USD $)", accountNumber: "0172-0701-68-7018327887", accountHolder: "Condominio Terrazas de Vista Azul", rif: "J-29850527-3", notes: "Corriente", mail: "recibotva@gmail.com" },
    ];

    return (
        <div>
            <BannerFinanzas />

            <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto py-8">

                {/* Introducción */}
                <div className="rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-600 p-4 mb-6">
                <p className=" text-justify">
                        Consulta aquí tu estado de cuenta, los contactos para reportar los pagos, las cuentas bancarias del condominio y la deuda general.
                    </p>
                </div>

                <AnuncioReutilizable />

                {/* Botón al sistema administrativo */}
                <div className="mt-8 text-center">
                    <a
                        href={systemLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold uppercase rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-xl transition-all duration-300"
                    >
                        <ExternalLink className="w-5 h-5" />
                        Consultar Estado de Cuenta
                    </a>
                </div>

                <Contact />

                {/* Nota sobre pagos en Bs */}
                <div className="mt-8 relative overflow-hidden rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 p-6 text-white shadow-lg border-2 border-yellow-300">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-300/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-4">
                        <div className="bg-white/20 p-3 rounded-full flex-shrink-0">
                            <Info className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-lg font-bold text-white">
                                Pago de Mensualidad en Bolívares
                            </p>
                            <p className="text-sm text-yellow-100 mt-1">
                                Si realiza el pago de la mensualidad en <strong className="text-white">bolívares (Bs)</strong>, debe cancelar al cambio oficial del día.
                            </p>
                        </div>
                        <a
                            href={bcvLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 px-6 py-3 bg-white text-yellow-700 font-bold rounded-full shadow-lg hover:bg-yellow-50 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Consultar BCV
                        </a>
                    </div>
                </div>

                {/* Cuentas bancarias */}
                <div className="mt-8">
                    {/* Título */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl shadow-lg">
                            <Landmark className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 uppercase">
                                Datos Bancarios
                            </h2>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                {accounts.length} cuentas registradas
                            </p>
                        </div>
                    </div>

                    {/* Grid de cuentas - 2 columnas como el original */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {accounts.map((account, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border-2 border-blue-300 dark:border-blue-600 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Borde superior */}
                                <div className="h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>

                                {/* Encabezado de la card */}
                                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 text-white">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white/20 p-2 rounded-xl flex-shrink-0">
                                            <CreditCard className="w-5 h-5" />
                                        </div>
                                        <p className="text-sm font-bold leading-tight">
                                            {account.bank}
                                        </p>
                                    </div>
                                </div>

                                {/* Datos de la cuenta */}
                                <div className="p-4 space-y-2.5">
                                    <div className="flex items-start gap-2 text-sm">
                                        <User className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">Titular</span>
                                            <p className="font-semibold text-gray-800 dark:text-gray-200">
                                                {account.accountHolder}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2 text-sm">
                                        <Hash className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">Cuenta</span>
                                            <p className="font-mono font-semibold text-gray-800 dark:text-gray-200 break-all">
                                                {account.accountNumber}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2 text-sm">
                                        <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">RIF</span>
                                            <p className="font-semibold text-gray-800 dark:text-gray-200">
                                                {account.rif}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2 text-sm">
                                        <Mail className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">Correo</span>
                                            <a
                                                href={`mailto:${account.mail}`}
                                                className="font-semibold text-blue-600 dark:text-blue-400 hover:underline break-all"
                                            >
                                                {account.mail}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Notas */}
                                    {account.notes && (
                                        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                                            <div className="flex items-start gap-2">
                                                <Info className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                                                <p className="text-xs text-gray-600 dark:text-gray-400 italic leading-relaxed">
                                                    {account.notes}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Deudas />

                <hr className="my-8 border-t border-gray-300 w-full" />
            </div>
            <Footer />
        </div>
    );
};

export default FinanceOverview;