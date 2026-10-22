import Link from "next/link";

// "More than just a trip" closing note on the home page.
export function MoreThanTrip() {
  return (
    <section className="fp-section fp-oat fp-left more-than">
      <div className="fp-inner">
        <h2 className="fp-title">More than just a trip</h2>
        <p>
          Maybe you find a new passion, friendship, different perspective or the confidence to
          finally go after something you&rsquo;ve always wanted to do.
        </p>
        <p>
          Maybe, just maybe, you leave with a little{" "}
          <Link href="/about" className="more-life-link">MORE LIFE</Link> in you.
        </p>
        <Link href="/about" className="text-link">
          Read our story
        </Link>
      </div>
    </section>
  );
}
