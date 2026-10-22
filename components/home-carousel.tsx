"use client";

import { useEffect, useRef } from "react";

// Edit this list to change which photos appear in the hero carousel.
const photos = [
  { src: "/carousel/muay-thai-crew.jpeg", alt: "Friends after a Muay Thai session" },
  { src: "/carousel/waterfall.jpeg", alt: "A waterfall in a green mountain valley" },
  { src: "/carousel/cafe-friends.jpeg", alt: "Friends gathered at a cafe" },
  { src: "/carousel/island-beach.jpeg", alt: "A tropical island beach" },
  { src: "/carousel/japan-snow.jpeg", alt: "A snowy mountain resort in Japan" },
  { src: "/carousel/gloves-and-fruit.jpeg", alt: "Boxing gloves and tropical fruit" },
  { src: "/carousel/longtail-boats.jpeg", alt: "Longtail boats beside limestone cliffs" },
  { src: "/carousel/sunset-ocean.jpeg", alt: "A vivid sunset over the ocean" },
  { src: "/carousel/wild-beach.jpeg", alt: "A quiet tropical beach" },
];

export function HomeCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = scroller.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const move = () => {
      if (!paused.current) {
        el.scrollLeft += 0.9;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft -= el.scrollWidth / 2;
      }
      frame = requestAnimationFrame(move);
    };
    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, []);

  const pause = () => {
    paused.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };

  const resume = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      paused.current = false;
    }, 1800);
  };

  return (
    <div
      className="hero-carousel"
      ref={scroller}
      aria-label="More Life moments"
      onPointerDown={pause}
      onPointerUp={resume}
      onPointerCancel={resume}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="hero-carousel-track">
        {[...photos, ...photos].map((photo, index) => (
          <img
            key={`${photo.src}-${index}`}
            src={photo.src}
            alt={index < photos.length ? photo.alt : ""}
            aria-hidden={index >= photos.length}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}
