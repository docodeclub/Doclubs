import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { brands } from "@/config/brands";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  ChessKnight,
  Volleyball,
  Sparkles,
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
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="green-dot" /> A world beyond the classroom
          </p>
          <h1>
            Extraordinary
            <br />
            clubs.
            <br />
            <span>Every interest.</span>
          </h1>
          <p className="hero-description">
            From coding and chess to sports and beyond, Do Clubs brings together
            specialist extracurricular experiences that inspire children to
            discover what they love.
          </p>
          <div className="actions">
            <Button href="/clubs">Explore our clubs</Button>
            <Button href="/schools" secondary>
              Partner with us
            </Button>
          </div>
          <p className="hero-footnote">
            <span className="tiny-flower">✳</span> Little discoveries. Lifelong
            possibilities.
          </p>
        </div>
        <div
          className="hero-art"
          aria-label="An illustration of coding, sport and chess coming together"
        >
          <div className="art-heading">
            SO MUCH TO <strong>DISCOVER.</strong>
            <Sparkles size={26} />
          </div>
          <div className="hero-tile coding">
            <span>CREATE</span>
            <Code2 strokeWidth={1.3} />
            <small>Big ideas start here.</small>
            <i aria-hidden="true">↗</i>
          </div>
          <div className="hero-tile sport">
            <span>PLAY</span>
            <Volleyball strokeWidth={1.3} />
            <small>Find your stride.</small>
          </div>
          <div className="hero-tile chess">
            <span>THINK</span>
            <ChessKnight strokeWidth={1.3} />
            <small>Make your next move.</small>
          </div>
          <div className="art-sticker" aria-hidden="true">
            Curiosity
            <br />
            looks good
            <br />
            on you. <span>✳</span>
          </div>
          <div className="art-bottom">
            <span>DISCOVER. LEARN. PLAY.</span>
            <span>↗</span>
          </div>
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
          Docode is up and running. DoSport and DoChess are getting ready for
          their first chapter.
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
