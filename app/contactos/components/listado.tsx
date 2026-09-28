"use client";

import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Phone } from "lucide-react";

interface ContactItem {
    category: string;
    contacts: {
        name: string;
        role?: string;
        phone?: string | string[]; // Modificar para permitir arreglo de teléfonos
        wa_phone?: string | string[];
        email?: string | string[]; // Modificar para permitir arreglo de correos
        notes?: string;
    }[];
}

const contactData: ContactItem[] = [
    {
        category: "Junta de Condominio",
        contacts: [
            { name: "Condominio Terrazas de Vista Azul", email: "terrazasvistaazul@gmail.com", notes: "Horario de atención: Lunes a Viernes, 9:00 AM - 3:00 PM", },
            { name: "Jan te Winkel", phone: "(0414) 563.19.06", wa_phone: "+584145631906" },
            { name: "Wilmer Valerio", phone: "(0426) 586.64.14", wa_phone: "+584265866414" },
            { name: "Freddy López", phone: "(0416) 696.05.28", wa_phone: "+584166960528" },
        ],
    },
    {
        category: "Administración: Gd Servicios Integrales C.a",
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
                notes: "Horario de atención: Lunes a Viernes,  8:00 am - 12:00 pm | 1:00 pm - 4:00 pm",
            },
        ],
    },
    {
        category: "Seguridad y Mantenimiento",
        contacts: [
            {
                name: "Garita",
                phone: "(0412) 337.57.66",
                notes: "Disponible 24/7 para emergencias.",
            },
            {
                name: "Jesús Ramírez: Supervisor General de Seguridad",
                phone: "(0412) 877.46.87",
                wa_phone: ["+584248774687",],
                notes: "Horario de atención: Lunes a Viernes, 9:00 AM - 3:00 PM",
            },
            {
                name: "Luis Núñez: Supervisor General de Mantenimiento",
                phone: "(0414) 132.76.90",
                wa_phone: ["+584141327690",],
                notes: "Horario de atención: Lunes a Viernes, 9:00 AM - 3:00 PM",
            },
        ],
    },
    {
        category: "Seguridad y Emergencias",
        contacts: [
            { name: "Policía Local", phone: ["171", "(0295) 242.29.13"], notes: "Emergencias generales." },
            { name: "Bomberos", phone: ["171 (Ambulancia)", "(0295) 264.14.15"], notes: "Emergencias de incendio o rescate." },
            { name: "Cruz Roja", phone: "(0416) 899.04.11", notes: "Villa Rosa." },
            { name: "Protección Civil", phone: ["(0295) 263.80.52", "(0295) 772.18.19"], notes: "Atención a emergencias y desastres naturales." },

        ],
    },
    {
        category: "Electricidad",
        contacts: [
            {
                name: "CORPOELEC",
                notes: "Emergencias.",
                phone: ["(0295) 260.16.66", "(0295) 260.16.22", "(0295) 260.16.23", "(0295) 260.16.25", "(0295) 260.15.23",]
            }, // Usar arreglo
        ],
    },
    {
        category: "Agua",
        contacts: [
            {
                name: "HIDROCARIBE",
                notes: "Atención general",
                phone: ["(0295) 263.61.98", "(0295) 263.41.64", "(0295) 263.62.63"]
            },
        ],
    },
];


const toArray = (value?: string | string[]) => (value ? (Array.isArray(value) ? value : [value]) : []);
const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
const waHref = (wa: string) => `https://wa.me/${wa.replace(/\D/g, "")}`;

const Listado = () => {
    return (
        <div className="mt-10 md:columns-2 gap-4">
            {contactData.map((group, index) => (
                <section
                    key={index}
                    className="break-inside-avoid mb-4 rounded-[28px] border border-va-linea dark:border-white/10 bg-white dark:bg-va-marea p-6"
                >
                    <h2 className="font-display font-bold text-2xl leading-tight text-slate-900 dark:text-white">{group.category}</h2>
                    <ul className="mt-3 divide-y divide-va-linea dark:divide-white/10">
                        {group.contacts.map((contact, idx) => {
                            const phones = toArray(contact.phone);
                            const wa = toArray(contact.wa_phone)[0];
                            const emails = toArray(contact.email);
                            return (
                                <li key={idx} className="py-4 first:pt-2 last:pb-0">
                                    <div className="flex items-start justify-between gap-3">
                                        <p className="font-bold text-slate-900 dark:text-white">{contact.name}</p>
                                        {wa && (
                                            <a
                                                href={waHref(wa)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`WhatsApp de ${contact.name}`}
                                                className="grid place-items-center w-9 h-9 rounded-full bg-[#25D366] text-white flex-shrink-0 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                                            >
                                                <FaWhatsapp className="text-lg" />
                                            </a>
                                        )}
                                    </div>

                                    {phones.length > 0 && (
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            <span className="sr-only">Teléfono:</span>
                                            {phones.map((phone, i) => (
                                                <a
                                                    key={i}
                                                    href={telHref(phone)}
                                                    className="inline-flex items-center gap-1.5 rounded-full bg-va-bruma dark:bg-white/5 px-3 py-1.5 text-sm font-bold tabular-nums text-va-azul dark:text-sky-300 hover:bg-va-linea dark:hover:bg-white/10 transition-colors"
                                                >
                                                    <Phone className="w-3.5 h-3.5" />
                                                    {phone}
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                    {emails.length > 0 && (
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            <span className="sr-only">Correo:</span>
                                            {emails.map((email, i) => (
                                                <a
                                                    key={i}
                                                    href={`mailto:${email}`}
                                                    className="inline-flex items-center gap-1.5 text-sm font-bold text-va-azul dark:text-sky-300 hover:underline break-all"
                                                >
                                                    <MdEmail className="text-base flex-shrink-0" />
                                                    {email}
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                    {contact.notes && <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{contact.notes}</p>}
                                </li>
                            );
                        })}
                    </ul>
                </section>
            ))}
        </div>
    );
};

export default Listado;
