// Змінюй контакти, послуги та відповіді тут.
export const contact = {
  email: 'mariya89y@gmail.com',
  phone: '+48729447931',
  phoneLabel: '+48 729 447 931',
  area: 'Kamień Pomorski i okolice',
};

export interface Service {
  id: string;
  name: string;
  title: string[];
  description: string;
  linkText: string;
}

export const services: Service[] = [
  {
    "id": "1",
    "name": "Regularne sprzątanie",
    "title": [
      "Regularne",
      "sprzątanie"
    ],
    "description": "Czysta kuchnia, łazienka i pokoje. Ustalimy zakres oraz częstotliwość dopasowaną do Twojego rytmu.",
    "linkText": "Chcę regularnej pomocy"
  },
  {
    "id": "2",
    "name": "Jednorazowe porządki",
    "title": [
      "Jednorazowe",
      "porządki"
    ],
    "description": "Gdy potrzebujesz dodatkowej pary rąk. Przed wizytą ustalimy, które miejsca wymagają szczególnej uwagi.",
    "linkText": "Zaplanujmy porządki"
  },
  {
    "id": "3",
    "name": "Sprzątanie biura",
    "title": [
      "Sprzątanie",
      "biura"
    ],
    "description": "Uporządkowane miejsce do pracy. Zakres i dogodny termin sprzątania uzgodnimy indywidualnie.",
    "linkText": "Zapytaj o swoje biuro"
  }
];

export const faqs = [
  {
    "question": "Czy przywozisz własne środki i sprzęt?",
    "answer": "Ustalamy to przed pierwszą wizytą. Omówimy, jakie środki są potrzebne oraz czy na miejscu dostępny jest odkurzacz i mop."
  },
  {
    "question": "Ile kosztuje sprzątanie?",
    "answer": "Cena zależy od metrażu, zakresu prac i częstotliwości. Wycena jest indywidualna — cenę ustalimy przed rozpoczęciem sprzątania."
  },
  {
    "question": "Gdzie oferujesz sprzątanie?",
    "answer": "W Kamieniu Pomorskim i okolicach. Podaj miejscowość w zapytaniu, a potwierdzę możliwość dojazdu."
  },
  {
    "question": "Czy muszę być w domu podczas sprzątania?",
    "answer": "Sposób udostępnienia mieszkania ustalimy wspólnie, tak aby był dla Ciebie wygodny."
  }
];
