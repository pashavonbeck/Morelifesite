"use client";

import { useRef } from "react";
import { useAutoRoll } from "./use-auto-roll";

// Edge-to-edge photo banner that rolls along by itself (home page, before the trips).
export function PhotoMarquee({ photos }: { photos: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  useAutoRoll(ref, 0.6);
  return (
    <div className="photo-marquee" ref={ref} aria-hidden>
      <div className="pm-track">
        {[...photos, ...photos].map((src, i) => (
          <img key={i} src={src} alt="" loading="lazy" />
        ))}
      </div>
    </div>
  );
}
