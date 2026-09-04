"use client";

import { useState } from 'react';
import { 
    Wallet, 
    DollarSign, 
    CreditCard, 
    Phone, 
    Calendar, 
    CheckCircle, 
    Copy, 
    Users,
    Sparkles,
} from 'lucide-react';
import Image from 'next/image';

const InfoRecaudacionPozo = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyMonto = () => {
        navigator.clipboard.writeText("44.30");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleCopyIdBinance = () => {
        navigator.clipboard.writeText("1274726307");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Contactos
    const contactos = [
        { name: "Jan te Winkel", phone: "(0414) 563.19.06", wa_phone: "584145631906" },
        { name: "Wilmer Valerio", phone: "(0426) 586.64.14", wa_phone: "584265866414" },
        { name: "Freddy López", phone: "(0416) 696.05.28", wa_phone: "584166960528" }
    ];

    return (
        <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto py-8">
            
            {/* Card principal con borde */}
            <div className="relative border-2 border-blue-500/30 dark:border-blue-400/30 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 overflow-hidden">
                
                {/* Borde decorativo superior */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                
                {/* Contenido interno con padding */}
                <div className="p-6 md:p-8">
                    
                    {/* Banner Principal con Gradiente Llamativo - Dos columnas */}
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 p-6 md:p-8 text-white shadow-lg mb-6">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            {/* Texto - Columna Izquierda */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-yellow-200">
                                        Instructivo de Recaudación
                                    </span>
                                </div>
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
                                    PERFORACIÓN DEL TERCER POZO
                                </h1>
                                <p className="text-blue-100 mt-2 text-base md:text-lg font-medium">
                                    💧 Proyecto Agua Segura para Todos
                                </p>
                            </div>
                            
                            {/* Logo - Columna Derecha */}
                            <div className="flex-shrink-0">
                                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl border border-white/20 shadow-lg">
                                    <Image
                                        src={'/logo vista azul original.png'}
                                        alt='Logo'
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 md:w-24 md:h-24 object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Grid de Información Principal */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {/* Monto Exacto */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-5 md:p-6 text-white shadow-lg group hover:shadow-xl transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <DollarSign className="w-5 h-5" />
                                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-100">Monto Exacto</span>
                                </div>
                                <div className="flex items-end gap-3">
                                    <p className="text-3xl md:text-4xl font-extrabold">$44.30</p>
                                    <span className="text-emerald-200 text-sm mb-1">USD</span>
                                </div>
                                <button 
                                    onClick={handleCopyMonto}
                                    className="mt-2 inline-flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 rounded-lg px-3 py-1.5 transition-colors"
                                >
                                    {copied ? (
                                        <>
                                            <CheckCircle className="w-3.5 h-3.5" />
                                            ¡Copiado!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-3.5 h-3.5" />
                                            Copiar monto
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Plazo */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 to-red-600 p-5 md:p-6 text-white shadow-lg">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <Calendar className="w-5 h-5" />
                                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-100">Plazo de Recaudación</span>
                                </div>
                                <p className="text-3xl md:text-4xl font-extrabold">30 días</p>
                                <p className="text-orange-100 text-sm mt-1">Desde el inicio del proyecto</p>
                            </div>
                        </div>
                    </div>

                    {/* Métodos de Pago */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {/* Binance */}
                        <div className="rounded-xl bg-gradient-to-br from-[#F0B90B] to-[#C9940A] p-5 md:p-6 shadow-lg text-[#1A1A1A]">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-white/20 p-2 rounded-xl">
                                    <Wallet className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Binance</p>
                                    <p className="text-xs opacity-80">Pago con criptomonedas</p>
                                </div>
                            </div>
                            <div className="bg-white/20 rounded-lg p-3 space-y-1.5 text-sm">
                                <p className="font-mono font-bold text-lg">$44.30</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs opacity-80">ID:</span>
                                    <span className="font-mono font-bold">1274726307</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs opacity-80">Alias:</span>
                                    <span className="font-bold text-sm bg-[#1A1A1A]/10 px-2 py-0.5 rounded">
                                        Mega Pozo
                                    </span>
                                </div>
                                <button 
                                    onClick={handleCopyIdBinance}
                                    className="inline-flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 rounded-lg px-3 py-1 transition-colors mt-1"
                                >
                                    {copied ? (
                                        <>
                                            <CheckCircle className="w-3.5 h-3.5" />
                                            ¡Copiado!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-3.5 h-3.5" />
                                            Copiar ID
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Efectivo */}
                        <div className="rounded-xl bg-gradient-to-br from-green-600 to-emerald-700 p-5 md:p-6 text-white shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-white/20 p-2 rounded-xl">
                                    <CreditCard className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Efectivo</p>
                                    <p className="text-xs opacity-80">Pago en persona</p>
                                </div>
                            </div>
                            <div className="bg-white/20 rounded-lg p-3">
                                <p className="font-bold text-2xl">$45.00</p>
                                <p className="text-xs opacity-80 mt-1">Monto en efectivo</p>
                            </div>
                        </div>
                    </div>

                    {/* Personas a Cargo */}
                    <div className="rounded-xl bg-gradient-to-br from-indigo-600 to-blue-700 p-5 md:p-6 text-white shadow-lg mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Users className="w-6 h-6" />
                            <p className="font-bold text-lg">Responsables de Recaudación</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {contactos.map((person, index) => (
                                <a
                                    key={index}
                                    href={`https://wa.me/${person.wa_phone}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 rounded-lg p-3 text-center hover:bg-white/20 transition-colors group cursor-pointer"
                                >
                                    <p className="font-semibold">{person.name}</p>
                                    <div className="flex items-center justify-center gap-1.5 text-xs opacity-80 mt-1">
                                        <Phone className="w-3 h-3" />
                                        {person.phone}
                                    </div>
                                    <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] bg-green-500/30 hover:bg-green-500/50 px-3 py-0.5 rounded-full transition-colors">
                                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                        WhatsApp
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                            JUNTA DE CONDOMINIO
                        </p>
                        <div className="flex items-center justify-center gap-2 mt-1">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span className="w-8 h-0.5 bg-gradient-to-l from-blue-500 to-purple-500 rounded-full"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InfoRecaudacionPozo;