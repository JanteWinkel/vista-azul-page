import { useState, useEffect } from "react";

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

    // Función para obtener el emoji según el clima
    const obtenerEmojiClima = (main: string) => {
        switch (main) {
            case "Clear":
                return "☀️"; // Soleado
            case "Clouds":
                return "☁️"; // Nublado
            case "Rain":
                return "🌧️"; // Lluvia
            case "Drizzle":
                return "🌦️"; // Llovizna
            case "Thunderstorm":
                return "⛈️"; // Tormenta
            case "Snow":
                return "❄️"; // Nieve
            case "Mist":
            case "Smoke":
            case "Haze":
            case "Fog":
                return "🌫️"; // Neblina
            default:
                return "🌍"; // Desconocido
        }
    };

   
    

    return (
        <section className="mx-auto max-w-sm my-4 borde dark:bg-gray-800 dark:border-gray-600 relative overflow-hidden block mt-5 hover:animate-background rounded-xl bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 p-0.5  transition hover:bg-[length:400%_400%] hover:shadow-xs hover:[animation-duration:_4s] text-center ">
            <div className="rounded-[10px] bg-white dark:bg-gray-800 dark:border-gray-600 p-2 sm:p-4">
                <h2 className="text-2xl font-bold text-primary mb-4 ">🌤️ Estado del Clima</h2>

                {errorMensaje ? (
                    <p className=" text-red-600 text-lg">{errorMensaje}</p>
                ) : clima ? (
                    <div className="">
                        <div className="">
                            <div>
                                <h3 className="text-2xl font-semibold  mb-2">{clima.name}</h3>
                            </div>
                            <div className="">
                                <p className="text-4xl">{obtenerEmojiClima(clima.weather[0].main)}</p>
                                <p className="text-lg  text-gray-600 dark:text-gray-400 uppercase">{clima.weather[0].description}</p>
                                <p className="text-3xl font-bold text-gray-800 dark:text-gray-200 mt-2">{clima.main.temp}°C</p>
                            </div>
                        </div>

                        {/* Información adicional: Sensación térmica, Humedad y Presión */}
                        <div className="mt-4 grid ">
                            <p className="text-sm text-gray-600 dark:text-gray-400">🌡️ Sensación térmica: {clima.main.feels_like}°C</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">💧 Humedad: {clima.main.humidity}%</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">🌬️ Presión: {clima.main.pressure} hPa</p>
                        </div>

                    </div>
                ) : (
                    <p className="mt-4 text-gray-500 text-lg">Cargando clima...</p>
                )}
            </div>

        </section >

    );
};

export default ClimaWidget;
