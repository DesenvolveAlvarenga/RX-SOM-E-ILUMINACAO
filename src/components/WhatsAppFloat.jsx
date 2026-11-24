import { useEffect, useState } from 'react';
import { whatsappUrl, externalProps } from '../utils/links.js';
import { Icon } from './Icons.jsx';
import './WhatsAppFloat.css';

/** Desktop: botão redondo flutuante. Mobile: barra fixa "Orçamento pelo WhatsApp". */
export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const wa = whatsappUrl('Olá! Gostaria de um orçamento com a RX Som e Iluminação.');

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a href={wa} {...externalProps(wa)} className={`wa-float ${show ? 'is-shown' : ''}`} aria-label="Falar no WhatsApp">
        <Icon name="whatsapp" size={28} strokeWidth={2} />
      </a>
      <div className={`wa-bar ${show ? 'is-shown' : ''}`}>
        <a href={wa} {...externalProps(wa)} className="btn btn-gold wa-bar__btn">
          <Icon name="whatsapp" size={20} strokeWidth={2} />
          Orçamento pelo WhatsApp
        </a>
      </div>
    </>
  );
}
