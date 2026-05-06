export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-parallax" id="heroParallax" />
      <div className="hero-content">
        <div className="hero-tag">
          <div className="hero-tag-line" />
          <span>No Boundaries Dance Foundation</span>
        </div>
        <h1 className="hero-headline">
          We&apos;re on a mission
          <br />
          to make their future
          <br />
          <em>possible.</em>
        </h1>
        <p className="hero-sub">
          A non-profit dedicated to expanding access to dance education for
          youth in Moreno Valley and the Inland Empire — removing financial
          barriers one dancer at a time.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Support a Dancer
          </a>
          <a href="#mission" className="btn-ghost">
            Our Mission
          </a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
