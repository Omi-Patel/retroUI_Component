import {
  ArrowRight,
  Headphones,
  Menu,
  Play,
  Sparkles,
  Star,
} from "lucide-react";

import "./premiumLandingPages.css";

const rivieraJourneys = [
  { number: "01", place: "Capri", detail: "Clifftop suppers · 5 nights" },
  { number: "02", place: "Cassis", detail: "Hidden coves · 4 nights" },
  { number: "03", place: "Taormina", detail: "Volcanic coast · 6 nights" },
];

const analogDetails = [
  ["All-analog chain", "Restored in-house from source to speaker."],
  ["Private sessions", "One room, twelve seats, zero distractions."],
  ["Curated masters", "Rare pressings and first-generation tapes."],
];

const atelierServices = [
  ["01", "Identity", "Names, marks and visual systems built to gather character with age."],
  ["02", "Editorial", "Books, journals and printed matter made for the hand as much as the eye."],
  ["03", "Digital", "Thoughtful websites with the pace, texture and clarity of a fine publication."],
];

function RivieraMark() {
  return (
    <a className="rv-mark" href="#rv-top" aria-label="Maison Riviera home">
      <span>MR</span>
      <strong>Maison Riviera</strong>
    </a>
  );
}

export function RivieraClubLanding() {
  return (
    <div className="rv-page" id="rv-top">
      <div className="rv-notice">
        <span>Private journeys · Summer 2026</span>
        <span className="rv-notice__side">Paris · Roma · Lisboa</span>
      </div>

      <header className="rv-nav">
        <RivieraMark />
        <nav className="rv-nav__links" aria-label="Maison Riviera navigation">
          <a href="#rv-journeys">Journeys</a>
          <a href="#rv-story">Our story</a>
          <a href="#rv-journal">Journal</a>
        </nav>
        <a className="rv-nav__cta" href="#rv-membership">
          Request a key <ArrowRight aria-hidden="true" />
        </a>
        <button className="rv-menu" type="button" aria-label="Open navigation menu">
          <Menu aria-hidden="true" />
        </button>
      </header>

      <main>
        <section className="rv-hero">
          <div className="rv-hero__copy">
            <p className="rv-eyebrow">The private travel society · Est. 1968</p>
            <h1>
              Go where summer <em>lingers.</em>
            </h1>
            <p className="rv-lede">
              Slow journeys through the Mediterranean, composed one sunlit
              table, hidden cove and storied room at a time.
            </p>
            <div className="rv-actions">
              <a className="rv-button rv-button--dark" href="#rv-journeys">
                Explore the coast <ArrowRight aria-hidden="true" />
              </a>
              <a className="rv-text-link" href="#rv-story">Meet your concierge</a>
            </div>
            <div className="rv-proof" aria-label="Member rating">
              <span className="rv-proof__stars" aria-hidden="true">★★★★★</span>
              <span>4.9 from 214 private departures</span>
            </div>
          </div>

          <div className="rv-hero__visual">
            <img
              src="/Images/landing-pages/riviera-club-hero.webp"
              alt="Sunlit stone terrace overlooking a deep blue Mediterranean bay"
            />
            <div className="rv-postcard" aria-hidden="true">
              <span>Next departure</span>
              <strong>Portofino</strong>
              <small>12 · 06 · 26</small>
            </div>
            <div className="rv-seal" aria-hidden="true">
              <span>68</span>
              <small>Members only</small>
            </div>
          </div>
        </section>

        <section className="rv-marquee" aria-label="Membership benefits">
          <div>
            <span>Limited departures</span><i>✦</i>
            <span>Independent hotels</span><i>✦</i>
            <span>24-hour concierge</span><i>✦</i>
            <span>No crowded itineraries</span>
          </div>
        </section>

        <section className="rv-journeys" id="rv-journeys">
          <div className="rv-section-heading">
            <div>
              <p className="rv-eyebrow">The summer book</p>
              <h2>Three ways to disappear.</h2>
            </div>
            <p>
              Each departure is limited to twelve guests and shaped by people
              who still know every key, table and turn in the road.
            </p>
          </div>

          <div className="rv-journey-grid">
            {rivieraJourneys.map((journey, index) => (
              <article className="rv-journey-card" key={journey.place}>
                <div
                  className={`rv-journey-card__image rv-journey-card__image--${index + 1}`}
                  role="img"
                  aria-label={`${journey.place} coastal journey`}
                />
                <span>{journey.number}</span>
                <h3>{journey.place}</h3>
                <p>{journey.detail}</p>
                <a href="#rv-membership" aria-label={`Discover the ${journey.place} journey`}>
                  Discover <ArrowRight aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="rv-story" id="rv-story">
          <div className="rv-story__number">58</div>
          <div>
            <p className="rv-eyebrow">Years off the obvious route</p>
            <blockquote>
              “The luxury is not more. It is knowing exactly what to leave out.”
            </blockquote>
            <p>
              We make small, unhurried journeys for people who prefer a handwritten
              address to a ten-page itinerary.
            </p>
          </div>
        </section>

        <section className="rv-membership" id="rv-membership">
          <div>
            <p className="rv-eyebrow">Membership opens twice a year</p>
            <h2>Your summer begins with a letter.</h2>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="riviera-email">Email address</label>
            <input id="riviera-email" type="email" placeholder="Your email address" required />
            <button type="submit">Join the waiting list <ArrowRight aria-hidden="true" /></button>
          </form>
        </section>
      </main>

      <footer className="rv-footer" id="rv-journal">
        <RivieraMark />
        <p>Journeys made slowly since 1968.</p>
        <div><a href="#rv-top">Instagram</a><a href="#rv-top">Terms</a><a href="#rv-top">Back to top ↑</a></div>
      </footer>
    </div>
  );
}

export function AnalogHouseLanding() {
  return (
    <div className="ah-page" id="ah-top">
      <header className="ah-nav">
        <a href="#ah-top" className="ah-logo" aria-label="Analog House home">
          <span className="ah-logo__disc" aria-hidden="true"><i /></span>
          <span>ANALOG<br />HOUSE</span>
        </a>
        <nav aria-label="Analog House navigation">
          <a href="#ah-sessions">Sessions</a>
          <a href="#ah-system">The system</a>
          <a href="#ah-club">Membership</a>
        </nav>
        <a className="ah-ticket" href="#ah-club">Book a listening</a>
      </header>

      <main>
        <section className="ah-hero">
          <div className="ah-hero__image" role="img" aria-label="Vintage reel-to-reel deck in a walnut listening room" />
          <div className="ah-hero__noise" aria-hidden="true" />
          <div className="ah-hero__copy">
            <div className="ah-status"><i /> Now playing · Master tape 0042</div>
            <h1>Hear what the recording <em>remembered.</em></h1>
            <p>
              Private, all-analog listening sessions on rare master tapes and
              perfectly restored machines.
            </p>
            <div className="ah-actions">
              <a href="#ah-sessions" className="ah-button ah-button--amber">
                Reserve a session <ArrowRight aria-hidden="true" />
              </a>
              <button className="ah-play" type="button">
                <span><Play aria-hidden="true" /></span> Hear the room
              </button>
            </div>
          </div>

          <div className="ah-meter" aria-label="Decorative audio level meter">
            <div className="ah-meter__label"><span>LEFT</span><span>RIGHT</span></div>
            <div className="ah-meter__bars" aria-hidden="true">
              {[38, 62, 78, 52, 88, 69, 46, 74, 57, 82, 64, 44].map((height, index) => (
                <i key={index} style={{ "--bar-height": `${height}%` }} />
              ))}
            </div>
            <small>REFERENCE LEVEL · −18 DBFS</small>
          </div>
        </section>

        <section className="ah-strip">
          <span>REEL TO REEL</span><i>●</i><span>HALF-TRACK MASTERS</span><i>●</i>
          <span>HAND-BUILT VALVES</span><i>●</i><span>NO ALGORITHMS</span>
        </section>

        <section className="ah-sessions" id="ah-sessions">
          <div className="ah-section-kicker">01 / The sessions</div>
          <div className="ah-sessions__heading">
            <h2>Twelve seats.<br />One perfect take.</h2>
            <p>
              Ninety minutes with a record worth sitting still for. Hosted by
              engineers, selectors and the occasional person who was in the room.
            </p>
          </div>
          <div className="ah-session-list">
            {[
              ["FRI · 22 MAY", "Blue Hours", "Electric jazz, 1969–74", "20:00"],
              ["SAT · 30 MAY", "The Space Between", "Ambient works on ½-inch tape", "18:30"],
              ["THU · 11 JUN", "Velvet & Voltage", "Deep soul from the master reels", "21:00"],
            ].map(([date, title, desc, time]) => (
              <article key={title}>
                <span>{date}</span>
                <div><h3>{title}</h3><p>{desc}</p></div>
                <strong>{time}</strong>
                <a href="#ah-club" aria-label={`Reserve ${title}`}><ArrowRight aria-hidden="true" /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="ah-system" id="ah-system">
          <div className="ah-system__intro">
            <div className="ah-section-kicker">02 / The signal path</div>
            <h2>Nothing added.<br /><em>Nothing lost.</em></h2>
          </div>
          <div className="ah-detail-grid">
            {analogDetails.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <Headphones aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ah-club" id="ah-club">
          <div>
            <Star aria-hidden="true" />
            <p>Founding membership · 100 places</p>
            <h2>Make room<br />for listening.</h2>
          </div>
          <div className="ah-club__offer">
            <p>Priority booking, four private sessions and full archive access.</p>
            <strong>$68 <small>/ month</small></strong>
            <a href="#ah-top">Request membership <ArrowRight aria-hidden="true" /></a>
          </div>
        </section>
      </main>

      <footer className="ah-footer">
        <a href="#ah-top" className="ah-logo"><span className="ah-logo__disc"><i /></span><span>ANALOG<br />HOUSE</span></a>
        <p>High fidelity. Low capacity. Brooklyn, NY.</p>
        <span>© 1974–2026</span>
      </footer>
    </div>
  );
}

export function AtelierLanding() {
  return (
    <div className="at-page" id="at-top">
      <header className="at-nav">
        <a href="#at-top" className="at-logo">
          <span>A</span>
          <strong>Atelier<br />Morrow</strong>
        </a>
        <nav aria-label="Atelier Morrow navigation">
          <a href="#at-work">Selected work</a>
          <a href="#at-practice">Practice</a>
          <a href="#at-contact">Contact</a>
        </nav>
        <span className="at-nav__issue">Edition 05 · MMXXVI</span>
      </header>

      <main>
        <section className="at-hero">
          <img
            src="/Images/landing-pages/atelier-hero.webp"
            alt="Leather folio, handmade papers and brass tools on an old atelier table"
          />
          <div className="at-hero__wash" aria-hidden="true" />
          <div className="at-hero__copy">
            <p className="at-kicker">Independent design practice · London / Copenhagen</p>
            <h1>We make ideas<br />worth <em>keeping.</em></h1>
            <p>
              Brand identities, books and digital places shaped with patience,
              proportion and a respect for things that last.
            </p>
            <a className="at-button" href="#at-work">Enter the studio <ArrowRight aria-hidden="true" /></a>
          </div>
          <div className="at-hero__folio" aria-hidden="true">
            <span>Folio</span><strong>’26</strong><small>Selected works</small>
          </div>
        </section>

        <section className="at-intro" id="at-practice">
          <p className="at-kicker">The practice</p>
          <h2>
            Quietly bold work for people building
            <em> something with a soul.</em>
          </h2>
          <p className="at-intro__aside">
            We work across disciplines, but always begin in the same place:
            with a sharp pencil, a long conversation and fewer assumptions.
          </p>
        </section>

        <section className="at-services" aria-label="Studio services">
          {atelierServices.map(([number, title, text]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#at-contact" aria-label={`Discuss ${title} work`}><ArrowRight aria-hidden="true" /></a>
            </article>
          ))}
        </section>

        <section className="at-work" id="at-work">
          <div className="at-work__heading">
            <p className="at-kicker">Selected work · 2024–26</p>
            <h2>Three recent chapters.</h2>
          </div>
          <div className="at-project-grid">
            <article className="at-project at-project--large">
              <div className="at-project__visual at-project__visual--book">
                <div className="at-book"><span>FIELD</span><small>NOTES / 08</small></div>
              </div>
              <div><span>Publishing · Identity</span><h3>Field Notes Journal</h3><p>A new rhythm for slow observation.</p></div>
            </article>
            <article className="at-project">
              <div className="at-project__visual at-project__visual--type"><span>Æ</span></div>
              <div><span>Hospitality · Digital</span><h3>Æther House</h3><p>A coastal retreat with an inward view.</p></div>
            </article>
            <article className="at-project">
              <div className="at-project__visual at-project__visual--labels">
                <span>morrow</span><span>morrow</span><span>morrow</span>
              </div>
              <div><span>Objects · Packaging</span><h3>Morrow Editions</h3><p>Useful objects in thoughtful editions.</p></div>
            </article>
          </div>
        </section>

        <section className="at-note">
          <Sparkles aria-hidden="true" />
          <p>“They found the character we had been trying to name for years.”</p>
          <span>— Eliza Warren, Field Notes</span>
        </section>

        <section className="at-contact" id="at-contact">
          <div>
            <p className="at-kicker">New commissions · Autumn 2026</p>
            <h2>Bring us the thing<br />you cannot stop thinking about.</h2>
          </div>
          <a href="mailto:studio@example.com">Begin a conversation <ArrowRight aria-hidden="true" /></a>
        </section>
      </main>

      <footer className="at-footer">
        <div className="at-logo"><span>A</span><strong>Atelier<br />Morrow</strong></div>
        <p>Independent design practice<br />London · Copenhagen · Everywhere</p>
        <div><a href="#at-top">Instagram</a><a href="#at-top">Are.na</a><a href="#at-top">Top ↑</a></div>
      </footer>
    </div>
  );
}

export default RivieraClubLanding;
