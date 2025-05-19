import Image from "next/image";

const PiscinaComponent = () => {

    return (
        <div>
            {/* Normativas de la Piscina */}
            <div className="mt-10 p-6 border border-blue-200 rounded-lg shadow-lg bg-blue-50 dark:bg-blue-950 dark:border-blue-600 relative block overflow-hidden hover:scale-105">
                <span
                    className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600"
                ></span>
                <div className="flex justify-center">
                    <Image src={'/logo vista azul original.png'} alt='logo' width={120} height={120} className="pt-2 " />
                </div>
                <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mb-4">NORMATIVAS DE LA PISCINA</h2>
                <div className="mb-8 p-4 rounded-lg">
                    <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
                        <li>1. ⏰ <strong>Horario para el uso de la piscina:</strong> de martes a domingo entre 9:00 AM y 7:00 PM.</li>
                        <li>2. 🧹 <strong>Día lunes:</strong> mantenimiento y limpieza de la piscina.</li>
                        <li>3. 🤝 <strong>Todos debemos respetar</strong> las normas de la moral y las buenas costumbres.</li>
                        <li>4. 💰 Para el uso de la piscina es obligatorio <strong>estar al día con el condominio.</strong></li>
                        <li>5. 👨‍👩‍👧‍👦 Solo se permiten <strong>cuatro (4) personas por Town House.</strong></li>
                        <li>6. 🚿 Antes de ingresar a la piscina <strong>debe ducharse.</strong></li>
                        <li>7. 👙 Ingresar a la piscina solo con la vestimenta adecuada, <strong>sin fibras que puedan dañar los filtros como jeans, metales u otros.</strong></li>
                        <li>8. 🗑️ Mantener <strong>limpias las instalaciones,</strong> utilice las papeleras.</li>
                        <li>9. 👶 <strong>Todo niño menor de trece (13) años</strong> debe estar obligatoriamente acompañado de su representante.</li>
                        <li>10. 🔇 El uso de equipos de sonido no podrá ser con exceso de volumen que perturbe la tranquilidad.</li>
                        <li>11. 🍔 Prohibido el consumo de alimentos o bebidas dentro y alrededor de la piscina. Por favor, utilice los caneyes.</li>
                        <li>12. ⚠️ Prohibidos juegos, clavados, carreras y prácticas peligrosas dentro y fuera de la piscina.</li>
                        <li>13. 🛟 No se permiten flotadores, colchonetas e inflables similares dentro de la piscina.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PiscinaComponent;