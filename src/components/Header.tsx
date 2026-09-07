export default function Header() {
  return (
<header className="header wrap">
<a className="brand" href="#" aria-label="Czysto u Marii — strona główna">
<span className="brand-mark" aria-hidden="true">✳</span>
<span>Czysto <i>u Marii</i>
<small>SPRZĄTANIE Z TROSKĄ</small>
</span>
</a>
<nav aria-label="Menu główne">
<a href="#uslugi">Usługi</a>
<a href="#o-mnie">O mnie</a>
<a href="#jak-to-dziala">Jak to działa</a>
</nav>
<a className="button small" href="#kontakt">Zapytaj o wycenę <span aria-hidden="true">↗</span>
</a>
</header>
  );
}
