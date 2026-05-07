// Photo gallery — 3 grayscale shots that bloom into color on hover.
// Uses the existing reveal animation classes so each tile fades up on
// scroll (ScrollEffects mounted in layout.tsx handles the visibility).

const PHOTOS: { src: string; alt: string }[] = [
  {
    src: "/uploads/gallery-stretching.jpg",
    alt: "Children stretching arms overhead during a dance class",
  },
  {
    src: "/uploads/gallery-teens.jpg",
    alt: "Teenagers practicing choreography in a brick studio",
  },
  {
    src: "/uploads/gallery-playground.jpg",
    alt: "Group of kids cheering with hands raised on a playground",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="section-inner">
        <div className="gallery-grid">
          {PHOTOS.map((photo, i) => (
            <figure
              key={photo.src}
              className={`gallery-item reveal reveal-delay-${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
