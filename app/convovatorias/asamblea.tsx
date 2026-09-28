"use client";

import {
    Lock,
    FileText,
    Download,
    AlertTriangle,
} from 'lucide-react';

const InfoBloqueoControl = () => {

    const handleDownloadActa = () => {
        const pdfUrl = "/documents/Asamblea04022022.pdf";
        window.open(pdfUrl, "_blank");
    };

    return (
        <section className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto py-6 font-legible">
            <div className="relative overflow-hidden rounded-[28px] bg-white dark:bg-va-marea border border-va-linea dark:border-white/10">
                <div className="absolute inset-y-0 left-0 w-2 bg-va-senal" aria-hidden="true"></div>

                <div className="p-6 pl-8 md:p-10 md:pl-12">

                    {/* Encabezado con la fecha como protagonista */}
                    <div className="flex flex-col-reverse gap-6 md:flex-row md:items-start md:justify-between">
                        <div>
                            <p className="flex items-center gap-2 text-sm font-bold text-va-senal dark:text-red-300">
                                <AlertTriangle className="w-4 h-4" />
                                Aviso importante
                            </p>
                            <h2 className="mt-2 font-display font-extrabold tracking-tight leading-[0.95] text-4xl md:text-6xl text-slate-900 dark:text-white [font-stretch:88%]">
                                Control de acceso
                            </h2>
                            <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
                                Reactivación de medida de bloqueo de portón
                            </p>
                            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-red-50 dark:bg-red-950/50 text-red-900 dark:text-red-100 px-4 py-2 text-sm">
                                <Lock className="w-4 h-4 text-va-senal dark:text-red-300" />
                                Aplica a propietarios con <strong>2+ meses vencidos</strong>
                            </p>
                        </div>

                        {/* Hoja de calendario */}
                        <div className="self-start flex-shrink-0 w-32 md:w-40 rounded-2xl overflow-hidden border border-va-linea dark:border-white/15 text-center shadow-[0_12px_30px_-18px_rgba(180,35,24,0.6)]">
                            <p className="bg-va-senal text-white text-sm font-bold py-1.5">Septiembre</p>
                            <p className="font-display font-extrabold text-6xl md:text-7xl leading-none py-3 text-slate-900 dark:text-white bg-white dark:bg-va-noche">1</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 pb-2 bg-white dark:bg-va-noche">Reactivación de la medida</p>
                        </div>
                    </div>

                    {/* Contexto */}
                    <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-10 border-t border-va-linea dark:border-white/10 pt-6">
                        <div>
                            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Decisión en asamblea</h3>
                            <p className="mt-1 text-slate-600 dark:text-slate-300 leading-relaxed">
                                Esta disposición fue aprobada en la <strong className="text-slate-900 dark:text-white">Asamblea Ordinaria de Propietarios del 4 de febrero de 2022</strong>.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Propósito de la medida</h3>
                            <p className="mt-1 text-slate-600 dark:text-slate-300 leading-relaxed">
                                Garantizar la cobranza oportuna y mantener la operatividad de los servicios del condominio.
                            </p>
                        </div>
                    </div>

                    {/* Documento de soporte */}
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl bg-va-bruma dark:bg-white/5 p-4 md:p-5">
                        <div className="flex gap-3">
                            <span className="grid place-items-center w-11 h-11 rounded-xl bg-white dark:bg-va-noche border border-va-linea dark:border-white/10 flex-shrink-0">
                                <FileText className="w-5 h-5 text-va-senal dark:text-red-300" />
                            </span>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Soporte documental</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Acta de la Asamblea del 04/02/2022</p>
                                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-[52ch]">
                                    Puede consultar la constancia formal de la decisión en el acta de la asamblea realizada el 4 de febrero de 2022.
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={handleDownloadActa}
                            className="flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-va-senal hover:bg-red-800 text-white text-sm font-bold px-5 py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-va-senal"
                        >
                            <Download className="w-4 h-4" />
                            Ver / Descargar Acta del 04/02/2022 (PDF)
                        </button>
                    </div>

                    {/* Nota final */}
                    <p className="mt-6 text-slate-700 dark:text-slate-300 leading-relaxed max-w-[70ch]">
                        <strong className="text-va-senal dark:text-red-300">A tener en cuenta:</strong> la medida se aplicará de manera automática a todos los propietarios que al <strong>1 de septiembre</strong> mantengan <strong>dos (2) o más meses de cuota vencida</strong>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default InfoBloqueoControl;
