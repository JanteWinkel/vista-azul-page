import { useState, useEffect } from "react";
import { Sun, Cloud, CloudRain, CloudDrizzle, CloudLightning, Snowflake, CloudFog, CloudSun, Thermometer, Droplets, Gauge } from "lucide-react";

interface ClimaData {
    name: string;
    weather: { description: string; main: string }[];
    main: { temp: number; feels_like: number; humidity: number; pressure: number };
    timezone: number;
    dt: number;
}

const ClimaWidget: React.FC = () => {
    const [clima, setClima] = useState<ClimaData | null>(null);
    const [errorMensaje, setErrorMensaje] = useState<string | null>(null);
    const ciudad = "Porlamar"; // Cambia por la ciudad deseada
    const apiKey = "130f7187c1ec8b125589274b16ab8298"; // Reemplaza con tu API Key válida

    useEffect(() => {
        const obtenerClima = async () => {
            try {
                const respuesta = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}`
                );
                if (!respuesta.ok) {
                    throw new Error("No se pudo obtener el clima.");
                }
                const datos: ClimaData = await respuesta.json();
                setClima(datos);
            } catch {
                setErrorMensaje("Error de conexión o clave API inválida.");
            }
        };

        obtenerClima();
    }, []);

    // Icono según el clima
    const IconoClima = ({ main, className }: { main: string; className?: string }) => {
        switch (main) {
            case "Clear":
                return <Sun className={className} />;
            case "Clouds":
                return <Cloud className={className} />;
            case "Rain":
                return <CloudRain className={className} />;
            case "Drizzle":
                return <CloudDrizzle className={className} />;
            case "Thunderstorm":
                return <CloudLightning className={className} />;
            case "Snow":
                return <Snowflake className={className} />;
            case "Mist":
            case "Smoke":
            case "Haze":
            case "Fog":
                return <CloudFog className={className} />;
            default:
                return <CloudSun className={className} />;
        }
    };

    return (
        <section className="rounded-3xl bg-va-azul text-white p-6 md:p-7 font-legible">
            <h2 className="text-sm text-sky-200">Estado del Clima</h2>

            {errorMensaje ? (
                <p className="mt-3 text-red-100">{errorMensaje}</p>
            ) : clima ? (
                <>
                    <div className="mt-1 flex items-start justify-between gap-4">
                        <div>
                            <h3 className="font-display font-bold text-2xl">{clima.name}</h3>
                            <p className="first-letter:uppercase text-sky-100">{clima.weather[0].description}</p>
                        </div>
                        <IconoClima main={clima.weather[0].main} className="w-12 h-12 text-va-girasol flex-shrink-0" />
                    </div>
                    <p className="mt-4 font-display font-extrabold text-6xl tracking-tight tabular-nums leading-none">
                        {clima.main.temp}°C
                    </p>

                    {/* Información adicional: Sensación térmica, Humedad y Presión */}
                    <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-white/20 pt-4 text-sm">
                        <div>
                            <dt className="flex items-center gap-1 text-sky-200"><Thermometer className="w-3.5 h-3.5" />Sensación térmica</dt>
                            <dd className="mt-0.5 font-bold text-base tabular-nums">{clima.main.feels_like}°C</dd>
                        </div>
                        <div>
                            <dt className="flex items-center gap-1 text-sky-200"><Droplets className="w-3.5 h-3.5" />Humedad</dt>
                            <dd className="mt-0.5 font-bold text-base tabular-nums">{clima.main.humidity}%</dd>
                        </div>
                        <div>
                            <dt className="flex items-center gap-1 text-sky-200"><Gauge className="w-3.5 h-3.5" />Presión</dt>
                            <dd className="mt-0.5 font-bold text-base tabular-nums">{clima.main.pressure} hPa</dd>
                        </div>
                    </dl>
                </>
            ) : (
                <p className="mt-3 text-sky-100">Cargando clima...</p>
            )}
        </section>
    );
};

export default ClimaWidget;
