// Every trip lives here as one object. To add a new trip, add a new
// object to this array — you don't need to touch any page file, the
// homepage grid, the More Trips grid, and the trip's own detail page
// (/experiences/[slug]) all read from this list automatically.
//
// `tallyFormUrl` is a placeholder for now (see ExpressInterest
// component) — once each trip has its own Tally form, drop the URL
// in here and the "Register interest" button on that trip's page
// will open it. Leave it null until then.

export type Trip = {
  /** WeTravel/Stripe checkout link. Leave unset until it exists. */
  bookingUrl?: string;
  slug: string;
  number: string;
  country: string;
  title: string;
  detail: string;
  image: string;
  intro: string;
  highlights: string[];
  tallyFormUrl: string | null;
  /** Overrides the default `/experiences/<slug>` link — used for Japan,
   * which goes to a hub page with two teaser cards instead of a single
   * trip detail page. */
  href?: string;
};

export const trips: Trip[] = [
  {
    slug: "japan",
    number: "01",
    country: "Japan",
    title: "Ride and ramen",
    detail: "Powder · Mountains · Apres",
    image: "/japan/card-home.jpg",
    intro:
      "Home to some of the freshest, deepest powder on Earth — mornings at the convenience store, days chasing fresh snow, nights fuelled by ramen, onsens and questionable karaoke.",
    highlights: [],
    tallyFormUrl: null,
    href: "/experiences/japan",
  },
  {
    slug: "tropical-punch",
    number: "02",
    country: "Thailand",
    title: "Tropical Punch",
    detail: "Muay Thai · Island life · Connection",
    image:
      "https://images.unsplash.com/photo-1729673516991-b0bce1f60d27?auto=format&fit=crop&w=1200&q=85",
    intro:
      "A tropical Muay Thai escape built around good training, warm water and an even better crew.",
    highlights: [
      "Daily Muay Thai training",
      "Island adventures",
      "Beach recovery time",
      "A ready-made crew",
    ],
    tallyFormUrl: null,
  },
];
