"use client";

import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
    Building2,
    Phone,
    Clock,
    Sparkles,
    Info,
} from "lucide-react";

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

const Contact = () => {
    return (
        <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto py-8">

            {/* Card principal */}
            <div className="relative border-2 border-blue-500/30 dark:border-blue-400/30 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 overflow-hidden">

                {/* Borde decorativo superior azul */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>

                {/* Contenido interno */}
                <div className="p-6 md:p-8">

                    {/* Encabezado */}
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 p-6 md:p-8 text-white shadow-lg mb-6">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-3">
                                <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-wider text-yellow-200">
                                    Contactos Oficiales
                                </span>
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
                                Contactos para Reportar Pagos
                            </h1>
                            <p className="text-blue-100 mt-3 text-sm md:text-base leading-relaxed max-w-3xl">
                                Aquí encontrarás los contactos de la administración encargados de recibir los reportes de pago.
                                Por favor, utiliza los canales y horarios establecidos para garantizar una gestión eficiente.
                            </p>
                        </div>
                    </div>

                    {/* Lista de contactos - Una sola card */}
                    <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-600 p-5 md:p-6">
                        {/* Título de categoría */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-500 rounded-full p-2">
                                <Building2 className="w-4 h-4 text-white" />
                            </div>
                            <h2 className="text-lg md:text-xl font-bold text-blue-800 dark:text-blue-300">
                                {contactData[0].category}
                            </h2>
                        </div>

                        {/* Horario de atención general */}
                        {contactData[0].horario && (
                            <div className="flex items-center gap-2 bg-white/70 dark:bg-gray-800/70 rounded-lg p-3 mb-4 border border-blue-200 dark:border-blue-700">
                                <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                                <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                    {contactData[0].horario}
                                </p>
                            </div>
                        )}

                        {/* Separador */}
                        <div className="border-t-2 border-blue-200 dark:border-blue-700 mb-4"></div>

                        {/* Contactos */}
                        <div className="space-y-3">
                            {contactData[0].contacts.map((contact, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-4 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                                        {/* Nombre */}
                                        <div className="sm:w-32 flex-shrink-0">
                                            <p className="font-bold text-sm text-gray-800 dark:text-gray-200">
                                                {contact.name}
                                            </p>
                                        </div>

                                        {/* Información */}
                                        <div className="flex-1 space-y-2">
                                            {/* Teléfonos */}
                                            {contact.phone && (
                                                <div className="flex flex-wrap items-center gap-2">
                                                    {Array.isArray(contact.phone) ? (
                                                        contact.phone.map((phone, i) => (
                                                            <div key={i} className="flex items-center gap-2">
                                                                <div className="flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg px-2 py-1">
                                                                    <Phone className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                                                                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                                                        {phone}
                                                                    </span>
                                                                </div>
                                                                {contact.wa_phone && contact.wa_phone[i] && (
                                                                    <a
                                                                        href={`https://wa.me/${contact.wa_phone[i]}`}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="flex-shrink-0"
                                                                        aria-label={`WhatsApp ${contact.name}`}
                                                                    >
                                                                        <FaWhatsapp className="text-lg text-green-500 hover:text-green-600 transition-colors" />
                                                                    </a>
                                                                )}
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg px-2 py-1">
                                                                <Phone className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                                                                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                                                    {contact.phone}
                                                                </span>
                                                            </div>
                                                            {contact.wa_phone && (
                                                                <a
                                                                    href={`https://wa.me/${contact.wa_phone}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="flex-shrink-0"
                                                                    aria-label={`WhatsApp ${contact.name}`}
                                                                >
                                                                    <FaWhatsapp className="text-lg text-green-500 hover:text-green-600 transition-colors" />
                                                                </a>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {/* Correos */}
                                            {contact.email && (
                                                <div className="flex flex-wrap items-center gap-2">
                                                    {Array.isArray(contact.email) ? (
                                                        contact.email.map((email, i) => (
                                                            <a
                                                                key={i}
                                                                href={`mailto:${email}`}
                                                                className="flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg px-2 py-1 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                                                            >
                                                                <MdEmail className="text-sm flex-shrink-0" />
                                                                <span className="text-xs font-medium">{email}</span>
                                                            </a>
                                                        ))
                                                    ) : (
                                                        <a
                                                            href={`mailto:${contact.email}`}
                                                            className="flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg px-2 py-1 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                                                        >
                                                            <MdEmail className="text-sm flex-shrink-0" />
                                                            <span className="text-xs font-medium">{contact.email}</span>
                                                        </a>
                                                    )}
                                                </div>
                                            )}

                                            {/* Notas individuales (si las hay) */}
                                            {contact.notes && (
                                                <div className="flex items-start gap-1.5">
                                                    <Clock className="w-3 h-3 text-blue-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-[11px] text-gray-600 dark:text-gray-400 italic">
                                                        {contact.notes}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nota informativa */}
                    <div className="rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-600 p-4 mt-6">
                        <div className="flex items-start gap-3">
                            <div className="bg-blue-500 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                                <Info className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <p className="font-bold text-blue-800 dark:text-blue-300 text-sm">
                                    📌 Importante
                                </p>
                                <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed mt-1">
                                    Al reportar su pago, recuerde indicar su <span className="font-bold">NOMBRE</span> y <span className="font-bold">TH (Town House)</span> para
                                    facilitar la identificación y registro de su pago.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Contact;