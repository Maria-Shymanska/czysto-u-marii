import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { services } from './data/site';

export default function App() {
  const [selectedService, setSelectedService] = useState(services[0]?.name ?? '');

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="promise-bar">
          <div className="wrap promises">
            <span><b aria-hidden="true">✓</b> Osobisty kontakt ze mną</span>
            <span><b aria-hidden="true">✓</b> Zakres ustalony przed wizytą</span>
            <span><b aria-hidden="true">✓</b> Uważność na detale</span>
          </div>
        </div>
        <Services onSelect={setSelectedService} />
        <About />
        <HowItWorks />
        <FAQ />
        <ContactForm selectedService={selectedService} onServiceChange={setSelectedService} />
      </main>
      <Footer />
    </>
  );
}
