import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PassportSticker } from "@/components/passport-sticker";
import { PhotoMarquee } from "@/components/photo-marquee";

// "Our story" — the founder story and the "why we exist" page merged into one.
// (The old /the-founders address redirects here; see next.config.mjs.)
export const metadata: Metadata = {
  title: "Our story | More Life Collective",
  description:
    "Hey, I'm Pasha, founder and host of More Life Collective. Why I quit the nine-to-five, started travelling solo, and built adventure-led group trips for people who want more from life.",
  openGraph: {
    title: "Our story | More Life Collective",
    description:
      "Why More Life Collective exists: adventure-led group travel for people who want more from life.",
    images: ["/images/pashy-banner.jpg"],
  },
};

const bannerPhotos = [
  "/gallery/h6.jpg",
  "/gallery/h2.jpg",
  "/gallery/h3.jpg",
  "/gallery/h4.jpg",
  "/gallery/h5.jpg",
  "/gallery/h1.jpg",
];

export default function Page() {
  return (
    <main className="fp os-page">
      <Header light />

      <div className="os-banner-wrap">
        <img className="os-banner" src="/images/pashy-banner.jpg" alt="Pashy smiling with a camera in the rice terraces" />
        <span className="os-tag">Founder &amp; Host</span>
      </div>

      <section className="fp-section fp-beige os-intro">
        <h1 className="section-label">Our story</h1>
        <p className="os-hey">Hey, I&rsquo;m Pasha but everyone calls me Pashy.</p>
        <p>
          I&rsquo;m someone who chases experiences, movement and anything that makes life feel a
          little bigger.
        </p>
      </section>

      <section className="fp-section fp-beige">
        <div className="fp-inner">
          <p>
            A few years ago my life looked completely different. University, a nine-to-five, a
            corporate career. I was following the plan and ticking all the right boxes. Except I
            wasn&rsquo;t happy. I wanted more from life; I just didn&rsquo;t know what that meant yet.
          </p>
          <h2 className="fp-title fp-caramel" style={{ marginTop: 26 }}>
            In 2023, I started solo travelling;
          </h2>
          <div className="fp-timeline">
            <div className="fp-step">
              <span className="fp-chip">Jan 2024</span>
              <p>
                By January 2024, I&rsquo;d quit my job, sold everything I owned and left my hometown
                in New Zealand with a one-way ticket to Southeast Asia. No plan beyond the first
                week, just going with the flow and seeing where it took me.
              </p>
            </div>
          </div>
          <h3 className="fp-best">Best year of my life.</h3>
          <p>
            Experiencing different cultures and ways of living changed what I valued. The things
            I&rsquo;d spent years chasing mattered less. The people I met, the places I went and the
            things I never thought I&rsquo;d try mattered more.
          </p>
          <p>
            Somewhere along the way, I realised I didn&rsquo;t need much to feel like I had enough.
          </p>
        </div>
      </section>

      <section className="fp-section fp-beige">
        <div className="fp-inner">
          <h2 className="fp-title os-quote">
            &ldquo;I wish I could do that, but I&rsquo;m too scared to go alone.&rdquo;
          </h2>
          <p>
            I kept hearing the same thing every time I spoke about solo travelling. It made me
            wonder how many adventures stay on the bucket list because we&rsquo;re waiting&hellip;
          </p>
          <div
            className="os-board"
            role="img"
            aria-label="Departures board: someone to come with us, delayed. The courage to go solo, delayed. The right time, cancelled."
          >
            <div className="os-board-top">
              <span>Departures</span>
              <span>Bucket list</span>
            </div>
            <div className="os-row">
              <span>Someone to come with us</span>
              <b>Delayed</b>
            </div>
            <div className="os-row">
              <span>The courage to go solo</span>
              <b>Delayed</b>
            </div>
            <div className="os-row">
              <span>The &ldquo;right&rdquo; time</span>
              <b className="x">Cancelled</b>
            </div>
          </div>
        </div>
      </section>

      <section className="fp-section fp-beige">
        <div className="fp-inner">
          <p className="os-cap">What if I could create something that makes it easier to say YES?</p>
          <p>
            To go somewhere you&rsquo;ve always wanted to go, try something completely new and have
            good people to share it with?
          </p>
        </div>
      </section>

      <section className="fp-section fp-oat os-adv">
        <div className="fp-inner fp-bucket-wrap" style={{ marginTop: 0 }}>
          <div>
            <p className="os-born">That&rsquo;s how More Life Collective was born.</p>
            <p className="fp-wonder" style={{ marginBottom: 6 }}>Adventure-led group travel</p>
            <p className="os-small">For those who want more from life</p>
          </div>
          <div className="fp-bucket fp-bucket-ticks" aria-hidden>
            <p className="fp-bucket-title">Who want to&hellip;</p>
            <ul>
              <li>Do epic shit</li>
              <li>See more of the world</li>
              <li>Experience different ways of living</li>
              <li>Have epic people to do it with</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="fp-section fp-beige fp-left os-final">
        <div className="fp-inner">
          <p className="os-cap">That&rsquo;s what More Life Collective is about.</p>
          <p>
            This is more than just a trip. This is about living more and creating a life you&rsquo;re
            excited to live.
          </p>
          <p className="os-excited">
            I&rsquo;m bloody excited you&rsquo;re here.
            <br />
            <span>And I&rsquo;m even more excited to see where we end up.</span>
          </p>
          <div className="os-close">
            <p className="os-signtext">
              <span className="os-more">More life,</span>
              <br />
              <span className="os-more">Pashy xxx</span>
            </p>
            <div className="os-stamp">
              <PassportSticker />
            </div>
          </div>
          <div className="fp-pill-wrap" style={{ textAlign: "left" }}>
            <Link href="/#experiences" className="fp-pill">
              See the experiences <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <PhotoMarquee photos={bannerPhotos} />

      <Footer />
    </main>
  );
}
