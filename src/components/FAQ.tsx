import type { Translation } from "../data/translations";

interface FAQProps {
  t: Translation;
}

export default function FAQ({ t }: FAQProps) {
  return (
    <section className="faq-section wrap">
      <div>
        <p className="eyebrow">{t.faqEyebrow}</p>
        <h2>{t.faqTitle}</h2>
      </div>

      <div className="faq">
        {t.faqItems.map(({ question, answer }) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
