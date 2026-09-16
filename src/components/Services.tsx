import type { Translation } from "../data/translations";
import { services } from "../data/site";

interface ServicesProps {
  t: Translation;
  onSelect: (name: string) => void;
}

export default function Services({ t, onSelect }: ServicesProps) {
  return (
    <section id="uslugi" className="section wrap">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{t.servicesEyebrow}</p>
          <h2>{t.servicesTitle}</h2>
        </div>

        <p>{t.servicesIntro}</p>
      </div>

      <div className="services">
        {services.map((service, index) => {
          const card = t.serviceCards[index];

          if (!card) return null;

          return (
            <article key={service.id}>
              <span className="service-number">
                {String(index + 1).padStart(2, "0")} /
              </span>

              <h3>{card.title}</h3>
              <p>{card.description}</p>

              <a href="#kontakt" onClick={() => onSelect(service.name)}>
                {card.linkText}
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
