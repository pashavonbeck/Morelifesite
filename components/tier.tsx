import type { ReactNode } from "react";
import type { Block } from "@/content/trip-terms";

// Small building blocks shared by the two Japan experience pages
// (Introduction to Japow, Chase the Pow) so their layouts stay identical.

export function TierBlock({
  label,
  heading,
  headingClass,
  tone,
  children,
}: {
  label?: string;
  heading?: ReactNode;
  headingClass?: string;
  tone?: "tan" | "base" | "sand" | "oat" | "beige";
  children: ReactNode;
}) {
  return (
    <section className={`trip-about${tone ? ` tier-${tone}` : ""}`}>
      <div>
        {label && <p className="section-label">{label}</p>}
        {heading && <h2 className={headingClass}>{heading}</h2>}
      </div>
      <div>{children}</div>
    </section>
  );
}

// Drop-down list (What's included / Optional add-ons / Not included).
export function Drop({
  title,
  items,
  defaultOpen = false,
}: {
  title: string;
  items: string[];
  defaultOpen?: boolean;
}) {
  return (
    <details className="tier-drop" open={defaultOpen}>
      <summary>
        <span>{title}</span>
        <b>+</b>
      </summary>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </details>
  );
}

// Closing call-to-action band.
export function TierCta({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="why-closing trips-closing tier-cta">
      <h2 className="caps-title">{title}</h2>
      <div className="tier-cta-buttons">{children}</div>
    </section>
  );
}

// Drop-down with a bold lead-in per bullet ("What to expect" / "Before you go").
export function ExpectDrop({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <details className="tier-drop">
      <summary>
        <span>{title}</span>
        <b>+</b>
      </summary>
      <ul>
        {items.map(([lead, text]) => (
          <li key={lead}>
            <strong>{lead}</strong> {text}
          </li>
        ))}
      </ul>
    </details>
  );
}

// Drop-down holding headed text blocks (paragraphs and/or bullet lists).
export function RichDrop({ title, blocks }: { title: string; blocks: Block[] }) {
  return (
    <details className="tier-drop rich-drop">
      <summary>
        <span>{title}</span>
        <b>+</b>
      </summary>
      <div className="rich-body">
        {blocks.map((b, i) => (
          <div key={i}>
            {b.h && <h4>{b.h}</h4>}
            {b.ul && (
              <ul>
                {b.ul.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            )}
            {b.p?.map((x) => (
              <p key={x}>{x}</p>
            ))}
          </div>
        ))}
      </div>
    </details>
  );
}

// Visible (not drop-down) version of RichDrop.
export function RichBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="rich-body rich-open">
      {blocks.map((b, i) => (
        <div key={i}>
          {b.h && <h4>{b.h}</h4>}
          {b.ul && (
            <ul>
              {b.ul.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          )}
          {b.p?.map((x) => (
            <p key={x}>{x}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
