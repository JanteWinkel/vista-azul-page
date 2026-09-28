"use client";

import { useState } from "react";
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
import { PageIntro, SectionHeader, btnPrimary } from "@/components/va-ui";
import {
    Landmark,
    CreditCard,
    Mail,
    User,
    FileText,
    ExternalLink,
    Info,
    Copy,
    Check,
} from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

const FinanceOverview = () => {
    const systemLink = "https://www.condominiosifac.com";
    const bcvLink = "https://www.bcv.org.ve";
    const [copiada, setCopiada] = useState<number | null>(null);

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

    const copiarCuenta = (index: number, numero: string) => {
        navigator.clipboard.writeText(numero);
        setCopiada(index);
        setTimeout(() => setCopiada(null), 2000);
    };

    return (
        <div>
            <BannerFinanzas />

            <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">

                {/* Introducción */}
                <PageIntro>
                    Consulta aquí tu estado de cuenta, los contactos para reportar los pagos, las cuentas bancarias del condominio y la deuda general.
                </PageIntro>

                <AnuncioReutilizable />

                {/* Botón al sistema administrativo */}
                <div className="mt-8">
                    <a
                        href={systemLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${btnPrimary} text-lg px-7 py-4`}
                    >
                        <ExternalLink className="w-5 h-5" />
                        Consultar Estado de Cuenta
                    </a>
                </div>

                <Contact />

                {/* Nota sobre pagos en Bs */}
                <section className="mt-8 rounded-[28px] bg-va-girasol text-va-abismo p-6 md:p-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="flex items-center gap-2 font-display font-bold text-2xl">
                            <Info className="w-6 h-6 flex-shrink-0" />
                            Pago de Mensualidad en Bolívares
                        </p>
                        <p className="mt-1 text-lg max-w-[52ch]">
                            Si realiza el pago de la mensualidad en <strong>bolívares (Bs)</strong>, debe cancelar al cambio oficial del día.
                        </p>
                    </div>
                    <a
                        href={bcvLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-start md:self-auto flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-va-abismo hover:bg-va-noche text-white font-bold px-6 py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-va-abismo"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Consultar BCV
                    </a>
                </section>

                {/* Cuentas bancarias */}
                <section className="mt-16">
                    <SectionHeader
                        kicker={<><Landmark className="w-4 h-4" />{accounts.length} cuentas registradas</>}
                        title="Datos bancarios"
                    />

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        {accounts.map((account, index) => {
                            const esNumero = /\d/.test(account.accountNumber);
                            return (
                                <article
                                    key={index}
                                    className="rounded-[28px] border border-va-linea dark:border-white/10 bg-white dark:bg-va-marea p-6 flex flex-col"
                                >
                                    <h3 className="flex items-start gap-2 font-display font-bold text-lg leading-snug text-slate-900 dark:text-white">
                                        <CreditCard className="w-5 h-5 flex-shrink-0 mt-0.5 text-va-azul dark:text-sky-300" />
                                        {account.bank}
                                    </h3>

                                    {/* Número de cuenta */}
                                    <div className="mt-4 rounded-2xl bg-va-bruma dark:bg-white/5 p-4">
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Cuenta</p>
                                        <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                                            <p className="font-bold text-lg md:text-xl tabular-nums tracking-wide text-slate-900 dark:text-white break-all">
                                                {account.accountNumber}
                                            </p>
                                            {esNumero && (
                                                <button
                                                    onClick={() => copiarCuenta(index, account.accountNumber)}
                                                    className="inline-flex items-center gap-1.5 rounded-full border border-va-azul/30 dark:border-sky-300/30 text-va-azul dark:text-sky-300 text-sm font-bold px-3 py-1 hover:bg-white dark:hover:bg-white/10 transition-colors"
                                                >
                                                    {copiada === index ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                                    {copiada === index ? "¡Copiada!" : "Copiar"}
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
                                        <dt className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400"><User className="w-3.5 h-3.5" />Titular</dt>
                                        <dd className="font-bold text-slate-800 dark:text-slate-200">{account.accountHolder}</dd>
                                        <dt className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400"><FileText className="w-3.5 h-3.5" />RIF</dt>
                                        <dd className="font-bold tabular-nums text-slate-800 dark:text-slate-200">{account.rif}</dd>
                                        <dt className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400"><Mail className="w-3.5 h-3.5" />Correo</dt>
                                        <dd>
                                            <a href={`mailto:${account.mail}`} className="font-bold text-va-azul dark:text-sky-300 hover:underline break-all">
                                                {account.mail}
                                            </a>
                                        </dd>
                                    </dl>

                                    {/* Notas */}
                                    {account.notes && (
                                        <p className="mt-auto pt-4 flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                            <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-va-sol" />
                                            {account.notes}
                                        </p>
                                    )}
                                </article>
                            );
                        })}
                    </div>
                </section>

                <Deudas />
            </div>
            <Footer />
        </div>
    );
};

export default FinanceOverview;
