import Link from 'next/link';
import { PawPrint, ExternalLink } from 'lucide-react';
import { sectionWrap } from './va-ui';

const CensoMascotas = () => {
    return (
        <section className={sectionWrap}>
            <div className="rounded-[28px] bg-va-girasol text-va-abismo p-6 md:p-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                    <PawPrint className="w-8 h-8" />
                    <h3 className="mt-3 font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight max-w-[20ch] [font-stretch:88%]">
                        ¡Registra a tu mascota en el censo del conjunto!
                    </h3>
                    <p className="mt-3 text-lg max-w-[55ch]">
                        Ayúdanos a mantener un registro actualizado de todas las mascotas en nuestra comunidad.
                    </p>
                    <p className="mt-4 font-bold">
                        ¡Gracias por colaborar con el censo de mascotas de TVA! 🐕❤🐈
                    </p>
                </div>

                <div className="md:text-right">
                    <Link
                        href="https://forms.gle/8Jv2MeyXZvsj9QzG9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-va-abismo hover:bg-va-noche text-white font-bold text-lg px-6 py-3.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-va-abismo"
                    >
                        Registrar mi mascota
                        <ExternalLink className="w-4 h-4" />
                    </Link>
                    {/* Nota adicional */}
                    <p className="mt-3 text-sm">
                        El formulario toma menos de 2 minutos en completarse.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CensoMascotas;
