import { Fragment } from 'react';
import { services } from '../data/site';

interface Props { onSelect: (name: string) => void }

export default function Services({ onSelect }: Props) {
  return (
    <section id="uslugi" className="section wrap">
      <div className="section-heading">
        <div><p className="eyebrow">W CZYM MOGĘ POMÓC</p><h2>Porządek na Twoich zasadach.</h2></div>
        <p>Od codziennych porządków<br />po większe odświeżenie domu.</p>
      </div>
      <div className="services">
        {services.map((service, index) => (
          <article key={service.id}>
            <span className="service-number">{String(index + 1).padStart(2, '0')} /</span>
            <h3>{service.title.map((line, i) => <Fragment key={line}>{i > 0 && <br />}{line}</Fragment>)}</h3>
            <p>{service.description}</p>
            <a href="#kontakt" onClick={() => onSelect(service.name)}>
              {service.linkText} <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
