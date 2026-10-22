import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact | More Life Collective",
  description:
    "Questions about a trip? Get in touch with the More Life Collective team.",
  openGraph: { title: "Contact | More Life Collective", description: "Questions about a trip? Get in touch with the More Life Collective team." },
};

export default function Page() {
  const whatsappHref = site.whatsappNumber
    ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`
    : "";
  return (
    <main>
      <Header light />
      <section className="page-hero cream-hero contact-hero">
        <h1 className="contact-title">Contact</h1>
        <p className="contact-sub-lead">Want more?</p>

        <div className="contact-card">
          <h2 className="contact-sub">Get early access</h2>
          <p className="contact-note">
            New destinations, dates, early-bird news and everything More Life. Got a question? There’s a box for that in the form too.
          </p>
          <a className="join-button" href={site.mailingListUrl} target="_blank" rel="noreferrer">
            Sign up <span className="clean-arrow">→</span>
          </a>
        </div>

        <div className="contact-card">
          <h2 className="contact-sub">Or say hello</h2>
          <p className="contact-note">
            Email{" "}
            <a className="contact-email" href={`mailto:${site.contactEmail}`}>
              {site.contactEmail}
            </a>
            , or message us on WhatsApp or Instagram.
          </p>
          <div className="contact-icons">
            {whatsappHref && (
              <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Message us on WhatsApp">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.2-1.36A9.93 9.93 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.08.8.82-3-.2-.31a8.2 8.2 0 1 1 6.94 3.83Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.56.12-.17.25-.64.8-.78.96-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.24 3.75.59.25 1.06.4 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.23-.17-.48-.29Z"
                  />
                </svg>
                <span>WhatsApp</span>
              </a>
            )}
            <a href={site.instagramUrl} target="_blank" rel="noreferrer" aria-label="Follow us on Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
