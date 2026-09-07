export default function Hero() {
  return (
<section className="hero wrap">
<div className="hero-copy">
<p className="eyebrow">
<span aria-hidden="true">⌖</span> KAMIEŃ POMORSKI I OKOLICE</p>
<h1>Czysty dom.<br />Więcej czasu<br />
<em>dla siebie.</em>
</h1>
<p className="intro">Zostaw sprzątanie w moich rękach.<br />Zadbam o Twój dom, a Ty zajmij się tym,<br className="desktop" /> co naprawdę lubisz.</p>
<a className="button" href="#kontakt">Zapytaj o wycenę <span aria-hidden="true">↗</span>
</a>
<p className="hero-note">Jednorazowo lub regularnie. Tak, jak potrzebujesz.</p>
</div>
<div className="hero-visual">
<img src={`${import.meta.env.BASE_URL}images/hero.webp`} alt="Jasny, uporządkowany salon z kremową sofą i świeżymi kwiatami" width="1536" height="1024" fetchPriority="high" />
<div className="photo-note">
<span aria-hidden="true">✳</span>
<p>Twój dom.<br />
<strong>W dobrych rękach.</strong>
</p>
</div>
<span className="image-caption">MAŁE PORZĄDKI. WIELKI SPOKÓJ.</span>
</div>
</section>
  );
}
