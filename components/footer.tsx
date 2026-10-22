import Link from "next/link";
import { site, footerLinks } from "@/content/site";

export function Footer() {
  return (
    <footer>
      <Link className="inverse footer-brand" href="/" aria-label={`${site.name} home`}>
        <img className="footer-logo" src="/more-life-circle-logo.png" alt="" />
      </Link>
      <p>{site.tagline}</p>
      <div>
        {footerLinks.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </div>
      <small>© {new Date().getFullYear()} {site.name}</small>
    </footer>
  );
}
