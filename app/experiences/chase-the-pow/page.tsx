import type { Metadata } from "next";
import { JapanFlag, Snow } from "@/components/japan-flair";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ExpressInterest } from "@/components/express-interest";
import { PhotoStrip } from "@/components/photo-strip";
import { Itinerary } from "@/components/itinerary";
import { chaseItinerary } from "@/content/japan";
import { Drop, RichBody, RichDrop, TierBlock } from "@/components/tier";
import { PhotoMarquee } from "@/components/photo-marquee";
import { FinerDetails } from "@/components/finer-details";
import { GroupChatPass } from "@/components/group-chat-pass";
import { finerDetails, itineraryIntro, notIncluded, pricing, strippedBack } from "@/content/trip-terms";
const image = "/images/chase-hero.jpg";
const bannerPhotos = ["/gallery/p1.jpg", "/gallery/p2.jpg", "/gallery/p3.jpg", "/gallery/p4.jpg", "/gallery/p5.jpg", "/gallery/p6.jpg", "/gallery/p7.jpg", "/gallery/p8.jpg", "/gallery/p9.jpg", "/gallery/p10.jpg", "/gallery/p11.jpg", "/gallery/p12.jpg", "/gallery/p13.jpg", "/gallery/p14.jpg", "/gallery/p15.jpg", "/gallery/p16.jpg", "/gallery/p17.jpg", "/gallery/p18.jpg", "/gallery/p19.jpg"];
const wishPhotos = ["/gallery/q1.jpg", "/gallery/q2.jpg", "/gallery/q3.jpg", "/gallery/q4.jpg", "/gallery/q5.jpg", "/gallery/q6.jpg", "/gallery/q7.jpg", "/gallery/q8.jpg"];

export const metadata: Metadata = {
  title: "Chase the Pow | Hokkaido powder trip, Japan",
  description:
    "Five days chasing deep powder in Hokkaido with a small crew and a guided backcountry day. 6 – 13 Feb 2027, for intermediate+ riders.",
  openGraph: { title: "Chase the Pow | Hokkaido powder trip, Japan", description: "Five days chasing deep powder in Hokkaido with a small crew and a guided backcountry day. 6 – 13 Feb 2027, for intermediate+ riders." },
};

export default function Page() {
  return (
    <main>
      <Header />
      <section className={`trip-detail-hero hero-chase`} style={{ backgroundImage: `url('${image}')` }}>
        <Snow />
        <div>
          <p className="section-label"><JapanFlag />Hokkaido, Japan</p>
          <h1>CHASE THE POW</h1>
          <p className="tier-meta">
            6 &ndash; 13 February 2027<br />
            7 nights &middot; Intermediate+<br />
            Limited spots
          </p>
          <ExpressInterest hideBook tallyFormUrl={null} tripTitle="CHASE THE POW" />
        </div>
      </section>

      <TierBlock heading={<><JapanFlag />Welcome to Japan &ndash; JAPOW.</>}>
        <p>
          Home to some of the freshest, deepest powder on Earth, where mornings start with
          convenience-store runs, days are spent chasing fresh snow, and nights are fuelled by
          steaming bowls of ramen, natural onsens and questionable karaoke performances.
        </p>
      </TierBlock>

      <TierBlock tone="oat" heading="The experience" headingClass="tier-xl">
        <p>
          Five days chasing deeper snow, epic tree runs and new terrain in Hokkaido, with a crew
          that can keep up. Your price includes a professionally guided backcountry day with a
          qualified local guide, taking you beyond the resort runs.
        </p>
        <p>
          <strong>Who it&rsquo;s for:</strong> confident intermediate and advanced skiers and
          snowboarders. You should be able to link turns, control your speed and ride intermediate
          terrain in different snow conditions. This isn&rsquo;t a learn-to-ride experience.
        </p>
        <p className="coming-note">
          The backcountry day is subject to conditions and approval from the guide.
        </p>
      </TierBlock>

      <PhotoStrip photos={wishPhotos} auto label="Photos I sent to the group chat" foot="Wish you were here xx" />

      <TierBlock label="The details">
        <Drop
          title="What's included"
          defaultOpen
          items={[
            "7 nights\u2019 accommodation \u2013 in a social lodge or hostel-style mountain base, close to the action",
            "Daily breakfast",
            "5-day lift pass",
            "Professionally guided backcountry experience",
            "Three group dinners",
            "Group onsen experience",
            "Apr\u00e8s and group night out",
            "More Life welcome pack",
            "More Life host",
            "Free time to explore, recover or keep riding",
            "A crew to chase the pow with \ud83e\udd18\ud83c\udffd",
          ]}
        />
        <Drop title="What's not included" items={notIncluded} />
        <RichDrop title="Your mountain base" blocks={[{ p: strippedBack.paras }]} />
      </TierBlock>

      <Itinerary days={chaseItinerary} intro={itineraryIntro} hideNote />

      <TierBlock tone="beige" heading="Pricing">
        <RichBody blocks={pricing.chase} />
      </TierBlock>

      <GroupChatPass tripTitle="CHASE THE POW" variant="chase" />

      <FinerDetails sections={finerDetails.chase} />

      <PhotoMarquee photos={bannerPhotos} />

      <Footer />
    </main>
  );
}
