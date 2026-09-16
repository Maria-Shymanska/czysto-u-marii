import type { Translation } from "../data/translations";

interface FooterProps {
  t: Translation;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="wrap">
      <a className="brand" href="#">
        <span className="brand-mark" aria-hidden="true">
          ✳
        </span>

        <span>
          Czysto <i>u Marii</i>
        </span>
      </a>

      <p>{t.footerText}</p>

      <a href="#uslugi">{t.footerServices} ↑</a>
    </footer>
  );
}
