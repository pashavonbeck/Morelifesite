// Passport-sticker illustration for the About page: a simple passport
// cover with the same ring stamp as the boarding pass ("Yes to More Life").
const svg = `<svg viewBox="296 96 158 158" role="img" aria-label="A More Life passport with a Yes to More Life stamp"><defs><path id="psArc" d="M375,175 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0"/></defs><g transform="rotate(14 375 175)" style="color:#70513E" opacity=".9"><circle cx="375" cy="175" r="66" fill="none" stroke="currentColor" stroke-width="3.5"/><circle cx="375" cy="175" r="36" fill="none" stroke="currentColor" stroke-width="2.2"/><text font-size="10.5" font-weight="700" fill="currentColor" style="font-family:var(--font-body)"><textPath href="#psArc" textLength="292" lengthAdjust="spacing">YES TO MORE LIFE ✦ YES TO MORE LIFE ✦</textPath></text><text x="375" y="184" text-anchor="middle" font-size="24" font-weight="700" fill="currentColor" style="font-family:var(--font-body)">YES</text></g></svg>`;

export function PassportSticker() {
  return <div className="passport-sticker" dangerouslySetInnerHTML={{ __html: svg }} />;
}
