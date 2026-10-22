import { site } from "@/content/site";

// TODO(Tally): once each trip has its own Tally form, set that trip's
// `tallyFormUrl` in content/trips.ts. When it's set, swap the <a> below
// for a Tally embed/popup using that URL (Tally's own embed script, or
// a link to their popup trigger, both work here) — the rest of the
// trip page doesn't need to change.
//
// TODO(Booking): once the WeTravel (or Stripe) checkout link exists,
// pass it as `bookingUrl` (content/trips.ts, or directly on the Japan
// tier pages). Until then "Book now" falls back to the contact page so
// the button is never a dead link.
export function ExpressInterest({
  tallyFormUrl,
  tripTitle,
  bookingUrl = null,
  hideBook = false,
  label = "Register interest",
}: {
  tallyFormUrl: string | null;
  tripTitle: string;
  bookingUrl?: string | null;
  hideBook?: boolean;
  label?: string;
}) {
  const book = bookingUrl ? (
    <a className="outline-button" href={bookingUrl} target="_blank" rel="noreferrer">
      Book now <span className="clean-arrow">→</span>
    </a>
  ) : (
    <a className="outline-button" href="/contact">
      Book now <span className="clean-arrow">→</span>
    </a>
  );

  // Register-interest link: the trip's own Tally form if set, otherwise
  // the overall Tally registration form, mailto only as a last resort.
  const formUrl = tallyFormUrl || site.registerInterestUrl || site.mailingListUrl;
  const register = formUrl ? (
    <a className="outline-button" href={formUrl} target="_blank" rel="noreferrer">
      {label} <span className="clean-arrow">→</span>
    </a>
  ) : (
    <a
      className="outline-button"
      href={`mailto:${site.contactEmail}?subject=${encodeURIComponent(
        `Interested in ${tripTitle}`
      )}`}
    >
      {label} <span className="clean-arrow">→</span>
    </a>
  );

  return (
    <div className="cta-row">
      {!hideBook && book}
      {register}
    </div>
  );
}
