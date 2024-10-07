'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useUser, UserButton } from '@clerk/nextjs'

export default function Header() {
    const pathname = usePathname()
    useEffect(() => {
        console.log(pathname)
    }, [pathname])

    const { isSignedIn } = useUser()

    return (
        <div className='p-2 px-10 flex justify-between items-center shadow-md fixed top-0 w-full z-50 bg-background'>
            <div className='flex gap-12 items-center '>
                <Image src={'/casa.svg'} alt='logo' width={120} height={120} />

                <ul className='hidden md:flex gap-4'>
                    <Link href={'/'}>
                        <li className={`hover:text-primary font-medium text-sm cursor-pointer ${pathname === '/' ? 'text-primary' : ''}`}>
                        Inicio
                        </li>
                    </Link>
                    <Link href={'/dashboard'}>
                        <li className={`hover:text-primary font-medium text-sm cursor-pointer ${pathname === '/dashboard' ? 'text-primary' : ''}`}>
                        Dashboard
                        </li>
                    </Link>
                    <Link href={'/contacto'}>
                        <li className={`hover:text-primary font-medium text-sm cursor-pointer ${pathname === '/contacto' ? 'text-primary' : ''}`}>
                        Contacto
                        </li>
                    </Link>
                </ul>
            </div>
            <div className='flex gap-4 items-center'>
                <Button className='bg-primary flex gap-2'><PlusIcon className='h-4 w-4 mr-2' />new add</Button>

                {isSignedIn ?
                    <UserButton /> :
                    <Link href={'/auth/sign-in'}>
                        <Button>
                            Login
                        </Button>
                    </Link>
                }
            </div>
        </div>
    )
}

