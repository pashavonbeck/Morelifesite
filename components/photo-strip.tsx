"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

// Film-style swipe gallery: square polaroid frames, loops continuously,
// tap a photo to open it large. Pass plain paths, or { src, place } to print
// a caption under a photo.
type Photo = string | { src: string; place?: string };

const ROT = [-3, 2.2, -1.4, 3, -2, 1.6];
const DROP = [6, 22, 0, 16, 10, 2];

export function PhotoStrip({ photos: input, label, foot, auto }: { photos: Photo[]; label?: string; foot?: string; auto?: boolean }) {
  const items = input.map((p) => (typeof p === "string" ? { src: p, cap: "" } : { src: p.src, cap: p.place ?? "" }));
  const n = items.length;
  const track = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  // Three copies of the set; keep the scroll position in the middle copy so it never ends.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const setW = () => el.scrollWidth / 3;
    el.style.scrollSnapType = "none";
    el.scrollLeft = setW();
    requestAnimationFrame(() => (el.style.scrollSnapType = ""));
    let busy = false;
    const onScroll = () => {
      if (busy) return;
      const w = setW();
      if (el.scrollLeft < w * 0.5) { busy = true; el.style.scrollSnapType = "none"; el.scrollLeft += w; }
      else if (el.scrollLeft > w * 1.5) { busy = true; el.style.scrollSnapType = "none"; el.scrollLeft -= w; }
      if (busy) requestAnimationFrame(() => { el.style.scrollSnapType = ""; busy = false; });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [n]);

  // Slow auto-drift (moving banner). Pauses while touched, hovered, or a photo is open.
  const paused = useRef(false);
  useEffect(() => { paused.current = open !== null; }, [open]);
  useEffect(() => {
    const el = track.current;
    if (!auto || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.classList.add("is-auto");
    let pos = el.scrollLeft, raf = 0, hold = 0;
    const stop = () => { hold = Date.now() + 2500; };
    const tick = () => {
      if (!paused.current && Date.now() > hold) { pos += 0.6; el.scrollLeft = pos; if (Math.abs(el.scrollLeft - pos) > 2) pos = el.scrollLeft; }
      else pos = el.scrollLeft;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    el.addEventListener("pointerdown", stop); el.addEventListener("touchstart", stop, { passive: true }); el.addEventListener("wheel", stop, { passive: true });
    el.addEventListener("mouseenter", stop); el.addEventListener("mousemove", stop);
    return () => { cancelAnimationFrame(raf); el.classList.remove("is-auto"); };
  }, [auto, n]);

  const move = (d: 1 | -1) => track.current?.scrollBy({ left: d * 280, behavior: "smooth" });
  const step = (d: 1 | -1) => setOpen((o) => (o === null ? o : (o + d + n) % n));
  const all = [...items, ...items, ...items];

  return (
    <section className="photo-strip" aria-label={label ?? "Photo gallery"}>
      {label && <p className="photo-strip-label">{label}</p>}
      <div className="photo-strip-track" ref={track} tabIndex={0}>
        {all.map((it, i) => {
          const k = i % n;
          return (
            <button
              type="button"
              className="polaroid"
              key={i}
              onClick={() => setOpen(k)}
              aria-label={`Open photo ${k + 1}`}
              style={{ "--r": `${ROT[k % ROT.length]}deg`, marginTop: DROP[k % DROP.length] } as CSSProperties}
            >
              <span className="polaroid-img" style={{ backgroundImage: `url('${it.src}')` }} />
              {it.cap && <span className="polaroid-cap">{it.cap}</span>}
            </button>
          );
        })}
      </div>
      <div className="photo-strip-foot">
        <p className="photo-strip-wish">{foot ?? "Wish you were here xx"}</p>
        <div>
          <button type="button" onClick={() => move(-1)} aria-label="Previous photos">&larr;</button>
          <button type="button" onClick={() => move(1)} aria-label="Next photos">&rarr;</button>
        </div>
      </div>
      {open !== null && (
        <div className="ps-lightbox" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <div className="ps-frame" onClick={(e) => e.stopPropagation()}>
            <span className="ps-img" style={{ backgroundImage: `url('${items[open].src}')` }} />
            {items[open].cap && <span className="polaroid-cap">{items[open].cap}</span>}
          </div>
          <button type="button" className="ps-nav ps-prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous">&larr;</button>
          <button type="button" className="ps-nav ps-next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next">&rarr;</button>
          <button type="button" className="ps-close" onClick={() => setOpen(null)} aria-label="Close">&times;</button>
        </div>
      )}
    </section>
  );
}
