import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {

    return (
        <section className="bg-background min-h-screen flex items-center justify-center">
            <div className="w-full max-w-5xl mx-auto lg:grid lg:grid-cols-12 gap-8">
                <section className="hidden lg:flex items-center justify-center bg-background lg:col-span-5 xl:col-span-6">
                    <Image
                        alt="Logo de Vista Azul"
                        src='/casa.svg'
                        width={400}
                        height={400}
                        className="object-contain"
                    />
                </section>

                <main className="flex flex-col items-center justify-center px-4 py-8 lg:col-span-7 xl:col-span-6">
                    <div className="w-full max-w-md">
                        {/* Se ha eliminado la imagen según las instrucciones */}

                        <SignIn />
                    </div>
                </main>
            </div>
        </section>
    )
}