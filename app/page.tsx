import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { brands } from "@/config/brands";
import { bookingHref } from "@/config/site";
import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  Heart,
  Lightbulb,
  School,
} from "lucide-react";
import { BrandCards, Button, Closing } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Extraordinary Clubs. Every Interest.",
  "Discover coding, sport and chess in one growing family of specialist extracurricular brands for schools and parents in London, Surrey and beyond.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="company-hero">
        <Image className="company-hero-photo" src="/images/clubs-team.jpg" alt="Children listening to a coach on a sports field" fill sizes="100vw" preload />
        <div className="company-hero-shade" aria-hidden="true" />
        <div className="shell company-hero-content">
          <p className="eyebrow"><span className="green-dot" /> Clubs, camps & school enrichment</p>
          <h1>Extraordinary clubs.<br /><span>Every interest.</span></h1>
          <p className="company-hero-description">Coding, sport and chess. We bring specialist activities to schools and families, helping children build skills, grow in confidence and discover what they love.</p>
          <div className="actions">
            <Button href={bookingHref()}>Find a club</Button>
            <Button href="/schools" secondary>For schools</Button>
          </div>
          <nav className="hero-programmes" aria-label="Our specialist programmes">
            <Link href="/clubs/docode">Coding with Docode <ArrowUpRight size={16} /></Link>
            <Link href="/clubs/dosport">Sport with DoSport <ArrowUpRight size={16} /></Link>
            <Link href="/clubs/dochess">Chess with DoChess <ArrowUpRight size={16} /></Link>
          </nav>
        </div>
      </section>
      <div className="family-strip">
        <div className="shell">
          <span>ONE FAMILY. MANY POSSIBILITIES.</span>
          {brands.map((brand, index) => (
            <Fragment key={brand.id}>
              {index > 0 && <span className="strip-divider" />}
              {brand.logoAsset ? (
                <Image
                  className="strip-logo"
                  src={brand.logoAsset}
                  width={125}
                  height={35}
                  style={{ height: "auto" }}
                  alt={brand.name}
                />
              ) : (
                <strong>
                  {brand.name}
                  <small>
                    {brand.launchStatus === "live"
                      ? "EXPLORE THE PROGRAMME"
                      : "COMING SOON"}
                  </small>
                </strong>
              )}
            </Fragment>
          ))}
          <Link href="#our-family" aria-label="Explore the Do Clubs family">
            <ArrowDown size={20} />
          </Link>
        </div>
      </div>
      <section className="section shell" id="our-family">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Meet the family</p>
            <h2>
              Different passions.
              <br />
              The same spirit of discovery.
            </h2>
          </div>
          <div>
            <p>
              For the makers, the movers and the thinkers.
              <br />
              Find a club that opens up their world.
            </p>
            <Link className="text-link" href="/clubs">
              Explore all our clubs <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <BrandCards />
        <p className="section-note">
          Three specialist brands. One shared commitment to children’s learning,
          confidence and enjoyment.
        </p>
      </section>
      <section className="why">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Why Do Clubs?</p>
              <h2>
                More than an
                <br />
                after-school activity.
              </h2>
            </div>
            <p>
              A chance to find a new interest. Try a different way of thinking.
              And feel proud of what comes next.
            </p>
          </div>
          <div className="benefit-grid">
            {[
              [
                Compass,
                "Discover new interests",
                "Make room for children to explore something beyond the everyday.",
              ],
              [
                Heart,
                "Grow in confidence",
                "Give creativity, teamwork and resilience a place to flourish.",
              ],
              [
                Lightbulb,
                "Learn with purpose",
                "Our vision is specialist programmes built around each activity.",
              ],
              [
                School,
                "Enrich school life",
                "Help school communities offer a wider world of opportunities.",
              ],
            ].map(([Icon, title, text]) => {
              const I = Icon as typeof Compass;
              return (
                <article key={String(title)}>
                  <I size={27} />
                  <h3>{String(title)}</h3>
                  <p>{String(text)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section shell audience-grid">
        <article className="school-preview">
          <p className="eyebrow">For schools</p>
          <h2>
            One conversation.
            <br />
            More possibilities.
          </h2>
          <p>
            Build on your enrichment programme with a growing family of
            specialist clubs. Start with Docode today, and help shape what comes
            next.
          </p>
          <ul className="check-list">
            <li>Flexible arrangements around your school day</li>
            <li>Clear planning, communication and booking routes</li>
            <li>Safeguarding expectations agreed from the start</li>
          </ul>
          <Button href="/schools">Partner with Do Clubs</Button>
        </article>
        <article className="parent-preview">
          <span className="parent-spark" aria-hidden="true">
            ✳
          </span>
          <p className="eyebrow">For parents</p>
          <h2>
            Their next favourite
            <br />
            thing starts here.
          </h2>
          <p>
            Explore the family, find their interest and book with the specialist
            provider. We’ll point you in the right direction.
          </p>
          <Button href="/parents" secondary>
            Find your club
          </Button>
        </article>
      </section>
      <Closing />
    </>
  );
}
