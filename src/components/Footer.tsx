import type { Translation } from "../data/translations";

interface FooterProps {
  t: Translation;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <a className="brand footer-brand" href="#">
          <span className="brand-mark" aria-hidden="true">
            ✳
          </span>

          <span>
            Czysto <i>u Marii</i>
          </span>
        </a>

        <div className="footer-info">
          <p>{t.footerText}</p>
          <span className="footer-divider">•</span>
          <p>© 2026 Maria Szymańska</p>
        </div>

        <a className="footer-services" href="#uslugi">
          {t.footerServices} ↑
        </a>
      </div>
    </footer>
  );
}
