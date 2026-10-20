import { notFound } from "next/navigation";
import { brands } from "@/config/brands";
import { BrandArt, Button, Intro } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const b = brands.find((b) => b.id === slug);
  return b ? pageMetadata(b.name, b.description, `/clubs/${slug}`) : {};
}
export default async function Programme({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const b = brands.find((b) => b.id === slug);
  if (!b) notFound();
  const live = b.launchStatus === "live";
  return (
    <>
      <Intro
        eyebrow={live ? "Available now" : "Something new is on its way"}
        title={`${b.name}. ${b.tagline}`}
      >
        <p>{b.description}</p>
      </Intro>
      <section className="shell programme detail">
        <BrandArt id={b.id} />
        <div>
          <span className={`status ${b.launchStatus}`}>
            {live ? "Available now" : "Preparing to launch"}
          </span>
          <h2>
            {live
              ? "Discover the programme."
              : "A first look at what’s planned."}
          </h2>
          <p>{b.benefit}</p>
          <ul className="check-list">
            {b.activities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <p>{b.audience}</p>
          {live ? (
            <Button href={b.externalWebsiteUrl}>Visit {b.name}</Button>
          ) : (
            <>
              <p>
                Bookings are not open yet. Dates, locations, staffing and
                booking arrangements will be confirmed before launch. Schools
                are welcome to tell us what they would like from the programme.
              </p>
              <Button href={`/contact?programme=${b.id}`}>
                Enquire about {b.name}
              </Button>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export const dynamicParams = false;
