import { useEffect, useState } from 'react';
import { nav } from '../data/content.js';
import { Icon } from './Icons.jsx';
import { whatsappUrl, externalProps } from '../utils/links.js';
import './Header.css';

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Destaca no menu a seção que está na tela.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const close = () => setOpen(false);
  const wa = whatsappUrl('Olá! Gostaria de um orçamento com a RX Som e Iluminação.');
  const isLight = theme === 'light';

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container header__bar">
        <a href="#inicio" className="header__logo" aria-label="RX Som e Iluminação — início" onClick={close}>
          {isLight ? (
            <img src="/logo-rx-transparente.png" alt="RX Som e Iluminação" width="996" height="632" />
          ) : (
            <img src="/logo-rx.png" alt="RX Som e Iluminação" width="996" height="632" />
          )}
        </a>

        <nav className="header__nav" aria-label="Principal">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={`navlink ${active === n.id ? 'is-active' : ''}`}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="header__icon-btn"
            onClick={onToggleTheme}
            aria-label={isLight ? 'Ativar tema escuro' : 'Ativar tema claro'}
            title={isLight ? 'Tema escuro' : 'Tema claro'}
          >
            <Icon name={isLight ? 'moon' : 'sun'} size={20} />
          </button>
          <a className="btn btn-gold btn--sm header__cta" href={wa} {...externalProps(wa)}>
            <Icon name="whatsapp" size={18} strokeWidth={2} />
            Solicitar orçamento
          </a>
          <button
            type="button"
            className="header__icon-btn header__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            <Icon name={open ? 'close' : 'menu'} size={22} strokeWidth={2} />
          </button>
        </div>
      </div>

      {open ? (
        <nav id="menu-mobile" className="mobile-menu" aria-label="Menu">
          {nav.map((n, i) => (
            <a key={n.id} href={`#${n.id}`} onClick={close} className="mobile-menu__link">
              {n.label}
              <span>{String(i + 1).padStart(2, '0')}</span>
            </a>
          ))}
          <a href="#orcamento" onClick={close} className="btn btn-gold mobile-menu__cta">
            Solicitar orçamento
          </a>
        </nav>
      ) : null}
    </header>
  );
}
