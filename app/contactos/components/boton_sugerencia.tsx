"use client";

import { useState } from "react";

const SuggestionsComponent = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del formulario
  const [subject, setSubject] = useState(""); // Estado para el asunto del correo
  const [message, setMessage] = useState(""); // Estado para el mensaje del correo

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Crear un FormData para enviar los datos
    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      // Enviar los datos a Formspree
      const response = await fetch("https://formspree.io/f/xqaebrqn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Sugerencia enviada correctamente.");
        setIsOpen(false); // Cierra el formulario después de enviar
        setSubject(""); // Limpiar el campo de asunto
        setMessage(""); // Limpiar el campo de mensaje
      } else {
        alert("Hubo un error al enviar la sugerencia.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al enviar la sugerencia.");
    }
  };

  return (
    <div className="mt-8 hover:animate-background rounded-xl bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-xs hover:[animation-duration:_4s]">
      <div className="rounded-[10px] bg-white  dark:bg-gray-800 dark:border-gray-600 p-4  sm:p-6">
        <div className="mx-4">
          <p className=" text-justify">¿Tienes alguna sugerencia para mejorar nuestro condominio? ¡Queremos escucharte! Haz clic en el botón de Buzón de Sugerencias y comparte tus ideas con nosotros. Tu opinión es importante.</p>
        </div>

        <div className="mt-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
          >
            {isOpen ? "Cerrar buzón de sugerencias" : "Buzón de sugerencias"}
          </button>

          {isOpen && (
            <div className="mt-4 p-6 border border-gray-200 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600">
              <h2 className="text-xl font-semibold text-primary mb-4">
                Enviar sugerencia
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Asunto
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Mensaje
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600"
                    rows={4}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Enviar
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuggestionsComponent;