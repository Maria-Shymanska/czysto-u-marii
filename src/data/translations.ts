export type Language = "pl" | "en" | "uk" | "de";

export interface Translation {
  // ===== HEADER — меню та кнопка запиту =====
  services: string;
  about: string;
  howItWorks: string;
  getQuote: string;

  // ===== HERO — головний екран =====
  heroTitle: string;
  heroArea: string;
  heroIntro: string;
  heroNote: string;
  heroImageAlt: string;
  heroPhotoTitle: string;
  heroPhotoSubtitle: string;
  heroCaption: string;

  // ===== PROMISES — блок із трьома галочками =====
  promiseContact: string;
  promiseScope: string;
  promiseDetails: string;

  // ===== SERVICES — послуги =====
  servicesEyebrow: string;
  servicesTitle: string;
  servicesIntro: string;

  serviceCards: {
    title: string;
    description: string;
    linkText: string;
  }[];

  // ===== ABOUT — про мене =====
  aboutEyebrow: string;
  aboutTitle: string;
  aboutTitleAccent: string;
  aboutGreeting: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  aboutDetail: string;
  aboutDetailStrong: string;

  // ===== HOW IT WORKS — етапи замовлення =====
  howEyebrow: string;
  howTitle: string;
  howSteps: {
    title: string;
    description: string;
  }[];

  // ===== FAQ — запитання та відповіді =====
  faqEyebrow: string;
  faqTitle: string;
  faqItems: {
    question: string;
    answer: string;
  }[];

  // ===== CONTACT FORM — контактна форма =====
  contactEyebrow: string;
  contactTitle: string;
  contactTitleAccent: string;
  contactIntro: string;
  contactIntroSecond: string;
  contactLocation: string;
  contactArea: string;
  contactService: string;
  contactDetails: string;
  contactOptional: string;
  contactDetailsPlaceholder: string;
  contactButton: string;
  contactNote: string;
  contactInquiry: string;
  contactOpenEmail: string;
  contactCopy: string;

  // ===== FOOTER =====
  footerText: string;
  footerServices: string;
}


