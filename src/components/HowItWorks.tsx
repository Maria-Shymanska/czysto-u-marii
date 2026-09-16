import type { Translation } from "../data/translations";

interface HowItWorksProps {
  t: Translation;
}

export default function HowItWorks({ t }: HowItWorksProps) {
  return (
    <section id="jak-to-dziala" className="section wrap">
      <p className="eyebrow">{t.howEyebrow}</p>

      <h2>{t.howTitle}</h2>

      <div className="steps">
        {t.howSteps.map((step, index) => (
          <article key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
