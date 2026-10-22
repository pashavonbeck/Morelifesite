import Link from "next/link";

// Round passport-style "Ride and Ramen" stamp, shown under the
// experience cards on the home page. Pure inline SVG so it inherits the
// site fonts and colours.
export function ViewStamp({ id = "a" }: { id?: string }) {
  return (
    <div className="view-stamp-wrap">
      <Link className="view-stamp" href="/experiences/japan" aria-label="Ride and Ramen">
        <svg viewBox="0 0 160 160" aria-hidden="true">
          <defs>
            <path id={`viewStampArc-${id}`} d="M80,80 m-57,0 a57,57 0 1,1 114,0 a57,57 0 1,1 -114,0" />
          </defs>
          <circle cx="80" cy="80" r="76" fill="none" stroke="currentColor" strokeWidth="4" />
          <circle cx="80" cy="80" r="44" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <text fontSize="12" fontWeight="700" fill="currentColor">
            <textPath href={`#viewStampArc-${id}`} textLength="350" lengthAdjust="spacing">
              RIDE AND RAMEN ✦ RIDE AND RAMEN ✦{" "}
            </textPath>
          </text>
          <text x="80" y="96" textAnchor="middle" fontSize="44" fontWeight="700" fill="currentColor">
            →
          </text>
        </svg>
      </Link>
    </div>
  );
}
