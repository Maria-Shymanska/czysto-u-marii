import { faqs } from '../data/site';

export default function FAQ() {
  return (
    <section className="faq-section wrap">
      <div><p className="eyebrow">WARTO WIEDZIEĆ</p><h2>Masz pytania?</h2></div>
      <div className="faq">
        {faqs.map(({ question, answer }) => (
          <details key={question}><summary>{question}</summary><p>{answer}</p></details>
        ))}
      </div>
    </section>
  );
}
