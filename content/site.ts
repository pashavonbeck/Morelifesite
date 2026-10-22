// Site-wide constants. Change these once here rather than hunting
// through every page — the menu, footer, and the contact email all
// read from this file.

export const site = {
  name: "More Life Collective",
  tagline: "For those who want more from life.",
  contactEmail: "Morelifecollective@outlook.com",
  // "All access" form: the general mailing-list Tally form (new destinations,
  // dates and early-bird news).
  mailingListUrl: "https://tally.so/r/BzODXR",
  // "Register interest" form: the registration Tally form Pashy built.
  // TODO: paste its link here. Until then "Register interest" buttons fall
  // back to the mailing-list form above so they're never dead links.
  registerInterestUrl: "https://tally.so/r/XxpbyO",
  // TODO: add your WhatsApp number in international format, digits only
  // (e.g. "61412345678" for an Australian mobile). The WhatsApp icon on the
  // contact page only appears once this is filled in.
  whatsappNumber: "61430055563",
  whatsappMessage: "Hi More Life Collective! I'd love to hear more about the trips.",
  instagramUrl: "https://www.instagram.com/morelifecollective_?obrf=MTNnYnhsNWI1MXY1cQ%3D%3D&utm_source=qr",
  instagramHandle: "@morelifecollective_",
};

// The slide-up menu (the only navigation — there is no top bar).
export const sideMenuLinks = [
  { label: "Home", href: "/" },
  { label: "Our story", href: "/about" },
  { label: "JAPAN \u201927 \u2013 INTRODUCTION TO JAPOW", href: "/experiences/introduction-to-japow" },
  { label: "JAPAN \u201927 \u2013 CHASE THE POW", href: "/experiences/chase-the-pow" },
  { label: "FAQ", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

// Small links in the footer. Contact and Terms live here, not in the menu.
export const footerLinks = [
  { label: "Our story", href: "/about" },
  { label: "FAQ", href: "/faqs" },
  { label: "Contact", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms" },
];
