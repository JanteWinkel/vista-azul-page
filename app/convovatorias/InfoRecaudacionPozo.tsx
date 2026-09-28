"use client";

import { useState } from 'react';
import {
    Wallet,
    Banknote,
    Phone,
    Check,
    Copy,
    Users,
    Info,
    Ban,
} from 'lucide-react';
import Girasol from '@/components/girasol';

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const InfoRecaudacionPozo = () => {
    const [copied, setCopied] = useState<string | null>(null);

    const copiar = (clave: string, texto: string) => {
        navigator.clipboard.writeText(texto);
        setCopied(clave);
        setTimeout(() => setCopied(null), 2000);
    };

    const contactos = [
        { name: "Jan te Winkel", phone: "(0414) 563.19.06", wa_phone: "584145631906" },
        { name: "Wilmer Valerio", phone: "(0426) 586.64.14", wa_phone: "584265866414" },
        { name: "Freddy López", phone: "(0416) 696.05.28", wa_phone: "584166960528" }
    ];

    return (
        <section className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto pt-6 pb-6 font-legible">
            <div className="relative overflow-hidden rounded-[28px] bg-va-abismo text-white shadow-[0_24px_60px_-30px_rgba(15,52,80,0.7)]">

                <Girasol className="absolute w-60 h-60 -right-24 -top-24 md:w-[26rem] md:h-[26rem] md:-right-28 md:-top-36" />

                {/* Encabezado */}
                <div className="relative px-6 pt-8 pb-8 md:px-10 md:pt-12">
                    <p className="text-sky-200 text-sm md:text-base">Instructivo de recaudación</p>
                    <h1 className="mt-10 md:mt-3 font-display font-extrabold tracking-tight leading-[0.95] text-[2.6rem] sm:text-5xl md:text-7xl max-w-[11ch] [font-stretch:88%]">
                        Perforación del tercer pozo
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-sky-100">
                        Proyecto Agua Segura para Todos
                    </p>

                    <div className="mt-8 pt-6 border-t border-white/15 grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-12">
                        <div>
                            <p className="text-sm text-sky-200">Monto exacto</p>
                            <p className="font-display font-bold text-va-girasol text-6xl md:text-7xl tracking-tight tabular-nums leading-none mt-1">
                                $44.30 <span className="text-lg md:text-xl font-legible font-normal text-sky-200 tracking-normal">USD</span>
                            </p>
                            <button
                                onClick={() => copiar("monto", "44.30")}
                                className="mt-3 inline-flex items-center gap-1.5 text-sm rounded-full border border-white/25 px-3.5 py-1.5 hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-va-girasol"
                            >
                                {copied === "monto" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                {copied === "monto" ? "¡Copiado!" : "Copiar monto"}
                            </button>
                        </div>
                        <div className="sm:border-l sm:border-white/15 sm:pl-12">
                            <p className="text-sm text-sky-200">Plazo de recaudación</p>
                            <p className="font-display font-bold text-5xl md:text-6xl tracking-tight leading-none mt-1">30 días</p>
                            <p className="text-sky-100 mt-2">Desde el inicio del proyecto</p>
                        </div>
                    </div>
                </div>

                {/* Hoja interna: cómo pagar */}
                <div className="relative mx-2 mb-2 md:mx-3 md:mb-3 rounded-[22px] bg-white dark:bg-va-marea text-slate-800 dark:text-slate-100 p-5 md:p-8">

                    <div className="grid gap-4 md:grid-cols-2">
                        {/* Binance */}
                        <div className="rounded-2xl border-2 border-va-girasol p-5 flex flex-col">
                            <div className="flex items-center gap-3">
                                <span className="grid place-items-center w-11 h-11 rounded-xl bg-va-girasol text-va-abismo">
                                    <Wallet className="w-5 h-5" />
                                </span>
                                <div>
                                    <p className="font-display font-bold text-xl leading-tight">Binance</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Pago con criptomonedas</p>
                                </div>
                            </div>

                            <dl className="mt-4 divide-y divide-va-linea dark:divide-white/10 text-sm">
                                <div className="flex items-center justify-between py-2.5">
                                    <dt className="text-slate-500 dark:text-slate-400">Monto</dt>
                                    <dd className="font-bold text-base tabular-nums">$44.30</dd>
                                </div>
                                <div className="flex items-center justify-between gap-3 py-2.5">
                                    <dt className="text-slate-500 dark:text-slate-400">ID</dt>
                                    <dd className="flex items-center gap-2">
                                        <span className="font-bold text-base tabular-nums tracking-wide">1274726307</span>
                                        <button
                                            onClick={() => copiar("id", "1274726307")}
                                            aria-label="Copiar ID de Binance"
                                            className="inline-flex items-center gap-1 text-xs font-bold rounded-full bg-va-girasol/25 hover:bg-va-girasol/45 text-va-abismo dark:text-va-girasol px-2.5 py-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-va-azul"
                                        >
                                            {copied === "id" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                            {copied === "id" ? "¡Copiado!" : "Copiar ID"}
                                        </button>
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between py-2.5">
                                    <dt className="text-slate-500 dark:text-slate-400">Alias</dt>
                                    <dd className="font-bold text-base">Mega Pozo</dd>
                                </div>
                            </dl>

                            <p className="mt-auto pt-3 flex gap-2 text-sm leading-relaxed">
                                <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-va-sol" />
                                <span>
                                    <strong>Importante:</strong> colocar <strong>NOMBRE</strong> y <strong>TH</strong> en la nota del pago.
                                </span>
                            </p>
                        </div>

                        {/* Efectivo */}
                        <div className="rounded-2xl border-2 border-va-linea dark:border-white/15 p-5 flex flex-col">
                            <div className="flex items-center gap-3">
                                <span className="grid place-items-center w-11 h-11 rounded-xl bg-va-azul text-white">
                                    <Banknote className="w-5 h-5" />
                                </span>
                                <div>
                                    <p className="font-display font-bold text-xl leading-tight">Efectivo</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Pago en persona</p>
                                </div>
                            </div>

                            <div className="mt-4 py-2">
                                <p className="font-display font-bold text-5xl tracking-tight tabular-nums text-va-azul dark:text-sky-300">$45.00</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Monto en efectivo</p>
                            </div>

                            <p className="mt-auto pt-3 flex gap-2 text-sm leading-relaxed">
                                <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-va-sol" />
                                <span>
                                    <strong>Importante:</strong> entregar directamente a los <strong>integrantes de la Junta de Condominio</strong>.
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Advertencia: no pagar en bolívares */}
                    <div className="mt-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border-l-[6px] border-va-senal p-4 md:p-5">
                        <p className="flex items-center gap-2 font-display font-bold text-lg text-va-senal dark:text-red-300">
                            <Ban className="w-5 h-5 flex-shrink-0" />
                            No se aceptan pagos en bolívares
                        </p>
                        <p className="mt-2 text-sm md:text-[0.95rem] leading-relaxed text-red-950 dark:text-red-100 max-w-[70ch]">
                            La cuenta bancaria regular es <strong>exclusiva para la cuota ordinaria de condominio</strong>.
                            De realizar un pago en bolívares para el pozo, <strong>se gestionará su devolución</strong> o
                            se abonará a su cuenta de condominio (<strong>NO sumará al pago del pozo</strong>).
                        </p>
                    </div>

                    {/* Responsables */}
                    <div className="mt-8">
                        <h2 className="flex items-center gap-2 font-display font-bold text-xl">
                            <Users className="w-5 h-5 text-va-azul dark:text-sky-300" />
                            Responsables de recaudación
                        </h2>
                        <ul className="mt-3 grid gap-3 sm:grid-cols-3">
                            {contactos.map((person) => (
                                <li key={person.wa_phone}>
                                    <a
                                        href={`https://wa.me/${person.wa_phone}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between gap-3 rounded-2xl bg-va-bruma dark:bg-white/5 px-4 py-3 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-va-azul"
                                    >
                                        <span>
                                            <span className="block font-bold">{person.name}</span>
                                            <span className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 tabular-nums">
                                                <Phone className="w-3.5 h-3.5" />
                                                {person.phone}
                                            </span>
                                        </span>
                                        <span className="grid place-items-center w-10 h-10 rounded-full bg-[#25D366] text-white flex-shrink-0" title="WhatsApp">
                                            <WhatsAppIcon className="w-5 h-5" />
                                            <span className="sr-only">WhatsApp</span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="mt-6 text-right text-sm text-slate-500 dark:text-slate-400">Junta de Condominio</p>
                </div>
            </div>
        </section>
    );
};

export default InfoRecaudacionPozo;
