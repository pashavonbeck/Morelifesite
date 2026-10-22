import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQs | More Life Collective",
  description:
    "Answers about More Life Collective trips: coming solo, crew size, gear, rooms, flights, pricing, booking and what happens if there's no snow.",
  openGraph: { title: "FAQs | More Life Collective", description: "Answers about More Life Collective trips: coming solo, crew size, gear, rooms, flights, pricing, booking and what happens if there's no snow." },
};

export default function Page() {
  return (
    <main>
      <Header light />
      <section className="page-hero cream-hero compact">
        <p className="section-label">FAQs</p>
        <h1>Good questions.</h1>
      </section>
      <section className="faq-list">
        {faqs.map(([q, a], i) => (
          <details key={q}>
            <summary>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {q}
              <b>+</b>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
      <Footer />
    </main>
  );
}
