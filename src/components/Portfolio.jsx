import { useState } from 'react';
import { portfolio, portfolioFilters } from '../data/content.js';
import { instagramUrl, externalProps } from '../utils/links.js';
import Photo from './Photo.jsx';
import Reveal from './Reveal.jsx';
import './Portfolio.css';

export default function Portfolio() {
  const [filter, setFilter] = useState('todos');
  const shown = portfolio.filter((p) => filter === 'todos' || p.cat === filter);
  const ig = instagramUrl();

  return (
    <section id="portfolio" className="section section--alt portfolio">
      <div className="container">
        <Reveal className="section-head">
          <div style={{ maxWidth: 720 }}>
            <div className="eyebrow">04 — Portfólio de eventos</div>
            <h2 className="section-title">Eventos que ganharam vida com a RX.</h2>
          </div>
          <div role="group" aria-label="Filtrar eventos" className="portfolio__filters">
          {portfolioFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              className={`chip ${filter === f.id ? 'is-active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
          </div>
        </Reveal>
      </div>

      <div className="container">
        <div className="portfolio__grid" key={filter}>
          {shown.map((p, i) => (
            <a
              key={`${p.title}-${i}`}
              href={ig}
              {...externalProps(ig)}
              className={`tile tile--r${p.rows} tile--c${p.cols}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <Photo image={p.image} alt={`${p.tag} — ${p.title}`} variant={p.variant} className="tile__photo" />
              <span className="tile__shade" aria-hidden="true" />
              <span className="tile__cap">
                <span className="tile__tag">{p.tag}</span>
                <span className="tile__title">{p.title}</span>
                <span className="tile__meta">{p.meta}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
