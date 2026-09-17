import { useState } from "react";
import { MessageCircle, Phone, Mail, X } from "lucide-react";
import type { Translation } from "../data/translations";

interface FloatingContactProps {
  t: Translation;
}

export default function FloatingContact({ t }: FloatingContactProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`floating-contact ${isOpen ? "is-open" : ""}`}>
      {isOpen && (
        <div className="floating-contact-menu">
          <a className="floating-contact-option" href="mailto:mariya89y@gmail.com">
            <Mail size={20} />
            <span>{t.contactEmail}</span>
          </a>

          <a className="floating-contact-option" href="tel:+48729447931">
            <Phone size={20} />
            <span>{t.contactCall}</span>
          </a>
        </div>
      )}

      <button
        type="button"
        className="floating-contact-button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
        <span>{t.contactWrite}</span>
      </button>
    </div>
  );
}
