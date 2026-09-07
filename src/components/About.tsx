export default function About() {
  return (
    <section id="o-mnie" className="about">
      <div className="wrap about-grid">
        <div className="about-title">
          <p className="eyebrow">POZNAJMY SIĘ</p>
          <h2 className="about-heading">
            Wiesz, komu powierzasz{" "}
            <span className="about-heading-accent">swój dom.</span>
          </h2>
          <span className="signature">Maria</span>
        </div>
        <div className="about-copy">
          <h3>Cześć, jestem Maria.</h3>
          <p>
            Od wielu lat zajmuję się sprzątaniem. Wiem, że wpuszczenie kogoś do
            swojego domu wymaga zaufania — dlatego zależy mi na jasnych
            ustaleniach i dobrym kontakcie.
          </p>
          <p>
            W Czysto u Marii rozmawiasz bezpośrednio ze mną. Wspólnie ustalamy,
            czego potrzebujesz i na czym najbardziej Ci zależy.
          </p>
          <div className="about-detail">
            <span aria-hidden="true">✳</span>
            <p>
              Każdy dom jest inny.
              <br />
              <strong>Najpierw słucham, potem sprzątam.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
