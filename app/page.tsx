import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Link from "next/link";
import { site } from "@/content/site";
import { ExperiencesPass } from "@/components/experiences-pass";
import { MoreThanTrip } from "@/components/more-than-trip";
import { SnowboardStamp } from "@/components/snowboard-stamp";
import { PhotoMarquee } from "@/components/photo-marquee";
import { JapanCards } from "@/components/japan-cards";

const topPhotos = ["/gallery/b1.jpg", "/gallery/b3.jpg", "/gallery/b5.jpg", "/gallery/b7.jpg", "/gallery/b9.jpg", "/gallery/b11.jpg", "/gallery/b13.jpg", "/gallery/b15.jpg", "/gallery/b17.jpg", "/gallery/b19.jpg", "/gallery/b21.jpg", "/gallery/b23.jpg", "/gallery/b25.jpg", "/gallery/b27.jpg", "/gallery/b29.jpg", "/gallery/b31.jpg", "/gallery/b33.jpg"];
const bottomPhotos = ["/gallery/b6.jpg", "/gallery/b10.jpg", "/gallery/b2.jpg", "/gallery/b14.jpg", "/gallery/b8.jpg", "/gallery/b18.jpg", "/gallery/b16.jpg", "/gallery/b24.jpg", "/gallery/b22.jpg", "/gallery/b12.jpg", "/gallery/b28.jpg", "/gallery/b26.jpg", "/gallery/b30.jpg", "/gallery/b4.jpg", "/gallery/b32.jpg"];
const marqueePhotos = ["/gallery/r1.jpg", "/gallery/r2.jpg", "/gallery/r3.jpg", "/gallery/r4.jpg", "/gallery/r5.jpg", "/gallery/r6.jpg", "/gallery/r7.jpg", "/gallery/r8.jpg", "/gallery/r9.jpg", "/gallery/r10.jpg", "/gallery/r11.jpg", "/gallery/r12.jpg", "/gallery/r13.jpg"];

export default function Home() {
  return (
    <main>
      <Header light />

      <section id="top" className="hero">
        <div className="hero-content">
          <p className="eyebrow">Adventure-led experiences</p>
          <img src="/more-life-wordmark.png" alt="More Life Collective" className="hero-wordmark" />
          <div className="hero-bottom">
            <p>For those who want more from life</p>
          </div>
        </div>
      </section>

      <section className="manifesto manifesto-pass" id="story">
        <p className="section-label">Stop waiting to go</p>
        <h2>Life should be experienced.</h2>
        <div className="manifesto-copy">
          <p>
            <strong>
              More Life Collective brings people together through adventure-led group travel.
            </strong>
          </p>
          <p>
            For the curious ones, the adventure seekers and anyone ready to turn their bucket list
            into reality.
          </p>
          <p className="manifesto-gap">
            For anyone who&rsquo;s ever thought:
            <br />
            &ldquo;I&rsquo;d love to do that, but I don&rsquo;t have anyone to go with or don&rsquo;t
            know where to start.&rdquo;
          </p>
        </div>
        <ExperiencesPass>
          <p className="pass-body-line">
            Come solo or bring a mate. Try that thing you&rsquo;ve been talking about, go somewhere
            you&rsquo;ve never been and meet people who are just as up for it.
          </p>
          <p className="pass-body-line">
            First big adventure or your next one? Welcome to More Life.
          </p>
        </ExperiencesPass>
      </section>

      <PhotoMarquee photos={topPhotos} />

      <section className="host-note home-host-note" id="host">
        <div className="host-row">
          <div className="host-copy">
          <p className="section-label">FROM YOUR HOST</p>
          <p>When I told my friends about More Life Collective, almost all of them said:</p>
          <p className="host-quote-line">&ldquo;This is so you, Pashy.&rdquo;</p>
          <p>And they were right.</p>
          <p>
            Nothing makes me happier than bringing people together to try something new. I want
            travel to change what &ldquo;more&rdquo; can mean to you: to challenge you beyond what you
            already know and show you how to live a life you&rsquo;re excited to live.
          </p>
          <p>This is about living more.</p>
          <Link href="/about" className="text-link">
            Read my story
          </Link>
          </div>
        </div>
      </section>

      <PhotoMarquee photos={marqueePhotos} />

      <section className="trips" id="experiences">
        <div className="section-head">
          <div className="section-head-text">
            <p className="section-label japan-label">Japan 2027</p>
            <h2>Ride and Ramen</h2>
            <p className="ride-tagline">RIDE • RAMEN • REPEAT</p>
          </div>
          <svg className="head-stamp" viewBox="0 0 120 120" aria-hidden>
            <defs>
              <path id="stampArcHead" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" />
            </defs>
            <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
            <text fontSize="11" fontWeight="700" fill="currentColor">
              <textPath href="#stampArcHead" textLength="262" lengthAdjust="spacing">
                MORE LIFE ✦ ARRIVED ✦{" "}
              </textPath>
            </text>
            <text x="60" y="66" textAnchor="middle" fontSize="17" fontWeight="700" fill="currentColor">
              YES
            </text>
          </svg>
        </div>
        <JapanCards />
        <a href={site.registerInterestUrl || site.mailingListUrl} target="_blank" rel="noreferrer" className="board-button" aria-label="Let's ride: register your interest in the Japan trips">
          <SnowboardStamp />
        </a>
      </section>

      <MoreThanTrip />


      <section className="join" id="join">
        <p className="section-label">Your next adventure starts here</p>
        <h2>Want in?</h2>
        <p>Our first experiences in 2027 are open for interest. Register for first access.</p>
        <div className="join-cta">
          <a className="join-button" href={site.registerInterestUrl || site.mailingListUrl} target="_blank" rel="noreferrer">
            Register interest <span className="clean-arrow">→</span>
          </a>
        </div>
      </section>

      <PhotoMarquee photos={bottomPhotos} />

      <Footer />
    </main>
  );
}
