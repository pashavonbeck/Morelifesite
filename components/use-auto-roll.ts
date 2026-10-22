"use client";

import { useEffect, type RefObject } from "react";

// Slowly rolls a horizontally scrollable row on its own, forever.
// The row's content must be the photo set repeated twice so it can loop.
// Pauses while someone touches/drags/hovers, then carries on. Visitors can
// still swipe it by hand. Deliberately ignores "reduce motion" so it always rolls.
export function useAutoRoll(ref: RefObject<HTMLElement | null>, speed = 0.5) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let paused = false;
    let resume: ReturnType<typeof setTimeout> | undefined;
    let pos = el.scrollLeft;

    const hold = () => { paused = true; if (resume) clearTimeout(resume); };
    const release = (ms: number) => { if (resume) clearTimeout(resume); resume = setTimeout(() => { paused = false; }, ms); };
    const onDown = () => hold();
    const onUp = () => release(2500);
    const onEnter = () => hold();
    const onLeave = () => release(400);
    const onWheel = () => { hold(); release(2500); };

    const tick = () => {
      const half = el.scrollWidth / 2;
      if (half > 0) {
        if (paused) {
          pos = el.scrollLeft;
          if (pos >= half) { pos -= half; el.scrollLeft = pos; }
        } else {
          pos += speed;
          if (pos >= half) pos -= half;
          el.scrollLeft = pos;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    el.addEventListener("touchstart", onDown, { passive: true });
    el.addEventListener("touchend", onUp, { passive: true });
    el.addEventListener("touchcancel", onUp, { passive: true });
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("wheel", onWheel, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      if (resume) clearTimeout(resume);
      el.removeEventListener("touchstart", onDown);
      el.removeEventListener("touchend", onUp);
      el.removeEventListener("touchcancel", onUp);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("wheel", onWheel);
    };
  }, [ref, speed]);
}
