// Small playful touches for the Japan trip pages: a Japanese flag badge and
// gently falling snowflakes over the hero.
export function JapanFlag() {
  return (
    <svg className="jp-flag" viewBox="0 0 30 20" aria-hidden="true">
      <rect x=".5" y=".5" width="29" height="19" rx="3" fill="#fff" stroke="currentColor" strokeOpacity=".35" />
      <circle cx="15" cy="10" r="5.2" fill="#bc002d" />
    </svg>
  );
}

const flakes = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 37 + 8) % 100,
  size: 10 + ((i * 7) % 14),
  dur: 7 + ((i * 5) % 8),
  delay: -((i * 3) % 9),
}));

export function Snow() {
  return (
    <div className="snow" aria-hidden="true">
      {flakes.map((f, i) => (
        <span
          key={i}
          style={{ left: `${f.left}%`, fontSize: f.size, animationDuration: `${f.dur}s`, animationDelay: `${f.delay}s` }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}
