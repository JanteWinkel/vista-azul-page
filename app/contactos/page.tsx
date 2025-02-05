"use client";

import Footer from "@/components/footer";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SuggestionsComponent from "./components/boton_sugerencia";
import BannerContactos from "./components/banner_contactos";

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
      { name: "Edwin Pérez", phone: "(0424) 189.97.98", wa_phone: "+584241899798" },
      { name: "Wilmer Valerio", phone: "(0426) 586.64.14", wa_phone: "+584265866414" },
    ],
  },
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
  {
    category: "Garita de Seguridad",
    contacts: [
      {
        name: "Oficial de Guardia",
        phone: "(0412) 337.57.66",
        notes: "Disponible 24/7 para emergencias.",
      },
    ],
  },
  {
    category: "Seguridad y Emergencias",
    contacts: [
      { name: "Policía Local", phone: ["171", "(0295) 242.29.13"], notes: "Emergencias generales." },
      { name: "Bomberos", phone: ["171 (Ambulancia)", "(0295) 264.14.15"], notes: "Emergencias de incendio o rescate." },
      { name: "Cruz Roja", phone: "(0416) 899.04.11", notes: "Villa Rosa." },
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

const ContactComponent = () => {
  return (
    <div>
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto pt-8 mt-8">
        <BannerContactos />
        
        <p className="mt-4">Aquí encontrarás los contactos clave del condominio: Junta, administración, garita y servicios públicos esenciales. Por favor, respeta los horarios y canales establecidos.</p>
          
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-6 ">
          {contactData.map((group, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600 relative block overflow-hidden"
            >
              <span
                      className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600"
                    ></span>
              <h2 className="text-xl font-semibold text-primary mb-4">{group.category}</h2>
              <ul className="space-y-4 ">
              
                {group.contacts.map((contact, idx) => (
                  <li key={idx} className="text-sm ">
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

                    {contact.notes && <p className="text-gray-600 dark:text-gray-400">{contact.notes}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="justify-center items-center ">
            <SuggestionsComponent />
          </div>
        <hr className="my-8 border-t border-gray-300 w-full" />
      </div>
      <Footer />
    </div>
  );
};

export default ContactComponent;
