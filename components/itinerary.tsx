"use client";

import { useRef } from "react";
import { itinerary as defaultDays } from "@/content/japan";
import { itineraryNote } from "@/content/trip-terms";

type Day = { day: string; title: string; line: string; icon: string; image?: string };

// Swipe-through itinerary gallery: one card per day, with a photo.
// To add photos, set `image: "/itinerary/day-1.jpg"` on each day in content/japan.ts
// and drop the files in /public/itinerary. Until then a coloured placeholder shows.
export function Itinerary({
  intro,
  days = defaultDays as Day[],
  hideNote = false,
}: {
  intro?: string[];
  days?: Day[];
  hideNote?: boolean;
}) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 340), behavior: "smooth" });
  };

  return (
    <section className="itin-gallery" aria-label="Itinerary">
      <div className="itin-gallery-head">
        <h2>A week in Japow</h2>
        {intro?.map((x) => (
          <p key={x}>{x}</p>
        ))}
        <p className="itin-swipe">Swipe through the days</p>
      </div>
      <div className="itin-track" ref={track} tabIndex={0}>
        {days.map((d) => (
          <article className="itin-card" key={d.day}>
            <div
              className="itin-photo"
              style={d.image ? { backgroundImage: `url('${d.image}')` } : undefined}
            >
              {!d.image && <span aria-hidden="true">{d.icon}</span>}
              <b>{d.day}</b>
            </div>
            <div className="itin-card-body">
              <h3>{d.title}</h3>
              <p>{d.line}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="itin-controls">
        <div>
          <button type="button" onClick={() => scroll(-1)} aria-label="Previous days">
            &larr;
          </button>
          <button type="button" onClick={() => scroll(1)} aria-label="Next days">
            &rarr;
          </button>
        </div>
      </div>
      {!hideNote && <p className="itin-note">{itineraryNote}</p>}
    </section>
  );
}
