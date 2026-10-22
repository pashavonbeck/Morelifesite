import Link from "next/link";
import { HeaderMenu } from "./header-menu";
import { site } from "@/content/site";

// `light` is unused visually right now (every page currently uses the
// same nav treatment) but is kept so a page can opt into a different
// nav color scheme later without a component change.
// There is no top link bar: just the logo and the Menu button.
export function Header({ light = false }: { light?: boolean }) {
  return (
    <header className={`nav-shell page-nav ${light ? "nav-light" : ""}`}>
      <Link className="mini-logo" href="/" aria-label={`${site.name} home`}>
        <img src="/more-life-circle-logo.png" alt={site.name} />
      </Link>
      <p className="nav-tagline">For those who want more from life</p>
      <div className="nav-actions">
        <HeaderMenu />
      </div>
    </header>
  );
}
