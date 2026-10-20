import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  MoveUpRight,
  ChessKnight,
  Volleyball,
} from "lucide-react";
import { brands, brandHref, type Brand } from "@/config/brands";
import { navigation } from "@/config/site";
import { Wordmark } from "./header";
export function Button({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link className={`button ${secondary ? "secondary" : ""}`} href={href}>
      {children}
      {href.startsWith("http") ? (
        <ArrowUpRight size={18} />
      ) : (
        <ArrowRight size={18} />
      )}
    </Link>
  );
}
export function Intro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="page-intro shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="intro-copy">{children}</div>
    </section>
  );
}
export function BrandArt({ id }: { id: string }) {
  return (
    <div
      className={`brand-art ${id}`}
      aria-hidden="true"
      style={
        {
          "--brand-accent":
            brands.find((b) => b.id === id)?.accentColour || "#6556ad",
        } as CSSProperties
      }
    >
      {id === "docode" ? (
        <>
          <span className="art-ring" />
          <Code2 strokeWidth={1.3} />
          <span className="art-label">Make something amazing.</span>
        </>
      ) : id === "dosport" ? (
        <>
          <div className="pitch" />
          <Volleyball strokeWidth={1.2} />
          <span className="art-label">Find your stride.</span>
        </>
      ) : (
        <>
          <div className="chess-board" />
          <ChessKnight strokeWidth={1.2} />
          <span className="art-label">Your next great move.</span>
        </>
      )}
    </div>
  );
}
export function BrandName({ brand }: { brand: Brand }) {
  return brand.logoAsset ? (
    <Image
      className="docode-logo"
      src={brand.logoAsset}
      width={150}
      style={{ height: "auto" }}
      height={36}
      alt={brand.name}
    />
  ) : (
    <span className="brand-wordmark">{brand.name}</span>
  );
}
export function BrandCards() {
  return (
    <div className="brand-grid">
      {brands.map((b) => (
        <article className={`brand-card ${b.id}`} key={b.id}>
          <Link
            href={brandHref(b)}
            aria-label={
              b.launchStatus === "live"
                ? `Visit ${b.name} website`
                : `Discover ${b.name}`
            }
          >
            <BrandArt id={b.id} />
          </Link>
          <div className="brand-card-body">
            <div className="brand-top">
              <BrandName brand={b} />
              <span className={`status ${b.launchStatus}`}>
                {b.launchStatus === "live" ? "Available now" : "Coming soon"}
              </span>
            </div>
            <h3>{b.tagline}</h3>
            <p>{b.description}</p>
            <Link className="text-link" href={brandHref(b)}>
              {b.launchStatus === "live"
                ? `Explore ${b.name}`
                : `Discover ${b.name}`}
              {b.launchStatus === "live" ? (
                <ArrowUpRight size={18} />
              ) : (
                <ArrowRight size={18} />
              )}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
export function Closing() {
  return (
    <section className="closing shell">
      <div>
        <p className="eyebrow">Let’s make room for more</p>
        <h2>
          More opportunities.
          <br />
          For every child.
        </h2>
        <p>Bring fresh ideas to your school’s enrichment programme.</p>
        <Button href="/schools#enquire">
          Enquire about school partnerships
        </Button>
      </div>
      <span className="closing-flower" aria-hidden="true">
        ✳
      </span>
    </section>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          <Link aria-label="Do Clubs home" href="/">
            <Wordmark />
          </Link>
          <p>Discover. Learn. Play.</p>
          <p className="muted">
            A growing family of specialist clubs.
            <br />A world of possibilities.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          {navigation.slice(1).map(([h, l]) => (
            <Link key={h} href={h}>
              {l}
            </Link>
          ))}
        </div>
        <div>
          <h2>Our family</h2>
          {brands.map((b) => (
            <Link key={b.id} href={brandHref(b)}>
              {b.name}{" "}
              {b.launchStatus === "live" ? (
                <ArrowUpRight size={13} />
              ) : (
                <small>Coming soon</small>
              )}
            </Link>
          ))}
        </div>
        <div>
          <h2>Made for curious minds.</h2>
          <p>
            Welcoming school enquiries from London, Surrey and surrounding
            areas.
          </p>
          <Link className="text-link" href="/contact">
            Let’s talk <MoveUpRight size={16} />
          </Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Do Clubs</span>
        <span>Discover. Learn. Play.</span>
        <Link href="/privacy">Privacy & cookies</Link>
      </div>
    </footer>
  );
}
