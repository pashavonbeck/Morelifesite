// Boarding pass to More Life — sits inside the home page intro section.
export function ExperiencesPass({ children }: { children?: React.ReactNode }) {
  return (
      <div className="pass-bare">
          <div className="bp" aria-label="Boarding pass to More Life">
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
                  ✈&#xFE0E;
                </span>
                <div>
                  <small>To</small>
                  <b className="bp-dest">MORE LIFE</b>
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
                  <b>Anywhere</b>
                </div>
              </div>
            </div>
            <div className="bp-stub">
              <small>ML 001</small>
              <div className="bp-barcode" />
            </div>
          </div>
          {children ?? <p className="pass-line">FOR THOSE WHO WANT MORE FROM LIFE</p>}
      </div>
  );
}
