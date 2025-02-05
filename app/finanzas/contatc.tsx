"use client";

import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
        category: "Administración: Gd Servicios Integrales C.a",
        contacts: [
            {
                name: "Contacto 1",
                phone: ["(0414) 393.68.33",],
                wa_phone: ["+584143936833",],
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
                notes: "Horario de atención: Lunes a Viernes, 9:00 AM - 4:00 PM",
            },
        ],
    },
]

const Contact = () => {
    return (

        <div className="mt-8 border border-gray-200 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600 relative block overflow-hidden">
            <span
                className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600"
            ></span>
            <div className="p-6  border-gray-200 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600">
                <h1 className="text-2xl font-semibold text-primary mb-4">CONTACTOS PARA REPORTAR PAGOS</h1>
                <p className="mt-4">Aquí encontrarás los contactos de la administración encargados de recibir los reportes de pago. Por favor, utiliza los canales y horarios establecidos para garantizar una gestión eficiente.</p>
                <div className=" gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4">
                    {contactData.map((group, index) => (
                        <div
                            key={index}
                            className=""
                        >
                            <h2 className="text-xl font-semibold text-primary mb-4">{group.category}</h2>
                            <ul className="space-y-4">
                                {group.contacts.map((contact, idx) => (
                                    <li key={idx} className="text-sm">
                                        <p className="font-medium text-gray-800 dark:text-gray-200">{contact.name}</p>
                                        {contact.phone && (
                                            <div className="text-gray-600 dark:text-gray-400">
                                                {Array.isArray(contact.phone) ? (
                                                    contact.phone.map((phone, i) => (
                                                        <div key={i} className="flex items-center">
                                                            <p>Teléfono: {phone}</p>
                                                            {contact.wa_phone && (
                                                                <a
                                                                    href={`https://wa.me/${contact.wa_phone}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="ml-4"
                                                                >
                                                                    <FaWhatsapp className="text-2xl text-green-500 hover:text-green-600" />
                                                                </a>
                                                            )}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="flex items-center">
                                                        <p>Teléfono: {contact.phone}</p>
                                                        {contact.wa_phone && (
                                                            <a
                                                                href={`https://wa.me/${contact.wa_phone}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="ml-4"
                                                            >
                                                                <FaWhatsapp className="text-2xl text-green-500 hover:text-green-600" />
                                                            </a>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        {contact.email && (
                                            <div className="text-gray-600 dark:text-gray-400 flex items-center space-x-2">
                                                <p>Correo:</p>
                                                {Array.isArray(contact.email) ? (
                                                    contact.email.map((email, i) => (
                                                        <a
                                                            key={i}
                                                            href={`mailto:${email}`}
                                                            className="flex items-center text-blue-600 hover:text-blue-800 transition"
                                                        >
                                                            <MdEmail className="text-xl mr-1" />
                                                            <p>{email}</p>
                                                        </a>
                                                    ))
                                                ) : (
                                                    <a
                                                        href={`mailto:${contact.email}`}
                                                        className="flex items-center text-blue-600 hover:text-blue-800 transition"
                                                    >
                                                        <MdEmail className="text-xl mr-1" />
                                                        <p>{contact.email}</p>
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                        <br />
                                        {contact.notes && <p className="text-gray-600 dark:text-gray-400">{contact.notes}</p>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Contact;
