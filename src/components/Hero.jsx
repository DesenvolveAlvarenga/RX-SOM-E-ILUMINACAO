import { hero } from '../data/content.js';
import { Icon } from './Icons.jsx';
import Photo from './Photo.jsx';
import Equalizer from './Equalizer.jsx';
import './Hero.css';

function Stripes({ className }) {
  return (
    <div className={`hero__stripes ${className}`} aria-hidden="true">
      <span className="stripe hero__stripe--gold" />
      <span className="stripe hero__stripe--yellow" />
      <span className="hero__stripe--orange" />
    </div>
  );
}

function Actions() {
  return (
    <div className="hero__actions rise" style={{ animationDelay: '.3s' }}>
      <a className="btn btn-gold" href="#orcamento">
        Solicitar orçamento
        <Icon name="arrow" size={18} strokeWidth={2.2} />
      </a>
      <a className="btn btn-line" href="#portfolio">
        Ver eventos
      </a>
    </div>
  );
}

const SUB =
  'Sonorização, iluminação cênica e painel de LED para casamentos, festas de 15 anos, shows e eventos corporativos — planejados para o seu espaço e o clima que você quer criar.';

/* Versão escura: foto de palco em tela cheia. */
function HeroDark() {
  return (
    <section id="inicio" className="hero hero--dark">
      <Photo image={hero.image} alt="Palco iluminado pela RX" variant="stage" crowd={false} className="hero__bg">
        <span className="beam" style={{ left: '14%', animationDelay: '-2s' }} />
        <span className="beam" style={{ left: '44%', animationDuration: '9s' }} />
        <span className="beam beam--orange" style={{ left: '70%', animationDelay: '-5s' }} />
      </Photo>
      <div className="hero__shade" aria-hidden="true" />
      <Stripes className="hero__stripes--dark" />
      {!hero.image ? <span className="ph-tag hero__tag">{hero.imageLabel}</span> : null}

      <div className="container hero__content">
        <Equalizer size="sm" className="hero__eq-mobile" heights={[3, 5, 4, 6, 3, 7, 5, 4, 6, 5, 3, 6, 4, 5, 3, 6, 4, 5, 7, 4]} />
        <div className="hero__eyebrow rise">
          <span className="hero__eyebrow-line" />
          <span className="hide-mobile">Som · Iluminação · Painel de LED — </span>Palmital-SP e região
        </div>
        <h1 className="hero__title rise" style={{ animationDelay: '.1s' }}>
          Quando a luz acende, <span className="hero__title-gold">a festa começa.</span>
        </h1>
        <div className="hero__row">
          <div className="hero__copy">
            <p className="hero__sub rise" style={{ animationDelay: '.2s' }}>
              {SUB}
            </p>
            <Actions />
          </div>
          <Equalizer size="lg" className="hero__eq-desktop" />
        </div>
      </div>
    </section>
  );
}

/* Versão clara: título à esquerda e foto emoldurada à direita. */
function HeroLight() {
  return (
    <section id="inicio" className="hero hero--light">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__split">
        <div className="hero__text">
          <div className="hero__eyebrow rise">
            <span className="hero__eyebrow-line" />
            Palmital-SP e região
          </div>
          <h1 className="hero__title rise" style={{ animationDelay: '.1s' }}>
            Quando a luz acende, <span className="hero__title-mark">a festa começa.</span>
          </h1>
          <p className="hero__sub rise" style={{ animationDelay: '.2s' }}>
            {SUB}
          </p>
          <div className="hero__actions-desktop">
            <Actions />
            <Equalizer size="md" className="hero__eq-light" />
          </div>
        </div>

        <div className="hero__visual">
          <Stripes className="hero__stripes--light" />
          <Photo image={hero.image} alt="Palco iluminado pela RX" variant="stage" className="hero__frame">
            <span className="beam" style={{ left: '10%', animationDelay: '-2s' }} />
            <span className="beam beam--orange" style={{ left: '50%', animationDelay: '-5s' }} />
            {!hero.image ? <span className="ph-tag hero__frame-tag">{hero.imageLabel}</span> : null}
            <Equalizer size="xs" className="hero__eq-frame" heights={[3, 5, 4, 6, 3, 7, 5, 4, 6, 5, 3, 6]} />
          </Photo>
          <div className="hero__badge">
            <span className="hero__badge-icon">
              <Icon name="speaker" size={26} />
            </span>
            <span>
              <strong>Som · Luz · LED</strong>
              <small>Uma equipe para tudo</small>
            </span>
          </div>
        </div>

        <div className="hero__actions-mobile">
          <Actions />
        </div>
      </div>
    </section>
  );
}

export default function Hero({ theme }) {
  return theme === 'light' ? <HeroLight /> : <HeroDark />;
}
