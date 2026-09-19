"use client";

import { ShieldAlert, KeyRound, Lock } from "lucide-react";

const AnuncioReutilizable = () => {
    return (
        <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto pt-6">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-600 to-red-800 p-5 md:p-6 text-white shadow-lg border-2 border-red-400 hover:shadow-xl transition-all duration-300">
                {/* Decoración de fondo */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-400/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>

                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4">
                    {/* Icono */}
                    <div className="bg-white/20 p-3 rounded-full flex-shrink-0">
                        <ShieldAlert className="w-7 h-7 text-yellow-300" />
                    </div>

                    {/* Contenido */}
                    <div className="flex-1">
                        {/* Título */}
                        <div className="flex items-center gap-2 mb-2">
                            <KeyRound className="w-4 h-4 text-yellow-300" />
                            <p className="text-sm font-extrabold uppercase tracking-wider text-yellow-300">
                                Aviso Importante
                            </p>
                        </div>

                        <p className="text-sm font-bold text-white mb-3">
                            ESTIMADOS VECINOS PROPIETARIOS,
                        </p>

                        <p className="text-xs md:text-sm text-red-100 leading-relaxed mb-4">
                            LES RECORDAMOS REALIZAR EL CAMBIO DE SU CLAVE DE ACCESO EN LA PLATAFORMA SIFAC. ESTA ACCIÓN ES FUNDAMENTAL PARA GARANTIZAR LA PROTECCIÓN Y SEGURIDAD DE LOS DATOS PERSONALES QUE SE MANEJAN EN EL SISTEMA.
                        </p>

                        {/* Bloque de seguridad */}
                        <div className="flex items-start gap-2 bg-white/10 rounded-lg p-3 border border-white/20 mb-3">
                            <Lock className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-0.5" />
                            <p className="text-xs md:text-sm text-white leading-relaxed">
                                <span className="font-extrabold text-yellow-300">¡SU SEGURIDAD ES PRIORIDAD!</span>{" "}
                                TOMEN UNOS MINUTOS PARA ACTUALIZAR SUS CREDENCIALES.
                            </p>
                        </div>

                        <p className="text-xs md:text-sm font-bold text-yellow-300 text-right">
                            MUCHAS GRACIAS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnuncioReutilizable;