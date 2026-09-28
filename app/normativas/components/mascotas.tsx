"use client";

import {
    PawPrint,
    AlertTriangle,
} from 'lucide-react';
import { SectionHeader } from '@/components/va-ui';

const articulos = [
    {
        numero: "Artículo 16",
        texto: "Las mascotas pueden estar en lugares de uso común siempre y cuando se encuentren acompañados por sus dueños, estén sujetos con collar y vacunados contra la rabia y otras enfermedades. Los animales de carácter agresivo (mayores de 25 kilos) deben portar bozal.",
    },
    {
        numero: "Artículo 17",
        texto: "El dueño responderá por las defecaciones de su mascota, por lo cual estará obligado a recoger sus desechos, colocarlos en bolsas plásticas y botarlos.",
    },
    {
        numero: "Artículo 18",
        texto: "Aquellas personas que saquen sus mascotas a pasear, responderán ante la comunidad por los daños que estos puedan ocasionar a la grama, los jardines o cualquiera de las instalaciones del conjunto, y estarán obligados a reparar los daños y cubrir los gastos que ocasione su negligencia.",
    },
];

const MascotasComponent = () => {

    return (
        <section className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto py-10">
            <SectionHeader
                icon={PawPrint}
                kicker="Normativas del Condominio"
                title="Normativas para mascotas"
                description="Conoce las reglas para la convivencia con tus mascotas"
            />

            {/* Nota importante */}
            <p className="mt-8 flex items-start gap-3 rounded-[22px] bg-orange-50 dark:bg-orange-950/40 border-l-[6px] border-va-sol p-5 text-orange-950 dark:text-orange-100 leading-relaxed">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-va-sol" />
                <span>
                    <strong>Importante:</strong> prohibida la tenencia de animales de gran porte y/o feroces dentro del conjunto. Solo se permiten mascotas domésticas: perros, gatos o pájaros.
                </span>
            </p>

            {/* Artículos del reglamento */}
            <div className="mt-4 rounded-[28px] border border-va-linea dark:border-white/10 bg-white dark:bg-va-marea divide-y divide-va-linea dark:divide-white/10">
                {articulos.map((a) => (
                    <div key={a.numero} className="p-6 md:p-8 grid gap-2 md:grid-cols-[9rem_1fr] md:gap-8">
                        <p className="font-display font-bold text-lg text-va-azul dark:text-sky-300">{a.numero}</p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed max-w-[70ch]">{a.texto}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MascotasComponent;
