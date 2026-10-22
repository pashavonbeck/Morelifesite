// Japan boarding pass, shown at the bottom of the Japan page.
export function JapanPass({
  title = "Dust off your snow gear.",
  seat = "Powder",
  sand = false,
  dest = "JAPAN",
  children,
}: {
  title?: string;
  seat?: string;
  sand?: boolean;
  dest?: string;
  children?: React.ReactNode;
}) {
  return (
          <section className={`fp-section fp-tan fp-left trips-pass${sand ? " fp-sandbeige" : ""}`}>
          <div className="fp-inner">
            <p className="pass-kicker">Now boarding</p>
            <h2 className="fp-title pass-title-caps">{title}</h2>
            <div className="bp" aria-label="Boarding pass to Japan">
              <div className="bp-main">
                <p className="bp-head">
                  More Life Collective <span>Boarding pass</span>
                </p>
                <div className="bp-route">
                  <div>
                    <small>From</small>
                    <b>Someday</b>
                  </div>
                  <span className="bp-plane" aria-hidden>
                    ✈\uFE0E
                  </span>
                  <div>
                    <small>To</small>
                    <b className="bp-dest">{dest}</b>
                  </div>
                </div>
                <div className="bp-meta">
                  <div>
                    <small>Passenger</small>
                    <b>You</b>
                  </div>
                  <div>
                    <small>Gate</small>
                    <b>Yes</b>
                  </div>
                  <div>
                    <small>Seat</small>
                    <b>{seat}</b>
                  </div>
                </div>
              </div>
              <div className="bp-stub">
                <small>ML 001</small>
                <svg className="bp-snow" viewBox="0 0 40 40" width="30" height="30" aria-hidden>
                  <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
                    <path d="M20 4v32M5.5 12l29 16M5.5 28l29-16" />
                    <path d="M16 7l4 4 4-4M16 33l4-4 4 4" />
                  </g>
                </svg>
                <div className="bp-barcode" />
              </div>
              <svg className="bp-stamp" viewBox="0 0 120 120" aria-hidden>
                <defs>
                  <path id="stampArc" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" />
                </defs>
                <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
                <text fontSize="11" fontWeight="700" letterSpacing="2.4" fill="currentColor">
                  <textPath href="#stampArc" textLength="262" lengthAdjust="spacing">MORE LIFE ✦ BOARDING ✦ </textPath>
                </text>
                <text x="60" y="67" textAnchor="middle" fontSize="19" fontWeight="700" fill="currentColor">
                  GO
                </text>
              </svg>
            </div>
            <div className="pass-body">{children}</div>
          </div>
        </section>
  );
}
