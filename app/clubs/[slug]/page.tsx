import Link from "next/link";
import { notFound } from "next/navigation";
import { brands } from "@/config/brands";
import { programmes } from "@/config/programmes";
import { BrandArt, Button, Intro } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.id }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = brands.find((b) => b.id === slug);
  return b ? pageMetadata(`${b.name} Clubs & Camps`, `Discover ${b.name}: what children can explore, school clubs, holiday camp information and current availability.`, `/clubs/${slug}`) : {};
}
export default async function Programme({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = brands.find((b) => b.id === slug);
  const programme = programmes[slug];
  if (!b || !programme) notFound();
  return (
    <>
      <Intro eyebrow="The Do Clubs family" title={`${b.name}. ${b.tagline}`}>
        <p>{programme.introduction}</p>
        <nav className="actions" aria-label={`${b.name} page sections`}>
          <Button href="#clubs">Explore clubs</Button>
          <Button href="#camps" secondary>Holiday camps</Button>
        </nav>
      </Intro>
      <section className="shell programme detail">
        <BrandArt id={b.id} />
        <div>
          <p className="eyebrow">What makes it {b.name}</p>
          <h2>{b.tagline}</h2>
          <p>{b.benefit}</p>
          <p>{b.audience}</p>
          <Button href={b.externalWebsiteUrl} secondary>Visit {b.name}</Button>
        </div>
      </section>
      {(["clubs", "camps"] as const).map((kind) => {
        const offering = programme[kind];
        return (
          <section className={`section ${kind === "camps" ? "tinted" : ""}`} id={kind} key={kind}>
            <div className="shell split-section">
              <div>
                <p className="eyebrow">{kind === "clubs" ? "School clubs" : "Holiday camps"}</p>
                <h2>{offering.title}</h2>
              </div>
              <div>
                <p>{offering.description}</p>
                {offering.activities.length > 0 && (
                  <ul className="check-list">{offering.activities.map((activity) => <li key={activity}>{activity}</li>)}</ul>
                )}
                <div className="notice"><strong>Availability & practical details</strong><p>{offering.availability}</p></div>
                <Button href={offering.href}>{offering.action}</Button>
              </div>
            </div>
          </section>
        );
      })}
      <section className="shell split-section">
        <div><p className="eyebrow">For schools & families</p><h2>Find the right fit.</h2></div>
        <div>
          <p>Visit {b.name} for the latest programme information. Before booking, check the year groups, location, dates, price and collection arrangements for your session.</p>
          <p>Schools can discuss their pupils, timetable and available space directly with the specialist team. Bookings and payments are handled by the provider.</p>
          <div className="actions">
            <Button href={`${b.externalWebsiteUrl}/schools`} secondary>{b.name} for schools</Button>
            <Link className="text-link" href="/clubs">Explore the whole family →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
export const dynamicParams = false;
