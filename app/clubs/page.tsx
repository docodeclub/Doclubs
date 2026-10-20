import { brands } from "@/config/brands";
import { BrandArt, BrandName, Button, Intro, Closing } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Our Clubs",
  "Explore coding, sport and chess with Docode, DoSport and DoChess. Visit each specialist website for programme details and availability.",
  "/clubs",
);
export default function Clubs() {
  return (
    <>
      <Intro eyebrow="The Do Clubs family" title="Find their thing.">
        <p>
          Different interests. Specialist programmes. One shared belief that
          learning reaches far beyond the classroom.
        </p>
      </Intro>
      <div className="shell programme-list">
        {brands.map((b) => (
          <section className={`programme ${b.id}`} key={b.id} id={b.id}>
            <BrandArt id={b.id} />
            <div>
              <span className={`status ${b.launchStatus}`}>
                {b.launchStatus === "live"
                  ? "Explore the programme"
                  : "Preparing to launch"}
              </span>
              <div className="programme-logo">
                <BrandName brand={b} />
              </div>
              <h2>{b.tagline}</h2>
              <p>{b.benefit}</p>
              <ul className="tags">
                {b.activities.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <p className="muted">{b.audience}</p>
              {b.launchStatus === "live" ? (
                <div className="actions">
                  <Button href={b.externalWebsiteUrl}>Visit {b.name}</Button>
                  {b.bookingUrl && (
                    <Button secondary href={b.bookingUrl}>
                      Find a lesson
                    </Button>
                  )}
                </div>
              ) : (
                <Button href={`/clubs/${b.id}`}>Discover what’s planned</Button>
              )}
            </div>
          </section>
        ))}
      </div>
      <section className="shell future">
        <p className="eyebrow">Room to grow</p>
        <h2>A family with an open mind.</h2>
        <p>
          Our ambition is to introduce more specialist interests over time. Art,
          drama, music and languages are possibilities for the future, rather
          than programmes available today.
        </p>
      </section>
      <Closing />
    </>
  );
}
