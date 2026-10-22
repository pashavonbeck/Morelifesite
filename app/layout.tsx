import type { Metadata } from "next";
import { Montserrat, Sigmar_One } from "next/font/google";
import "./globals.css";

// One font family site-wide: Montserrat. Bold weight for every
// heading/title (nav wordmark, hero, section titles, trip titles),
// regular weight for every paragraph/label/button. Both weights are
// loaded from the same next/font/google call and exposed as two CSS
// variables so the rest of the site never has to think about which
// weight to reach for.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

// A trial accent face for the home page's h2 titles only (manifesto,
// trips, why, join) — Pasha wants to see how Sigmar One looks there.
// Not applied anywhere else.
const sigmarOne = Sigmar_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://morelifecollective.com"),
  title: "More Life Collective | Adventure group trips for people who want more from life",
  description:
    "Adventure-led group trips for people who want more from life. Join a small crew for Japan snow trips in 2027. Solo travellers welcome.",
  openGraph: {
    type: "website",
    siteName: "More Life Collective",
    title: "More Life Collective | For those who want more from life",
    description:
      "Adventure-led group trips for people who want more from life. Small crews, Japan snow trips in 2027, solo travellers welcome.",
    images: [{ url: "/images/intro-hero.jpg" }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable} ${sigmarOne.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
