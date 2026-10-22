import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/content/site";
import { terms, termsMeta } from "@/content/terms";

export const metadata: Metadata = {
  title: "Terms & Conditions | More Life Collective",
  description:
    "Booking terms and cancellation policy for More Life Collective experiences.",
  openGraph: { title: "Terms & Conditions | More Life Collective", description: "Booking terms and cancellation policy for More Life Collective experiences." },
};

// Swap the [email address] placeholder for the real contact email.
const fill = (s: string) => s.replace("[email address]", site.contactEmail);

export default function Page() {
  return (
    <main>
      <Header light />
      <section className="page-hero cream-hero compact">
        <p className="section-label">Terms &amp; Conditions</p>
        <h1>Booking terms.</h1>
        <p className="lead">{termsMeta.title}. Last updated {termsMeta.updated}.</p>
      </section>
      <section className="terms-body">
        {termsMeta.intro.map((t) => <p key={t}>{fill(t)}</p>)}
        {terms.map((s) => (
          <article key={s.n}>
            <h2><span>{s.n}</span>{s.title}</h2>
            {s.blocks.map((b, i) =>
              "p" in b ? <p key={i}>{fill(b.p)}</p>
              : "h" in b ? <h3 key={i}>{b.h}</h3>
              : "ul" in b ? <ul key={i}>{b.ul.map((li) => <li key={li}>{li}</li>)}</ul>
              : (
                <div className="terms-table" key={i}>
                  <table>
                    <thead><tr>{b.table[0].map((c) => <th key={c}>{c}</th>)}</tr></thead>
                    <tbody>{b.table.slice(1).map((r) => <tr key={r[0]}>{r.map((c) => <td key={c}>{c}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              )
            )}
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
