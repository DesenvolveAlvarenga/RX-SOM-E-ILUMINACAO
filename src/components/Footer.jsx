import { contact } from '../data/content.js';
import { whatsappUrl, instagramUrl, externalProps } from '../utils/links.js';
import { Icon } from './Icons.jsx';
import './Footer.css';

export default function Footer() {
  const wa = whatsappUrl('Olá! Gostaria de um orçamento com a RX Som e Iluminação.');
  const ig = instagramUrl();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__band" aria-hidden="true" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/logo-rx.png" alt="RX Som e Iluminação" width="996" height="632" loading="lazy" />
          </div>
          <p>Som, iluminação cênica e painel de LED para eventos em Palmital-SP e região.</p>
        </div>

        <nav aria-label="Rodapé" className="footer__col">
          <div className="footer__h">Navegação</div>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#estrutura">Estrutura</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#orcamento">Orçamento</a>
        </nav>

        <div className="footer__col footer__col--services">
          <div className="footer__h">Serviços</div>
          <span>Sonorização</span>
          <span>Iluminação cênica</span>
          <span>Painel de LED</span>
          <span>Estrutura para eventos</span>
        </div>

        <div className="footer__col">
          <div className="footer__h">Contato</div>
          <span>WhatsApp {contact.whatsappLabel}</span>
          <span>{contact.email}</span>
          <span>{contact.region}</span>
          <div className="footer__social">
            <a href={ig} {...externalProps(ig)} aria-label="Instagram da RX">
              <Icon name="instagram" size={20} />
            </a>
            <a href={wa} {...externalProps(wa)} aria-label="WhatsApp da RX">
              <Icon name="whatsapp" size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {year} RX Som e Iluminação e Painel de LED · Palmital-SP</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}
