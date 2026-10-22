"use client";

import { useRef } from "react";
import { useAutoRoll } from "./use-auto-roll";

// Framed photos that roll along by themselves and can also be swiped
// (home page, under the hero).
export function PhotoSwipe({ photos }: { photos: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  useAutoRoll(ref, 0.5);
  return (
    <div className="photo-swipe" ref={ref} role="region" aria-label="Photos, swipe to see more">
      {[...photos, ...photos].map((src, i) => (
        <div className="ml-frame" key={i} aria-hidden={i >= photos.length || undefined}>
          <img src={src} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  );
}
