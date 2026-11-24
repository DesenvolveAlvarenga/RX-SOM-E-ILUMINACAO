import './Equalizer.css';

const HEIGHTS = [3, 5, 4, 6, 3, 7, 5, 4, 6, 8, 5, 3, 6, 4];

/** Equalizador de blocos tirado do logo, com as colunas pulsando. */
export default function Equalizer({ heights = HEIGHTS, size = 'lg', className = '' }) {
  return (
    <div className={`eq eq--${size} ${className}`.trim()} aria-hidden="true">
      {heights.map((h, i) => (
        <div
          key={i}
          className="eq__col"
          style={{
            animationDelay: `${(-(i * 0.23) % 1.4).toFixed(2)}s`,
            animationDuration: `${(1.1 + (i % 4) * 0.18).toFixed(2)}s`,
          }}
        >
          {Array.from({ length: h }).map((_, k) => (
            <span
              key={k}
              className="eq__sq"
              style={{ background: k < 2 ? 'var(--graphite)' : k === h - 1 && i % 3 === 0 ? 'var(--yellow)' : 'var(--gold)' }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
