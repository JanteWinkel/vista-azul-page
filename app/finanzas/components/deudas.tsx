"use client";

import {
    AlertTriangle,
    Calendar,
} from 'lucide-react';
import { SectionHeader } from '@/components/va-ui';

// Deuda General
const deudaPrimeraEtapa = 42406.61;
const deudaSegundaEtapa = 16445.95;
const deudaGeneral = deudaPrimeraEtapa + deudaSegundaEtapa;

const usd = (n: number) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const Deudas = () => {
    // Calcular porcentajes
    const porcentajePrimera = (deudaPrimeraEtapa / deudaGeneral) * 100;
    const porcentajeSegunda = (deudaSegundaEtapa / deudaGeneral) * 100;

    const etapas = [
        { label: "Deuda Primera Etapa", monto: deudaPrimeraEtapa, pct: porcentajePrimera, color: "bg-va-azul dark:bg-sky-300" },
        { label: "Deuda Segunda Etapa", monto: deudaSegundaEtapa, pct: porcentajeSegunda, color: "bg-va-sol" },
    ];

    return (
        <section className="mt-16">
            <SectionHeader
                kicker={<><Calendar className="w-4 h-4" />Fecha: 10/07/2026</>}
                title="Deuda general"
                description={
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 dark:bg-red-950/50 text-va-senal dark:text-red-300 px-3.5 py-1.5 text-sm font-bold">
                        <AlertTriangle className="w-4 h-4" />
                        Saldo Pendiente
                    </span>
                }
            />

            <div className="mt-6 rounded-[28px] border border-va-linea dark:border-white/10 bg-white dark:bg-va-marea p-6 md:p-10">
                {/* Total */}
                <p className="text-slate-600 dark:text-slate-400">Deuda Total del Condominio</p>
                <p className="mt-1 font-display font-extrabold text-5xl md:text-7xl tracking-tight tabular-nums text-va-senal dark:text-red-300 leading-none">
                    {usd(deudaGeneral)}
                </p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Suma de ambas etapas</p>

                {/* Reparto entre etapas */}
                <div className="mt-8 flex h-4 rounded-full overflow-hidden gap-1" role="img" aria-label={`Primera etapa ${porcentajePrimera.toFixed(1)}%, segunda etapa ${porcentajeSegunda.toFixed(1)}%`}>
                    {etapas.map((e) => (
                        <div key={e.label} className={`${e.color} h-full`} style={{ width: `${e.pct}%` }}></div>
                    ))}
                </div>
                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                    {etapas.map((e) => (
                        <div key={e.label} className="flex items-start gap-3">
                            <span className={`mt-1.5 w-3 h-3 rounded-full flex-shrink-0 ${e.color}`} aria-hidden="true"></span>
                            <div>
                                <dt className="text-slate-600 dark:text-slate-400">{e.label}</dt>
                                <dd className="flex items-baseline gap-3">
                                    <span className="font-display font-bold text-3xl tracking-tight tabular-nums text-slate-900 dark:text-white">{usd(e.monto)}</span>
                                    <span className="font-bold tabular-nums text-slate-500 dark:text-slate-400">{e.pct.toFixed(1)}%</span>
                                </dd>
                            </div>
                        </div>
                    ))}
                </dl>

                {/* Nota informativa */}
                <p className="mt-8 border-t border-va-linea dark:border-white/10 pt-5 text-slate-600 dark:text-slate-400 leading-relaxed max-w-[70ch]">
                    <strong className="text-slate-900 dark:text-white">Información:</strong> los montos mostrados corresponden a la deuda pendiente por etapa.
                    Se recomienda a los propietarios mantenerse al día con sus cuotas para evitar recargos.
                </p>
            </div>
        </section>
    );
};

export default Deudas;
