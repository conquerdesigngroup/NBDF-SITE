export default function ParallaxBanner() {
  return (
    <div className="parallax-banner">
      <div className="parallax-banner-bg" id="bannerParallax" />
      <div
        className="parallax-banner-content"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <p className="parallax-quote">
          &ldquo;Every child deserves the chance to{" "}
          <span>move, grow,</span> and discover what they&apos;re capable
          of.&rdquo;
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/uploads/nbdf-logo-square.png"
          alt="No Boundaries Dance Foundation"
          style={{
            height: 72,
            width: "auto",
            opacity: 0.85,
            flexShrink: 0,
            marginLeft: 80,
          }}
        />
      </div>
    </div>
  );
}
