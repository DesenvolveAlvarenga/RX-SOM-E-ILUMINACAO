import { Fragment } from 'react';
import { eventTypes } from '../data/content.js';
import './EventStrip.css';

export default function EventStrip() {
  return (
    <div className="strip" aria-label="Tipos de evento atendidos">
      <div className="container strip__inner">
        {eventTypes.map((t, i) => (
          <Fragment key={t}>
            {i > 0 ? (
              <span className="strip__star" aria-hidden="true">
                ✦
              </span>
            ) : null}
            <span>{t}</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
