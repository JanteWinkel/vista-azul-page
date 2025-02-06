'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 pb-2">
            <div className="w-full max-w-screen-xl mx-auto px-4  sm:py-4">
                    <div className="flex justify-center">
                        <Image src={'/logo vista azul original.png'} alt='logo' width={120} height={120} className="pt-2"/>
                    </div>
                <span className="block text-center text-sm text-gray-500 dark:text-gray-400">
                    &copy; 2025 <Link href={"#"} className="hover:underline">Condominio Terrazas de Vista Azul</Link>.
                    <br />
                    Todos los derechos reservados.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
