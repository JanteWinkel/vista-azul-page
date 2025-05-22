'use client'

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'

export default function Header() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        console.log(pathname)
    }, [pathname])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const router = useRouter()

    return (
        <div className='p-2 px-4 md:px-10 flex justify-between items-center shadow-lg fixed top-0 w-full z-50 bg-background'>
            <div className='flex gap-4 md:gap-12 items-center'>
                <div onClick={() => router.push("/")}>
                    <Image src={'/logo vista azul original.png'} alt='logo' width={120} height={120} />
                </div>
                <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full right-2 md:w-auto bg-gray-100 dark:bg-gray-950 rounded-xl md:bg-transparent p-4 md:p-0 gap-4 transition-all duration-300 ease-in-out`}>
                    <Link href={'/'} onClick={toggleMenu}>
                        <li className={`hover:text-primary font-medium text-sm cursor-pointer ${pathname === '/' ? 'text-primary' : ''}`}>
                            Inicio
                        </li>
                    </Link>
                    <Link href={'/contactos'} onClick={toggleMenu}>
                        <li className={`hover:text-primary font-medium text-sm cursor-pointer ${pathname === '/contactos' ? 'text-primary' : ''}`}>
                            Contactos
                        </li>
                    </Link>
                    <Link href={'/horarios'} onClick={toggleMenu}>
                        <li className={`hover:text-primary font-medium text-sm cursor-pointer ${pathname === '/horarios' ? 'text-primary' : ''}`}>
                            Horarios
                        </li>
                    </Link>
                    <Link href={'/calendario'} onClick={toggleMenu}>
                        <li className={`hover:text-primary font-medium text-sm cursor-pointer ${pathname === '/calendario' ? 'text-primary' : ''}`}>
                            Calendario
                        </li>
                    </Link>
                    <Link href={'/normativas'} onClick={toggleMenu}>
                        <li className={`hover:text-primary font-medium text-sm cursor-pointer ${pathname === '/normativas' ? 'text-primary' : ''}`}>
                            Normativas
                        </li>
                    </Link>
                    {/* <Link href={'/informes'} onClick={toggleMenu}>
                        <li className={`hover:text-primary font-medium text-sm cursor-pointer ${pathname === '/informes' ? 'text-primary' : ''}`}>
                            Informes
                        </li>
                    </Link> */}
                    <Link href={'/finanzas'} onClick={toggleMenu}>
                        <li className={`hover:text-primary font-medium text-sm cursor-pointer ${pathname === '/finanzas' ? 'text-primary' : ''}`}>
                            Finanzas
                        </li>
                    </Link>
                </ul>
            </div>
            <div className='flex gap-4 items-center'>

                <ModeToggle />
                <Button className='md:hidden' onClick={toggleMenu} >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </div>
        </div>
    )
}
