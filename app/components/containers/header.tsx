'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'
import { menuItems } from '@/lib/nav'

export default function Header() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className='fixed top-0 w-full z-50 h-20 bg-white/90 dark:bg-va-noche/90 backdrop-blur-md border-b border-va-linea dark:border-white/10'>
            <div className='max-w-5xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex justify-between items-center'>

                {/* Logo */}
                <Link href="/" className="flex-shrink-0 rounded-xl dark:bg-white dark:px-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-va-azul">
                    <Image
                        src={'/logo vista azul original.png'}
                        alt='Terrazas de Vista Azul'
                        width={100}
                        height={100}
                        className="w-16 h-12 md:w-20 md:h-14 object-contain"
                        priority
                    />
                </Link>

                {/* Navegación Desktop */}
                <nav className="hidden md:flex items-center gap-1">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={isActive ? 'page' : undefined}
                                className={`px-4 py-2 rounded-full text-[0.95rem] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-va-azul ${isActive
                                    ? 'bg-va-azul text-white dark:bg-sky-300 dark:text-va-noche'
                                    : 'text-slate-700 dark:text-slate-300 hover:bg-va-bruma dark:hover:bg-white/10'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                {/* Botones de acción */}
                <div className='flex gap-2 items-center'>
                    <ModeToggle />
                    <button
                        type="button"
                        className='md:hidden grid place-items-center w-10 h-10 rounded-full hover:bg-va-bruma dark:hover:bg-white/10 transition-colors'
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Menú Móvil */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white dark:bg-va-noche border-b border-va-linea dark:border-white/10 shadow-[0_20px_40px_-24px_rgba(15,52,80,0.5)] p-4 md:hidden">
                    <nav className="flex flex-col gap-1">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={toggleMenu}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`block px-4 py-3 rounded-2xl font-display text-xl font-bold transition-colors ${isActive
                                        ? 'bg-va-azul text-white dark:bg-sky-300 dark:text-va-noche'
                                        : 'text-slate-800 dark:text-slate-200 hover:bg-va-bruma dark:hover:bg-white/10'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            )}
        </header>
    )
}
