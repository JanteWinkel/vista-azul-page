"use client";

import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
    Building2,
    Phone,
    Clock,
    Info,
} from "lucide-react";
import { SectionHeader } from "@/components/va-ui";

interface ContactItem {
    category: string;
    horario?: string;
    contacts: {
        name: string;
        role?: string;
        phone?: string | string[];
        wa_phone?: string | string[];
        email?: string | string[];
        notes?: string;
    }[];
}

const contactData: ContactItem[] = [
    {
        category: "Administración: Gd Servicios Integrales C.a",
        horario: "Horario de atención: Lunes a Viernes, 8:00 am - 12:00 pm | 1:00 pm - 4:00 pm",
        contacts: [
            {
                name: "Contacto 1",
                phone: ["(0414) 791.29.39",],
                wa_phone: ["+584147912939",],
                email: ["recibotva@gmail.com",]
            },
            {
                name: "Contacto 2",
                phone: ["(0412) 357.94.99",],
                wa_phone: ["+584123579499",],
            },
            {
                name: "Contacto 3",
                phone: ["(0412) 390.09.42",],
                wa_phone: ["+584123900942",],
            },
        ],
    },
]

const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
const waHref = (wa: string) => `https://wa.me/${wa.replace(/\D/g, "")}`;
const toArray = (value?: string | string[]) => (value ? (Array.isArray(value) ? value : [value]) : []);

const Contact = () => {
    const grupo = contactData[0];

    return (
        <section className="mt-16">
            <SectionHeader
                kicker="Contactos Oficiales"
                title="Contactos para reportar pagos"
            />
            <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed max-w-[65ch]">
                Aquí encontrarás los contactos de la administración encargados de recibir los reportes de pago.
                Por favor, utiliza los canales y horarios establecidos para garantizar una gestión eficiente.
            </p>

            <div className="mt-6 rounded-[28px] border border-va-linea dark:border-white/10 bg-white dark:bg-va-marea p-6 md:p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <h3 className="flex items-center gap-2 font-display font-bold text-xl text-slate-900 dark:text-white">
                        <Building2 className="w-5 h-5 text-va-azul dark:text-sky-300" />
                        {grupo.category}
                    </h3>
                    {grupo.horario && (
                        <p className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 md:max-w-[34ch] md:text-right">
                            <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 md:order-last" />
                            {grupo.horario}
                        </p>
                    )}
                </div>

                <ul className="mt-5 divide-y divide-va-linea dark:divide-white/10 border-t border-va-linea dark:border-white/10">
                    {grupo.contacts.map((contact, idx) => {
                        const phones = toArray(contact.phone);
                        const was = toArray(contact.wa_phone);
                        const emails = toArray(contact.email);
                        return (
                            <li key={idx} className="py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
                                <p className="sm:w-28 flex-shrink-0 font-bold text-slate-900 dark:text-white">{contact.name}</p>
                                <div className="flex flex-wrap items-center gap-2">
                                    {phones.map((phone, i) => (
                                        <span key={i} className="inline-flex items-center gap-2">
                                            <a
                                                href={telHref(phone)}
                                                className="inline-flex items-center gap-1.5 rounded-full bg-va-bruma dark:bg-white/5 px-3 py-1.5 text-sm font-bold tabular-nums text-va-azul dark:text-sky-300 hover:bg-va-linea dark:hover:bg-white/10 transition-colors"
                                            >
                                                <Phone className="w-3.5 h-3.5" />
                                                {phone}
                                            </a>
                                            {was[i] && (
                                                <a
                                                    href={waHref(was[i])}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`WhatsApp ${contact.name}`}
                                                    className="grid place-items-center w-8 h-8 rounded-full bg-[#25D366] text-white hover:brightness-95"
                                                >
                                                    <FaWhatsapp className="text-base" />
                                                </a>
                                            )}
                                        </span>
                                    ))}
                                    {emails.map((email, i) => (
                                        <a
                                            key={i}
                                            href={`mailto:${email}`}
                                            className="inline-flex items-center gap-1.5 rounded-full bg-va-bruma dark:bg-white/5 px-3 py-1.5 text-sm font-bold text-va-azul dark:text-sky-300 hover:bg-va-linea dark:hover:bg-white/10 transition-colors"
                                        >
                                            <MdEmail className="text-base flex-shrink-0" />
                                            {email}
                                        </a>
                                    ))}
                                </div>
                                {contact.notes && (
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{contact.notes}</p>
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* Nota informativa */}
                <p className="mt-4 flex items-start gap-2 rounded-2xl bg-va-bruma dark:bg-white/5 p-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <Info className="w-4 h-4 flex-shrink-0 mt-1 text-va-azul dark:text-sky-300" />
                    <span>
                        <strong className="text-slate-900 dark:text-white">Importante:</strong> al reportar su pago, recuerde indicar su <strong>NOMBRE</strong> y <strong>TH (Town House)</strong> para
                        facilitar la identificación y registro de su pago.
                    </span>
                </p>
            </div>
        </section>
    );
}

export default Contact;
