import { contact, instagramPosts } from '../data/content.js';
import { instagramUrl, externalProps } from '../utils/links.js';
import { Icon } from './Icons.jsx';
import Photo from './Photo.jsx';
import Reveal from './Reveal.jsx';
import './Instagram.css';

export default function Instagram() {
  const profile = instagramUrl();
  return (
    <section id="instagram" className="section section--alt insta">
      <div className="container">
        <Reveal className="section-head insta__head">
          <div>
            <div className="eyebrow">06 — Instagram</div>
            <h2 className="section-title">Acompanhe os bastidores.</h2>
          </div>
          <a className="btn btn-line insta__follow insta__follow--top" href={profile} {...externalProps(profile)}>
            <Icon name="instagram" size={20} />
            Seguir @{contact.instagram}
          </a>
        </Reveal>

        <div className="insta__grid">
          {instagramPosts.map((p, i) => {
            const href = p.url || profile;
            return (
              <Reveal
                as="a"
                key={i}
                delay={60 * i}
                href={href}
                {...externalProps(href)}
                className="insta__post"
                aria-label="Abrir publicação no Instagram"
              >
                <Photo image={p.image} alt="" variant={p.variant} className="insta__photo" />
                <span className="insta__badge" aria-hidden="true">
                  <Icon name="instagram" size={18} />
                </span>
              </Reveal>
            );
          })}
        </div>

        <a className="btn btn-line insta__follow insta__follow--bottom" href={profile} {...externalProps(profile)}>
          <Icon name="instagram" size={20} />
          Seguir @{contact.instagram}
        </a>
      </div>
    </section>
  );
}
