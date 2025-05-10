"use client";

import { useState } from "react";

const SuggestionsComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      const response = await fetch("https://formspree.io/f/xqaebrqn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setAlert({ type: "success", message: "Sugerencia enviada correctamente." });
        setIsOpen(false); // Cierra el buzón después de enviar
        setSubject("");
        setMessage("");
      } else {
        setAlert({ type: "error", message: "Hubo un error al enviar la sugerencia." });
      }
    } catch (error) {
      console.error("Error:", error);
      setAlert({ type: "error", message: "Hubo un error al enviar la sugerencia." });
    }
  };

  return (
    <div className="mt-8 hover:animate-background rounded-xl bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-xs hover:[animation-duration:_4s]">
      <div className="rounded-[10px] bg-white dark:bg-gray-800 dark:border-gray-600 p-4 sm:p-6">
        <div className="mx-4">
          <p className="text-justify">
            ¿Tienes alguna sugerencia para mejorar nuestro condominio? ¡Queremos escucharte! Haz clic en el botón de Buzón de Sugerencias y comparte tus ideas con nosotros. Tu opinión es importante.
          </p>
        </div>

        {/* Mostrar el mensaje de alerta FUERA del buzón */}
        {alert && (
          <div
            role="alert"
            className={`mt-4 rounded-xl border p-4 ${
              alert.type === "success"
                ? "border-green-100 bg-green-50 text-green-700"
                : "border-red-100 bg-red-50 text-red-700"
            }`}
          >
            <div className="flex items-start gap-4">
              <span>
                {alert.type === "success" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-green-600"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-red-600"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </span>

              <div className="flex-1">
                <strong className="block font-medium">{alert.type === "success" ? "Éxito" : "Error"}</strong>
                <p className="mt-1 text-sm">{alert.message}</p>
              </div>

              <button onClick={() => setAlert(null)} className="text-gray-500 transition hover:text-gray-600">
                <span className="sr-only">Cerrar</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <div className="mt-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-primary text-white px-6 py-2 rounded-3xl hover:bg-primary-dark transition-colors"
          >
            {isOpen ? "Cerrar buzón de sugerencias" : "Buzón de sugerencias"}
          </button>

          {isOpen && (
            <div className="mt-4 p-6 border border-gray-200 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600">
              <h2 className="text-xl font-semibold text-primary mb-4">Enviar sugerencia</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Nombre y/o TH</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Mensaje</label>
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
                  className="bg-primary text-white px-6 py-2 rounded-3xl hover:bg-primary-dark transition-colors"
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
