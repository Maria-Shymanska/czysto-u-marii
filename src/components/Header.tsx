import type { Language, Translation } from "../data/translations";

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  t: Translation;
}

const languages: { code: Language; label: string; name: string }[] = [
  { code: "pl", label: "PL", name: "Polski" },
  { code: "en", label: "EN", name: "English" },
  { code: "uk", label: "UA", name: "Українська" },
  { code: "de", label: "DE", name: "Deutsch" },
];

export default function Header({ language, onLanguageChange, t }: HeaderProps) {
  return (
    <header className="header wrap">
      <a className="brand" href="#" aria-label="Czysto u Marii">
        <span className="brand-mark" aria-hidden="true">
          ✳
        </span>

        <span>
          Czysto <i>u Marii</i>
          <small>SPRZĄTANIE Z TROSKĄ</small>
        </span>
      </a>

      <nav aria-label={t.services}>
        <a href="#uslugi">{t.services}</a>
        <a href="#o-mnie">{t.about}</a>
        <a href="#jak-to-dziala">{t.howItWorks}</a>
      </nav>

      <div className="language-switch">
        {(["pl", "en", "uk", "de"] as const).map((code) => (
          <button
            key={code}
            type="button"
            aria-pressed={language === code}
            onClick={() => onLanguageChange(code)}
          >
            {code === "uk" ? "UA" : code.toUpperCase()}
          </button>
        ))}
      </div>

      <a className="button small" href="#kontakt">
        {t.getQuote}
        <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
