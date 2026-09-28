"use client";

import { useState } from "react";
import { CheckCircle2, MessageSquare, Send, X, XCircle } from "lucide-react";
import { btnPrimary } from "@/components/va-ui";

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

  const inputClass =
    "mt-1 block w-full rounded-xl border border-va-linea dark:border-white/15 bg-white dark:bg-va-noche px-3.5 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-va-azul dark:focus:ring-sky-300";

  return (
    <section className="mt-6 rounded-[28px] bg-va-abismo text-white p-6 md:p-10">
      <div className="md:flex md:items-end md:justify-between md:gap-10">
        <p className="text-lg leading-relaxed text-sky-100 max-w-[58ch]">
          ¿Tienes alguna sugerencia para mejorar nuestro condominio? ¡Queremos escucharte! Haz clic en el botón de Buzón de Sugerencias y comparte tus ideas con nosotros. Tu opinión es importante.
        </p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="mt-5 md:mt-0 flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-va-girasol hover:bg-yellow-300 text-va-abismo font-bold px-6 py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-va-girasol"
        >
          <MessageSquare className="w-5 h-5" />
          {isOpen ? "Cerrar buzón de sugerencias" : "Buzón de sugerencias"}
        </button>
      </div>

      {/* Mostrar el mensaje de alerta FUERA del buzón */}
      {alert && (
        <div
          role="alert"
          className={`mt-6 rounded-2xl p-4 ${alert.type === "success"
            ? "bg-emerald-50 text-emerald-900"
            : "bg-red-50 text-red-900"
            }`}
        >
          <div className="flex items-start gap-3">
            {alert.type === "success" ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
            ) : (
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            )}

            <div className="flex-1">
              <strong className="block font-bold">{alert.type === "success" ? "Éxito" : "Error"}</strong>
              <p className="mt-1 text-sm">{alert.message}</p>
            </div>

            <button onClick={() => setAlert(null)} className="text-slate-500 transition hover:text-slate-700">
              <span className="sr-only">Cerrar</span>
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="mt-6 rounded-[22px] bg-white dark:bg-va-marea text-slate-800 dark:text-slate-100 p-5 md:p-8">
          <h2 className="font-display font-bold text-2xl">Enviar sugerencia</h2>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label htmlFor="sugerencia-nombre" className="block text-sm font-bold text-slate-700 dark:text-slate-200">Nombre y/o TH</label>
              <input
                id="sugerencia-nombre"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={inputClass}
                required
              />
            </div>
            <div>
              <label htmlFor="sugerencia-mensaje" className="block text-sm font-bold text-slate-700 dark:text-slate-200">Mensaje</label>
              <textarea
                id="sugerencia-mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={inputClass}
                rows={4}
                required
              />
            </div>
            <button type="submit" className={btnPrimary}>
              <Send className="w-4 h-4" />
              Enviar
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default SuggestionsComponent;
