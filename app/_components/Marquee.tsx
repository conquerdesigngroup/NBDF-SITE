// Slow horizontal-scrolling strip of ballet/dance terms. The track contains
// the term list duplicated; CSS animates translateX from 0 → -50% so the
// second copy seamlessly takes the place of the first. Server component —
// no JS needed; the loop is pure CSS.

const TERMS = [
  "Pirouette",
  "Tendu",
  "Plié",
  "Arabesque",
  "Allegro",
  "Battement",
  "Chassé",
  "Développé",
  "Grand Jeté",
  "Fouetté",
];

export default function Marquee() {
  // Duplicate so the keyframe can translate -50% and keep the strip full.
  const items = [...TERMS, ...TERMS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((term, i) => (
          <span key={i} className="marquee-item">
            {term}
          </span>
        ))}
      </div>
    </div>
  );
}
