'use client'
import Link from "next/link";
import { Separator } from "./ui/separator";

const dataFooter = [
    {
        id: 3,
        name: "Inicio",
        link: "#"
    }
];

const Footer = () => {
    return ( 
        <footer className="bg-gray-100 dark:bg-gray-800 mt-2">
            <div className="w-full max-w-screen-xl mx-auto px-4 py-6 sm:py-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <p className="text-center sm:text-left text-gray-700 dark:text-gray-300">
                        <span className="font-bold block sm:inline">
                            Condominio Terrazas de Vista Azul 
                        </span>
                    </p>
                    <ul className="flex justify-center sm:justify-end flex-wrap mt-4 sm:mt-0 text-sm font-medium text-gray-500 dark:text-gray-400">
                        {dataFooter.map((data) => (
                            <li key={data.id} className="me-4 md:me-6">
                                <Link href={data.link} className="hover:underline">
                                    {data.name}
                                </Link>
                            </li>
                        ))}     
                    </ul>
                </div>
                <Separator className="my-6 border-gray-200 dark:border-gray-700 lg:my-8"/>
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
