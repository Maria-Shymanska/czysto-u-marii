import type { Translation } from "../data/translations";

interface AboutProps {
  t: Translation;
}

export default function About({ t }: AboutProps) {
  return (
    <section id="o-mnie" className="about">
      <div className="wrap about-grid">
        <div className="about-title">
          <p className="eyebrow">{t.aboutEyebrow}</p>

          <h2 className="about-heading">
            {t.aboutTitle}{" "}
            <span className="about-heading-accent">{t.aboutTitleAccent}</span>
          </h2>

          <span className="signature">Maria</span>
        </div>

        <div className="about-copy">
          <h3>{t.aboutGreeting}</h3>

          <p>{t.aboutParagraph1}</p>
          <p>{t.aboutParagraph2}</p>

          <div className="about-detail">
            <span aria-hidden="true">✳</span>

            <p>
              {t.aboutDetail}
              <br />
              <strong>{t.aboutDetailStrong}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
