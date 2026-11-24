import { useEffect, useRef, useState } from 'react';
import { services } from '../data/content.js';
import { Icon } from './Icons.jsx';
import Photo from './Photo.jsx';
import Reveal from './Reveal.jsx';
import './Services.css';

export default function Services() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Indicador do carrossel (mobile)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    const onScroll = () => {
      const card = el.firstElementChild;
      if (!card) return;
      const step = card.getBoundingClientRect().width + 14;
      setCurrent(Math.min(services.length - 1, Math.round(el.scrollLeft / step)));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="servicos" className="section section--alt services">
      <div className="container">
        <Reveal className="section-head">
          <div style={{ maxWidth: 760 }}>
            <div className="eyebrow">02 — Serviços</div>
            <h2 className="section-title">Tudo o que o seu evento precisa para emocionar.</h2>
          </div>
          <p className="lead services__lead">
            Contrate um serviço ou a solução completa — som, luz e LED integrados por uma só equipe.
          </p>
        </Reveal>
      </div>

      <div className="container services__wrap">
        <div className="services__track" ref={trackRef}>
          {services.map((s, i) => (
            <Reveal as="article" key={s.id} delay={100 * i} className="service-card">
              <Photo
                image={s.image}
                alt={s.title}
                label={s.imageLabel}
                labelPosition={{ left: 18, top: 18 }}
                variant={s.variant}
                crowd={s.variant !== 'led'}
                className="service-card__photo"
              >
                <span className="service-card__icon">
                  <Icon name={s.icon} size={30} />
                </span>
              </Photo>
              <div className="service-card__body">
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__text">{s.text}</p>
                <ul className="service-card__list">
                  {s.items.map((it) => (
                    <li key={it}>
                      <span aria-hidden="true" className="service-card__dot" />
                      {it}
                    </li>
                  ))}
                </ul>
                <a className="btn-line service-card__link" href="#orcamento">
                  Orçar {s.short}
                  <Icon name="arrow" size={18} strokeWidth={2} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="services__dots" aria-hidden="true">
          {services.map((s, i) => (
            <span key={s.id} className={i === current ? 'is-active' : ''} />
          ))}
        </div>
      </div>
    </section>
  );
}
