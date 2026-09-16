import { useRef, useState } from "react";
import type { ComponentProps } from "react";

import { contact, services } from "../data/site";
import type { Translation } from "../data/translations";

interface Props {
  selectedService: string;
  onServiceChange: (service: string) => void;
  t: Translation;
}

type FormSubmitEvent = Parameters<
  NonNullable<ComponentProps<"form">["onSubmit"]>
>[0];

export default function ContactForm({
  selectedService,
  onServiceChange,
  t,
}: Props) {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const subject = encodeURIComponent("Zapytanie o sprzątanie — Czysto u Marii");

  const mailLink = (body: string) =>
    `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(body)}`;

  function handleSubmit(event: FormSubmitEvent) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const details = String(data.get("details") ?? "").trim();

    const text = [
      "Dzień dobry, chciałabym/chciałbym zapytać o wycenę sprzątania.",
      `Miejscowość: ${String(data.get("location") ?? "").trim()}`,
      `Powierzchnia: ${data.get("area")} m²`,
      `Usługa: ${selectedService}`,
      ...(details ? [`Dodatkowe informacje: ${details}`] : []),
      "Proszę o informację o cenie i dostępnych terminach.",
    ].join("\n");

    setMessage(text);
    setStatus("Tekst jest gotowy. Nie został wysłany.");
    window.location.href = mailLink(text);
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setStatus("Skopiowano treść zapytania.");
    } catch {
      messageRef.current?.focus();
      messageRef.current?.select();
      setStatus("Zaznaczono tekst. Skopiuj go ręcznie.");
    }
  }

  return (
    <section id="kontakt" className="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">{t.contactEyebrow}</p>

          <h2>
            {t.contactTitle}
            <br />
            <em>{t.contactTitleAccent}</em>
          </h2>

          <p>
            {t.contactIntro}
            <br />
            {t.contactIntroSecond}
          </p>

          <p className="contact-location">⌖ &nbsp;{contact.area}</p>

          <div className="contact-links">
            <a href={`tel:${contact.phone}`}>{contact.phoneLabel} ↗</a>

            <a href={`mailto:${contact.email}`}>{contact.email} ↗</a>
          </div>
        </div>

        <form id="inquiry" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              {t.contactLocation}
              <input
                name="location"
                required
                placeholder="np. Kamień Pomorski"
                autoComplete="address-level2"
              />
            </label>

            <label>
              {t.contactArea}
              <input
                name="area"
                type="number"
                min="1"
                max="10000"
                placeholder="np. 60"
                required
              />
            </label>
          </div>

          <label>
            {t.contactService}

            <select
              name="service"
              id="service"
              value={selectedService}
              onChange={(event) => onServiceChange(event.target.value)}
            >
              {services.map((service) => (
                <option key={service.id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            {t.contactDetails} <span>{t.contactOptional}</span>
            <textarea
              name="details"
              rows={3}
              placeholder={t.contactDetailsPlaceholder}
            />
          </label>

          <button className="button" type="submit">
            {t.contactButton} <span aria-hidden="true">↗</span>
          </button>

          <p className="form-note">{t.contactNote}</p>

          {message && (
            <div id="result">
              <label>
                {t.contactInquiry}

                <textarea
                  id="message"
                  ref={messageRef}
                  rows={6}
                  value={message}
                  readOnly
                />
              </label>
              <a id="send-email" className="button" href={mailLink(message)}>
                {t.contactOpenEmail} ↗
              </a>{" "}
              <button
                type="button"
                className="copy-button"
                onClick={copyMessage}
              >
                {t.contactCopy}
              </button>
            </div>
          )}

          <p id="copy-status" role="status">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
