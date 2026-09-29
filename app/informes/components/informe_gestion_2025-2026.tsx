import Link from 'next/link';
import { FileText, ClipboardList, Download, Info } from 'lucide-react';
import { SectionHeader, btnPrimary, sectionWrap } from '@/components/va-ui';

const documentos = [
    {
        titulo: "Informe de gestión",
        descripcion: "Informe de gestión de la Asamblea del período 2025-2026.",
        fecha: "25-07-2026",
        icono: ClipboardList,
        href: "https://drive.google.com/file/d/1w9eAnD1Ft4cvxPHt840mxP7YsOzwKNtN/view?usp=drive_link",
    },
    {
        titulo: "Informe de resultados",
        descripcion: "Informe de resultados correspondiente a la Asamblea.",
        fecha: "25-07-2026",
        icono: FileText,
        href: "https://drive.google.com/file/d/1pPt9aqfu7k8aUC0m_lKcoqnsSkTbmPZd/view?usp=drive_link",
    },
];

const InformeGestion2526 = () => {
    return (
        <section className={`${sectionWrap} font-legible`}>
            <SectionHeader
                kicker="Asamblea del 25-07-2026"
                title="Informe de gestión 2025-2026"
                description="Documentos enviados por correo a los propietarios."
            />

            <div className="mt-6 grid gap-4 md:grid-cols-2">
                {documentos.map((doc) => (
                    <article
                        key={doc.href}
                        className="rounded-[28px] border border-va-linea dark:border-white/10 bg-white dark:bg-va-marea p-6 flex flex-col gap-5"
                    >
                        <div className="flex gap-4">
                            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-va-bruma dark:bg-white/5 flex-shrink-0">
                                <doc.icono className="w-5 h-5 text-va-azul dark:text-sky-300" />
                            </span>
                            <div>
                                <h3 className="font-display font-bold text-xl leading-snug text-slate-900 dark:text-white">{doc.titulo}</h3>
                                <p className="mt-1 text-slate-600 dark:text-slate-400">{doc.descripcion}</p>
                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 tabular-nums">Fecha: {doc.fecha}</p>
                            </div>
                        </div>
                        <Link href={doc.href} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-auto self-start`}>
                            <Download className="w-4 h-4" />
                            Abrir documento
                        </Link>
                    </article>
                ))}
            </div>

            <div className="mt-4 rounded-2xl border-l-4 border-va-sol bg-va-bruma dark:bg-white/5 p-5 flex gap-3">
                <Info className="w-5 h-5 mt-0.5 flex-shrink-0 text-va-sol" />
                <div className="text-slate-700 dark:text-slate-300 space-y-2">
                    <p>
                        <span className="font-bold">Cómo descargar:</span> al hacer clic, espere un momento. Si el documento no se muestra, vuelva a acceder al enlace y espere la descarga del archivo PDF.
                    </p>
                    <p>
                        Ofrecemos disculpas por el retraso en el envío del informe: hubo problemas con el almacenamiento del correo de la administración, que se solventaron ayer.
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Junta de condominio y Administración</p>
                </div>
            </div>
        </section>
    );
};

export default InformeGestion2526;
