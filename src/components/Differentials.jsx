import { differentials } from '../data/content.js';
import Reveal from './Reveal.jsx';
import './Differentials.css';

export default function Differentials() {
  return (
    <section id="diferenciais" className="section diffs">
      <div className="container diffs__grid">
        <Reveal className="diffs__intro">
          <div className="eyebrow">05 — Diferenciais</div>
          <h2 className="section-title diffs__title">Por que escolher a RX.</h2>
          <p className="lead diffs__lead">
            O seu evento acontece uma vez só. Por isso, cada detalhe técnico é tratado com o mesmo cuidado — do primeiro
            áudio da cerimônia à última música da pista.
          </p>
        </Reveal>
        <div className="diffs__list">
          {differentials.map((d, i) => (
            <Reveal key={d.title} delay={70 * i} className="diffs__item">
              <div className="diffs__n">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div className="diffs__t">{d.title}</div>
                <div className="diffs__d">{d.text}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
