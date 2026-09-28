"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { PawPrint } from "lucide-react";
import { SectionHeader, carouselArrow, sectionWrap } from "@/components/va-ui";

const JornadaMascotas = () => {
  const actividades = [
    {
      id: 1,
      titulo: "Jornada de atención",
      descripcion: "Se aplicó desparasitación, vitaminas, corte de uñas y limpieza de oídos, junto con un censo de mascotas.",
      fecha: "14 de Junio del 2025",
      fotos: [
        "/mascotas/jornada_mascotas_1.jpg",
        "/mascotas/jornada_mascotas_2.jpg",
        "/mascotas/jornada_mascotas_3.jpg",
        "/mascotas/jornada_mascotas_4.jpg",
        "/mascotas/jornada_mascotas_5.jpg",
      ],
      estadisticas: {
        perros: 40,
        gatos: 23,
        total: 63
      }
    },
  ];

  const resultados = [
    { valor: "63", label: "Mascotas registradas" },
    { valor: "20-30", label: "Comunitarios" },
    { valor: "44", label: "Dueños participantes" },
    { valor: "9", label: "Mascotas que solicitaron esterilización" },
  ];

  return (
    <section className={sectionWrap}>
      <SectionHeader
        icon={PawPrint}
        title="Jornada de atención para mascotas por Misión Nevado"
        description="Resumen de las actividades realizadas para el bienestar de nuestras mascotas"
      />

      {actividades.map((actividad) => (
        <article key={actividad.id} className="mt-6 rounded-[28px] border border-va-linea dark:border-white/10 bg-white dark:bg-va-marea overflow-hidden">
          {/* Carrusel de fotos */}
          <Carousel>
            <CarouselContent>
              {actividad.fotos.map((foto, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-72 md:h-[28rem] w-full">
                    <Image
                      src={foto}
                      alt={`${actividad.titulo} - Foto ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 1024px, 100vw"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={`left-3 ${carouselArrow}`} />
            <CarouselNext className={`right-3 ${carouselArrow}`} />
          </Carousel>

          <div className="p-6 md:p-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">{actividad.titulo}</h3>
                <span className="rounded-full bg-va-bruma dark:bg-white/5 text-va-azul dark:text-sky-300 text-sm font-bold px-3 py-1">
                  {actividad.fecha}
                </span>
              </div>
              <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed max-w-[60ch]">{actividad.descripcion}</p>
            </div>

            {/* Estadísticas */}
            <dl className="flex gap-6">
              {Object.entries(actividad.estadisticas).map(([key, value]) => (
                <div key={key} className="flex flex-col-reverse">
                  <dt className="mt-1 text-sm text-slate-500 dark:text-slate-400 capitalize">{key}</dt>
                  <dd className="font-display font-extrabold text-4xl tabular-nums text-va-azul dark:text-sky-300 leading-none">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      ))}

      {/* Resumen general */}
      <div className="mt-4 rounded-[28px] bg-va-abismo text-white p-6 md:p-8">
        <h3 className="font-display font-bold text-xl">Resultados del Censo</h3>
        <dl className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
          {resultados.map((r) => (
            <div key={r.label} className="border-t border-white/15 pt-3 flex flex-col-reverse justify-end">
              <dt className="mt-2 text-sm text-sky-100 leading-snug">{r.label}</dt>
              <dd className="font-display font-extrabold text-4xl md:text-5xl tabular-nums text-va-girasol leading-none">{r.valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default JornadaMascotas;
