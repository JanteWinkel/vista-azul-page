"use client";

import { useState } from 'react';
import {
    MapPin,
    Copy,
    Check,
} from 'lucide-react';

const DIRECCION_COMPLETA = "Urbanización Terrazas de Vista Azul, Sector Villa Juana, Parroquia Francisco Fajardo, Municipio García, Estado Nueva Esparta";

const InfoUbicacion = () => {
    const [copied, setCopied] = useState(false);

    const datos = [
        { label: "Estado", value: "Nueva Esparta" },
        { label: "Municipio", value: "García" },
        { label: "Parroquia", value: "Francisco Fajardo" },
        { label: "Código Postal", value: "6301" },
    ];

    const copiarDireccion = () => {
        navigator.clipboard.writeText(DIRECCION_COMPLETA);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto py-10 font-legible">

            {/* Encabezado */}
            <p className="flex items-center gap-2 text-sm text-va-azul dark:text-sky-300">
                <MapPin className="w-4 h-4" />
                Ubicación y datos de contacto
            </p>
            <h2 className="mt-2 font-display font-extrabold tracking-tight leading-[0.95] text-4xl md:text-5xl text-slate-900 dark:text-white [font-stretch:88%] max-w-[18ch]">
                Residencias Terrazas de Vista Azul
            </h2>

            {/* Datos administrativos */}
            <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 border-y border-va-linea dark:border-white/10">
                {datos.map((dato, i) => (
                    <div
                        key={dato.label}
                        className={`py-5 pr-4 ${i % 2 === 1 ? "pl-4 border-l" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""} ${i === 2 ? "md:pl-4 md:border-l" : ""} border-va-linea dark:border-white/10`}
                    >
                        <dt className="text-sm text-slate-500 dark:text-slate-400">{dato.label}</dt>
                        <dd className="mt-1 font-display font-bold text-xl md:text-2xl text-slate-900 dark:text-white leading-tight">{dato.value}</dd>
                    </div>
                ))}
                <div className="col-span-2 md:col-span-4 py-5 border-t border-va-linea dark:border-white/10">
                    <dt className="text-sm text-slate-500 dark:text-slate-400">Sector / Urbanización</dt>
                    <dd className="mt-1 font-display font-bold text-xl md:text-2xl text-slate-900 dark:text-white leading-tight">Villa Juana - Terrazas de Vista Azul</dd>
                </div>
            </dl>

            {/* Dirección para documentos */}
            <div className="mt-6 rounded-2xl border-2 border-dashed border-va-azul/40 dark:border-sky-300/30 bg-va-bruma dark:bg-white/5 p-5 md:p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Dirección completa para documentos</p>
                        <p className="mt-2 text-lg md:text-xl leading-relaxed text-slate-900 dark:text-white max-w-[56ch]">
                            {DIRECCION_COMPLETA}
                        </p>
                    </div>
                    <button
                        onClick={copiarDireccion}
                        className="self-start md:self-auto flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-va-azul hover:bg-va-abismo text-white text-sm font-bold px-5 py-2.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-va-azul"
                    >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? "¡Copiada!" : "Copiar dirección"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InfoUbicacion;
