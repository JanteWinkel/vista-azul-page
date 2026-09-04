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

    const menuItems = [
        { href: '/', label: 'Inicio' },
        { href: '/contactos', label: 'Contactos' },
        { href: '/horarios', label: 'Horarios' },
        { href: '/calendario', label: 'Calendario' },
        { href: '/normativas', label: 'Normativas' },
        { href: '/finanzas', label: 'Finanzas' },
    ]

    return (
        <header className='p-2 px-4 md:px-8 flex justify-between items-center shadow-md fixed top-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700'>
            
            {/* Logo */}
            <div 
                onClick={() => router.push("/")} 
                className="cursor-pointer flex-shrink-0"
            >
                <Image 
                    src={'/logo vista azul original.png'} 
                    alt='logo' 
                    width={100} 
                    height={100} 
                    className="w-16 h-16 md:w-20 md:h-20 object-contain" 
                />
            </div>
            
            {/* Navegación Desktop */}
            <nav className="hidden md:flex items-center gap-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link 
                            key={item.href} 
                            href={item.href}
                        >
                            <span className={`
                                px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer
                                ${isActive 
                                    ? 'bg-blue-600 text-white' 
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                }
                            `}>
                                {item.label}
                            </span>
                        </Link>
                    )
                })}
            </nav>
            
            {/* Botones de acción */}
            <div className='flex gap-3 items-center'>
                <ModeToggle />
                <Button 
                    variant="ghost"
                    size="icon"
                    className='md:hidden'
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </div>

            {/* Menú Móvil */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg p-4 md:hidden">
                    <nav className="flex flex-col gap-2">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link 
                                    key={item.href} 
                                    href={item.href}
                                    onClick={toggleMenu}
                                >
                                    <span className={`
                                        block px-4 py-3 rounded-lg text-sm font-medium transition-colors
                                        ${isActive 
                                            ? 'bg-blue-600 text-white' 
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }
                                    `}>
                                        {item.label}
                                    </span>
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            )}
        </header>
    )
}