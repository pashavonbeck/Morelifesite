import Link from "next/link";
import { bookingTermsLabel, type FinerSection } from "@/content/trip-terms";

// "The finer details" section (three drop-downs) at the very bottom of each Japan page.
export function FinerDetails({ sections }: { sections: FinerSection[] }) {
  const withLink = (text: string) => {
    const i = text.indexOf(bookingTermsLabel);
    if (i === -1) return text;
    return (
      <>
        {text.slice(0, i)}
        <Link href="/terms">{bookingTermsLabel}</Link>
        {text.slice(i + bookingTermsLabel.length)}
      </>
    );
  };
  return (
    <section className="finer-details" aria-label="The finer details">
      <div className="finer-inner">
        <p className="finer-title">The finer details</p>
        <p className="finer-sub">A few things to know before you join us.</p>
        {sections.map((sec) => (
          <details key={sec.h} className="finer-section finer-drop">
            <summary>
              <span>{sec.h}</span>
              <b>+</b>
            </summary>
            {sec.parts.map((part, i) =>
              "ul" in part ? (
                <ul key={i}>
                  {part.ul.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              ) : (
                <p key={i}>{part.link ? withLink(part.p) : part.p}</p>
              )
            )}
          </details>
        ))}
      </div>
    </section>
  );
}
