import { about } from '../data/content.js';
import Photo from './Photo.jsx';
import Reveal from './Reveal.jsx';
import './About.css';

export default function About() {
  const [a, b] = about.images;
  return (
    <section id="sobre" className="section about">
      <div className="container about__grid">
        <Reveal className="about__media">
          <Photo image={a.image} alt="" label={a.label} variant={a.variant} className="about__photo about__photo--main" />
          <Photo
            image={b.image}
            alt=""
            label={b.label}
            variant={b.variant}
            crowd={false}
            className="about__photo about__photo--small"
          />
          <div className="about__blocks" aria-hidden="true">
            {[1, 0, 1, 0, 0, 1, 0, 1].map((g, i) => (
              <span key={i} style={{ background: g ? 'var(--gold)' : 'var(--graphite)' }} />
            ))}
          </div>
        </Reveal>

        <div className="about__text">
          <Reveal>
            <div className="eyebrow">01 — Sobre a RX</div>
            <h2 className="section-title about__title">Técnica e sensibilidade para cada momento.</h2>
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal as="p" key={i} delay={80 * (i + 1)} className="about__p">
              {p}
            </Reveal>
          ))}
          <div className="about__pillars">
            {about.pillars.map((p, i) => (
              <Reveal key={p.title} delay={100 * i} className="about__pillar">
                <div className="about__pillar-n">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div className="about__pillar-t">{p.title}</div>
                  <div className="about__pillar-d">{p.text}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
