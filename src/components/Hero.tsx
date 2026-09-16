import type { Translation } from "../data/translations";

interface HeroProps {
  t: Translation;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="hero wrap">
      <div className="hero-copy">
        <p className="eyebrow">
          <span aria-hidden="true">⌖</span> {t.heroArea}
        </p>

        <h1>{t.heroTitle}</h1>

        <p className="intro">{t.heroIntro}</p>

        <a className="button" href="#kontakt">
          {t.getQuote}
          <span aria-hidden="true">↗</span>
        </a>

        <p className="hero-note">{t.heroNote}</p>
      </div>

      <div className="hero-visual">
        <img
          src={`${import.meta.env.BASE_URL}images/hero.webp`}
          alt={t.heroImageAlt}
          width="1536"
          height="1024"
          fetchPriority="high"
        />

        <div className="photo-note">
          <span aria-hidden="true">✳</span>

          <p>
            {t.heroPhotoTitle}
            <br />
            <strong>{t.heroPhotoSubtitle}</strong>
          </p>
        </div>

        <span className="image-caption">{t.heroCaption}</span>
      </div>
    </section>
  );
}
