// "Photo diary" contact sheet (home page, after the trips).
const labels = ["First tracks", "Chairlift talk", "Lunch break", "The view", "One more run", "Stay a little"];

export function ContactSheet({ photos }: { photos: string[] }) {
  return (
    <section className="contact-sheet" aria-label="Photo diary">
      <div className="cs-top">
        <span>More Life / Photo diary</span>
        <span>Roll No. 004</span>
      </div>
      <h2 className="cs-title">The good bits.</h2>
      <div className="cs-grid">
        {photos.slice(0, 6).map((src, i) => (
          <figure key={src}>
            <img src={src} alt="" loading="lazy" />
            <figcaption>
              {String(i + 1).padStart(2, "0")} &mdash; {labels[i]}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="cs-foot">Less thinking. More living.</p>
    </section>
  );
}
