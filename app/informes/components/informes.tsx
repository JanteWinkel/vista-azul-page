import Link from 'next/link';
import { FileText, ExternalLink } from 'lucide-react';
import { SectionHeader, btnPrimary, sectionWrap } from '@/components/va-ui';

const documentos = [
    {
        titulo: "Informe de gestión asamblea ordinaria",
        fecha: "31-05-2025",
        href: "https://drive.google.com/file/d/1--O4q5bcFIIQgFSADQBvwSBRLr5ok13e/view?usp=drivesdk",
    },
    {
        titulo: "Informe de resultado de la asamblea ordinaria de propietarios",
        fecha: "31-05-2025",
        href: "https://drive.google.com/file/d/1-CU53MpUuHVQE8Q37hoDfuSpJv63WMuQ/view?usp=drivesdk",
    },
];

const InformesAsamblea = () => {
    return (
        <section className={sectionWrap}>
            <SectionHeader title="Documentos oficiales de la Asamblea Ordinaria" />

            <ul className="mt-6 rounded-[28px] border border-va-linea dark:border-white/10 bg-white dark:bg-va-marea divide-y divide-va-linea dark:divide-white/10">
                {documentos.map((doc) => (
                    <li key={doc.href} className="p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex gap-4">
                            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-va-bruma dark:bg-white/5 flex-shrink-0">
                                <FileText className="w-5 h-5 text-va-azul dark:text-sky-300" />
                            </span>
                            <div>
                                <h3 className="font-display font-bold text-lg leading-snug text-slate-900 dark:text-white">{doc.titulo}</h3>
                                <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400 tabular-nums">Fecha: {doc.fecha}</p>
                            </div>
                        </div>
                        <Link href={doc.href} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} flex-shrink-0 self-start sm:self-auto`}>
                            <ExternalLink className="w-4 h-4" />
                            Ver documento
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Nota adicional */}
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                Documentos oficiales aprobados en la Asamblea Ordinaria de Propietarios.
            </p>
        </section>
    );
};

export default InformesAsamblea;