export const translations: Record<Language, Translation> = {
  pl: {
    services: "Usługi",
    about: "O mnie",
    howItWorks: "Jak to działa",
    getQuote: "Zapytaj o wycenę",
    heroTitle: "Czysty dom. Więcej czasu dla siebie.",
    heroArea: "KAMIEŃ POMORSKI I OKOLICE",
    heroIntro:
      "Zostaw sprzątanie w moich rękach. Zadbam o Twój dom, a Ty zajmij się tym, co naprawdę lubisz.",
    heroNote: "Jednorazowo lub regularnie. Tak, jak potrzebujesz.",
    heroImageAlt:
      "Jasny, uporządkowany salon z kremową sofą i świeżymi kwiatami",
    heroPhotoTitle: "Twój dom.",
    heroPhotoSubtitle: "W dobrych rękach.",
    heroCaption: "MAŁE PORZĄDKI. WIELKI SPOKÓJ.",
    // ===== PROMISES — блок із галочками =====
    promiseContact: "Osobisty kontakt ze mną",
    promiseScope: "Zakres ustalony przed wizytą",
    promiseDetails: "Uważność na detale",
    // ===== About — блок про себе =====
    aboutEyebrow: "POZNAJMY SIĘ",
    aboutTitle: "Wiesz, komu powierzasz",
    aboutTitleAccent: "swój dom.",
    aboutGreeting: "Cześć, jestem Maria.",
    aboutParagraph1:
      "Od wielu lat zajmuję się sprzątaniem. Wiem, że wpuszczenie kogoś do swojego domu wymaga zaufania — dlatego zależy mi na jasnych ustaleniach i dobrym kontakcie.",
    aboutParagraph2:
      "W Czysto u Marii rozmawiasz bezpośrednio ze mną. Wspólnie ustalamy, czego potrzebujesz i na czym najbardziej Ci zależy.",
    aboutDetail: "Każdy dom jest inny.",
    aboutDetailStrong: "Najpierw słucham, potem sprzątam.",
    servicesEyebrow: "W CZYM MOGĘ POMÓC",
    servicesTitle: "Porządek na Twoich zasadach.",
    servicesIntro: "Od codziennych porządków po większe odświeżenie domu.",
    serviceCards: [
      {
        title: "Regularne sprzątanie",
        description:
          "Czysta kuchnia, łazienka i pokoje. Ustalimy zakres oraz częstotliwość dopasowaną do Twojego rytmu.",
        linkText: "Chcę regularnej pomocy",
      },
      {
        title: "Jednorazowe porządki",
        description:
          "Gdy potrzebujesz dodatkowej pary rąk. Przed wizytą ustalimy, które miejsca wymagają szczególnej uwagi.",
        linkText: "Zaplanujmy porządki",
      },
      {
        title: "Sprzątanie biura",
        description:
          "Uporządkowane miejsce do pracy. Zakres i dogodny termin sprzątania uzgodnimy indywidualnie.",
        linkText: "Zapytaj o swoje biuro",
      },
    ],
    // ===== CONTACT FORM =====
    contactEyebrow: "ZACZNIJMY OD ROZMOWY",
    contactTitle: "Mniej sprzątania.",
    contactTitleAccent: "Więcej życia.",
    contactIntro: "Opisz, czego potrzebujesz.",
    contactIntroSecond: "To pierwszy krok do ustalenia wyceny.",
    contactLocation: "Miejscowość",
    contactArea: "Powierzchnia (m²)",
    contactService: "Rodzaj sprzątania",
    contactDetails: "Co warto wiedzieć?",
    contactOptional: "(opcjonalnie)",
    contactDetailsPlaceholder: "Napisz, na czym najbardziej Ci zależy.",
    contactButton: "Przygotuj e-mail",
    contactNote:
      "Otworzy się Twoja aplikacja pocztowa z gotowym zapytaniem. Wyślij je, aby skontaktować się ze mną. Możesz też zadzwonić.",
    contactInquiry: "Twoje zapytanie",
    contactOpenEmail: "Otwórz e-mail",
    contactCopy: "Kopiuj treść",
    // ===== HOW IT WORKS =====
    howEyebrow: "BEZ ZBĘDNYCH KOMPLIKACJI",
    howTitle: "Trzy kroki do czystego domu.",
    howSteps: [
      {
        title: "Opowiedz o swoim domu",
        description:
          "Podaj miejscowość, przybliżony metraż i rodzaj potrzebnego sprzątania.",
      },
      {
        title: "Ustalimy szczegóły",
        description:
          "Omówimy zakres, cenę, termin oraz potrzebne środki i sprzęt.",
      },
      {
        title: "Odetchnij i odpocznij",
        description:
          "Ja zajmę się ustalonymi pracami. Ty zyskasz chwilę dla siebie.",
      },
    ],
    // ===== FAQ =====
    faqEyebrow: "WARTO WIEDZIEĆ",
    faqTitle: "Masz pytania?",
    faqItems: [
      {
        question: "Czy przywozisz własne środki i sprzęt?",
        answer:
          "Ustalamy to przed pierwszą wizytą. Omówimy, jakie środki są potrzebne oraz czy na miejscu dostępny jest odkurzacz i mop.",
      },
      {
        question: "Ile kosztuje sprzątanie?",
        answer:
          "Cena zależy od metrażu, zakresu prac i częstotliwości. Wycena jest indywidualna — cenę ustalimy przed rozpoczęciem sprzątania.",
      },
      {
        question: "Gdzie oferujesz sprzątanie?",
        answer:
          "W Kamieniu Pomorskim i okolicach. Podaj miejscowość w zapytaniu, a potwierdzę możliwość dojazdu.",
      },
      {
        question: "Czy muszę być w domu podczas sprzątania?",
        answer:
          "Sposób udostępnienia mieszkania ustalimy wspólnie, tak aby był dla Ciebie wygodny.",
      },
    ],
    // ===== FOOTER =====
    footerText: "Z troską o Twój dom.",
    footerServices: "Poznaj usługi",
  },

  en: {
    services: "Services",
    about: "About me",
    howItWorks: "How it works",
    getQuote: "Request a quote",
    heroTitle: "A clean home. More time for yourself.",
    heroArea: "KAMIEŃ POMORSKI AND SURROUNDING AREAS",
    heroIntro:
      "Leave the cleaning to me. I’ll take care of your home while you spend time doing what you love.",
    heroNote: "One-off or regular cleaning. Whatever you need.",
    heroImageAlt:
      "A bright, tidy living room with a cream sofa and fresh flowers",
    heroPhotoTitle: "Your home.",
    heroPhotoSubtitle: "In good hands.",
    heroCaption: "A LITTLE CLEANING. A LOT OF PEACE.",
    // ===== PROMISES — блок із галочками =====
    promiseContact: "Direct contact with me",
    promiseScope: "Cleaning tasks agreed before the visit",
    promiseDetails: "Attention to detail",
    aboutEyebrow: "LET’S GET TO KNOW EACH OTHER",
    aboutTitle: "Know who you’re trusting with",
    aboutTitleAccent: "your home.",
    aboutGreeting: "Hi, I’m Maria.",
    aboutParagraph1:
      "I’ve been cleaning homes and workplaces for many years. I know that letting someone into your home takes trust, which is why clear agreements and good communication matter to me.",
    aboutParagraph2:
      "At Czysto u Marii, you speak directly with me. Together, we agree on what you need and what matters most to you.",
    aboutDetail: "Every home is different.",
    aboutDetailStrong: "First I listen, then I clean.",
    servicesEyebrow: "HOW I CAN HELP",
    servicesTitle: "A clean space, on your terms.",
    servicesIntro: "From everyday cleaning to a thorough refresh of your home.",
    serviceCards: [
      {
        title: "Regular cleaning",
        description:
          "A clean kitchen, bathroom and living spaces. We’ll agree on the tasks and frequency that suit your routine.",
        linkText: "I’d like regular help",
      },
      {
        title: "One-off cleaning",
        description:
          "An extra pair of hands when you need it. Before the visit, we’ll discuss which areas need special attention.",
        linkText: "Let’s plan a clean",
      },
      {
        title: "Office cleaning",
        description:
          "A tidy place to work. We’ll agree on the tasks and a convenient cleaning time.",
        linkText: "Ask about office cleaning",
      },
    ],
    // ===== CONTACT FORM =====
    contactEyebrow: "LET’S START WITH A CONVERSATION",
    contactTitle: "Less cleaning.",
    contactTitleAccent: "More living.",
    contactIntro: "Tell me what you need.",
    contactIntroSecond: "It’s the first step towards getting a quote.",
    contactLocation: "Location",
    contactArea: "Area (m²)",
    contactService: "Type of cleaning",
    contactDetails: "Anything else I should know?",
    contactOptional: "(optional)",
    contactDetailsPlaceholder: "Tell me what matters most to you.",
    contactButton: "Prepare e-mail",
    contactNote:
      "Your e-mail app will open with a ready-to-send message. Send it to get in touch with me. You can also call me.",
    contactInquiry: "Your inquiry",
    contactOpenEmail: "Open e-mail",
    contactCopy: "Copy message",
    // ===== HOW IT WORKS =====
    howEyebrow: "SIMPLE AND STRAIGHTFORWARD",
    howTitle: "Three steps to a clean home.",
    howSteps: [
      {
        title: "Tell me about your home",
        description:
          "Tell me your location, approximate home size and the type of cleaning you need.",
      },
      {
        title: "We’ll agree on the details",
        description:
          "We’ll discuss the scope, price, date, and any cleaning products or equipment needed.",
      },
      {
        title: "Relax and enjoy your time",
        description:
          "I’ll take care of the agreed cleaning tasks, while you enjoy some time for yourself.",
      },
    ],
    // ===== FAQ =====
    faqEyebrow: "GOOD TO KNOW",
    faqTitle: "Have questions?",
    faqItems: [
      {
        question: "Do you bring your own cleaning products and equipment?",
        answer:
          "We’ll agree on this before the first visit. We’ll discuss which cleaning products are needed and whether a vacuum cleaner and mop are available at your home.",
      },
      {
        question: "How much does cleaning cost?",
        answer:
          "The price depends on the size of your home, the scope of work and the frequency of cleaning. Each quote is individual — we’ll agree on the price before the cleaning begins.",
      },
      {
        question: "Where do you offer cleaning services?",
        answer:
          "In Kamień Pomorski and the surrounding areas. Tell me your location when you contact me, and I’ll confirm whether I can travel to you.",
      },
      {
        question: "Do I need to be at home during the cleaning?",
        answer:
          "We’ll agree together on a convenient way for me to access your home.",
      },
    ],
    // ===== FOOTER =====
    footerText: "With care for your home.",
    footerServices: "Explore services",
  },

  uk: {
    services: "Послуги",
    about: "Про мене",
    howItWorks: "Як це працює",
    getQuote: "Дізнатися вартість",
    heroTitle: "Чистий дім. Більше часу для себе.",
    heroArea: "КАМЕНЬ-ПОМОРСЬКИЙ ТА ОКОЛИЦІ",
    heroIntro:
      "Залиш прибирання мені. Я подбаю про твій дім, а ти займайся тим, що справді любиш.",
    heroNote: "Разове або регулярне прибирання. Як тобі зручно.",
    heroImageAlt:
      "Світла, охайна вітальня з кремовим диваном і свіжими квітами",
    heroPhotoTitle: "Твій дім.",
    heroPhotoSubtitle: "У надійних руках.",
    heroCaption: "ТРОХИ ПОРЯДКУ. БАГАТО СПОКОЮ.",
    // ===== PROMISES — блок із галочками =====
    promiseContact: "Особистий контакт зі мною",
    promiseScope: "Обсяг робіт узгоджуємо перед візитом",
    promiseDetails: "Увага до деталей",
    aboutEyebrow: "ПОЗНАЙОММОСЯ",
    aboutTitle: "Ти знаєш, кому довіряєш",
    aboutTitleAccent: "свій дім.",
    aboutGreeting: "Привіт, я Марія.",
    aboutParagraph1:
      "Я багато років займаюся прибиранням. Знаю, що впустити когось у свій дім — це питання довіри. Тому для мене важливі чіткі домовленості та хороше спілкування.",
    aboutParagraph2:
      "У Czysto u Marii ти спілкуєшся безпосередньо зі мною. Разом ми визначаємо, що тобі потрібно та на що варто звернути особливу увагу.",
    aboutDetail: "Кожен дім особливий.",
    aboutDetailStrong: "Спочатку слухаю, потім прибираю.",
    servicesEyebrow: "ЧИМ МОЖУ ДОПОМОГТИ",
    servicesTitle: "Порядок на твоїх умовах.",
    servicesIntro: "Від щоденного порядку до ретельного прибирання оселі.",
    serviceCards: [
      {
        title: "Регулярне прибирання",
        description:
          "Чиста кухня, ванна та кімнати. Узгодимо перелік робіт і частоту прибирання відповідно до твого ритму життя.",
        linkText: "Потрібна регулярна допомога",
      },
      {
        title: "Разове прибирання",
        description:
          "Коли потрібна додаткова пара рук. Перед візитом визначимо, які місця потребують особливої уваги.",
        linkText: "Заплануймо прибирання",
      },
      {
        title: "Прибирання офісу",
        description:
          "Охайне місце для роботи. Перелік робіт і зручний час прибирання узгодимо індивідуально.",
        linkText: "Запитати про офіс",
      },
    ],
    // ===== HOW IT WORKS =====
    howEyebrow: "БЕЗ ЗАЙВИХ СКЛАДНОЩІВ",
    howTitle: "Три кроки до чистого дому.",
    howSteps: [
      {
        title: "Розкажи про свій дім",
        description:
          "Вкажи місцевість, приблизну площу та вид прибирання, який тобі потрібен.",
      },
      {
        title: "Узгодимо деталі",
        description:
          "Обговоримо обсяг робіт, вартість, дату, а також необхідні засоби та обладнання.",
      },
      {
        title: "Відпочинь і розслабся",
        description:
          "Я подбаю про узгоджені роботи, а ти матимеш трохи часу для себе.",
      },
    ],
    // ===== FAQ =====
    faqEyebrow: "ВАРТО ЗНАТИ",
    faqTitle: "Маєш запитання?",
    faqItems: [
      {
        question: "Ти привозиш власні засоби та обладнання?",
        answer:
          "Домовимося про це перед першим візитом. Обговоримо, які засоби потрібні та чи є на місці пилосос і швабра.",
      },
      {
        question: "Скільки коштує прибирання?",
        answer:
          "Ціна залежить від площі, обсягу робіт і частоти прибирання. Вартість визначається індивідуально — узгодимо її перед початком прибирання.",
      },
      {
        question: "Де ти надаєш послуги прибирання?",
        answer:
          "У Камені-Поморському та околицях. Вкажи населений пункт у запиті, і я підтверджу можливість приїзду.",
      },
      {
        question: "Чи потрібно мені бути вдома під час прибирання?",
        answer:
          "Ми разом узгодимо зручний для тебе спосіб доступу до помешкання.",
      },
    ],
    // ===== FOOTER =====
    footerText: "З турботою про твій дім.",
    footerServices: "Переглянути послуги",

    // ===== CONTACT FORM =====
    contactEyebrow: "ПОЧНІМО З РОЗМОВИ",
    contactTitle: "Менше прибирання.",
    contactTitleAccent: "Більше життя.",
    contactIntro: "Опиши, що тобі потрібно.",
    contactIntroSecond: "Це перший крок до визначення вартості.",
    contactLocation: "Місцевість",
    contactArea: "Площа (м²)",
    contactService: "Вид прибирання",
    contactDetails: "Що ще варто знати?",
    contactOptional: "(необов’язково)",
    contactDetailsPlaceholder: "Напиши, що для тебе найважливіше.",
    contactButton: "Підготувати e-mail",
    contactNote:
      "Відкриється твоя поштова програма з готовим запитом. Надішли його, щоб зв’язатися зі мною. Також можеш зателефонувати.",
    contactInquiry: "Твій запит",
    contactOpenEmail: "Відкрити e-mail",
    contactCopy: "Копіювати текст",
  },

  de: {
    services: "Leistungen",
    about: "Über mich",
    howItWorks: "So funktioniert’s",
    getQuote: "Angebot anfragen",
    heroTitle: "Ein sauberes Zuhause. Mehr Zeit für dich.",
    heroArea: "KAMIEŃ POMORSKI UND UMGEBUNG",
    heroIntro:
      "Überlass mir die Reinigung. Ich kümmere mich um dein Zuhause, während du Zeit für das hast, was du liebst.",
    heroNote: "Einmalig oder regelmäßig. So, wie du es brauchst.",
    heroImageAlt:
      "Ein helles, aufgeräumtes Wohnzimmer mit einem cremefarbenen Sofa und frischen Blumen",
    heroPhotoTitle: "Dein Zuhause.",
    heroPhotoSubtitle: "In guten Händen.",
    heroCaption: "MEHR ORDNUNG. MEHR RUHE.",
    // ===== PROMISES — блок із галочками =====
    promiseContact: "Persönlicher Kontakt mit mir",
    promiseScope: "Leistungsumfang vor dem Termin vereinbart",
    promiseDetails: "Liebe zum Detail",
    aboutEyebrow: "LERNEN WIR UNS KENNEN",
    aboutTitle: "Du weißt, wem du",
    aboutTitleAccent: "dein Zuhause anvertraust.",
    aboutGreeting: "Hallo, ich bin Maria.",
    aboutParagraph1:
      "Ich arbeite seit vielen Jahren in der Reinigung. Ich weiß, dass es Vertrauen braucht, jemanden in sein Zuhause zu lassen. Deshalb sind mir klare Absprachen und eine gute Kommunikation wichtig.",
    aboutParagraph2:
      "Bei Czysto u Marii sprichst du direkt mit mir. Gemeinsam besprechen wir, was du brauchst und was dir besonders wichtig ist.",
    aboutDetail: "Jedes Zuhause ist anders.",
    aboutDetailStrong: "Erst höre ich zu, dann mache ich sauber.",
    servicesEyebrow: "WOBEI ICH HELFEN KANN",
    servicesTitle: "Sauberkeit nach deinen Wünschen.",
    servicesIntro:
      "Von der regelmäßigen Reinigung bis zum gründlichen Hausputz.",
    serviceCards: [
      {
        title: "Regelmäßige Reinigung",
        description:
          "Eine saubere Küche, ein sauberes Bad und gepflegte Wohnräume. Umfang und Häufigkeit stimmen wir auf deinen Alltag ab.",
        linkText: "Ich suche regelmäßige Hilfe",
      },
      {
        title: "Einmalige Reinigung",
        description:
          "Unterstützung, wenn du sie brauchst. Vor dem Besuch besprechen wir, welche Bereiche besondere Aufmerksamkeit benötigen.",
        linkText: "Reinigung planen",
      },
      {
        title: "Büroreinigung",
        description:
          "Ein aufgeräumter Arbeitsplatz. Den Umfang und einen passenden Reinigungstermin vereinbaren wir individuell.",
        linkText: "Büroreinigung anfragen",
      },
    ],
    // ===== CONTACT FORM =====
    contactEyebrow: "LASS UNS INS GESPRÄCH KOMMEN",
    contactTitle: "Weniger putzen.",
    contactTitleAccent: "Mehr leben.",
    contactIntro: "Erzähl mir, was du brauchst.",
    contactIntroSecond: "Das ist der erste Schritt zu deinem Angebot.",
    contactLocation: "Ort",
    contactArea: "Fläche (m²)",
    contactService: "Art der Reinigung",
    contactDetails: "Was sollte ich noch wissen?",
    contactOptional: "(optional)",
    contactDetailsPlaceholder: "Schreib mir, was dir besonders wichtig ist.",
    contactButton: "E-Mail vorbereiten",
    contactNote:
      "Deine E-Mail-App öffnet sich mit einer vorbereiteten Anfrage. Sende sie ab, um mich zu kontaktieren. Du kannst mich auch anrufen.",
    contactInquiry: "Deine Anfrage",
    contactOpenEmail: "E-Mail öffnen",
    contactCopy: "Text kopieren",
    // ===== HOW IT WORKS =====
    howEyebrow: "GANZ OHNE KOMPLIKATIONEN",
    howTitle: "Drei Schritte zu einem sauberen Zuhause.",
    howSteps: [
      {
        title: "Erzähl mir von deinem Zuhause",
        description:
          "Nenne mir deinen Wohnort, die ungefähre Wohnfläche und die gewünschte Art der Reinigung.",
      },
      {
        title: "Wir klären die Details",
        description:
          "Wir besprechen Umfang, Preis, Termin sowie die benötigten Reinigungsmittel und Geräte.",
      },
      {
        title: "Lehn dich zurück und entspann dich",
        description:
          "Ich kümmere mich um die vereinbarten Arbeiten und du hast mehr Zeit für dich.",
      },
    ],
    // ===== FAQ =====
    faqEyebrow: "GUT ZU WISSEN",
    faqTitle: "Noch Fragen?",
    faqItems: [
      {
        question: "Bringst du eigene Reinigungsmittel und Geräte mit?",
        answer:
          "Das klären wir vor dem ersten Termin. Wir besprechen, welche Reinigungsmittel benötigt werden und ob vor Ort ein Staubsauger und ein Wischmopp vorhanden sind.",
      },
      {
        question: "Wie viel kostet die Reinigung?",
        answer:
          "Der Preis hängt von der Wohnfläche, dem Arbeitsumfang und der Häufigkeit der Reinigung ab. Jedes Angebot wird individuell erstellt — den Preis vereinbaren wir vor Beginn der Reinigung.",
      },
      {
        question: "Wo bietest du deine Reinigungsdienste an?",
        answer:
          "In Kamień Pomorski und Umgebung. Nenne mir deinen Wohnort in deiner Anfrage, dann bestätige ich dir, ob eine Anfahrt möglich ist.",
      },
      {
        question: "Muss ich während der Reinigung zu Hause sein?",
        answer:
          "Wir vereinbaren gemeinsam eine für dich bequeme Möglichkeit, wie ich Zugang zu deinem Zuhause bekomme.",
      },
    ],
    // ===== FOOTER =====
    footerText: "Mit Sorgfalt für dein Zuhause.",
    footerServices: "Leistungen entdecken",
  },
};
