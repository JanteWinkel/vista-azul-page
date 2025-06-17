"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

  return (
    <section className="max-w-6xl px-4 py-12 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl text-primary font-extrabold  uppercase text-center">
          🐾 Jornada de Atención para Mascotas por Misión Nevado
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Resumen de las actividades realizadas para el bienestar de nuestras mascotas
        </p>
      </div>

      <div className="grid gap-8  ">
        {actividades.map((actividad) => (
          <Card key={actividad.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {actividad.titulo}
                <Badge variant="secondary" className="ml-auto">
                  {actividad.fecha}
                </Badge>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
             {/* Carrusel de fotos */}
<div className="mb-6 rounded-lg overflow-hidden">
  <Carousel>
    <CarouselContent>
      {actividad.fotos.map((foto, index) => (
        <CarouselItem key={index}>
          <div className="relative h-96 w-full"> {/* Cambiado de h-48 a h-96 */}
            <Image
              src={foto}
              alt={`${actividad.titulo} - Foto ${index + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0} // Prioriza la primera imagen
            />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="left-2" />
    <CarouselNext className="right-2" />
  </Carousel>
</div>

              <p className="mb-4">{actividad.descripcion}</p>

              {/* Estadísticas */}
              <div className="flex flex-wrap gap-2 mt-4">
                {actividad.estadisticas && Object.entries(actividad.estadisticas).map(([key, value]) => (
                  <Badge key={key} variant="outline" className="flex items-center gap-1">
                    <span className="font-semibold">{value}</span>
                    <span className="text-muted-foreground text-xs">
                      {key.toUpperCase()}
                    </span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Resumen general */}
      <Card className="mt-8 bg-primary/10 border-primary/20">
  <CardContent className="p-4 md:p-6">
    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
      📊 Resultados del Censo
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
      <div className="bg-background p-2 md:p-4 rounded-lg text-center">
        <p className="text-xl md:text-2xl font-bold text-primary">63</p>
        <p className="text-xs md:text-sm text-muted-foreground leading-tight">
          Mascotas registradas
        </p>
      </div>
      <div className="bg-background p-2 md:p-4 rounded-lg text-center">
        <p className="text-xl md:text-2xl font-bold text-primary">20-30</p>
        <p className="text-xs md:text-sm text-muted-foreground leading-tight">
          Comunitarios
        </p>
      </div>
      <div className="bg-background p-2 md:p-4 rounded-lg text-center">
        <p className="text-xl md:text-2xl font-bold text-primary">44</p>
        <p className="text-xs md:text-sm text-muted-foreground leading-tight">
          Dueños participantes
        </p>
      </div>
      <div className="bg-background p-2 md:p-4 rounded-lg text-center">
        <p className="text-xl md:text-2xl font-bold text-primary">9</p>
        <p className="text-xs md:text-sm text-muted-foreground leading-tight">
          Mascotas que solicitaron esterilización
        </p>
      </div>
    </div>
  </CardContent>
</Card>
    </section>
  );
};

export default JornadaMascotas;