"use client";

import { KeyRound, Lock } from "lucide-react";

const AnuncioReutilizable = () => {
    return (
        <section className="mt-8 relative overflow-hidden rounded-[28px] bg-white dark:bg-va-marea border border-va-linea dark:border-white/10">
            <div className="absolute inset-y-0 left-0 w-2 bg-va-sol" aria-hidden="true"></div>
            <div className="p-6 pl-8 md:p-8 md:pl-10">
                <p className="flex items-center gap-2 text-sm font-bold text-va-sol">
                    <KeyRound className="w-4 h-4" />
                    Aviso importante
                </p>
                <p className="mt-2 font-display font-bold text-2xl text-slate-900 dark:text-white">
                    Estimados vecinos propietarios,
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed max-w-[65ch]">
                    Les recordamos realizar el cambio de su clave de acceso en la plataforma SIFAC. Esta acción es fundamental para garantizar la protección y seguridad de los datos personales que se manejan en el sistema.
                </p>
                <p className="mt-4 flex items-start gap-2 rounded-2xl bg-orange-50 dark:bg-orange-950/40 text-orange-950 dark:text-orange-100 p-4">
                    <Lock className="w-4 h-4 flex-shrink-0 mt-1 text-va-sol" />
                    <span>
                        <strong>¡Su seguridad es prioridad!</strong> Tomen unos minutos para actualizar sus credenciales.
                    </span>
                </p>
                <p className="mt-4 text-right font-bold text-slate-600 dark:text-slate-400">Muchas gracias</p>
            </div>
        </section>
    );
};

export default AnuncioReutilizable;
