'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useUser, UserButton } from '@clerk/nextjs'
import { Menu, X } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'

export default function Header() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        console.log(pathname)
    }, [pathname])

    const { isSignedIn } = useUser()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='p-2 px-4 md:px-10 flex justify-between items-center shadow-md fixed top-0 w-full z-50 bg-background'>
            <div className='flex gap-4 md:gap-12 items-center'>
                <Image src={'/casa.svg'} alt='logo' width={120} height={120} />

                <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-background md:bg-transparent p-4 md:p-0 gap-4 transition-all duration-300 ease-in-out`}>
                    <Link href={'/'} onClick={toggleMenu}>
                        <li className={`hover:text-primary font-medium text-sm cursor-pointer ${pathname === '/' ? 'text-primary' : ''}`}>
                        Inicio
                        </li>
                    </Link>
                    <Link href={'/contacto'} onClick={toggleMenu}>
                        <li className={`hover:text-primary font-medium text-sm cursor-pointer ${pathname === '/contacto' ? 'text-primary' : ''}`}>
                        Contacto
                        </li>
                    </Link>
                    {isSignedIn && (
                        <Link href={'/dashboard'} onClick={toggleMenu}>
                            <li className={`hover:text-primary font-medium text-sm cursor-pointer ${pathname === '/dashboard' ? 'text-primary' : ''}`}>
                            Perfil
                            </li>
                        </Link>
                    )}
                </ul>
            </div>
            <div className='flex gap-4 items-center'>
                {isSignedIn ?
                    <UserButton /> :
                    <Link href={'/auth/sign-in'}>
                        <Button>
                            Login
                        </Button>
                    </Link>
                }
                <ModeToggle />
                <Button className='md:hidden' onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </div>
        </div>
    )
}
