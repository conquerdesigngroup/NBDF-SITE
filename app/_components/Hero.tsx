import type { CSSProperties } from "react";

// Splitting the headline into per-word spans so each word can stagger in
// independently. The `--i` custom property drives the animation-delay in
// globals.css. NBSP ( ) inside spans preserves the trailing space when
// each span is `display: inline-block`.
const HEADLINE_LINES: { word: string; em?: boolean }[][] = [
  [{ word: "We’re" }, { word: "on" }, { word: "a" }, { word: "mission" }],
  [{ word: "to" }, { word: "make" }, { word: "their" }, { word: "future" }],
  [{ word: "possible.", em: true }],
];

export default function Hero() {
  let wordIndex = 0;

  return (
    <section id="hero">
      <div className="hero-parallax" id="heroParallax" />

      {/* Drifting mint blobs sit between the parallax bg and the content,
          adding a soft animated glow behind the headline. mix-blend-mode in
          CSS makes them brighten the dark hero rather than cover it. */}
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-tag hero-fade">
          <div className="hero-tag-line" />
          <span>No Boundaries Dance Foundation</span>
        </div>
        <h1 className="hero-headline">
          {HEADLINE_LINES.map((line, lineIdx) => (
            <span key={lineIdx} className="hero-line">
              {line.map((token, tokenIdx) => {
                const i = wordIndex++;
                const style = { "--i": i } as CSSProperties;
                const isLastInLine = tokenIdx === line.length - 1;
                const text = token.word + (isLastInLine ? "" : " ");
                return token.em ? (
                  <em key={tokenIdx} style={style}>
                    {text}
                  </em>
                ) : (
                  <span key={tokenIdx} style={style}>
                    {text}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>
        <p className="hero-sub hero-fade hero-fade-late">
          A non-profit dedicated to expanding access to dance education for
          youth in Moreno Valley and the Inland Empire — removing financial
          barriers one dancer at a time.
        </p>
        <div className="hero-actions hero-fade hero-fade-latest">
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
