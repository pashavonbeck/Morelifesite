"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site, sideMenuLinks } from "@/content/site";

export function HeaderMenu() {
  const [open, setOpen] = useState(false);

  // Close on Escape, and lock page scroll while the panel is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        className="menu-trigger"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span>Menu</span>
        <i />
        <i />
      </button>

      {open && (
        <div className="site-sheet-overlay" onClick={() => setOpen(false)}>
          <div
            className="site-sheet"
            role="dialog"
            aria-modal="true"
            aria-label="All pages"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="site-sheet-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <img className="sheet-logo" src="/more-life-menu-logo.png" alt={site.name} />
            <nav className="sheet-links" aria-label="All pages">
              {sideMenuLinks.map((l, i) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="sheet-bottom">
              <p>{site.tagline}</p>
              <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
