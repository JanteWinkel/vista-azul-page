"use client";

import Footer from "@/components/footer";

interface ContactItem {
  category: string;
  contacts: {
    name: string;
    role?: string;
    phone?: string;
    email?: string;
    notes?: string;
  }[];
}

const contactData: ContactItem[] = [
  {
    category: "Junta de Condominio",
    contacts: [
      { name: "Condominio Terrazas de Vista Azul", email: "condominioterrazasdevistazul@gmail.com", notes: "Horario de atención: Lunes a Viernes, 9:00 AM - 3:00 PM", },
      { name: "Jan te Winkel", phone: "+58 414-563-1906" },
      { name: "Edwin Pérez", phone: "+58 412-987-6543" },
      { name: "Wilmer Valerio", phone: "+58 414-321-7654" },
    ],
  },
  {
    category: "Administración",
    contacts: [
      {
        name: "Oficina Administrativa",
        phone: "+58 416-654-3210",
        email: "admin@condominio.com",
        notes: "Horario de atención: Lunes a Viernes, 9:00 AM - 4:00 PM",
      },
    ],
  },
  {
    category: "Garita de Seguridad",
    contacts: [
      {
        name: "Oficial de Guardia",
        phone: "+58 412-337-5766",
        notes: "Disponible 24/7 para emergencias.",
      },
    ],
  },
  {
    category: "Servicios Públicos",
    contacts: [
      { name: "Policía Local", phone: "911", notes: "Emergencias generales." },
      { name: "Bomberos", phone: "171", notes: "Emergencias de incendio o rescate." },
      { name: "Electricidad (CORPOELEC)", phone: "+58 800-100-2627" },
      { name: "Agua (HIDROVEN)", phone: "+58 800-443-7683" },
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
                    {contact.phone && <p className="text-gray-600 dark:text-gray-400">Teléfono: {contact.phone}</p>}
                    {contact.email && <p className="text-gray-600 dark:text-gray-400">Correo: {contact.email}</p>}
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
