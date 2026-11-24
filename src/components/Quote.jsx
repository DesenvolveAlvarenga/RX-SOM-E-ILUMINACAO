import { useState } from 'react';
import { contact, eventOptions } from '../data/content.js';
import { whatsappUrl, instagramUrl, externalProps, hasWhatsapp } from '../utils/links.js';
import { Icon } from './Icons.jsx';
import Reveal from './Reveal.jsx';
import './Quote.css';

const NEEDS = ['Som', 'Iluminação', 'Painel de LED'];

export default function Quote() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    data: '',
    tipo: eventOptions[0],
    cidade: '',
    detalhes: '',
    precisa: ['Som', 'Iluminação'],
  });
  const [status, setStatus] = useState('');

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const toggleNeed = (n) =>
    setForm((f) => ({ ...f, precisa: f.precisa.includes(n) ? f.precisa.filter((x) => x !== n) : [...f.precisa, n] }));

  const onSubmit = (e) => {
    e.preventDefault();
    const lines = [
      'Olá, RX! Gostaria de um orçamento.',
      '',
      `*Nome:* ${form.nome}`,
      `*WhatsApp:* ${form.telefone}`,
      `*Evento:* ${form.tipo}`,
      form.data && `*Data:* ${form.data}`,
      form.cidade && `*Cidade:* ${form.cidade}`,
      form.precisa.length && `*Preciso de:* ${form.precisa.join(', ')}`,
      form.detalhes && `*Detalhes:* ${form.detalhes}`,
    ].filter(Boolean);
    if (!hasWhatsapp()) {
      setStatus('Configure o número de WhatsApp em src/data/content.js para enviar o orçamento.');
      return;
    }
    window.open(whatsappUrl(lines.join('\n')), '_blank', 'noopener');
    setStatus('Abrimos o WhatsApp com a sua mensagem. É só tocar em enviar!');
  };

  const wa = whatsappUrl('Olá! Gostaria de um orçamento com a RX Som e Iluminação.');
  const ig = instagramUrl();

  return (
    <section id="orcamento" className="section quote">
      <div className="container">
        <Reveal className="quote__panel">
          <span className="stripe quote__stripe quote__stripe--gold" aria-hidden="true" />
          <span className="stripe quote__stripe quote__stripe--yellow" aria-hidden="true" />

          <div className="quote__intro">
            <div className="eyebrow">07 — Orçamento</div>
            <h2 className="quote__title">Vamos iluminar o seu próximo evento?</h2>
            <p className="quote__lead">
              Conte um pouco sobre a sua data e a RX monta a proposta ideal de som, luz e LED.
            </p>
            <div className="quote__contacts">
              <a href={wa} {...externalProps(wa)} className="quote__contact">
                <span className="quote__contact-icon">
                  <Icon name="whatsapp" size={22} />
                </span>
                <span>
                  <small>WhatsApp</small>
                  <strong>{contact.whatsappLabel}</strong>
                </span>
              </a>
              <a href={ig} {...externalProps(ig)} className="quote__contact">
                <span className="quote__contact-icon">
                  <Icon name="instagram" size={22} />
                </span>
                <span>
                  <small>Instagram</small>
                  <strong>@{contact.instagram}</strong>
                </span>
              </a>
              <div className="quote__contact">
                <span className="quote__contact-icon">
                  <Icon name="pin" size={22} />
                </span>
                <span>
                  <small>Atendimento</small>
                  <strong>{contact.region}</strong>
                </span>
              </div>
            </div>
          </div>

          <form className="quote__form" onSubmit={onSubmit}>
            <label className="field quote__full">
              Seu nome
              <input className="input" type="text" required autoComplete="name" placeholder="Como podemos te chamar?" value={form.nome} onChange={set('nome')} />
            </label>
            <label className="field">
              WhatsApp
              <input className="input" type="tel" required autoComplete="tel" placeholder="(14) 00000-0000" value={form.telefone} onChange={set('telefone')} />
            </label>
            <label className="field">
              Data do evento
              <input className="input" type="date" value={form.data} onChange={set('data')} />
            </label>
            <label className="field">
              Tipo de evento
              <select className="input" value={form.tipo} onChange={set('tipo')}>
                {eventOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label className="field">
              Cidade
              <input className="input" type="text" placeholder="Palmital-SP" value={form.cidade} onChange={set('cidade')} />
            </label>
            <fieldset className="quote__full quote__needs">
              <legend className="field">O que você precisa?</legend>
              <div className="quote__needs-row">
                {NEEDS.map((n) => (
                  <label key={n} className={`quote__need ${form.precisa.includes(n) ? 'is-on' : ''}`}>
                    <input type="checkbox" checked={form.precisa.includes(n)} onChange={() => toggleNeed(n)} />
                    {n}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="field quote__full">
              Conte mais sobre o evento
              <textarea className="input" rows="3" placeholder="Local, número de convidados, horário…" value={form.detalhes} onChange={set('detalhes')} />
            </label>
            <button type="submit" className="btn btn-gold quote__full quote__submit">
              <Icon name="whatsapp" size={20} strokeWidth={2} />
              Enviar pelo WhatsApp
            </button>
            {status ? (
              <p className="quote__full quote__status" role="status">
                {status}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
