'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Girasol from "./girasol";
import { menuItems } from "@/lib/nav";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden mt-16 bg-va-abismo text-white font-legible">
            <div className="h-1.5 bg-gradient-to-r from-va-girasol to-va-sol" aria-hidden="true"></div>
            <Girasol animado={false} className="absolute w-64 h-64 -right-24 -bottom-28 md:w-80 md:h-80 md:-right-24 md:-bottom-36 opacity-90" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
                <Link href="/" className="justify-self-start rounded-2xl bg-white px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-va-girasol">
                    <Image src={'/logo vista azul original.png'} alt='Terrazas de Vista Azul' width={120} height={120} className="w-28 h-auto" />
                </Link>
                <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end md:pr-40">
                    {menuItems.map((item) => (
                        <Link key={item.href} href={item.href} className="font-bold text-sky-100 hover:text-va-girasol transition-colors">
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="relative border-t border-white/10">
                <p className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5 pr-40 text-sm text-sky-200">
                    &copy; 2025 <Link href={"#"} className="hover:underline">Condominio Terrazas de Vista Azul</Link>.
                    {" "}Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
