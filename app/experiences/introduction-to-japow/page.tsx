import type { Metadata } from "next";
import Link from "next/link";
import { JapanFlag, Snow } from "@/components/japan-flair";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ExpressInterest } from "@/components/express-interest";
import { PhotoStrip } from "@/components/photo-strip";
import { PhotoMarquee } from "@/components/photo-marquee";
import { Itinerary } from "@/components/itinerary";
import { introItinerary } from "@/content/japan";
import { Drop, RichBody, RichDrop, TierBlock } from "@/components/tier";
import { FinerDetails } from "@/components/finer-details";
import { GroupChatPass } from "@/components/group-chat-pass";
import { finerDetails, itineraryIntro, notIncluded, pricing, strippedBack } from "@/content/trip-terms";

const image = "/images/intro-hero.jpg";
const wishPhotos = ["/gallery/n1.jpg", "/gallery/i3.jpg", "/gallery/n2.jpg", "/gallery/i11.jpg", "/gallery/n3.jpg", "/gallery/n5.jpg", "/gallery/n7.jpg", "/gallery/n4.jpg", "/gallery/n6.jpg", "/gallery/n8.jpg", "/gallery/n9.jpg"];
const bannerPhotos = ["/gallery/m1.jpg", "/gallery/m2.jpg", "/gallery/m3.jpg", "/gallery/m4.jpg", "/gallery/m5.jpg", "/gallery/m6.jpg", "/gallery/m7.jpg", "/gallery/m8.jpg", "/gallery/m9.jpg", "/gallery/m10.jpg", "/gallery/m11.jpg", "/gallery/m12.jpg", "/gallery/m13.jpg"];

export const metadata: Metadata = {
  title: "Introduction to JAPOW | Learn to ski or snowboard in Japan",
  description:
    "Learn to ski or snowboard in Japan with two lessons, a small crew and a host. Introduction to JAPOW, 28 Jan – 4 Feb 2027. Solo travellers welcome.",
  openGraph: { title: "Introduction to JAPOW | Learn to ski or snowboard in Japan", description: "Learn to ski or snowboard in Japan with two lessons, a small crew and a host. Introduction to JAPOW, 28 Jan – 4 Feb 2027. Solo travellers welcome." },
};

export default function Page() {
  return (
    <main>
      <Header />
      <section className={`trip-detail-hero hero-intro`} style={{ backgroundImage: `url('${image}')` }}>
        <Snow />
        <div>
          <p className="section-label"><JapanFlag />Nagano region, Japan</p>
          <h1>INTRODUCTION TO JAPOW</h1>
          <p className="tier-meta">
            28 January &ndash; 4 February 2027<br />
            7 nights &middot; Beginners<br />
            Limited spots
          </p>
          <ExpressInterest hideBook tallyFormUrl={null} tripTitle="INTRODUCTION TO JAPOW" />
        </div>
      </section>

      <TierBlock tone="oat" heading={<><JapanFlag />Welcome to Japan</>}>
        <p className="story-sub">Your snow story starts here</p>
        <p>
          Snowy mountains, 7/11 snacks and steaming bowls of ramen. Days spent learning something
          new, evenings soaking in natural onsens and questionable karaoke performances with people
          you&rsquo;ve only just met.
        </p>
        <p>You&rsquo;ve pictured yourself here. Now you get to give it a go.</p>
      </TierBlock>

      <TierBlock tone="beige" label="From your host, Pashy">
        <div className="fp-timeline host-timeline">
          <div className="fp-step">
            <img className="host-photo" src="/images/host-japow.jpg" alt="Pashy, your More Life host" />
            <span className="fp-chip">February 2024</span>
            <p>
              I went on a solo snowboard trip to Japan after only snowboarding three times. No
              crew, no real plan and no idea what I was getting myself into.
            </p>
            <p>
              I fell in love with it&mdash;the culture, the people, the food and the insane powder.
            </p>
            <p>
              Snow sports can feel like a world you need someone to invite you into. I wanted to open that door&mdash;to make it easier to give it a go, even if you don&rsquo;t know where to start or have anyone to go with.
            </p>
            <p>
              <strong>Now I&rsquo;m heading back for my third trip. This time, you&rsquo;re invited.</strong>
            </p>
          </div>
        </div>
        <Link href="/about" className="text-link">
          Read my full story
        </Link>
      </TierBlock>

      <TierBlock tone="oat">
        <h3 className="story-h first">The experience</h3>
        <p>
          Never skied or snowboarded before? Perfect. Introduction to Japow is your chance to learn
          a snow sport in Japan, with a crew finding their feet alongside you.
        </p>
        <p>
          With five days on the mountain and two lessons included, there&rsquo;s time to
          learn the basics, laugh through the wobbly bits and build your confidence, one run at a
          time.
        </p>
        <h3 className="story-h">Who it&rsquo;s for</h3>
        <p>
          Beginners and early intermediate skiers and snowboarders. Maybe you&rsquo;ve never seen
          snow. Maybe you&rsquo;ve ridden a few times and want to feel more confident.
        </p>
        <p>
          You don&rsquo;t need to be good at it already&mdash;you just need to be up for giving it a
          go.
        </p>
      </TierBlock>

      <PhotoStrip photos={wishPhotos} auto label="Photos I sent to the group chat" foot="Wish you were here xx" />

      <TierBlock label="The details">
        <Drop
          title="What's included"
          defaultOpen
          items={[
            "7 nights\u2019 accommodation",
            "Daily breakfast",
            "Two lessons",
            "5-day lift pass",
            "Three group dinners",
            "Group onsen experience",
            "More Life welcome pack",
            "More Life host",
            "Free time to explore or recover",
            "A crew to experience it with \ud83e\udd18\ud83c\udffd",
          ]}
        />
        <Drop title="What's not included" items={notIncluded} />
        <RichDrop title="Your mountain base" blocks={[{ p: strippedBack.paras }]} />
      </TierBlock>

      <Itinerary days={introItinerary} intro={itineraryIntro} hideNote />

      <TierBlock tone="beige" heading="Pricing">
        <RichBody blocks={pricing.intro} />
      </TierBlock>

      <GroupChatPass tripTitle="INTRODUCTION TO JAPOW" variant="intro" />

      <FinerDetails sections={finerDetails.intro} />

      <PhotoMarquee photos={bannerPhotos} />

      <Footer />
    </main>
  );
}
