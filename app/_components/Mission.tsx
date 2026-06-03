export default function Mission() {
  return (
    <section id="mission">
      <div className="section-inner">
        <div className="mission-grid">
          <div>
            <div className="mission-eyebrow reveal">Our Mission</div>
            <h2 className="mission-heading reveal reveal-delay-1">
              Dance is for <em>everyone</em> — regardless of means.
            </h2>
            <p className="mission-body reveal reveal-delay-2">
              The No Boundaries Dance Foundation, Inc. provides opportunities
              for the disadvantaged of all ages, with a focus on dance training.
              Through our organization, we provide weekly classes, nutritional
              meals, and performance opportunities for children in the Inland
              Empire who are unable to financially attend.
            </p>
            <p className="mission-body reveal reveal-delay-2">
              We hold fundraisers throughout the year to provide funding for the
              dancers — supported by volunteers, the board, and local
              businesses.
            </p>
            <a
              href="#contact"
              className="btn-primary reveal reveal-delay-3"
              style={{ marginTop: 32, display: "inline-block" }}
            >
              Get Involved
            </a>
          </div>
          <div className="mission-img-wrap reveal reveal-delay-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/uploads/mission-sequins.jpg"
              alt="Group of young dancers in sequined costumes laughing together"
            />
            <div className="mission-img-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
