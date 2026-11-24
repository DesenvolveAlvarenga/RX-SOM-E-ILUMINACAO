import { contact } from '../data/content.js';

const isPlaceholder = (v) => !v || v.includes('[');

/** Link do WhatsApp com mensagem opcional. Sem número real, leva ao formulário. */
export function whatsappUrl(message = '') {
  if (isPlaceholder(contact.whatsapp)) return '#orcamento';
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${contact.whatsapp}${text}`;
}

export function instagramUrl() {
  if (isPlaceholder(contact.instagram)) return '#instagram';
  return `https://instagram.com/${contact.instagram}`;
}

export const hasWhatsapp = () => !isPlaceholder(contact.whatsapp);

/** Props para links externos abrirem em nova aba. */
export function externalProps(url) {
  return url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}
