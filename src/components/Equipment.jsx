import { useRef, useState } from 'react';
import { equipment } from '../data/content.js';
import Photo from './Photo.jsx';
import Reveal from './Reveal.jsx';
import './Equipment.css';

const SHORT = { som: 'Som', luz: 'Luz', led: 'LED' };

export default function Equipment() {
  const [tab, setTab] = useState(equipment[0].id);
  const tabRefs = useRef([]);
  const cur = equipment.find((e) => e.id === tab) || equipment[0];

  // Navegação por setas entre as abas (padrão de acessibilidade)
  const onKeyDown = (e, i) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + equipment.length) % equipment.length;
    setTab(equipment[next].id);
    tabRefs.current[next]?.focus();
  };

  const photo = (
    <Photo
      key={cur.id}
      image={cur.image}
      alt={cur.label}
      label={cur.imageLabel}
      labelPosition={{ left: 20, top: 20 }}
      variant={cur.variant}
      crowd={cur.variant !== 'led'}
      className="equip__photo"
    />
  );

  return (
    <section id="estrutura" className="section equip">
      <span className="stripe equip__stripe" aria-hidden="true" />
      <div className="container equip__grid">
        <div className="equip__main">
          <Reveal>
            <div className="eyebrow">03 — Estrutura e equipamentos</div>
            <h2 className="section-title equip__title">Equipamento profissional, pronto para o palco.</h2>
            <p className="lead equip__lead">
              Estrutura de linha profissional para eventos de todos os tamanhos. [Liste aqui as marcas e modelos que a
              RX utiliza.]
            </p>
          </Reveal>

          <div className="equip__photo-mobile">{photo}</div>

          <div role="tablist" aria-label="Categorias de equipamento" className="equip__tabs">
            {equipment.map((e, i) => (
              <button
                key={e.id}
                ref={(el) => (tabRefs.current[i] = el)}
                type="button"
                role="tab"
                id={`tab-${e.id}`}
                aria-selected={tab === e.id}
                aria-controls="painel-equipamentos"
                tabIndex={tab === e.id ? 0 : -1}
                className={`equip__tab ${tab === e.id ? 'is-active' : ''}`}
                onClick={() => setTab(e.id)}
                onKeyDown={(ev) => onKeyDown(ev, i)}
              >
                <span className="equip__tab-long">{e.label}</span>
                <span className="equip__tab-short">{SHORT[e.id] || e.label}</span>
              </button>
            ))}
          </div>

          <div id="painel-equipamentos" role="tabpanel" aria-labelledby={`tab-${cur.id}`} className="equip__list" key={cur.id}>
            {cur.items.map(([name, detail], i) => (
              <div className="equip__row" key={name} style={{ animationDelay: `${i * 50}ms` }}>
                <div className="equip__row-name">
                  <span className="equip__row-n">{String(i + 1).padStart(2, '0')}</span>
                  <span>{name}</span>
                </div>
                <span className="equip__row-detail">{detail}</span>
              </div>
            ))}
          </div>
        </div>

        <Reveal className="equip__side" delay={120}>
          {photo}
          <div className="equip__card">
            <div className="equip__card-t">Som + Luz + LED</div>
            <div className="equip__card-d">Uma só equipe cuidando de toda a parte técnica do seu evento.</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
