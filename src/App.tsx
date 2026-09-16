import { useState, useEffect } from "react";

import { translations } from "./data/translations";
import type { Language } from "./data/translations";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { services } from "./data/site";

export default function App() {
  const [selectedService, setSelectedService] = useState(
    services[0]?.name ?? "",
  );
  const [language, setLanguage] = useState<Language>("pl");
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <Header language={language} onLanguageChange={setLanguage} t={t} />
      <main>
        <Hero t={t} />
        <div className="promise-bar">
          <div className="wrap promises">
            <span>
              <b aria-hidden="true">✓</b> {t.promiseContact}
            </span>

            <span>
              <b aria-hidden="true">✓</b> {t.promiseScope}
            </span>

            <span>
              <b aria-hidden="true">✓</b> {t.promiseDetails}
            </span>
          </div>
        </div>
        <Services t={t} onSelect={setSelectedService} />
        <About t={t} />
        <HowItWorks t={t} />
        <FAQ t={t} />
        <ContactForm
          selectedService={selectedService}
          onServiceChange={setSelectedService}
          t={t}
        />
      </main>
      <Footer t={t} />
    </>
  );
}
