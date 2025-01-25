'use client'
import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className="bg-gray-100 dark:bg-gray-800 mt-2">
            <div className="w-full max-w-screen-xl mx-auto px-4 py-6 sm:py-8">
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
