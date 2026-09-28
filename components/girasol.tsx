// Girasol del logo de Vista Azul, dibujado en SVG para usarlo como elemento gráfico.
const PETALOS = 16;

const Girasol = ({ className = "", animado = true }: { className?: string; animado?: boolean }) => (
    <svg viewBox="-100 -100 200 200" aria-hidden="true" className={className}>
        <g className={animado ? "motion-safe:animate-[spin_90s_linear_infinite] [transform-box:fill-box] origin-center" : undefined}>
            {Array.from({ length: PETALOS }).map((_, i) => (
                <ellipse
                    key={`a${i}`}
                    cx="0"
                    cy="-62"
                    rx="14"
                    ry="34"
                    fill="#F5B301"
                    transform={`rotate(${(360 / PETALOS) * i + 360 / PETALOS / 2})`}
                />
            ))}
            {Array.from({ length: PETALOS }).map((_, i) => (
                <ellipse
                    key={`b${i}`}
                    cx="0"
                    cy="-58"
                    rx="13"
                    ry="32"
                    fill="#F8C21A"
                    transform={`rotate(${(360 / PETALOS) * i})`}
                />
            ))}
        </g>
        <circle r="42" fill="#EE6A12" />
    </svg>
);

export default Girasol;
