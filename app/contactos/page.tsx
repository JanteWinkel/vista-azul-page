"use client";

import Footer from "@/components/footer";

interface ContactItem {
  category: string;
  contacts: {
    name: string;
    role?: string;
    phone?: string | string[]; // Modificar para permitir arreglo de teléfonos
    email?: string | string[]; // Modificar para permitir arreglo de correos
    notes?: string;
  }[]; 
}

const contactData: ContactItem[] = [
  {
    category: "Junta de Condominio",
    contacts: [
      { name: "Condominio Terrazas de Vista Azul", email: "terrazasvistaazul@gmail.com", notes: "Horario de atención: Lunes a Viernes, 9:00 AM - 3:00 PM", },
      { name: "Jan te Winkel", phone: "(0414) 563.19.06" },
      { name: "Edwin Pérez", phone: "(0424) 189.97.98" },
      { name: "Wilmer Valerio", phone: "(0426) 586.64.14" },
    ],
  },
  {
    category: "Administración",
    contacts: [
      {
        name: "Gd Servicios Integrales C.a",
        phone: ["(0414) 393.68.33", "(0412) 357.94.99", "(0412) 390.09.42"], // Usar arreglo para múltiples teléfonos
        email: ["recibotva@gmail.com",],
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
      { name: "CORPOELEC", 
        notes: "Emergencias.", 
        phone: ["(0295) 260.16.66", "(0295) 260.16.22", "(0295) 260.16.23", "(0295) 260.16.25", "(0295) 260.15.23",] }, // Usar arreglo
    ],
  },
  {
    category: "Agua",
    contacts: [
      { name: "HIDROCARIBE", 
        notes: "Atención general" , 
        phone: ["(0295) 263.61.98", "(0295) 263.41.64", "(0295) 263.62.63"]},
    ],
  },
];

const ContactComponent = () => {
  return (
    <div>
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto pt-8 mt-8">
        <h1 className="text-3xl text-primary font-extrabold uppercase text-center ">Contactos</h1>
        <p className="mt-4">Aquí encontrarás los contactos clave del condominio: Junta, administración, garita y servicios públicos esenciales. Por favor, respeta los horarios y canales establecidos.</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {contactData.map((group, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600"
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
                            <p key={i}>Teléfono: {phone}</p>
                          ))
                        ) : (
                          <p>Teléfono: {contact.phone}</p>
                        )}
                      </div>
                    )}
                    {contact.email && (
                      <div className="text-gray-600 dark:text-gray-400">
                        {Array.isArray(contact.email) ? (
                          contact.email.map((email, i) => (
                            <p key={i}>Correo: {email}</p>
                          ))
                        ) : (
                          <p>Correo: {contact.email}</p>
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
        <hr className="my-8 border-t border-gray-300 w-full" />
      </div>
      <Footer />
    </div>
  );
};

export default ContactComponent;
