// Piezas de diseño compartidas por todas las páginas (paleta va-*, ver tailwind.config.ts).
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

/** Banner de cabecera de cada sección: foto con velo azul y título grande abajo a la izquierda. */
export const PageHero = ({ title, image, position = "center" }: { title: string; image: string; position?: string }) => (
    <section className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto pt-6">
        <div className="relative overflow-hidden rounded-[28px] h-52 sm:h-64 md:h-80 bg-va-abismo">
            <Image
                src={image}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
                style={{ objectPosition: position }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-va-abismo/90 via-va-abismo/30 to-transparent"></div>
            <h1 className="absolute bottom-0 left-0 p-6 md:p-10 font-display font-extrabold text-white text-5xl md:text-7xl tracking-tight leading-[0.9] [font-stretch:88%]">
                {title}
            </h1>
        </div>
    </section>
);

/** Párrafo introductorio bajo el banner. */
export const PageIntro = ({ children }: { children: ReactNode }) => (
    <p className="mt-6 text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300 max-w-[62ch]">
        {children}
    </p>
);

/** Encabezado de sección: antetítulo opcional, título y descripción a la derecha en escritorio. */
export const SectionHeader = ({
    kicker,
    title,
    description,
    icon: Icon,
}: {
    kicker?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    icon?: LucideIcon;
}) => (
    <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-8">
        <div>
            {kicker && (
                <p className="flex items-center gap-2 text-sm text-va-azul dark:text-sky-300">
                    {Icon && <Icon className="w-4 h-4" />}
                    {kicker}
                </p>
            )}
            <h2 className="mt-2 font-display font-extrabold tracking-tight leading-[0.95] text-3xl md:text-5xl text-slate-900 dark:text-white [font-stretch:88%]">
                {title}
            </h2>
        </div>
        {description && (
            <p className="text-slate-600 dark:text-slate-300 md:text-right max-w-[40ch]">{description}</p>
        )}
    </div>
);

/** Clases de botón reutilizables. */
export const btnPrimary =
    "inline-flex items-center justify-center gap-2 rounded-full bg-va-azul hover:bg-va-abismo dark:bg-sky-300 dark:hover:bg-sky-200 dark:text-va-noche text-white font-bold px-5 py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-va-azul";

export const btnOutline =
    "inline-flex items-center justify-center gap-2 rounded-full border-2 border-va-azul dark:border-sky-300 text-va-azul dark:text-sky-300 font-bold px-5 py-2.5 hover:bg-va-azul hover:text-white dark:hover:bg-sky-300 dark:hover:text-va-noche transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-va-azul";

/** Contenedor estándar de cada sección de página. */
export const sectionWrap = "max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto py-10";

/** Flechas de carrusel con la paleta del sitio. */
export const carouselArrow =
    "bg-white/95 hover:bg-white text-va-azul border-va-linea dark:bg-va-noche/90 dark:hover:bg-va-noche dark:text-sky-300 dark:border-white/15";
