import Link from "next/link";
import { japanTiers } from "@/content/japan";

// The two Japan experience teaser cards. Used on the home page and the Japan page.
export function JapanCards({ id }: { id?: string }) {
  return (
    <div className="trip-grid japan-tiers" id={id}>
      {japanTiers.map((tier) => (
        <Link key={tier.slug} href={`/experiences/${tier.slug}`} className="trip-card" style={{ backgroundImage: `url('${tier.image}')`, backgroundPosition: tier.slug === "chase-the-pow" ? "center 40%" : "center 30%" }}>
          <span>{tier.dates}</span>
          <div>
            <p className="tier-level">{tier.level}</p>
            <p className="tier-place">{tier.place}</p>
            <h3>{tier.title}</h3>
            <small>{tier.teaser}</small>
            <b className="card-link">
              Discover the experience <span className="clean-arrow">→</span>
            </b>
          </div>
        </Link>
      ))}
    </div>
  );
}
