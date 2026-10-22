import type { MetadataRoute } from "next";

const base = "https://morelifecollective.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/experiences/introduction-to-japow", "/experiences/chase-the-pow", "/about", "/faqs", "/contact"].map(
    (path) => ({ url: base + path, lastModified: new Date() })
  );
}
